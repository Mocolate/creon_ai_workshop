#!/usr/bin/env python3
"""Parse workshop markdown files into js/content.js and js/translations.js"""

import re, json, os, textwrap

WORKSHEETS_DIR = os.path.join(os.path.dirname(__file__), '..', 'worksheets')
JS_DIR = os.path.join(os.path.dirname(__file__), '..', 'js')

PEOPLE = [
    dict(file='01_aga.md',      id='aga',      displayName='Aga',      altLang='pl'),
    dict(file='02_sandra.md',   id='sandra',   displayName='Sandra',   altLang='nl'),
    dict(file='03_sofia.md',    id='sofia',    displayName='Sofia',    altLang='nl'),
    dict(file='04_amber.md',    id='amber',    displayName='Amber',    altLang='nl'),
    dict(file='05_lisette.md',  id='lisette',  displayName='Lisette',  altLang='nl'),
    dict(file='06_bart.md',     id='bart',     displayName='Bart',     altLang='nl'),
    dict(file='09_geoffrey.md', id='geoffrey', displayName='Geoffrey', altLang='nl'),
]


# ── Prompt extraction ────────────────────────────────────────────────────────

def extract_prompts(bq_text):
    """
    Find all *"..."* spans in blockquote text (may span multiple paragraphs).
    Returns list of cleaned prompt strings including the outer quote characters.
    """
    prompts = []
    # Non-greedy match from *" to "* — handles both single-line and multi-para
    for m in re.finditer(r'\*("[\s\S]+?")\*', bq_text):
        raw = m.group(1)
        # Strip italic asterisks from each line, keep inner content
        lines = raw.split('\n')
        cleaned_lines = []
        for line in lines:
            line = re.sub(r'^\*+', '', line)
            line = re.sub(r'\*+$', '', line)
            cleaned_lines.append(line.strip())
        text = '\n'.join(cleaned_lines)
        text = re.sub(r'\n{3,}', '\n\n', text).strip()
        if text:
            prompts.append(text)
    if not prompts:
        # Fallback
        lines = bq_text.split('\n')
        cleaned = '\n'.join(
            re.sub(r'^\*+|\*+$', '', l).strip() for l in lines if l.strip()
        )
        if cleaned:
            prompts.append(cleaned)
    return prompts


# ── Node parser ──────────────────────────────────────────────────────────────

def parse_nodes(text):
    """Split text into alternating prose and prompt nodes."""
    # Strip structural --- lines
    lines = [l for l in text.split('\n') if l.strip() != '---']

    nodes = []
    prose_lines = []
    bq_lines = []
    in_bq = False

    def flush_prose():
        md = '\n'.join(prose_lines)
        md = re.sub(r'\n{3,}', '\n\n', md).strip()
        if md:
            nodes.append({'type': 'prose', 'md': md})
        prose_lines.clear()

    def flush_bq():
        if not bq_lines:
            return
        bq_text = '\n'.join(bq_lines)
        for p in extract_prompts(bq_text):
            nodes.append({'type': 'prompt', 'text': p})
        bq_lines.clear()

    for line in lines:
        if line.startswith('> ') or line == '>':
            if not in_bq:
                flush_prose()
                in_bq = True
            bq_lines.append(line[2:] if line.startswith('> ') else '')
        else:
            if in_bq:
                flush_bq()
                in_bq = False
            prose_lines.append(line)

    if in_bq:
        flush_bq()
    else:
        flush_prose()

    return nodes


# ── Section finder ───────────────────────────────────────────────────────────

def find_sections(lines):
    intro_end = -1
    warmup_start = -1
    pick_path_start = -1
    path_starts = []
    notes_start = -1

    for i, line in enumerate(lines):
        t = line.strip()
        if t == '---' and intro_end == -1 and warmup_start == -1:
            intro_end = i
        if re.match(r'^## Warm-up', t):
            warmup_start = i
        if re.match(r'^## Pick a path', t):
            pick_path_start = i
        if re.match(r'^### Path \d+', t):
            path_starts.append(i)
        if re.match(r'^## What we deliberately', t):
            notes_start = i
        if re.match(r'^## End-of-day check', t) and notes_start == -1:
            notes_start = i

    return dict(
        intro_end=intro_end,
        warmup_start=warmup_start,
        pick_path_start=pick_path_start,
        path_starts=path_starts,
        notes_start=notes_start,
    )


# ── Worksheet parser ─────────────────────────────────────────────────────────

def parse_worksheet(person):
    filepath = os.path.join(WORKSHEETS_DIR, person['file'])
    raw = open(filepath, encoding='utf-8').read()
    lines = raw.split('\n')
    s = find_sections(lines)

    # Intro (skip # Worksheet — Name line)
    intro_md = '\n'.join(lines[1:s['intro_end']]).strip()

    # Warmup
    warmup_end = (s['pick_path_start'] if s['pick_path_start'] != -1
                  else (s['path_starts'][0] if s['path_starts'] else len(lines)))
    wl = lines[s['warmup_start']:warmup_end]
    wh = re.match(r'^## Warm-up — (.+?) \*\((.+?)\)\*', wl[0].strip())
    warmup_title = wh.group(1).strip() if wh else 'Warm-up'
    warmup_duration = wh.group(2).strip() if wh else ''
    warmup_nodes = parse_nodes('\n'.join(wl[1:]))

    # Pick-a-path prose
    pick_path = ''
    if s['pick_path_start'] != -1:
        pp_end = s['path_starts'][0] if s['path_starts'] else len(lines)
        pick_path = '\n'.join(
            l for l in lines[s['pick_path_start']+1:pp_end] if l.strip() != '---'
        ).strip()

    # Paths
    paths = []
    for pi, start in enumerate(s['path_starts']):
        if pi + 1 < len(s['path_starts']):
            end = s['path_starts'][pi + 1]
        elif s['notes_start'] != -1:
            end = s['notes_start']
        else:
            end = len(lines)

        pl = lines[start:end]
        hm = re.match(r'^### (.+?) \*\((.+?)\)\*', pl[0].strip())
        title = hm.group(1).strip() if hm else re.sub(r'^### ', '', pl[0]).strip()
        duration = hm.group(2).strip() if hm else ''
        body = '\n'.join(pl[1:])
        lwm = re.search(r"\*\*You'll leave with:\*\*\s*(.+)", body)
        leave_with = lwm.group(1).strip() if lwm else ''
        # Remove the "You'll leave with:" line from nodes to avoid duplication
        body_for_nodes = re.sub(r"\*\*You'll leave with:\*\*[^\n]*\n?", '', body)
        paths.append(dict(title=title, duration=duration, leaveWith=leave_with,
                          nodes=parse_nodes(body_for_nodes)))

    # Notes
    notes_nodes = []
    if s['notes_start'] != -1:
        notes_nodes = parse_nodes('\n'.join(lines[s['notes_start']:]))

    return dict(
        id=person['id'],
        displayName=person['displayName'],
        altLang=person['altLang'],
        langs=['en', person['altLang']],
        introMd=intro_md,
        warmup=dict(title=warmup_title, duration=warmup_duration,
                    pickPath=pick_path, nodes=warmup_nodes),
        paths=paths,
        notesNodes=notes_nodes,
    )


# ── Translation stub builder ─────────────────────────────────────────────────

def build_translation_block(person):
    al = person['altLang'].upper()
    lines = [f"  // ── {person['displayName']} ({al}) ──────────────────────────────"]
    lines.append(f"  {person['id']}: {{")
    preview = json.dumps(person['introMd'][:60])
    lines.append(f"    intro: null, // EN: {preview}…")
    lines.append(f"    warmup: {{")
    lines.append(f"      title: null, // EN: {json.dumps(person['warmup']['title'])}")
    lines.append(f"      pickPath: null,")
    lines.append(f"      nodes: [")
    for i, n in enumerate(person['warmup']['nodes']):
        src = n['md'] if n['type'] == 'prose' else n['text']
        prev = src[:70].replace('\n', ' ')
        lines.append(f"        null, // [{i}] {n['type']}: {prev}…")
    lines.append(f"      ],")
    lines.append(f"    }},")
    lines.append(f"    paths: [")
    for pi, p in enumerate(person['paths']):
        lines.append(f"      {{ // Path {pi+1}: {p['title']}")
        lines.append(f"        title: null,")
        lines.append(f"        leaveWith: null,")
        lines.append(f"        nodes: [")
        for i, n in enumerate(p['nodes']):
            src = n['md'] if n['type'] == 'prose' else n['text']
            prev = src[:70].replace('\n', ' ')
            lines.append(f"          null, // [{i}] {n['type']}: {prev}…")
        lines.append(f"        ],")
        lines.append(f"      }},")
    lines.append(f"    ],")
    lines.append(f"  }},")
    return '\n'.join(lines)


# ── Main ─────────────────────────────────────────────────────────────────────

os.makedirs(JS_DIR, exist_ok=True)
all_people = [parse_worksheet(p) for p in PEOPLE]

# content.js
content_map = {p['id']: p for p in all_people}
content_js = (
    "// Auto-generated by build/parse.py — do not hand-edit.\n"
    "// Re-run: python3 build/parse.py\n\n"
    f"const CONTENT = {json.dumps(content_map, indent=2, ensure_ascii=False)};\n"
)
with open(os.path.join(JS_DIR, 'content.js'), 'w', encoding='utf-8') as f:
    f.write(content_js)
print('✓ js/content.js')

# translations.js
trans_blocks = '\n'.join(build_translation_block(p) for p in all_people)
translations_js = f"""// Workshop translations — fill in null values with translated strings.
// For prose nodes: provide translated Markdown text.
// For prompt nodes: provide translated prompt text (shown in copyable code blocks).
// Any null falls back to English.
//
// nodes[] arrays must stay the same length as in content.js.
// Aga (pl): Polish. All others (nl): Dutch.

const TRANSLATIONS = {{
{trans_blocks}
}};
"""
with open(os.path.join(JS_DIR, 'translations.js'), 'w', encoding='utf-8') as f:
    f.write(translations_js)
print('✓ js/translations.js')

# Summary
for p in all_people:
    total = len(p['warmup']['nodes']) + sum(len(pa['nodes']) for pa in p['paths'])
    prompts = (sum(1 for n in p['warmup']['nodes'] if n['type'] == 'prompt') +
               sum(sum(1 for n in pa['nodes'] if n['type'] == 'prompt') for pa in p['paths']))
    print(f"  {p['id']}: {len(p['paths'])} paths, {total} nodes ({prompts} prompts to translate)")

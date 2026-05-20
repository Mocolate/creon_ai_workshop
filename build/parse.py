#!/usr/bin/env python3
"""
Parse workshop markdown files into js/content.js and js/translations.js.
Handles English originals in worksheets/ and translations in worksheet_translations/.
Run: python3 build/parse.py
"""

import re, json, os

WORKSHEETS_DIR     = os.path.join(os.path.dirname(__file__), '..', 'worksheets')
TRANSLATIONS_DIR   = os.path.join(os.path.dirname(__file__), '..', 'worksheet_translations')
JS_DIR             = os.path.join(os.path.dirname(__file__), '..', 'js')

PEOPLE = [
    dict(file='01_aga.md',      trans='01_aga_pl.md',      id='aga',      displayName='Aga',      altLang='pl'),
    dict(file='02_sandra.md',   trans='02_sandra_nl.md',   id='sandra',   displayName='Sandra',   altLang='nl'),
    dict(file='03_sofia.md',    trans='03_sofia_nl.md',    id='sofia',    displayName='Sofia',    altLang='nl'),
    dict(file='04_amber.md',    trans='04_amber_nl.md',    id='amber',    displayName='Amber',    altLang='nl'),
    dict(file='05_lisette.md',  trans='05_lisette_nl.md',  id='lisette',  displayName='Lisette',  altLang='nl'),
    dict(file='06_bart.md',     trans='06_bart_nl.md',     id='bart',     displayName='Bart',     altLang='nl'),
    dict(file='09_geoffrey.md', trans='09_geoffrey_nl.md', id='geoffrey', displayName='Geoffrey', altLang='nl'),
]

# "You'll leave with" in all three languages
LEAVE_WITH_RE = re.compile(
    r"\*\*(You'll leave with|Je vertrekt met|Wyjdziesz z):\*\*\s*(.+)"
)
LEAVE_WITH_STRIP_RE = re.compile(
    r"\*\*(You'll leave with|Je vertrekt met|Wyjdziesz z):\*\*[^\n]*\n?"
)


# ── Prompt extraction ────────────────────────────────────────────────────────

def extract_prompts(bq_text):
    prompts = []
    for m in re.finditer(r'\*"([\s\S]+?)"\*', bq_text):
        raw = m.group(1)
        lines = raw.split('\n')
        cleaned_lines = [re.sub(r'^\*+|\*+$', '', l).strip() for l in lines]
        text = '\n'.join(cleaned_lines)
        text = re.sub(r'\n{3,}', '\n\n', text).strip()
        if text:
            prompts.append(text)
    if not prompts:
        cleaned = '\n'.join(
            re.sub(r'^\*+|\*+$', '', l).strip()
            for l in bq_text.split('\n') if l.strip()
        )
        if cleaned:
            prompts.append(cleaned)
    return prompts


# ── Node parser ──────────────────────────────────────────────────────────────

def parse_nodes(text):
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


# ── Section finder (language-agnostic) ──────────────────────────────────────

def find_sections(lines):
    """
    Detects sections by structure, not by language-specific text.
    Warmup:    first ## heading containing ' — '
    Pick path: first ## heading after warmup, before any paths, without ' — '
    Paths:     ### headings that contain a digit
    Notes:     first ## heading that comes after the last path start
    """
    intro_end = -1
    warmup_start = -1
    pick_path_start = -1
    path_starts = []
    notes_start = -1

    for i, line in enumerate(lines):
        t = line.strip()

        # Intro end: first '---' before warmup is found
        if t == '---' and intro_end == -1 and warmup_start == -1:
            intro_end = i

        # Warmup: first ## heading with ' — ' in it
        if re.match(r'^## .+ — .+', t) and warmup_start == -1:
            warmup_start = i

        # Pick-path: first ## heading (without ' — ') after warmup and before any paths
        if (warmup_start != -1 and i > warmup_start and not path_starts
                and notes_start == -1 and re.match(r'^## ', t)
                and ' — ' not in t):
            pick_path_start = i

        # Paths: ### headings containing a digit
        if re.match(r'^### ', t) and re.search(r'\d', t):
            path_starts.append(i)

        # Notes: first ## heading after the last path start
        if path_starts and i > path_starts[-1] and re.match(r'^## ', t) and notes_start == -1:
            notes_start = i

    return dict(
        intro_end=intro_end,
        warmup_start=warmup_start,
        pick_path_start=pick_path_start,
        path_starts=path_starts,
        notes_start=notes_start,
    )


# ── Worksheet parser ─────────────────────────────────────────────────────────

def parse_file(filepath):
    """Parse a single worksheet file into structured data."""
    raw = open(filepath, encoding='utf-8').read()
    lines = raw.split('\n')
    s = find_sections(lines)

    # Intro (skip first line = # Worksheet — Name)
    intro_md = '\n'.join(lines[1:s['intro_end']]).strip()

    # Warmup
    warmup_end = (s['pick_path_start'] if s['pick_path_start'] != -1
                  else (s['path_starts'][0] if s['path_starts'] else len(lines)))
    wl = lines[s['warmup_start']:warmup_end]
    wh = re.match(r'^## [^—]+— (.+?) \*\((.+?)\)\*', wl[0].strip())
    warmup_title    = wh.group(1).strip() if wh else wl[0].strip()
    warmup_duration = wh.group(2).strip() if wh else ''
    warmup_nodes    = parse_nodes('\n'.join(wl[1:]))

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
        # Header: ### Word N — Title *(duration)*
        hm = re.match(r'^### .+?\d+\s*—\s*(.+?) \*\((.+?)\)\*', pl[0].strip())
        title    = hm.group(1).strip() if hm else re.sub(r'^### ', '', pl[0]).strip()
        duration = hm.group(2).strip() if hm else ''
        body = '\n'.join(pl[1:])

        lw_match  = LEAVE_WITH_RE.search(body)
        leave_with = lw_match.group(2).strip() if lw_match else ''
        body_for_nodes = LEAVE_WITH_STRIP_RE.sub('', body)

        paths.append(dict(
            title=title, duration=duration, leaveWith=leave_with,
            nodes=parse_nodes(body_for_nodes)
        ))

    # Notes
    notes_nodes = []
    if s['notes_start'] != -1:
        notes_nodes = parse_nodes('\n'.join(lines[s['notes_start']:]))

    return dict(introMd=intro_md,
                warmup=dict(title=warmup_title, duration=warmup_duration,
                            pickPath=pick_path, nodes=warmup_nodes),
                paths=paths, notesNodes=notes_nodes)


# ── Translation mapper ────────────────────────────────────────────────────────

def map_translations(en_data, trans_data, person_id):
    """
    Map translated content to the same node indices as the English original.
    For each section, we align translated nodes with English nodes by index.
    Node values are: translated markdown (prose) or translated prompt text.
    Mismatches are reported and padded with null.
    """
    def extract_node_values(nodes):
        return [n['md'] if n['type'] == 'prose' else n['text'] for n in nodes]

    def align(en_nodes, tr_nodes, label):
        en_vals = extract_node_values(en_nodes)
        tr_vals = extract_node_values(tr_nodes)
        if len(en_vals) != len(tr_vals):
            print(f"  ⚠ {person_id}/{label}: EN={len(en_vals)} nodes, translation={len(tr_vals)} nodes — padding with null")
        result = []
        for i, _ in enumerate(en_vals):
            result.append(tr_vals[i] if i < len(tr_vals) else None)
        return result

    result = {
        'intro': trans_data['introMd'],
        'warmup': {
            'title':    trans_data['warmup']['title'],
            'pickPath': trans_data['warmup']['pickPath'],
            'nodes':    align(en_data['warmup']['nodes'],
                              trans_data['warmup']['nodes'],
                              'warmup'),
        },
        'paths': [],
        'notes': {'nodes': align(en_data['notesNodes'], trans_data['notesNodes'], 'notes')} if en_data['notesNodes'] else None,
    }

    for pi, (en_path, tr_path) in enumerate(zip(en_data['paths'], trans_data['paths'])):
        result['paths'].append({
            'title':     tr_path['title'],
            'leaveWith': tr_path['leaveWith'],
            'nodes':     align(en_path['nodes'], tr_path['nodes'], f'path{pi+1}'),
        })

    if len(en_data['paths']) != len(trans_data['paths']):
        print(f"  ⚠ {person_id}: EN={len(en_data['paths'])} paths, translation={len(trans_data['paths'])} paths")

    return result


# ── Run ───────────────────────────────────────────────────────────────────────

os.makedirs(JS_DIR, exist_ok=True)

all_people_en   = []  # full person objects for content.js
all_translations = {}  # id -> translated content for translations.js

for p in PEOPLE:
    en_path    = os.path.join(WORKSHEETS_DIR,   p['file'])
    trans_path = os.path.join(TRANSLATIONS_DIR, p['trans'])

    en_data = parse_file(en_path)

    person = dict(
        id=p['id'], displayName=p['displayName'],
        altLang=p['altLang'], langs=['en', p['altLang']],
        **en_data
    )
    all_people_en.append(person)

    if os.path.exists(trans_path):
        trans_data = parse_file(trans_path)
        all_translations[p['id']] = map_translations(en_data, trans_data, p['id'])
    else:
        print(f"  ⚠ No translation file found: {p['trans']}")
        all_translations[p['id']] = None

# content.js
content_map = {p['id']: p for p in all_people_en}
content_js = (
    "// Auto-generated by build/parse.py — do not hand-edit.\n"
    "// Re-run: python3 build/parse.py\n\n"
    f"const CONTENT = {json.dumps(content_map, indent=2, ensure_ascii=False)};\n"
)
with open(os.path.join(JS_DIR, 'content.js'), 'w', encoding='utf-8') as f:
    f.write(content_js)
print('✓ js/content.js')

# translations.js
trans_js = (
    "// Auto-generated by build/parse.py from worksheet_translations/\n"
    "// Re-run: python3 build/parse.py\n\n"
    f"const TRANSLATIONS = {json.dumps(all_translations, indent=2, ensure_ascii=False)};\n"
)
with open(os.path.join(JS_DIR, 'translations.js'), 'w', encoding='utf-8') as f:
    f.write(trans_js)
print('✓ js/translations.js')

# Summary
for p in all_people_en:
    total   = len(p['warmup']['nodes']) + sum(len(pa['nodes']) for pa in p['paths'])
    prompts = (sum(1 for n in p['warmup']['nodes'] if n['type'] == 'prompt') +
               sum(sum(1 for n in pa['nodes'] if n['type'] == 'prompt') for pa in p['paths']))
    t = all_translations.get(p['id'])
    status = '✓' if t else '✗'
    print(f"  {status} {p['id']}: {len(p['paths'])} paths, {total} nodes ({prompts} prompts)")

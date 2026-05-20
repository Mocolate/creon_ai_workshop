#!/usr/bin/env node
// Parses all worksheets into js/content.js and js/translations.js
// Run: node build/parse.js

const fs = require('fs');
const path = require('path');

const WORKSHEETS_DIR = path.join(__dirname, '..', 'worksheets');
const JS_DIR = path.join(__dirname, '..', 'js');

const PEOPLE = [
  { file: '01_aga.md',      id: 'aga',      displayName: 'Aga',      altLang: 'pl' },
  { file: '02_sandra.md',   id: 'sandra',   displayName: 'Sandra',   altLang: 'nl' },
  { file: '03_sofia.md',    id: 'sofia',    displayName: 'Sofia',    altLang: 'nl' },
  { file: '04_amber.md',    id: 'amber',    displayName: 'Amber',    altLang: 'nl' },
  { file: '05_lisette.md',  id: 'lisette',  displayName: 'Lisette',  altLang: 'nl' },
  { file: '06_bart.md',     id: 'bart',     displayName: 'Bart',     altLang: 'nl' },
  { file: '09_geoffrey.md', id: 'geoffrey', displayName: 'Geoffrey', altLang: 'nl' },
];

// --- Prompt extraction ---

function extractPrompts(bqText) {
  // Match *"..."* blocks, possibly spanning multiple lines and paragraphs
  const prompts = [];
  const regex = /\*("[\s\S]+?")\*/g;
  let match;
  while ((match = regex.exec(bqText)) !== null) {
    const raw = match[1];
    const cleaned = raw
      .split('\n')
      .map(line => line.replace(/^\*+/, '').replace(/\*+$/, '').trim())
      .join('\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
    if (cleaned) prompts.push(cleaned);
  }
  if (prompts.length === 0) {
    // Fallback: clean up and return whole text
    const cleaned = bqText
      .split('\n')
      .map(line => line.replace(/^\*+/, '').replace(/\*+$/, '').trim())
      .filter(Boolean)
      .join('\n');
    if (cleaned) prompts.push(cleaned);
  }
  return prompts;
}

// --- Node parser ---

function parseNodes(text) {
  // Strip standalone --- lines (structural separators from source)
  const cleaned = text
    .split('\n')
    .filter(line => line.trim() !== '---')
    .join('\n');

  const lines = cleaned.split('\n');
  const nodes = [];
  let proseLines = [];
  let bqLines = [];
  let inBq = false;

  const flushProse = () => {
    const md = proseLines.join('\n').replace(/\n{3,}/g, '\n\n').trim();
    if (md) nodes.push({ type: 'prose', md });
    proseLines = [];
  };

  const flushBq = () => {
    if (!bqLines.length) return;
    const bqText = bqLines.join('\n');
    for (const p of extractPrompts(bqText)) {
      nodes.push({ type: 'prompt', text: p });
    }
    bqLines = [];
  };

  for (const line of lines) {
    if (line.startsWith('> ') || line === '>') {
      if (!inBq) { flushProse(); inBq = true; }
      bqLines.push(line === '>' ? '' : line.slice(2));
    } else {
      if (inBq) { flushBq(); inBq = false; }
      proseLines.push(line);
    }
  }
  if (inBq) flushBq(); else flushProse();

  return nodes;
}

// --- Section finder ---

function findSections(lines) {
  const sections = {
    introEnd: -1,
    warmupStart: -1,
    pickPathStart: -1,
    pathStarts: [],
    notesStart: -1,
  };

  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (t === '---' && sections.introEnd === -1 && sections.warmupStart === -1) {
      sections.introEnd = i;
    }
    if (t.match(/^## Warm-up/)) sections.warmupStart = i;
    if (t.match(/^## Pick a path/)) sections.pickPathStart = i;
    if (t.match(/^### Path \d+/)) sections.pathStarts.push(i);
    if (t.match(/^## What we deliberately/)) sections.notesStart = i;
    if (t.match(/^## End-of-day check/) && sections.notesStart === -1) sections.notesStart = i;
  }

  return sections;
}

// --- Main worksheet parser ---

function parseWorksheet({ file, id, displayName, altLang }) {
  const raw = fs.readFileSync(path.join(WORKSHEETS_DIR, file), 'utf8');
  const lines = raw.split('\n');
  const s = findSections(lines);

  // Intro: from line 1 (skip # Worksheet header) to first ---
  const introText = lines.slice(1, s.introEnd).join('\n').trim();

  // Warmup section
  const warmupEnd = s.pickPathStart !== -1 ? s.pickPathStart
                  : (s.pathStarts[0] !== undefined ? s.pathStarts[0] : lines.length);
  const warmupLines = lines.slice(s.warmupStart, warmupEnd);
  const warmupHeaderMatch = warmupLines[0].match(/^## Warm-up — (.+?) \*\((.+?)\)\*/);
  const warmupTitle = warmupHeaderMatch ? warmupHeaderMatch[1].trim() : 'Warm-up';
  const warmupDuration = warmupHeaderMatch ? warmupHeaderMatch[2].trim() : '';
  const warmupNodes = parseNodes(warmupLines.slice(1).join('\n'));

  // "Pick a path" intro text
  let pickPath = '';
  if (s.pickPathStart !== -1) {
    const ppEnd = s.pathStarts[0] !== undefined ? s.pathStarts[0] : lines.length;
    pickPath = lines.slice(s.pickPathStart + 1, ppEnd)
      .filter(l => l.trim() !== '---')
      .join('\n').trim();
  }

  // Paths
  const paths = s.pathStarts.map((start, pi) => {
    const end = pi + 1 < s.pathStarts.length ? s.pathStarts[pi + 1]
              : (s.notesStart !== -1 ? s.notesStart : lines.length);
    const pathLines = lines.slice(start, end);
    const headerMatch = pathLines[0].match(/^### (.+?) \*\((.+?)\)\*/);
    const title = headerMatch ? headerMatch[1].trim() : pathLines[0].replace(/^### /, '').trim();
    const duration = headerMatch ? headerMatch[2].trim() : '';
    const bodyText = pathLines.slice(1).join('\n');
    const leaveWithMatch = bodyText.match(/\*\*You'll leave with:\*\*\s*(.+)/);
    const leaveWith = leaveWithMatch ? leaveWithMatch[1].trim() : '';
    return { title, duration, leaveWith, nodes: parseNodes(bodyText) };
  });

  // Notes (footer sections)
  let notesNodes = [];
  if (s.notesStart !== -1) {
    notesNodes = parseNodes(lines.slice(s.notesStart).join('\n'));
  }

  return { id, displayName, altLang, langs: ['en', altLang], introMd: introText,
    warmup: { title: warmupTitle, duration: warmupDuration, pickPath, nodes: warmupNodes },
    paths, notesNodes };
}

// --- Translation stub generator ---

function stubTranslations(person) {
  const stub = { intro: null };

  const stubNodes = nodes => nodes.map(n => ({
    _t: n.type,
    _en: n.type === 'prose' ? n.md.slice(0, 80).replace(/\n/g, ' ') + (n.md.length > 80 ? '…' : '')
                             : n.text.slice(0, 80) + (n.text.length > 80 ? '…' : ''),
    val: null
  }));

  stub.warmup = {
    title: null,
    pickPath: null,
    nodes: stubNodes(person.warmup.nodes)
  };

  stub.paths = person.paths.map(p => ({
    title: null,
    leaveWith: null,
    nodes: stubNodes(p.nodes)
  }));

  return stub;
}

// --- Run ---

const allPeople = PEOPLE.map(parseWorksheet);

// content.js
const contentJs = `// Auto-generated by build/parse.js — do not hand-edit the 'en' data.
// Re-run: node build/parse.js

const CONTENT = ${JSON.stringify(
  Object.fromEntries(allPeople.map(p => [p.id, p])),
  null, 2
)};
`;
fs.writeFileSync(path.join(JS_DIR, 'content.js'), contentJs);
console.log('✓ js/content.js');

// translations.js — stub for user to fill in
// Build a comment-annotated version for readability
function buildTranslationBlock(person) {
  const al = person.altLang.toUpperCase();
  const lines = [`  // ── ${person.displayName} (${al}) ──────────────────────────────`];
  lines.push(`  ${person.id}: {`);
  lines.push(`    intro: null, // EN: ${JSON.stringify(person.introMd.slice(0, 60))}…`);
  lines.push(`    warmup: {`);
  lines.push(`      title: null, // EN: ${JSON.stringify(person.warmup.title)}`);
  lines.push(`      pickPath: null,`);
  lines.push(`      nodes: [`);
  person.warmup.nodes.forEach((n, i) => {
    const preview = (n.type === 'prose' ? n.md : n.text).slice(0, 70).replace(/\n/g, ' ');
    lines.push(`        null, // [${i}] ${n.type}: ${preview}…`);
  });
  lines.push(`      ],`);
  lines.push(`    },`);
  lines.push(`    paths: [`);
  person.paths.forEach((p, pi) => {
    lines.push(`      { // Path ${pi + 1}: ${p.title}`);
    lines.push(`        title: null,`);
    lines.push(`        leaveWith: null,`);
    lines.push(`        nodes: [`);
    p.nodes.forEach((n, i) => {
      const preview = (n.type === 'prose' ? n.md : n.text).slice(0, 70).replace(/\n/g, ' ');
      lines.push(`          null, // [${i}] ${n.type}: ${preview}…`);
    });
    lines.push(`        ],`);
    lines.push(`      },`);
  });
  lines.push(`    ],`);
  lines.push(`  },`);
  return lines.join('\n');
}

const translationsJs = `// Workshop translations — fill in null values with translated strings.
// For prose nodes: provide translated markdown text.
// For prompt nodes: provide translated prompt text (shown in copy blocks).
// Any null falls back to English.
//
// Structure mirrors CONTENT[id] but values are strings (or null).
// nodes arrays must stay the same length as in content.js.

const TRANSLATIONS = {
${allPeople.map(buildTranslationBlock).join('\n')}
};
`;
fs.writeFileSync(path.join(JS_DIR, 'translations.js'), translationsJs);
console.log('✓ js/translations.js');

// Summary
allPeople.forEach(p => {
  const totalNodes = p.warmup.nodes.length + p.paths.reduce((a, pa) => a + pa.nodes.length, 0);
  const prompts = p.warmup.nodes.filter(n => n.type === 'prompt').length
    + p.paths.reduce((a, pa) => a + pa.nodes.filter(n => n.type === 'prompt').length, 0);
  console.log(`  ${p.id}: ${p.paths.length} paths, ${totalNodes} nodes (${prompts} prompts)`);
});

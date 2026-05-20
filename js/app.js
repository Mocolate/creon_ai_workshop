// Workshop site app — handles index, warmup, and path pages.

// ── HTML escaping ─────────────────────────────────────────────────────────────

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Minimal Markdown → HTML ───────────────────────────────────────────────────

function inlineMd(text) {
  let s = text
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  s = s.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  s = s.replace(/\*\*(.+?)\*\*/g,     '<strong>$1</strong>');
  s = s.replace(/\*([^*\n]+?)\*/g,    '<em>$1</em>');
  s = s.replace(/`([^`]+)`/g,         '<code>$1</code>');
  return s;
}

function renderMd(text) {
  const lines = text.split('\n');
  const blocks = [];
  let cur = null;

  const flush = () => { if (cur) { blocks.push(cur); cur = null; } };

  for (const raw of lines) {
    const t = raw.trim();
    if (!t) { flush(); continue; }

    const hm = t.match(/^(#{1,4})\s+(.*)/);
    const ul = !t.match(/^-\s+\[/) && t.match(/^[-*]\s+(.*)/);
    const cb = t.match(/^-\s+\[([ xX])\]\s+(.*)/);
    const ol = t.match(/^\d+\.\s+(.*)/);

    if (hm) {
      flush();
      blocks.push({ k: 'h', lv: hm[1].length, text: hm[2] });
    } else if (cb) {
      if (cur?.k !== 'ul') flush();
      if (!cur) cur = { k: 'ul', items: [] };
      cur.items.push({ task: true, done: cb[1].toLowerCase() === 'x', text: cb[2] });
    } else if (ul) {
      if (cur?.k !== 'ul') flush();
      if (!cur) cur = { k: 'ul', items: [] };
      cur.items.push({ text: ul[1] });
    } else if (ol) {
      if (cur?.k !== 'ol') flush();
      if (!cur) cur = { k: 'ol', items: [] };
      cur.items.push({ text: ol[1] });
    } else {
      if (!cur || cur.k !== 'p') { flush(); cur = { k: 'p', lines: [] }; }
      cur.lines.push(t);
    }
  }
  flush();

  return blocks.map(b => {
    if (b.k === 'h') return `<h${b.lv}>${inlineMd(b.text)}</h${b.lv}>`;
    if (b.k === 'ul') {
      const items = b.items.map(item => {
        if (item.task) {
          const cls = item.done ? ' class="done"' : '';
          const chk = item.done ? ' checked' : '';
          return `<li class="task${item.done ? ' done' : ''}"><label><input type="checkbox"${chk} disabled> ${inlineMd(item.text)}</label></li>`;
        }
        return `<li>${inlineMd(item.text)}</li>`;
      }).join('');
      return `<ul>${items}</ul>`;
    }
    if (b.k === 'ol') {
      return `<ol>${b.items.map(i => `<li>${inlineMd(i.text)}</li>`).join('')}</ol>`;
    }
    if (b.k === 'p') {
      return `<p>${b.lines.map(inlineMd).join('<br>')}</p>`;
    }
    return '';
  }).join('');
}

// ── URL params ────────────────────────────────────────────────────────────────

function getParams() {
  const p = new URLSearchParams(window.location.search);
  const pathVal = p.get('path');
  return {
    person: p.get('person') || '',
    lang: p.get('lang') || 'en',
    pathIndex: pathVal !== null ? parseInt(pathVal, 10) : null,
  };
}

// ── Language buttons ──────────────────────────────────────────────────────────

function setupLangButtons(personId, currentLang, langs) {
  const container = document.getElementById('lang-buttons');
  if (!container) return;
  container.innerHTML = langs.map(lang => {
    const active = lang === currentLang ? ' active' : '';
    return `<button class="lang-btn${active}" data-lang="${lang}">${lang.toUpperCase()}</button>`;
  }).join('');
  container.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', btn.dataset.lang);
      window.location.href = url.toString();
    });
  });
}

// ── Prompt block ──────────────────────────────────────────────────────────────

function makePromptBlock(enText, altText, altLabel) {
  const hasAlt = !!(altText && altLabel);
  const wrap = document.createElement('div');
  wrap.className = 'prompt-block';

  if (hasAlt) {
    const tabsHtml = `
      <div class="prompt-tabs">
        <button class="ptab active" data-tab="en">EN</button>
        <button class="ptab" data-tab="alt">${esc(altLabel.toUpperCase())}</button>
      </div>`;
    wrap.innerHTML = tabsHtml + `
      <div class="prompt-content">
        <pre class="prompt-pre"><code class="ptext ptext-en">${esc(enText)}</code><code class="ptext ptext-alt" hidden>${esc(altText)}</code></pre>
        <button class="copy-btn">Copy</button>
      </div>`;

    let activeTab = 'en';
    wrap.querySelectorAll('.ptab').forEach(btn => {
      btn.addEventListener('click', () => {
        activeTab = btn.dataset.tab;
        wrap.querySelectorAll('.ptab').forEach(b => b.classList.toggle('active', b === btn));
        wrap.querySelector('.ptext-en').hidden  = (activeTab !== 'en');
        wrap.querySelector('.ptext-alt').hidden = (activeTab !== 'alt');
      });
    });
    wrap.querySelector('.copy-btn').addEventListener('click', function () {
      const code = wrap.querySelector(activeTab === 'alt' ? '.ptext-alt' : '.ptext-en');
      copy(code.textContent, this);
    });
  } else {
    wrap.innerHTML = `
      <div class="prompt-content no-tabs">
        <pre class="prompt-pre"><code>${esc(enText)}</code></pre>
        <button class="copy-btn">Copy</button>
      </div>`;
    wrap.querySelector('.copy-btn').addEventListener('click', function () {
      copy(wrap.querySelector('code').textContent, this);
    });
  }

  return wrap;
}

function copy(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = 'Copy'; }, 1600);
  }).catch(() => {
    // fallback: select text
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = 'Copy'; }, 1600);
  });
}

// ── Node renderer ─────────────────────────────────────────────────────────────

function renderNodes(nodes, sectionTrans, lang, container) {
  const altLang = lang !== 'en' ? lang : null;

  nodes.forEach((node, i) => {
    const transVal = sectionTrans?.nodes?.[i] ?? null;

    if (node.type === 'prose') {
      const mdText = (transVal && altLang) ? transVal : node.md;
      const div = document.createElement('div');
      div.className = 'prose';
      div.innerHTML = renderMd(mdText);
      container.appendChild(div);

    } else if (node.type === 'prompt') {
      const altText = (altLang && transVal) ? transVal : null;
      container.appendChild(makePromptBlock(node.text, altText, altLang));
    }
  });
}

// ── Index page ────────────────────────────────────────────────────────────────

function initIndex() {
  const grid = document.getElementById('person-grid');
  if (!grid) return;

  Object.values(CONTENT).forEach(person => {
    const btn = document.createElement('button');
    btn.className = 'person-btn';
    btn.dataset.pid = person.id;
    btn.innerHTML = `<span class="person-name">${esc(person.displayName)}</span>`;
    btn.addEventListener('click', () => showLangPicker(person));
    grid.appendChild(btn);
  });
}

function showLangPicker(person) {
  document.querySelectorAll('.person-btn').forEach(b =>
    b.classList.toggle('selected', b.dataset.pid === person.id));

  let picker = document.getElementById('lang-picker');
  if (!picker) {
    picker = document.createElement('div');
    picker.id = 'lang-picker';
    document.getElementById('person-grid').insertAdjacentElement('afterend', picker);
  }

  const labelMap = { en: 'English', nl: 'Nederlands', pl: 'Polski' };
  picker.innerHTML = `<span class="picker-label">Choose language</span>`;
  person.langs.forEach(lang => {
    const btn = document.createElement('button');
    btn.className = 'lang-pick-btn';
    btn.textContent = labelMap[lang] || lang.toUpperCase();
    btn.addEventListener('click', () => {
      window.location.href = `warmup.html?person=${person.id}&lang=${lang}`;
    });
    picker.appendChild(btn);
  });
}

// ── Warmup page ───────────────────────────────────────────────────────────────

function initWarmup() {
  const { person: personId, lang } = getParams();
  const person = CONTENT[personId];
  if (!person) { document.body.innerHTML = '<p style="padding:2rem">Person not found.</p>'; return; }

  const trans = (lang !== 'en') ? (TRANSLATIONS[personId] || null) : null;
  const altLang = lang !== 'en' ? lang : null;

  document.title = `${person.displayName} — Workshop`;
  document.getElementById('person-name').textContent = person.displayName;
  setupLangButtons(personId, lang, person.langs);

  // Intro
  const introEl = document.getElementById('intro-content');
  if (introEl) {
    const introMd = (trans?.intro && altLang) ? trans.intro : person.introMd;
    introEl.innerHTML = renderMd(introMd);
  }

  // Warmup title + duration
  const warmupTrans = trans?.warmup ?? null;
  const warmupTitle = (warmupTrans?.title && altLang) ? warmupTrans.title : person.warmup.title;
  document.getElementById('warmup-title').textContent = warmupTitle;
  const durEl = document.getElementById('warmup-duration');
  if (durEl) durEl.textContent = person.warmup.duration;

  // Warmup nodes
  renderNodes(person.warmup.nodes, warmupTrans, lang, document.getElementById('warmup-nodes'));

  // Pick-a-path prose
  const pickEl = document.getElementById('pick-path-text');
  if (pickEl && person.warmup.pickPath) {
    const pickMd = (warmupTrans?.pickPath && altLang) ? warmupTrans.pickPath : person.warmup.pickPath;
    pickEl.innerHTML = renderMd(pickMd);
  }

  // Path cards
  const pathGrid = document.getElementById('path-grid');
  person.paths.forEach((path, pi) => {
    const pt = trans?.paths?.[pi] ?? null;
    const title     = (pt?.title     && altLang) ? pt.title     : path.title;
    const leaveWith = (pt?.leaveWith && altLang) ? pt.leaveWith : path.leaveWith;

    const card = document.createElement('a');
    card.className = 'path-card';
    card.href = `path.html?person=${personId}&lang=${lang}&path=${pi}`;
    card.innerHTML = `
      <div class="path-card-header">
        <span class="path-num">Path ${pi + 1}</span>
        <span class="path-duration">${esc(path.duration)}</span>
      </div>
      <div class="path-title">${esc(title)}</div>
      ${leaveWith ? `<div class="path-leave">${esc(leaveWith)}</div>` : ''}`;
    pathGrid.appendChild(card);
  });

  // Notes
  const notesEl = document.getElementById('notes-content');
  if (notesEl && person.notesNodes?.length) {
    renderNodes(person.notesNodes, null, lang, notesEl);
  } else if (notesEl) {
    notesEl.closest('.notes-section')?.remove();
  }
}

// ── Path page ─────────────────────────────────────────────────────────────────

function initPath() {
  const { person: personId, lang, pathIndex } = getParams();
  const person = CONTENT[personId];
  if (!person || pathIndex === null || !person.paths[pathIndex]) {
    document.body.innerHTML = '<p style="padding:2rem">Path not found.</p>'; return;
  }

  const path = person.paths[pathIndex];
  const trans = (lang !== 'en') ? (TRANSLATIONS[personId] || null) : null;
  const pt = trans?.paths?.[pathIndex] ?? null;
  const altLang = lang !== 'en' ? lang : null;

  const title     = (pt?.title     && altLang) ? pt.title     : path.title;
  const leaveWith = (pt?.leaveWith && altLang) ? pt.leaveWith : path.leaveWith;

  document.title = `${person.displayName} — ${title}`;
  document.getElementById('person-name').textContent = person.displayName;
  document.getElementById('path-title').textContent = title;
  setupLangButtons(personId, lang, person.langs);

  const backLink = document.getElementById('back-link');
  if (backLink) backLink.href = `warmup.html?person=${personId}&lang=${lang}`;

  const durEl = document.getElementById('path-duration');
  if (durEl) durEl.textContent = path.duration;

  const lwEl = document.getElementById('leave-with');
  if (lwEl) {
    if (leaveWith) lwEl.innerHTML = `<strong>You'll leave with:</strong> ${esc(leaveWith)}`;
    else lwEl.remove();
  }

  renderNodes(path.nodes, pt, lang, document.getElementById('path-nodes'));
}

// ── Boot ──────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  if (page === 'index')  initIndex();
  if (page === 'warmup') initWarmup();
  if (page === 'path')   initPath();
});

/* ==========================================================================
   FlowState FPV — Release Hub
   Rendert Projektkarten und Versionsindex aus assets/data/versions.json.
   Zweisprachig: Deutsch und English, Rückfall auf English.
   Kein Framework, keine Abhängigkeiten.
   ========================================================================== */
(() => {
  'use strict';

  const DATA_URL = 'assets/data/versions.json';
  const LANG_KEY = 'flowstate-lang';
  const FALLBACK = 'en';

  /* ----------------------------- Wörterbuch ------------------------------ */

  const UI = {
    de: {
      'nav.projects': 'Projekte',
      'nav.versions': 'Versionen',
      'nav.structure': 'Struktur',
      'nav.deployment': 'Deployment',
      'nav.docs': 'Doku',

      'hero.eyebrow': 'FlowState FPV · Versionierung',
      'hero.title1': 'Zwei Projekte.',
      'hero.title2': 'Ein Ort für',
      'hero.accent': 'jede Version',
      'hero.lede': 'FlowState Tuner und der FPV Guide an einem festen Platz: Kanal, Prüfsumme, Reifegrad und ein direkter Start im Browser — ohne Download.',
      'hero.cta1': 'Versionen ansehen',
      'hero.cta2': 'Tuner öffnen',
      'hero.cta3': 'Guide öffnen',
      'hero.cta4': 'Struktur',
      'hero.foot.left': 'Statisch · kein Backend',

      'stat.projects': 'Projekte',
      'stat.releases': 'Versionen',
      'stat.online': 'online',
      'stat.offline': 'offline',

      'projects.eyebrow': 'Projekte',
      'projects.title': 'Zwei Werkzeuge, ein Produktgedanke',
      'projects.lede': 'Der Guide erklärt, warum eine Einstellung so aussieht. Der Tuner führt durch den Ablauf, der dorthin führt. Beide sind eigenständige Einzeldateien und laufen vollständig offline.',
      'projects.open': 'Öffnen',
      'projects.notes': 'Release-Notes',

      'flow.eyebrow': 'Ablauf',
      'flow.title': 'Wie eine Version ihren Platz findet',
      'flow.lede': 'Von der Einzeldatei bis zur aufrufbaren URL sind es fünf Schritte. Jeder Schritt hinterlässt eine Spur, die man später prüfen kann.',
      'flow.s1.t': 'Quelle', 'flow.s1.d': 'Die Anwendung liegt als einzelne HTML-Datei vor.',
      'flow.s2.t': 'Einordnen', 'flow.s2.d': 'Projekt, Kanal, Datum, Größe und Prüfsumme landen in versions.json.',
      'flow.s3.t': 'Einspielen', 'flow.s3.d': 'Die Einzeldatei wird zu tuner/index.html bzw. guide/index.html.',
      'flow.s4.t': 'Prüfen', 'flow.s4.d': 'validate.mjs vergleicht Hash, Pfade und Links — lokal und in der CI.',
      'flow.s5.t': 'Ausliefern', 'flow.s5.d': 'GitHub Pages baut die Seite bei jedem Push auf main automatisch.',

      'versions.eyebrow': 'Versionen',
      'versions.title': 'Der vollständige Index',
      'versions.lede': 'Eine Karte pro Ausgabe — mit Kanal, Prüfsumme und ehrlichem Reifegrad. Die Liste entsteht aus assets/data/versions.json.',
      'search.label': 'Versionen durchsuchen',
      'search.placeholder': 'Version, Projekt oder Stichwort …',
      'filter.all': 'Alle',
      'filter.anyChannel': 'Jeder Kanal',
      'filter.reset': 'Filter zurücksetzen',
      'empty': 'Keine Version passt zu dieser Auswahl.',
      'count': '{n} von {total}',

      'structure.eyebrow': 'Struktur',
      'structure.title': 'Ein Repository, zwei Anwendungen',
      'structure.lede': 'Kein Build, keine Abhängigkeiten, keine Serverlogik. Alles, was GitHub Pages braucht, ist die richtige Ordnerstruktur und eine .nojekyll-Datei.',
      'tree.hub': '# dieser Hub', 'tree.readme': '# Bedienungsanleitung',
      'tree.nojekyll': '# Jekyll aus', 'tree.ci': '# Index prüfen',
      'tree.tuner': '# FlowState Tuner', 'tree.guide': '# FPV Guide',
      'tree.css': '# Design-System', 'tree.js': '# Rendering, DE/EN',
      'tree.data': '# ← Quelle der Wahrheit', 'tree.releases': '# Notes je Version',
      'tree.install': '# Dateien einspielen', 'tree.update': '# Hash & Größe',
      'tree.validate': '# Prüfung',
      'legend.hub': 'Der Hub bleibt schlank: Er beschreibt und verlinkt, er enthält die Anwendungen nicht.',
      'legend.data': 'Einzige Quelle für Versionen, Kanäle, Hashes und Reifegrad — zweisprachig.',
      'legend.apps': 'Feste URLs pro Projekt. Eine neue Version ersetzt genau eine Datei.',
      'legend.nojekyll': 'Verhindert, dass GitHub Pages Dateien mit Unterstrich oder bestimmten Namen wegfiltert.',
      'legend.docs': 'Release-Notes und Prozesswissen versioniert neben dem Code.',

      'deploy.eyebrow': 'Deployment',
      'deploy.title': 'In drei Schritten online',
      'deploy.lede': 'Der Hub ist statisch. Nach dem Einspielen der Anwendungsdateien genügt ein Push auf main, damit GitHub Pages die Seite neu baut.',
      'deploy.s1.t': 'Versionen einspielen', 'deploy.s1.d': 'Die Einzeldateien an ihren Platz kopieren — das Skript berechnet Hash und Größe und trägt beides in den Index ein.',
      'deploy.s2.t': 'Prüfen', 'deploy.s2.d': 'Der Validator kontrolliert Index, Dateien, Hashes und interne Links.',
      'deploy.s2.d2': 'Dieselbe Prüfung läuft bei jedem Push in GitHub Actions.',
      'deploy.s3.t': 'Pushen', 'deploy.s3.d': 'Committen und pushen — GitHub Pages baut die Seite danach automatisch neu.',
      'deploy.note.t': 'Pages-Einstellung',
      'deploy.note.d': 'Unter Settings → Pages muss als Quelle der Branch stehen, der die Dateien enthält — üblicherweise main, Ordner / (root). Zeigt die Einstellung auf einen anderen Branch, wird die Seite nie aktualisiert.',

      'status.title': 'Reifegrad — ehrlich benannt',
      'status.text': 'Beide Ausgaben sind vorab: der Tuner Early Alpha, der Guide GitHub-Beta. Bestandene Quellprüfungen sind kein Nachweis für Browser-, Web-Serial-, FC- oder Flugverhalten. Props ab für Bench-Arbeit, und bei heißen Motoren, Desyncs oder unklarer Mechanik sofort aufhören.',

      'docs.eyebrow': 'Dokumentation',
      'docs.title': 'Was wo nachzulesen ist',
      'docs.lede': 'Jede Version bringt ihre eigenen Notizen mit. Prozesswissen liegt daneben, nicht in Chats oder Dateinamen.',
      'docs.pages.t': 'GitHub Pages einrichten',
      'docs.pages.d': 'Quelle, Branch, eigene Domain, Caching und die Stolperfallen bei großen Einzeldateien.',
      'docs.process.t': 'Release-Prozess',
      'docs.process.d': 'Kanal wählen, Datei einspielen, Hash prüfen, Tag und GitHub-Release setzen.',
      'docs.tuner.d': 'Highlights, Validierungsgrenze und Hinweise zum Alpha-Stand.',
      'docs.guide.d': 'Delta zur Vollversion, Prüfergebnis und Review-Fokus.',
      'docs.readme.t': 'Bedienungsanleitung',
      'docs.readme.d': 'Beide Anwendungen im Detail: Start, Phasen, Gates, Exporte, Fehlerbehebung.',
      'docs.releases.t': 'Releases',
      'docs.releases.d': 'Tags, Release-Notes und Downloads je Version.',

      'footer.note': 'Statischer Release-Hub für FlowState Tuner und den FPV Guide. Kein Backend, keine Tracker, keine externen Fonts.',
      'footer.projects': 'Projekte', 'footer.repo': 'Repo', 'footer.ext': 'Extern',
      'footer.pages': 'Pages-Setup', 'footer.process': 'Release-Prozess', 'footer.releases': 'Releases',

      'channel.alpha': 'Alpha', 'channel.beta': 'Beta',
      'channel.rc': 'Release Candidate', 'channel.stable': 'Stable',

      'release.open': 'Im Browser öffnen',
      'release.download': 'Herunterladen',
      'release.notes': 'Release-Notes',
      'release.copy': 'kopieren',
      'release.copied': 'kopiert',
      'release.noCopy': 'nicht möglich',
      'release.pending': 'pending',
      'release.highlights': 'Highlights & Grenzen',
      'release.pros': 'Highlights',
      'release.cons': 'Grenzen & Vorbehalte',
      'release.hash': 'SHA-256',
      'release.size': 'Größe',
      'release.status': 'Prüfstatus',
      'meta.index': 'Index {date} · {n}/{total} online',
      'date.asOf': 'Stand {date}'
    },

    en: {
      'nav.projects': 'Projects',
      'nav.versions': 'Versions',
      'nav.structure': 'Structure',
      'nav.deployment': 'Deployment',
      'nav.docs': 'Docs',

      'hero.eyebrow': 'FlowState FPV · Versioning',
      'hero.title1': 'Two projects.',
      'hero.title2': 'One place for',
      'hero.accent': 'every version',
      'hero.lede': 'FlowState Tuner and the FPV Guide in one fixed place: channel, checksum, maturity and a direct start in the browser — no download.',
      'hero.cta1': 'Browse versions',
      'hero.cta2': 'Open tuner',
      'hero.cta3': 'Open guide',
      'hero.cta4': 'Structure',
      'hero.foot.left': 'Static · no backend',

      'stat.projects': 'Projects',
      'stat.releases': 'Versions',
      'stat.online': 'online',
      'stat.offline': 'offline',

      'projects.eyebrow': 'Projects',
      'projects.title': 'Two tools, one idea',
      'projects.lede': 'The guide explains why a setting looks the way it does. The tuner walks the workflow that gets you there. Both are standalone single files and run fully offline.',
      'projects.open': 'Open',
      'projects.notes': 'Release notes',

      'flow.eyebrow': 'Workflow',
      'flow.title': 'How a version finds its place',
      'flow.lede': 'Five steps from a single file to a working URL. Every step leaves a trace you can verify later.',
      'flow.s1.t': 'Source', 'flow.s1.d': 'The application exists as a single HTML file.',
      'flow.s2.t': 'Record', 'flow.s2.d': 'Project, channel, date, size and checksum go into versions.json.',
      'flow.s3.t': 'Install', 'flow.s3.d': 'The file becomes tuner/index.html or guide/index.html.',
      'flow.s4.t': 'Verify', 'flow.s4.d': 'validate.mjs compares hash, paths and links — locally and in CI.',
      'flow.s5.t': 'Ship', 'flow.s5.d': 'GitHub Pages rebuilds the site on every push to main.',

      'versions.eyebrow': 'Versions',
      'versions.title': 'The complete index',
      'versions.lede': 'One card per release — with channel, checksum and honest maturity. The list is generated from assets/data/versions.json.',
      'search.label': 'Search versions',
      'search.placeholder': 'Version, project or keyword …',
      'filter.all': 'All',
      'filter.anyChannel': 'Any channel',
      'filter.reset': 'Reset filters',
      'empty': 'No version matches this selection.',
      'count': '{n} of {total}',

      'structure.eyebrow': 'Structure',
      'structure.title': 'One repository, two applications',
      'structure.lede': 'No build, no dependencies, no server logic. All GitHub Pages needs is the right folder layout and a .nojekyll file.',
      'tree.hub': '# this hub', 'tree.readme': '# usage guide',
      'tree.nojekyll': '# Jekyll off', 'tree.ci': '# validate index',
      'tree.tuner': '# FlowState Tuner', 'tree.guide': '# FPV Guide',
      'tree.css': '# design system', 'tree.js': '# rendering, DE/EN',
      'tree.data': '# ← source of truth', 'tree.releases': '# notes per version',
      'tree.install': '# install files', 'tree.update': '# hash & size',
      'tree.validate': '# validation',
      'legend.hub': 'The hub stays lean: it describes and links, it does not contain the applications.',
      'legend.data': 'Single source for versions, channels, hashes and maturity — bilingual.',
      'legend.apps': 'Fixed URLs per project. A new version replaces exactly one file.',
      'legend.nojekyll': 'Stops GitHub Pages from filtering out files with underscores or particular names.',
      'legend.docs': 'Release notes and process knowledge versioned next to the code.',

      'deploy.eyebrow': 'Deployment',
      'deploy.title': 'Online in three steps',
      'deploy.lede': 'The hub is static. Once the application files are in place, a push to main is all GitHub Pages needs.',
      'deploy.s1.t': 'Install versions', 'deploy.s1.d': 'Copy the single files into place — the script computes hash and size and writes both into the index.',
      'deploy.s2.t': 'Verify', 'deploy.s2.d': 'The validator checks index, files, hashes and internal links.',
      'deploy.s2.d2': 'The same check runs on every push in GitHub Actions.',
      'deploy.s3.t': 'Push', 'deploy.s3.d': 'Commit and push — GitHub Pages rebuilds the site automatically.',
      'deploy.note.t': 'Pages setting',
      'deploy.note.d': 'Under Settings → Pages the source branch must be the one holding the files — usually main, folder / (root). If the setting points at another branch, the site will never update.',

      'status.title': 'Maturity — stated honestly',
      'status.text': 'Both releases are pre-release: the tuner is early alpha, the guide is GitHub beta. Passing source checks is not proof of browser, Web Serial, FC or flight behaviour. Remove props for bench work, and stop immediately on hot motors, desyncs or unclear mechanics.',

      'docs.eyebrow': 'Documentation',
      'docs.title': 'What to read where',
      'docs.lede': 'Every version brings its own notes. Process knowledge lives next to them, not in chats or file names.',
      'docs.pages.t': 'Set up GitHub Pages',
      'docs.pages.d': 'Source, branch, custom domain, caching and the pitfalls of large single files.',
      'docs.process.t': 'Release process',
      'docs.process.d': 'Pick a channel, install the file, verify the hash, set tag and GitHub release.',
      'docs.tuner.d': 'Highlights, validation boundary and notes on the alpha state.',
      'docs.guide.d': 'Delta to the full release, review result and review focus.',
      'docs.readme.t': 'Usage guide',
      'docs.readme.d': 'Both applications in detail: start, phases, gates, exports, troubleshooting.',
      'docs.releases.t': 'Releases',
      'docs.releases.d': 'Tags, release notes and downloads per version.',

      'footer.note': 'Static release hub for FlowState Tuner and the FPV Guide. No backend, no trackers, no external fonts.',
      'footer.projects': 'Projects', 'footer.repo': 'Repo', 'footer.ext': 'External',
      'footer.pages': 'Pages setup', 'footer.process': 'Release process', 'footer.releases': 'Releases',

      'channel.alpha': 'Alpha', 'channel.beta': 'Beta',
      'channel.rc': 'Release candidate', 'channel.stable': 'Stable',

      'release.open': 'Open in browser',
      'release.download': 'Download',
      'release.notes': 'Release notes',
      'release.copy': 'copy',
      'release.copied': 'copied',
      'release.noCopy': 'not possible',
      'release.pending': 'pending',
      'release.highlights': 'Highlights & limits',
      'release.pros': 'Highlights',
      'release.cons': 'Limits & caveats',
      'release.hash': 'SHA-256',
      'release.size': 'Size',
      'release.status': 'Check status',
      'meta.index': 'Index {date} · {n}/{total} online',
      'date.asOf': 'As of {date}'
    }
  };

  const state = {
    lang: 'de',
    project: 'all',
    channel: 'all',
    query: '',
    data: null
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* -------------------- Sprachauflösung mit Fallback --------------------- */

  const t = (key, vars) => {
    let value = UI[state.lang]?.[key];
    if (value === undefined) value = UI[FALLBACK]?.[key];
    if (value === undefined) return key;
    if (!vars) return value;
    return String(value).replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
  };

  // Text aus {de,en}-Objekten; fehlt die Sprache, greift Englisch.
  const pick = (value) => {
    if (value == null) return '';
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) return value;
    return value[state.lang] ?? value[FALLBACK] ?? Object.values(value)[0] ?? '';
  };

  const pickList = (value) => {
    const v = pick(value);
    return Array.isArray(v) ? v : [];
  };

  /* ----------------------------- Helpers -------------------------------- */

  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[ch]);

  const locale = () => (state.lang === 'de' ? 'de-DE' : 'en-GB');

  const formatBytes = (bytes) => {
    if (!Number.isFinite(bytes) || bytes <= 0) return '—';
    const kb = bytes / 1000;
    if (kb < 1000) return `${Math.round(kb).toLocaleString(locale())} KB`;
    return `${(kb / 1000).toFixed(1)} MB`;
  };

  const formatDate = (iso) => {
    if (!iso) return '—';
    const [y, m, d] = String(iso).split('-');
    if (!y || !m || !d) return iso;
    const date = new Date(Date.UTC(+y, +m - 1, +d));
    return date.toLocaleDateString(locale(), { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' });
  };

  const projectOf = (id) => state.data?.projects.find((p) => p.id === id) || null;
  const CHANNELS = ['alpha', 'beta', 'rc', 'stable'];
  const channelClass = (c) => `badge badge--${CHANNELS.includes(c) ? c : 'pending'}`;
  const channelLabel = (c) => t(`channel.${c}`) !== `channel.${c}` ? t(`channel.${c}`) : c;

  /* ------------------------------- Theme -------------------------------- */

  const initTheme = () => {
    const button = $('#theme-toggle');
    if (!button) return;
    button.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem('flowstate-theme', next); } catch (e) {}
    });
  };

  /* ------------------------------ Sprache -------------------------------- */

  const applyStatic = () => {
    $$('[data-i18n]').forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    $$('[data-i18n-placeholder]').forEach((el) => {
      el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder));
    });
    $$('[data-lang-btn]').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.langBtn === state.lang));
    });
    document.documentElement.setAttribute('lang', state.lang);
    document.documentElement.dataset.lang = state.lang;
    document.title = state.lang === 'de'
      ? 'FlowState FPV · Release Hub — Tuner & Guide'
      : 'FlowState FPV · Release Hub — Tuner & Guide';
  };

  const setLang = (lang, persist = true) => {
    state.lang = lang === 'de' ? 'de' : 'en';
    if (persist) {
      try { localStorage.setItem(LANG_KEY, state.lang); } catch (e) {}
    }
    applyStatic();
    if (state.data) {
      renderProjects();
      renderHeroMini();
      renderStats();
      render();
    }
  };

  /* ---------------------------- Rendering -------------------------------- */

  const projectTemplate = (project) => {
    const tone = project.accent === 'sky' ? 'guide' : 'tuner';
    const highlights = pickList(project.highlights).map((h) => `<li>${esc(h)}</li>`).join('');
    const meta = pickList(project.meta).map((m) => `<span class="chip">${esc(m)}</span>`).join('');

    return `
      <article class="card project project--${tone} reveal is-visible">
        <div class="project-top">
          <span class="project-icon" aria-hidden="true">
            ${tone === 'tuner'
              ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17V9m4 11V5m4 14v-7m4 10V7m4 10v-5"/></svg>'
              : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22V4.5Z"/><path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20"/><path d="M8 7h8M8 10.5h5"/></svg>'}
          </span>
          <div>
            <h3 class="project-name">${esc(project.name)}</h3>
            <p class="project-kind">${esc(pick(project.kind))}</p>
          </div>
        </div>
        <p>${esc(pick(project.description))}</p>
        <ul class="feature-list">${highlights}</ul>
        <div class="meta-row">${meta}</div>
        <div class="project-actions">
          <a class="btn btn--sm btn--primary" href="${esc(project.links.app)}">${esc(t('projects.open'))}</a>
          <a class="btn btn--sm btn--quiet" href="${esc(project.links.docs)}">${esc(t('projects.notes'))}</a>
        </div>
      </article>`;
  };

  const renderProjects = () => {
    const grid = $('#project-grid');
    if (!grid) return;
    grid.innerHTML = (state.data.projects || []).map(projectTemplate).join('');
  };

  const renderHeroMini = () => {
    const holder = $('#hero-mini');
    if (!holder) return;

    holder.innerHTML = (state.data.releases || []).map((release) => {
      const project = projectOf(release.project);
      const tone = project?.accent === 'sky' ? 'sky' : 'mint';
      const initial = (project?.name || release.project).charAt(0).toUpperCase();
      return `
        <div class="mini-release">
          <span class="mini-dot mini-dot--${tone}" aria-hidden="true">${esc(initial)}</span>
          <span class="mini-body">
            <span class="mini-name">${esc(project?.name || release.project)}</span>
            <span class="mini-ver">${esc(release.version)}</span>
          </span>
          <span class="mini-state ${channelClass(release.channel)}">${esc(channelLabel(release.channel))}</span>
        </div>`;
    }).join('');
  };

  const matches = (release) => {
    if (state.project !== 'all' && release.project !== state.project) return false;
    if (state.channel !== 'all' && release.channel !== state.channel) return false;

    const q = state.query.trim().toLowerCase();
    if (!q) return true;

    const project = projectOf(release.project);
    const haystack = [
      release.version, release.channel, channelLabel(release.channel),
      project?.name,
      pick(release.title), pick(release.summary),
      pick(project?.description), pick(project?.kind),
      ...pickList(release.notes), ...pickList(release.limits),
      ...(release.signals || []).map((s) => pick(s.label)),
      ...pickList(project?.highlights)
    ].join(' ').toLowerCase();

    return q.split(/\s+/).every((token) => haystack.includes(token));
  };

  const signalsTemplate = (signals = []) => {
    if (!signals.length) return '';
    return `
      <div class="signals" aria-label="${esc(t('release.status'))}">
        ${signals.map((s) => `
          <span class="signal" data-state="${esc(s.state || 'na')}">
            ${esc(pick(s.label))}${s.state === 'pending' ? ' · ' + esc(t('release.pending')) : ''}
          </span>`).join('')}
      </div>`;
  };

  const notesTemplate = (release) => {
    const pros = pickList(release.notes);
    const cons = pickList(release.limits);
    if (!pros.length && !cons.length) return '';
    return `
      <details class="notes">
        <summary>${esc(t('release.highlights'))}</summary>
        <div class="notes-body">
          <div class="notes-block">
            <h4>${esc(t('release.pros'))}</h4>
            <ul>${pros.map((n) => `<li>${esc(n)}</li>`).join('')}</ul>
          </div>
          <div class="notes-block notes-block--limit">
            <h4>${esc(t('release.cons'))}</h4>
            <ul>${cons.map((n) => `<li>${esc(n)}</li>`).join('')}</ul>
          </div>
        </div>
      </details>`;
  };

  const releaseTemplate = (release) => {
    const project = projectOf(release.project);
    const hash = release.sha256;
    const appHref = project?.links?.app || '#';
    const docsHref = project?.links?.docs || '#';

    const actions = [];
    if (release.available) {
      actions.push(`<a class="btn btn--sm btn--primary" href="${esc(appHref)}">
        ${esc(t('release.open'))}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>
      </a>`);
      actions.push(`<a class="btn btn--sm btn--ghost" href="${esc(release.file)}" download>${esc(t('release.download'))}</a>`);
    }
    actions.push(`<a class="btn btn--sm btn--quiet" href="${esc(docsHref)}">${esc(t('release.notes'))}</a>`);

    return `
      <article class="release release--${esc(release.project)}" data-release="${esc(release.id)}">
        <div class="release-head">
          <span class="release-project">${esc(project?.name || release.project)}</span>
          <span class="release-version">${esc(release.version)}</span>
          <span class="${channelClass(release.channel)}">${esc(channelLabel(release.channel))}</span>
          <span class="release-date">${esc(formatDate(release.released))}</span>
        </div>

        <p class="release-summary"><strong>${esc(pick(release.title))}</strong> ${esc(pick(release.summary))}</p>

        <div class="release-meta">
          <span class="chip chip--mono">${esc(release.file)}</span>
          <span class="chip">${esc(formatBytes(release.size_bytes))}</span>
          <span class="chip">${release.available ? esc(t('stat.online')) : esc(t('release.pending'))}</span>
        </div>

        <div class="hash-row">
          <span class="hash-label">${esc(t('release.hash'))}</span>
          ${hash
            ? `<code class="hash-value">${esc(hash.slice(0, 16))}…</code>
               <button class="copy-btn" type="button" data-copy="${esc(hash)}">${esc(t('release.copy'))}</button>`
            : `<span class="hash-value hash-value--missing">—</span>`}
        </div>

        ${signalsTemplate(release.signals)}
        <div class="release-actions">${actions.join('')}</div>
        ${notesTemplate(release)}
      </article>`;
  };

  const render = () => {
    const list = $('#release-list');
    const count = $('#result-count');
    if (!list || !state.data) return;

    const all = state.data.releases || [];
    const releases = all.filter(matches)
      .sort((a, b) => String(b.released).localeCompare(String(a.released)));

    list.innerHTML = releases.length
      ? releases.map(releaseTemplate).join('')
      : `<div class="empty">
           <p>${esc(t('empty'))}</p>
           <button class="btn btn--sm btn--ghost" type="button" data-reset style="margin-top:14px">${esc(t('filter.reset'))}</button>
         </div>`;

    if (count) count.textContent = t('count', { n: releases.length, total: all.length });
  };

  const renderStats = () => {
    const releases = state.data.releases || [];
    const set = (key, value) => {
      const el = $(`[data-stat="${key}"]`);
      if (el) el.textContent = value;
    };
    set('projects', state.data.projects.length);
    set('releases', releases.length);
    set('online', releases.filter((r) => r.available).length);

    const dateEl = $('[data-hero-date]');
    if (dateEl) dateEl.textContent = t('date.asOf', { date: formatDate(state.data.updated) });

    const meta = $('#build-meta');
    if (meta) {
      meta.textContent = t('meta.index', {
        date: formatDate(state.data.updated),
        n: releases.filter((r) => r.available).length,
        total: releases.length
      });
    }
  };

  /* ----------------------------- Controls ------------------------------- */

  const initControls = () => {
    $$('[data-lang-btn]').forEach((btn) => {
      btn.addEventListener('click', () => setLang(btn.dataset.langBtn));
    });

    $$('[data-filter]').forEach((button) => {
      button.addEventListener('click', () => {
        const group = button.dataset.filter;
        state[group] = button.dataset.value;
        $$(`[data-filter="${group}"]`).forEach((b) => {
          b.setAttribute('aria-pressed', String(b === button));
        });
        render();
      });
    });

    const search = $('#search');
    if (search) {
      let timer;
      search.addEventListener('input', () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          state.query = search.value;
          render();
        }, 90);
      });
    }

    document.addEventListener('click', (event) => {
      if (!event.target.closest('[data-reset]')) return;
      state.project = 'all';
      state.channel = 'all';
      state.query = '';
      const field = $('#search');
      if (field) field.value = '';
      $$('[data-filter]').forEach((b) => {
        b.setAttribute('aria-pressed', String(b.dataset.value === 'all'));
      });
      render();
    });

    document.addEventListener('click', async (event) => {
      const button = event.target.closest('[data-copy]');
      if (!button) return;
      const value = button.dataset.copy;
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(value);
        } else {
          const area = document.createElement('textarea');
          area.value = value;
          area.setAttribute('readonly', '');
          area.style.position = 'fixed';
          area.style.opacity = '0';
          document.body.appendChild(area);
          area.select();
          document.execCommand('copy');
          area.remove();
        }
        button.textContent = t('release.copied');
        setTimeout(() => { button.textContent = t('release.copy'); }, 1600);
      } catch (e) {
        button.textContent = t('release.noCopy');
      }
    });
  };

  const initReveal = () => {
    const items = $$('.reveal');
    if (!items.length) return;
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    items.forEach((el) => observer.observe(el));
  };

  /* ------------------------------- Boot --------------------------------- */

  const fail = (message) => {
    const list = $('#release-list');
    if (list) list.innerHTML = `<p class="empty">${esc(message)}</p>`;
    const count = $('#result-count');
    if (count) count.textContent = '—';
  };

  const boot = async () => {
    initTheme();
    initControls();

    state.lang = document.documentElement.dataset.lang === 'de' ? 'de' : 'en';
    applyStatic();

    const year = $('#year');
    if (year) year.textContent = String(new Date().getFullYear());

    if (location.protocol === 'file:') {
      fail(state.lang === 'de'
        ? 'Der Index wird per fetch() geladen. Bitte über einen lokalen Server öffnen: python3 -m http.server 8080'
        : 'The index is loaded via fetch(). Please open through a local server: python3 -m http.server 8080');
      initReveal();
      return;
    }

    try {
      const response = await fetch(DATA_URL, { cache: 'no-cache' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      state.data = await response.json();
    } catch (error) {
      fail(`versions.json: ${error.message}`);
      initReveal();
      return;
    }

    renderProjects();
    renderHeroMini();
    renderStats();
    render();
    initReveal();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();

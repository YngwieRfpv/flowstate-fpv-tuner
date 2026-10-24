(function () {
  'use strict';

  var DATA_URL = 'assets/data/versions.json';
  var LANG_KEY = 'flowstate-lang';
  var THEME_KEY = 'flowstate-theme';
  var THEMES = ['dark', 'light', 'cream'];
  var FALLBACK = 'en';
  var CHANNELS = ['alpha', 'beta', 'rc', 'stable'];

  var UI = {
    de: {
      'nav.projects': 'Programme',
      'nav.tuner': 'Tuner',
      'nav.guide': 'Guide',
      'nav.versions': 'Versionen',
      'nav.faq': 'Fragen',
      'hero.eyebrow': 'FlowState FPV',
      'hero.title1': 'Zwei Programme.',
      'hero.title2': 'Eine Werkstatt für',
      'hero.accent': 'deinen Copter',
      'hero.lede': 'Der Tuner misst und schreibt. Der Guide erklärt und begleitet. Beide sind einzelne HTML-Dateien: im Browser öffnen, offline nutzen, ohne Installation.',
      'hero.cta1': 'Tuner starten',
      'hero.cta2': 'Guide öffnen',
      'hero.cta3': 'Versionen',
      'hero.foot': 'Läuft im Browser · kein Konto',
      'stat.programs': 'Programme',
      'stat.versions': 'Versionen',
      'stat.online': 'bereit',
      'stat.offline': 'offline',
      'programs.eyebrow': 'Programme',
      'programs.title': 'Zwei Programme, klar getrennt',
      'programs.lede': 'Beide sind eigenständig. Du öffnest immer nur eines davon — die Karte zeigt dir, was dich dort erwartet.',
      'programs.open': 'Starten',
      'row.more': 'Wie es arbeitet',
      'row.tuner.kicker': 'Messen · Rechnen · Schreiben',
      'row.tuner.text': 'Liest Blackbox- und Dataflash-Logs, leitet Filter- und PID-Werte ab und zeigt jeden Schritt als lesbaren CLI-Plan. Geschrieben wird über Web Serial — nur nach Sicherung und Bestätigung.',
      'row.tuner.p1': 'Sechs Phasen, jede mit eigenem Abschluss',
      'row.tuner.p2': 'Backup-, Firmware- und Profil-Gate vor jedem Schreiben',
      'row.tuner.p3': 'Chrome oder Edge am Desktop für die FC-Verbindung',
      'row.tuner.cta': 'Tuner öffnen',
      'row.guide.kicker': 'Verstehen · Nachschlagen · Nachbauen',
      'row.guide.text': 'Führt vom ersten Build bis zum Feintuning. Erklärt Begriffe, zeigt Tabellen und begleitet den Ablauf Schritt für Schritt — mit Profilauswahl für Tiny Whoop bis 10 Zoll.',
      'row.guide.p1': 'Acht Bereiche von Simple Tuning bis zur Linkliste',
      'row.guide.p2': '95 Glossarbegriffe, direkt im Text aufrufbar',
      'row.guide.p3': 'Läuft in jedem Browser, auch auf dem Handy',
      'row.guide.cta': 'Guide öffnen',
      'programs.details': 'Mehr erfahren',
      'tuner.eyebrow': 'FlowState Tuner',
      'tuner.title': 'Messen, rechnen, schreiben',
      'tuner.lede': 'Der Ablauf ist in sechs Phasen geteilt. Jede Phase sammelt ihre Belege, zeigt ihren Plan und schaltet erst dann die nächste frei.',
      'tuner.phases': 'Der Ablauf in sechs Phasen',
      'tuner.gates': 'Sicherheits-Gates',
      'tuner.gates.lede': 'Mehrere unabhängige Prüfungen blockieren Schreibvorgänge. Sie bleiben aktiv, auch wenn die optionale Checkliste aus ist.',
      'tuner.exports': 'Exporte',
      'tuner.exports.lede': 'Plan als Text, Manifest als JSON, Roh-Logs als ZIP, Blackbox direkt aus dem FC. Alles bleibt lokal.',
      'guide.eyebrow': 'FPV Guide',
      'guide.title': 'Verstehen, nachschlagen, nachbauen',
      'guide.lede': 'Der Guide führt vom ersten Build bis zum Feintuning. Er erklärt Begriffe, zeigt Tabellen und begleitet den Ablauf Schritt für Schritt.',
      'guide.areas': 'Die Bereiche',
      'guide.profile': 'Dein Profil',
      'guide.profile.lede': 'Coptergröße, Frame, Gyro-/PID-Taktrate, Betaflight-Version und ESC-Firmware. Der Guide filtert Werte und Tabellen danach.',
      'guide.workspace': 'Workspace',
      'guide.workspace.lede': 'Setup als Datei speichern, später wieder laden. Logs zuordnen und benennen. Alles im Browser, nichts auf einem Server.',
      'versions.eyebrow': 'Versionen',
      'versions.title': 'Jede Ausgabe, ehrlich beschriftet',
      'versions.lede': 'Kanal, Datum, Größe und Prüfsumme pro Version. Der Reifegrad steht direkt daneben – nicht im Kleingedruckten.',
      'search.label': 'Versionen durchsuchen',
      'search.placeholder': 'Version, Programm oder Stichwort …',
      'filter.all': 'Alle',
      'filter.anyChannel': 'Jeder Kanal',
      'filter.reset': 'Filter zurücksetzen',
      'empty': 'Keine Version passt zu dieser Auswahl.',
      'count': '{n} von {total}',
      'channel.alpha': 'Alpha',
      'channel.beta': 'Beta',
      'channel.rc': 'Release Candidate',
      'channel.stable': 'Stable',
      'release.open': 'Im Browser öffnen',
      'release.download': 'Herunterladen',
      'release.copy': 'kopieren',
      'release.copied': 'kopiert',
      'release.noCopy': 'nicht möglich',
      'release.pending': 'offen',
      'release.more': 'Details',
      'release.pros': 'Leistet',
      'release.cons': 'Grenzen',
      'release.hash': 'SHA-256',
      'release.ready': 'bereit',
      'faq.eyebrow': 'Fragen',
      'faq.title': 'Häufige Fragen',
      'faq.lede': 'Kurz beantwortet, ohne Umwege.',
      'faq.install.q': 'Muss ich etwas installieren?',
      'faq.install.a': 'Nein. Beide Programme sind je eine einzelne HTML-Datei. Du öffnest sie im Browser – fertig. Kein Installer, keine Erweiterung, kein Konto.',
      'faq.pages.q': 'Warum gibt es überhaupt eine GitHub-Seite?',
      'faq.pages.a': 'GitHub Pages ist reines Datei-Hosting. Es liefert die HTML-Dateien aus, die im Repository liegen – nichts wird gestartet oder gebaut. Damit eine Adresse wie /tuner/ funktioniert, muss in den Repository-Einstellungen unter Pages der Branch ausgewählt sein, in dem die Dateien liegen.',
      'faq.offline.q': 'Funktioniert das auch ohne Internet?',
      'faq.offline.a': 'Ja. Beide Dateien laden keine externen Skripte, Schriften oder Bilder. Herunterladen, Doppelklick, fertig – WLAN kann aus bleiben.',
      'faq.browser.q': 'Welcher Browser?',
      'faq.browser.a': 'Der Guide läuft in jedem modernen Browser, auch mobil. Der Tuner braucht für die Verbindung zum Flight Controller Chrome oder Edge auf dem Desktop, weil nur diese Web Serial unterstützen. Log-Analyse funktioniert überall.',
      'faq.data.q': 'Wohin gehen meine Daten?',
      'faq.data.a': 'Nirgendwohin. Logs, Einstellungen und Workspace bleiben im Browser-Speicher deines Geräts oder in Dateien, die du selbst speicherst. Es gibt kein Backend und keine Telemetrie.',
      'faq.safe.q': 'Ist das eine Flugfreigabe?',
      'faq.safe.a': 'Nein. Tuning ersetzt keine mechanische Kontrolle. Props ab für Bench-Arbeiten, und bei heißen Motoren, Desyncs oder unklarer Mechanik sofort aufhören.',
      'footer.note': 'Zwei HTML-Programme für Betaflight-Tuning. Kein Backend, keine Tracker, keine externen Schriften.',
      'footer.programs': 'Programme',
      'footer.more': 'Mehr',
      'footer.releases': 'Releases',
      'footer.repo': 'Repository',
      'footer.license': 'Lizenz',
      'footer.licenseNote': 'Weitergabe unverändert erlaubt · Bearbeitung nicht',
      'date.asOf': 'Stand {date}',
      'phase.setup': 'Setup', 'phase.setup.d': 'FC, Hardware, Profil',
      'phase.pidname': 'P/D neutral', 'phase.mastername': 'Master',
      'phase.ffname': 'FF / I / D-Max', 'phase.archivename': 'Archiv',
      'phase.filter': 'Log, Spektrum, Auto',
      'phase.pid': 'Tracking, Pitch:Roll',
      'phase.master': 'Stufen, Thermik',
      'phase.ff': 'Finish, CLI',
      'phase.archive': 'Logs, Download, Reset',
      'gate.backup.t': 'Backup', 'gate.backup.d': 'ein vollständiges diff all muss vorliegen, sonst springt der Ablauf zurück in Phase 1.',
      'gate.firmware.t': 'Firmware', 'gate.firmware.d': 'Schreiben nur mit Betaflight 4.5 oder neuer.',
      'gate.profile.t': 'Zielprofil', 'gate.profile.d': 'nur das gewählte PID-Profil wird verändert.',
      'gate.filter.t': 'Filterlog', 'gate.filter.d': 'das aktive Log muss die Qualitätsprüfung bestehen; ein Override gilt nur für genau dieses Log.',
      'area.simple.t': 'Simple Tuning', 'area.simple.d': 'Betaflight vorbereiten, Logs lesen, Profil abstimmen.',
      'area.advanced.t': 'Advanced Tuning', 'area.advanced.d': 'Advanced Tune, Sbang oder einzelne Einstellungen.',
      'area.ref.t': 'Technik & Referenz', 'area.ref.d': 'Filterbegriffe, Werte und Tabellen zum Nachschlagen.',
      'area.build.t': 'Build-Guide', 'area.build.d': 'Mechanisch und elektrisch saubere Basis vor dem Erstflug.',
      'area.glossary.t': 'Glossar', 'area.glossary.d': '95 Begriffe, direkt im Text aufrufbar.',
      'area.sources.t': 'Quellen & Links', 'area.sources.d': 'Originalanleitungen, Dokumentation, Werkzeuge.'
    },
    en: {
      'nav.projects': 'Programs',
      'nav.tuner': 'Tuner',
      'nav.guide': 'Guide',
      'nav.versions': 'Versions',
      'nav.faq': 'Questions',
      'hero.eyebrow': 'FlowState FPV',
      'hero.title1': 'Two programs.',
      'hero.title2': 'One workshop for',
      'hero.accent': 'your quad',
      'hero.lede': 'The tuner measures and writes. The guide explains and accompanies. Both are single HTML files: open in the browser, use offline, no installation.',
      'hero.cta1': 'Start tuner',
      'hero.cta2': 'Open guide',
      'hero.cta3': 'Versions',
      'hero.foot': 'Runs in the browser · no account',
      'stat.programs': 'Programs',
      'stat.versions': 'Versions',
      'stat.online': 'ready',
      'stat.offline': 'offline',
      'programs.eyebrow': 'Programs',
      'programs.title': 'Two programs, clearly separated',
      'programs.lede': 'Both stand on their own. You always open just one — the card shows what to expect there.',
      'programs.open': 'Start',
      'row.more': 'How it works',
      'row.tuner.kicker': 'Measure · Calculate · Write',
      'row.tuner.text': 'Reads Blackbox and Dataflash logs, derives filter and PID values and shows every step as a readable CLI plan. Writes go over Web Serial — only after a backup and confirmation.',
      'row.tuner.p1': 'Six phases, each with its own completion',
      'row.tuner.p2': 'Backup, firmware and profile gate before every write',
      'row.tuner.p3': 'Chrome or Edge on desktop for the FC connection',
      'row.tuner.cta': 'Open tuner',
      'row.guide.kicker': 'Understand · Look up · Rebuild',
      'row.guide.text': 'Leads from the first build to fine tuning. Explains terms, shows tables and walks the workflow step by step — with profiles from tiny whoop to 10 inch.',
      'row.guide.p1': 'Eight sections from simple tuning to the link list',
      'row.guide.p2': '95 glossary terms, openable straight from the text',
      'row.guide.p3': 'Runs in any browser, on mobile too',
      'row.guide.cta': 'Open guide',
      'programs.details': 'Learn more',
      'tuner.eyebrow': 'FlowState Tuner',
      'tuner.title': 'Measure, calculate, write',
      'tuner.lede': 'The tuner reads Blackbox and Dataflash logs, derives filter and PID values from them and shows every step as a readable CLI plan. Writes go over Web Serial – only after a backup and your confirmation.',
      'tuner.phases': 'The workflow in six phases',
      'tuner.gates': 'Safety gates',
      'tuner.gates.lede': 'Several independent checks block writes. They stay active even when the optional checklist is disabled.',
      'tuner.exports': 'Exports',
      'tuner.exports.lede': 'Plan as text, manifest as JSON, raw logs as ZIP, Blackbox straight from the FC. Everything stays local.',
      'guide.eyebrow': 'FPV Guide',
      'guide.title': 'Understand, look up, rebuild',
      'guide.lede': 'The guide leads from the first build to fine tuning. It explains terms, shows tables and walks the workflow step by step – with profiles from tiny whoop to 10 inch.',
      'guide.areas': 'The sections',
      'guide.profile': 'Your profile',
      'guide.profile.lede': 'Quad size, frame, gyro/PID loop rate, Betaflight version and ESC firmware. The guide filters values and tables accordingly.',
      'guide.workspace': 'Workspace',
      'guide.workspace.lede': 'Save your setup as a file, load it later. Assign and name logs. Everything in the browser, nothing on a server.',
      'versions.eyebrow': 'Versions',
      'versions.title': 'Every release, honestly labelled',
      'versions.lede': 'Channel, date, size and checksum per version. Maturity sits right next to it – not in the small print.',
      'search.label': 'Search versions',
      'search.placeholder': 'Version, program or keyword …',
      'filter.all': 'All',
      'filter.anyChannel': 'Any channel',
      'filter.reset': 'Reset filters',
      'empty': 'No version matches this selection.',
      'count': '{n} of {total}',
      'channel.alpha': 'Alpha',
      'channel.beta': 'Beta',
      'channel.rc': 'Release candidate',
      'channel.stable': 'Stable',
      'release.open': 'Open in browser',
      'release.download': 'Download',
      'release.copy': 'copy',
      'release.copied': 'copied',
      'release.noCopy': 'not possible',
      'release.pending': 'pending',
      'release.more': 'Details',
      'release.pros': 'Delivers',
      'release.cons': 'Limits',
      'release.hash': 'SHA-256',
      'release.ready': 'ready',
      'faq.eyebrow': 'Questions',
      'faq.title': 'Frequently asked',
      'faq.lede': 'Answered briefly, without detours.',
      'faq.install.q': 'Do I need to install anything?',
      'faq.install.a': 'No. Each program is a single HTML file. You open it in the browser – done. No installer, no extension, no account.',
      'faq.pages.q': 'Why is there a GitHub page at all?',
      'faq.pages.a': 'GitHub Pages is plain file hosting. It serves the HTML files stored in the repository – nothing is started or built. For an address such as /tuner/ to work, the repository settings under Pages must point at the branch that holds those files.',
      'faq.offline.q': 'Does it work without internet?',
      'faq.offline.a': 'Yes. Both files load no external scripts, fonts or images. Download, double-click, done – the network can stay off.',
      'faq.browser.q': 'Which browser?',
      'faq.browser.a': 'The guide runs in any modern browser, mobile included. For the connection to the flight controller the tuner needs Chrome or Edge on desktop, because only they support Web Serial. Log analysis works everywhere.',
      'faq.data.q': 'Where does my data go?',
      'faq.data.a': 'Nowhere. Logs, settings and workspace stay in your browser storage or in files you save yourself. There is no backend and no telemetry.',
      'faq.safe.q': 'Is this a flight clearance?',
      'faq.safe.a': 'No. Tuning does not replace mechanical inspection. Remove props for bench work, and stop immediately on hot motors, desyncs or unclear mechanics.',
      'footer.note': 'Two HTML programs for Betaflight tuning. No backend, no trackers, no external fonts.',
      'footer.programs': 'Programs',
      'footer.more': 'More',
      'footer.releases': 'Releases',
      'footer.repo': 'Repository',
      'footer.license': 'License',
      'footer.licenseNote': 'Unmodified redistribution allowed · modification not',
      'date.asOf': 'As of {date}',
      'phase.setup': 'Setup', 'phase.setup.d': 'FC, hardware, profile',
      'phase.pidname': 'Neutral P/D', 'phase.mastername': 'Master',
      'phase.ffname': 'FF / I / D-Max', 'phase.archivename': 'Archive',
      'phase.filter': 'Log, spectrum, auto',
      'phase.pid': 'Tracking, pitch:roll',
      'phase.master': 'Levels, thermals',
      'phase.ff': 'Finish, CLI',
      'phase.archive': 'Logs, download, reset',
      'gate.backup.t': 'Backup', 'gate.backup.d': 'a complete diff all must exist, otherwise the workflow returns to phase 1.',
      'gate.firmware.t': 'Firmware', 'gate.firmware.d': 'writing requires Betaflight 4.5 or newer.',
      'gate.profile.t': 'Target profile', 'gate.profile.d': 'only the selected PID profile is changed.',
      'gate.filter.t': 'Filter log', 'gate.filter.d': 'the active log must pass the quality check; an override applies to that log only.',
      'area.simple.t': 'Simple tuning', 'area.simple.d': 'Prepare Betaflight, read logs, tune the profile.',
      'area.advanced.t': 'Advanced tuning', 'area.advanced.d': 'Advanced tune, Sbang or individual settings.',
      'area.ref.t': 'Technique & reference', 'area.ref.d': 'Filter terms, values and tables for lookup.',
      'area.build.t': 'Build guide', 'area.build.d': 'A mechanically and electrically sound base before the first flight.',
      'area.glossary.t': 'Glossary', 'area.glossary.d': '95 terms, openable straight from the text.',
      'area.sources.t': 'Sources & links', 'area.sources.d': 'Original guides, documentation, tools.'
    }
  };

  var state = { lang: 'de', project: 'all', channel: 'all', query: '', data: null };

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }

  function $$(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function t(key, vars) {
    var value = UI[state.lang] ? UI[state.lang][key] : undefined;
    if (value === undefined && UI[FALLBACK]) value = UI[FALLBACK][key];
    if (value === undefined) return key;
    if (!vars) return value;
    return String(value).replace(/\{(\w+)\}/g, function (m, k) {
      return Object.prototype.hasOwnProperty.call(vars, k) ? vars[k] : m;
    });
  }

  function pick(value) {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) return value;
    var first = value[state.lang];
    if (first !== undefined && first !== null) return first;
    var second = value[FALLBACK];
    if (second !== undefined && second !== null) return second;
    var keys = Object.keys(value);
    return keys.length ? value[keys[0]] : '';
  }

  function list(value) {
    var picked = pick(value);
    return Array.isArray(picked) ? picked : [];
  }

  function esc(value) {
    return String(value === null || value === undefined ? '' : value).replace(
      /[&<>"']/g,
      function (ch) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
      }
    );
  }

  function locale() {
    return state.lang === 'de' ? 'de-DE' : 'en-GB';
  }

  function formatBytes(bytes) {
    if (typeof bytes !== 'number' || bytes <= 0) return '—';
    var kb = bytes / 1000;
    if (kb < 1000) return Math.round(kb).toLocaleString(locale()) + ' KB';
    return (kb / 1000).toFixed(1) + ' MB';
  }

  function formatDate(iso) {
    if (!iso) return '—';
    var parts = String(iso).split('-');
    if (parts.length !== 3) return iso;
    var date = new Date(Date.UTC(+parts[0], +parts[1] - 1, +parts[2]));
    return date.toLocaleDateString(locale(), {
      day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC'
    });
  }

  function projectOf(id) {
    if (!state.data) return null;
    for (var i = 0; i < state.data.programs.length; i += 1) {
      if (state.data.programs[i].id === id) return state.data.programs[i];
    }
    return null;
  }

  function channelClass(c) {
    return 'badge badge--' + (CHANNELS.indexOf(c) !== -1 ? c : 'alpha');
  }

  function channelLabel(c) {
    var key = 'channel.' + c;
    var label = t(key);
    return label === key ? c : label;
  }

  function themeLabel(theme) {
    var names = {
      de: { dark: 'Dunkel', light: 'Hell', cream: 'Creme' },
      en: { dark: 'Dark', light: 'Light', cream: 'Cream' }
    };
    return names[state.lang][theme];
  }

  function syncThemeLabel() {
    var button = $('#theme-toggle');
    if (!button) return;
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    button.setAttribute('aria-label', themeLabel(current));
    button.setAttribute('title', themeLabel(current));
  }

  function initTheme() {
    var button = $('#theme-toggle');
    if (!button) return;
    syncThemeLabel();
    button.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      var next = THEMES[(THEMES.indexOf(current) + 1) % THEMES.length];
      document.documentElement.setAttribute('data-theme', next);
      syncThemeLabel();
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    });
  }

  function applyStatic() {
    $$('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    $$('[data-i18n-placeholder]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });
    $$('[data-lang-btn]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang-btn') === state.lang));
    });
    document.documentElement.setAttribute('lang', state.lang);
    document.documentElement.setAttribute('data-lang', state.lang);
  }

  function setLang(lang, persist) {
    state.lang = lang === 'de' ? 'de' : 'en';
    if (persist !== false) {
      try { localStorage.setItem(LANG_KEY, state.lang); } catch (e) {}
    }
    applyStatic();
    if (state.data) {
      renderProjects();
      renderHero();
      renderStats();
      render();
    }
  }

  function projectTemplate(program) {
    var tone = program.accent === 'sky' ? 'guide' : 'tuner';
    var icon = tone === 'tuner'
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17V9m4 11V5m4 14v-7m4 10V7m4 10v-5"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22V4.5Z"/><path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20"/><path d="M8 7h8M8 10.5h5"/></svg>';

    var features = list(program.highlights).map(function (item) {
      return '<li>' + esc(item) + '</li>';
    }).join('');

    var meta = list(program.meta).map(function (item) {
      return '<span class="chip">' + esc(item) + '</span>';
    }).join('');

    return '' +
      '<article class="card project project--' + tone + '">' +
        '<div class="project-top">' +
          '<span class="project-icon" aria-hidden="true">' + icon + '</span>' +
          '<div>' +
            '<h3 class="project-name">' + esc(program.name) + '</h3>' +
            '<p class="project-kind">' + esc(pick(program.kind)) + '</p>' +
          '</div>' +
        '</div>' +
        '<p>' + esc(pick(program.description)) + '</p>' +
        '<ul class="feature-list">' + features + '</ul>' +
        '<div class="meta-row">' + meta + '</div>' +
        '<div class="project-actions">' +
          '<a class="btn btn--sm btn--primary" href="' + esc(program.path) + '">' + esc(t('programs.open')) + '</a>' +
          '<a class="btn btn--sm btn--quiet" href="#' + (tone === 'tuner' ? 'tuner' : 'guide') + '">' + esc(t('programs.details')) + '</a>' +
        '</div>' +
      '</article>';
  }

  function renderProjects() {
    var grid = $('#project-grid');
    if (!grid || !state.data) return;
    grid.innerHTML = state.data.programs.map(projectTemplate).join('');
  }

  function renderHero() {
    var holder = $('#hero-mini');
    if (!holder || !state.data) return;

    holder.innerHTML = state.data.releases.map(function (release) {
      var program = projectOf(release.program);
      var tone = program && program.accent === 'sky' ? 'sky' : 'mint';
      var initial = (program ? program.name : release.program).charAt(0).toUpperCase();
      return '' +
        '<div class="mini-release">' +
          '<span class="mini-dot mini-dot--' + tone + '" aria-hidden="true">' + esc(initial) + '</span>' +
          '<span class="mini-body">' +
            '<span class="mini-name">' + esc(program ? program.name : release.program) + '</span>' +
            '<span class="mini-ver">' + esc(release.version) + '</span>' +
          '</span>' +
          '<span class="mini-state ' + channelClass(release.channel) + '">' +
            esc(channelLabel(release.channel)) +
          '</span>' +
        '</div>';
    }).join('');
  }

  function matches(release) {
    if (state.project !== 'all' && release.program !== state.project) return false;
    if (state.channel !== 'all' && release.channel !== state.channel) return false;

    var q = state.query.trim().toLowerCase();
    if (!q) return true;

    var program = projectOf(release.program);
    var haystack = [
      release.version,
      release.channel,
      channelLabel(release.channel),
      program ? program.name : '',
      pick(release.title),
      pick(release.summary),
      program ? pick(program.description) : '',
      program ? pick(program.kind) : ''
    ]
      .concat(list(release.notes))
      .concat(list(release.limits))
      .concat(list(program ? program.highlights : []))
      .concat((release.signals || []).map(function (s) { return pick(s.label); }))
      .join(' ')
      .toLowerCase();

    return q.split(/\s+/).every(function (token) {
      return haystack.indexOf(token) !== -1;
    });
  }

  function signalsTemplate(signals) {
    if (!signals || !signals.length) return '';
    return '<div class="signals">' + signals.map(function (s) {
      var suffix = s.state === 'pending' ? ' · ' + t('release.pending') : '';
      return '<span class="signal" data-state="' + esc(s.state || 'ok') + '">' +
        esc(pick(s.label)) + esc(suffix) + '</span>';
    }).join('') + '</div>';
  }

  function notesTemplate(release) {
    var pros = list(release.notes);
    var cons = list(release.limits);
    if (!pros.length && !cons.length) return '';

    return '' +
      '<details class="notes">' +
        '<summary>' + esc(t('release.more')) + '</summary>' +
        '<div class="notes-body">' +
          '<div class="notes-block">' +
            '<h4>' + esc(t('release.pros')) + '</h4>' +
            '<ul>' + pros.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ul>' +
          '</div>' +
          '<div class="notes-block notes-block--limit">' +
            '<h4>' + esc(t('release.cons')) + '</h4>' +
            '<ul>' + cons.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ul>' +
          '</div>' +
        '</div>' +
      '</details>';
  }

  function releaseTemplate(release) {
    var program = projectOf(release.program);
    var actions = [];

    if (release.available) {
      actions.push('<a class="btn btn--sm btn--primary" href="' + esc(program.path) + '">' +
        esc(t('release.open')) +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>' +
        '</a>');
      actions.push('<a class="btn btn--sm btn--ghost" href="' + esc(release.file) + '" download>' +
        esc(t('release.download')) + '</a>');
    }

    return '' +
      '<article class="release release--' + esc(release.program) + '">' +
        '<div class="release-head">' +
          '<span class="release-project">' + esc(program.name) + '</span>' +
          '<span class="release-version">' + esc(release.version) + '</span>' +
          '<span class="' + channelClass(release.channel) + '">' + esc(channelLabel(release.channel)) + '</span>' +
          '<span class="release-date">' + esc(formatDate(release.released)) + '</span>' +
        '</div>' +
        '<p class="release-summary"><strong>' + esc(pick(release.title)) + '</strong> ' +
          esc(pick(release.summary)) + '</p>' +
        '<div class="release-meta">' +
          '<span class="chip chip--mono">' + esc(release.file) + '</span>' +
          '<span class="chip">' + esc(formatBytes(release.size_bytes)) + '</span>' +
          '<span class="chip">' + esc(release.available ? t('release.ready') : t('release.pending')) + '</span>' +
        '</div>' +
        '<div class="hash-row">' +
          '<span class="hash-label">' + esc(t('release.hash')) + '</span>' +
          (release.sha256
            ? '<code class="hash-value">' + esc(release.sha256.slice(0, 16)) + '…</code>' +
              '<button class="copy-btn" type="button" data-copy="' + esc(release.sha256) + '">' +
              esc(t('release.copy')) + '</button>'
            : '<span class="hash-value">—</span>') +
        '</div>' +
        signalsTemplate(release.signals) +
        '<div class="release-actions">' + actions.join('') + '</div>' +
        notesTemplate(release) +
      '</article>';
  }

  function render() {
    var target = $('#release-list');
    var count = $('#result-count');
    if (!target || !state.data) return;

    var all = state.data.releases;
    var visible = all.filter(matches).slice().sort(function (a, b) {
      return String(b.released).localeCompare(String(a.released));
    });

    target.innerHTML = visible.length
      ? visible.map(releaseTemplate).join('')
      : '<div class="empty"><p>' + esc(t('empty')) + '</p>' +
        '<button class="btn btn--sm btn--ghost" type="button" data-reset style="margin-top:14px">' +
        esc(t('filter.reset')) + '</button></div>';

    if (count) count.textContent = t('count', { n: visible.length, total: all.length });
  }

  function renderStats() {
    var releases = state.data.releases;
    var ready = releases.filter(function (r) { return r.available; }).length;

    var map = {
      programs: state.data.programs.length,
      versions: releases.length,
      online: ready
    };

    Object.keys(map).forEach(function (key) {
      var el = document.querySelector('[data-stat="' + key + '"]');
      if (el) el.textContent = map[key];
    });

    var label = t('date.asOf', { date: formatDate(state.data.updated) });
    $$('[data-hero-date]').forEach(function (el) { el.textContent = label; });
  }

  function initControls() {
    $$('[data-lang-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang-btn'));
      });
    });

    $$('[data-filter]').forEach(function (button) {
      button.addEventListener('click', function () {
        var group = button.getAttribute('data-filter');
        state[group] = button.getAttribute('data-value');
        $$('[data-filter="' + group + '"]').forEach(function (b) {
          b.setAttribute('aria-pressed', String(b === button));
        });
        render();
      });
    });

    var search = $('#search');
    if (search) {
      var timer;
      search.addEventListener('input', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
          state.query = search.value;
          render();
        }, 90);
      });
    }

    document.addEventListener('click', function (event) {
      if (event.target.closest('[data-reset]')) {
        state.project = 'all';
        state.channel = 'all';
        state.query = '';
        var field = $('#search');
        if (field) field.value = '';
        $$('[data-filter]').forEach(function (b) {
          b.setAttribute('aria-pressed', String(b.getAttribute('data-value') === 'all'));
        });
        render();
        return;
      }

      var copy = event.target.closest('[data-copy]');
      if (!copy) return;

      var value = copy.getAttribute('data-copy');
      var done = function () {
        copy.textContent = t('release.copied');
        setTimeout(function () { copy.textContent = t('release.copy'); }, 1600);
      };
      var failed = function () { copy.textContent = t('release.noCopy'); };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(done, failed);
      } else {
        try {
          var area = document.createElement('textarea');
          area.value = value;
          area.setAttribute('readonly', '');
          area.style.position = 'fixed';
          area.style.opacity = '0';
          document.body.appendChild(area);
          area.select();
          document.execCommand('copy');
          document.body.removeChild(area);
          done();
        } catch (e) {
          failed();
        }
      }
    });
  }

  function initReveal() {
    var items = $$('.reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

    items.forEach(function (el) { observer.observe(el); });
  }

  function boot() {
    initTheme();
    initControls();

    state.lang = document.documentElement.getAttribute('data-lang') === 'de' ? 'de' : 'en';
    applyStatic();
    syncThemeLabel();

    var year = $('#year');
    if (year) year.textContent = String(new Date().getFullYear());

    initReveal();

    var summary = $('#phase-body');
    var phases = [
      ['1', t('phase.setup'), t('phase.setup.d')],
      ['2', 'Filter', t('phase.filter')],
      ['3', t('phase.pidname'), t('phase.pid')],
      ['4', t('phase.mastername'), t('phase.master')],
      ['5', t('phase.ffname'), t('phase.ff')],
      ['6', t('phase.archivename'), t('phase.archive')]
    ];
    if (summary) {
      summary.innerHTML = phases.map(function (p) {
        return '<tr><td>' + p[0] + '</td><td><strong>' + esc(p[1]) + '</strong>' +
          '<span>' + esc(p[2]) + '</span></td></tr>';
      }).join('');
    }

    if (location.protocol === 'file:') {
      var target = $('#release-list');
      if (target) {
        target.innerHTML = '<p class="empty">' +
          esc(state.lang === 'de'
            ? 'Die Versionsliste benötigt einen Server. Bitte über die GitHub-Pages-Adresse öffnen.'
            : 'The version list needs a server. Please open through the GitHub Pages address.') +
          '</p>';
      }
      return;
    }

    fetch(DATA_URL, { cache: 'no-cache' })
      .then(function (response) {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        return response.json();
      })
      .then(function (data) {
        state.data = data;
        renderProjects();
        renderHero();
        renderStats();
        render();
      })
      .catch(function () {
        var target = $('#release-list');
        if (target) {
          target.innerHTML = '<p class="empty">' +
            esc(state.lang === 'de'
              ? 'Die Versionsdaten konnten nicht geladen werden.'
              : 'The version data could not be loaded.') +
            '</p>';
        }
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();

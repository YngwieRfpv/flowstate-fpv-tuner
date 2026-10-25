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
      'nav.langs': 'Sprachen',
      'langs.eyebrow': 'Sprachen',
      'langs.title': 'Deutsch und Englisch vollständig, Spanisch als Vorschau',
      'langs.lede': 'Beide Programme liegen auf Deutsch und Englisch vollständig vor. Spanisch ist übersetzt und auswählbar, aber in keinem Bereich geprüft. Deshalb steht im Programm ein dauerhafter Hinweis, und offene Stellen erscheinen auf Englisch.',
      'langs.h.language': 'Sprache',
      'langs.h.status': 'Stand',
      'langs.h.checked': 'Geprüft',
      'langs.status.full': 'vollständig integriert',
      'langs.status.unverified': 'nicht geprüft',
      'langs.status.preview': 'Vorschau, nicht geprüft',
      'langs.yes': 'ja',
      'langs.no': 'nein',
      'langs.open': 'Tuner öffnen',
      'langs.openGuide': 'Guide öffnen',
      'langs.none': 'kein Link',
      'langs.note': 'Die Sprache steht in der Adresse: ?lang=de, ?lang=en oder ?lang=es. Ohne Angabe erkennt das Programm die Browsersprache, sonst Deutsch.',
      'nav.faq': 'Fragen',
      'hero.eyebrow': 'FlowState FPV',
      'hero.title1': 'Zwei Programme',
      'hero.title2': 'für Betaflight,',
      'hero.accent': 'die offline laufen',
      'hero.lede': 'Der Tuner rechnet aus deinen Logs neue Filter- und PID-Werte. Der Guide erklärt, was dahintersteckt und wann welcher Wert passt. Beide bestehen aus einer einzigen HTML-Datei und brauchen keine Internetverbindung.',
      'hero.cta1': 'Tuner starten',
      'hero.cta2': 'Guide öffnen',
      'hero.cta3': 'Versionen',
      'hero.foot': 'Läuft im Browser, auch ohne Internet',
      'stat.programs': 'Programme',
      'stat.versions': 'Versionen',
      'stat.online': 'bereit',
      'stat.offline': 'offline',
      'programs.eyebrow': 'Programme',
      'programs.title': 'Was die beiden Programme machen',
      'programs.lede': 'Beide sind eigenständig. Sie teilen keinen Code und keine Daten, und du öffnest immer nur eines von beiden. Die Abschnitte darunter zeigen, was jeweils drin ist.',
      'programs.open': 'Starten',
      'row.more': 'Wie es arbeitet',
      'row.tuner.kicker': 'Loganalyse und CLI-Plan',
      'row.tuner.text': 'Liest Blackbox- und Dataflash-Logs, rechnet daraus Filter- und PID-Werte und zeigt das Ergebnis als CLI-Plan zum Lesen. Geschrieben wird über Web Serial, und zwar erst, wenn ein Backup vorliegt und du zustimmst.',
      'row.tuner.p1': 'Sechs Phasen, die aufeinander aufbauen',
      'row.tuner.p2': 'Backup-, Firmware- und Profil-Gate vor jedem Schreiben',
      'row.tuner.warning': 'Alpha: Schreiben auf eigene Gefahr. An echter Hardware und im Flug ist der Schreibpfad noch nicht getestet. Den Plan kannst du vorher vollständig lesen.',
      'row.tuner.p3': 'Chrome, Edge oder Opera am Desktop für die FC-Verbindung',
      'row.tuner.cta': 'Tuner öffnen',
      'row.guide.kicker': 'Nachschlagewerk und Ablauf',
      'row.guide.text': 'Führt vom ersten Build bis zum Feintuning, mit Begriffen, Tabellen und dem Ablauf Schritt für Schritt. Welche Werte auftauchen, hängt am Profil, von Tiny Whoop bis 10 Zoll.',
      'row.guide.p1': 'Acht Bereiche, von Simple Tuning bis zur Linkliste',
      'row.guide.p2': '95 Glossarbegriffe, direkt im Text aufrufbar',
      'row.guide.p3': 'Läuft in jedem Browser, auch auf dem Handy',
      'row.guide.cta': 'Guide öffnen',
      'programs.details': 'Details',
      'tuner.eyebrow': 'FlowState Tuner',
      'tuner.title': 'Sechs Phasen bis zum CLI-Plan',
      'tuner.lede': 'Der Ablauf hat sechs Phasen. Jede sammelt ihre Messwerte und zeigt ihren Plan. Weiter geht es erst, wenn du die Phase abschließt.',
      'tuner.phases': 'Der Ablauf in sechs Phasen',
      'tuner.gates': 'Sicherheits-Gates',
      'tuner.gates.lede': 'Mehrere Prüfungen blockieren das Schreiben. Sie greifen auch dann, wenn du die optionale Checkliste abgeschaltet hast.',
      'tuner.exports': 'Exporte',
      'tuner.exports.lede': 'Plan als Text, Manifest als JSON, Roh-Logs als ZIP, Blackbox direkt aus dem Flight Controller. Alles bleibt auf deinem Rechner.',
      'guide.eyebrow': 'FPV Guide',
      'guide.title': 'Was im Guide steht',
      'guide.lede': 'Führt vom ersten Build bis zum Feintuning: Begriffe, Tabellen und der Ablauf Schritt für Schritt.',
      'guide.areas': 'Die Bereiche',
      'guide.profile': 'Dein Profil',
      'guide.profile.lede': 'Coptergröße, Frame, Gyro- und PID-Taktrate, Betaflight-Version, ESC-Firmware. Danach richtet sich, welche Werte und Tabellen der Guide zeigt.',
      'guide.workspace': 'Der Ablauf',
      'guide.workspace.lede': 'Fünf Schritte: ESC, Betaflight-Basis, Filterflug, PID und Feedforward, Abschlussprüfung. Jeden Schritt kannst du später nachlesen.',
      'versions.eyebrow': 'Versionen',
      'versions.title': 'Was gerade veröffentlicht ist',
      'versions.lede': 'Zu jeder Version: Kanal, Datum, Größe und Prüfsumme, dazu der Stand direkt in der Karte.',
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
      'release.page': 'Eigenes Release',
      'release.copied': 'kopiert',
      'release.noCopy': 'nicht möglich',
      'release.pending': 'offen',
      'release.more': 'Details',
      'release.pros': 'Was es kann',
      'release.cons': 'Grenzen',
      'release.hash': 'SHA-256',
      'release.ready': 'bereit',
      'faq.eyebrow': 'Fragen',
      'faq.title': 'Häufige Fragen',
      'faq.lede': 'Die Fragen, die am häufigsten kommen.',
      'faq.install.q': 'Muss ich etwas installieren?',
      'faq.install.a': 'Nein. Beide Programme bestehen aus je einer HTML-Datei, die du im Browser öffnest. Es gibt nichts zu installieren und kein Konto.',
      'faq.pages.q': 'Warum gibt es überhaupt eine GitHub-Seite?',
      'faq.pages.a': 'GitHub Pages liefert nur Dateien aus, die im Repository liegen. Es startet nichts und es baut nichts. Damit eine Adresse wie /tuner/ funktioniert, muss in den Repository-Einstellungen unter Pages der Branch ausgewählt sein, in dem die Dateien liegen.',
      'faq.offline.q': 'Funktioniert das auch ohne Internet?',
      'faq.offline.a': 'Ja. Beide Dateien laden keine externen Skripte, Schriften oder Bilder. Du kannst die Datei herunterladen oder direkt öffnen, das WLAN kann dabei aus bleiben. Nur die Verweise im Guide führen ins Netz: Sie öffnen sich erst mit Verbindung, der Inhalt braucht sie nicht.',
      'faq.browser.q': 'Welcher Browser?',
      'faq.browser.a': 'Der Guide läuft in jedem modernen Browser, auch auf dem Handy. Für die Verbindung zum Flight Controller braucht der Tuner Web Serial. Chrome, Edge und Opera haben es am Desktop eingebaut. In anderen Chromium-Browsern kann es funktionieren, getestet ist das aber nicht. Brave liefert Web Serial abgeschaltet, du musst es erst in den Einstellungen einschalten. Bei Vivaldi fehlte es in manchen Versionen. Firefox und Safari haben es gar nicht. Die Log-Analyse funktioniert in jedem Browser.',
      'faq.data.q': 'Wohin gehen meine Daten?',
      'faq.data.a': 'Die Daten bleiben auf deinem Gerät. Einstellungen und Profil liegen im Browser-Speicher, es gibt kein Backend und keine Telemetrie.',
      'faq.safe.q': 'Ist das eine Flugfreigabe?',
      'faq.safe.a': 'Nein. Der Tuner ist eine Alpha: Der Schreibpfad ist an echter Hardware und im Flug nicht getestet. Schreiben geht auf eigene Verantwortung, es gilt der Haftungsausschluss der Lizenz. Vorher sichern, Props ab, solange der Copter am USB hängt, und bei heißen Motoren, Desyncs oder unklarer Mechanik sofort aufhören.',
      'faq.license.q': 'Ist das Open Source?',
      'faq.license.a': 'Nein. Der Quelltext ist einsehbar, Bearbeitungen sind aber nicht erlaubt. Damit erfüllt die Lizenz die Open-Source-Definition nicht. Erlaubt ist die unveränderte Weitergabe mit Lizenz und Quellenverweis. Der Grund ist der Schreibzugriff auf den Flight Controller: Ungeprüfte Abwandlungen sollen nicht als fertige Fassung im Umlauf sein.',
      'footer.note': 'Zwei HTML-Programme für Betaflight-Tuning. Sie laden keine externen Skripte, Schriften oder Bilder.',
      'footer.programs': 'Programme',
      'footer.more': 'Mehr',
      'footer.releases': 'Releases',
      'footer.repo': 'Repository',
      'footer.license': 'Lizenz',
      'footer.licenseNote': 'Weitergabe nur unverändert erlaubt',
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
      'gate.filter.t': 'Filterlog', 'gate.filter.d': 'das aktive Log muss die Qualitätsprüfung bestehen. Ein Override gilt nur für genau dieses Log.',
      'area.simple.t': 'Simple Tuning', 'area.simple.d': 'Betaflight vorbereiten, Logs lesen, Profil abstimmen.',
      'area.advanced.t': 'Advanced Tuning', 'area.advanced.d': 'Advanced Tune, Sbang oder einzelne Einstellungen.',
      'area.ref.t': 'Technik & Referenz', 'area.ref.d': 'Filterbegriffe, Werte sowie ELRS- und Crossfire-Funkstrecken.',
      'area.build.t': 'Build-Guide', 'area.build.d': 'Mechanisch und elektrisch saubere Basis vor dem Erstflug.',
      'area.glossary.t': 'Glossar', 'area.glossary.d': '95 Begriffe, direkt im Text aufrufbar.',
      'area.sources.t': 'Quellen & Links', 'area.sources.d': 'Originalanleitungen, Dokumentation, Werkzeuge.'
    },
    en: {
      'nav.projects': 'Programs',
      'nav.tuner': 'Tuner',
      'nav.guide': 'Guide',
      'nav.versions': 'Versions',
      'nav.langs': 'Languages',
      'langs.eyebrow': 'Languages',
      'langs.title': 'German and English complete, Spanish as a preview',
      'langs.lede': 'Both programs are complete in German and English. Spanish is translated and selectable, but verified in no area. That is why the program shows a permanent notice, and unrevised passages appear in English.',
      'langs.h.language': 'Language',
      'langs.h.status': 'State',
      'langs.h.checked': 'Verified',
      'langs.status.full': 'fully integrated',
      'langs.status.unverified': 'not verified',
      'langs.status.preview': 'preview, not verified',
      'langs.yes': 'yes',
      'langs.no': 'no',
      'langs.open': 'Open tuner',
      'langs.openGuide': 'Open guide',
      'langs.none': 'no link',
      'langs.note': 'The language lives in the address: ?lang=de, ?lang=en or ?lang=es. Without it, the program reads the browser language, otherwise German.',
      'nav.faq': 'Questions',
      'hero.eyebrow': 'FlowState FPV',
      'hero.title1': 'Two programs',
      'hero.title2': 'for Betaflight',
      'hero.accent': 'that run offline',
      'hero.lede': 'The tuner turns your logs into new filter and PID values. The guide explains what sits behind them and when a value fits. Both are a single HTML file and need no internet connection.',
      'hero.cta1': 'Start tuner',
      'hero.cta2': 'Open guide',
      'hero.cta3': 'Versions',
      'hero.foot': 'Runs in the browser, even without internet',
      'stat.programs': 'Programs',
      'stat.versions': 'Versions',
      'stat.online': 'ready',
      'stat.offline': 'offline',
      'programs.eyebrow': 'Programs',
      'programs.title': 'What the two programs do',
      'programs.lede': 'Both are self-contained. They share no code and no data, and you only ever open one of them. The sections below show what each one contains.',
      'programs.open': 'Start',
      'row.more': 'How it works',
      'row.tuner.kicker': 'Log analysis and CLI plan',
      'row.tuner.text': 'Reads Blackbox and Dataflash logs, turns them into filter and PID values and shows the result as a CLI plan you can read. Writing to the quad goes over Web Serial, and only after a backup exists and you agree.',
      'row.tuner.p1': 'Six phases that build on each other',
      'row.tuner.p2': 'Backup, firmware and profile gate before every write',
      'row.tuner.warning': 'Alpha: write at your own risk. The write path has not been tested on real hardware or in flight. You can read the whole plan first.',
      'row.tuner.p3': 'Chrome, Edge or Opera on desktop for the FC connection',
      'row.tuner.cta': 'Open tuner',
      'row.guide.kicker': 'Reference and workflow',
      'row.guide.text': 'Takes you from the first build to fine tuning, with terms, tables and the workflow step by step. Which values appear depends on your profile, from tiny whoop to 10 inch.',
      'row.guide.p1': 'Eight sections, from simple tuning to the link list',
      'row.guide.p2': '95 glossary terms, openable straight from the text',
      'row.guide.p3': 'Runs in any browser, on mobile too',
      'row.guide.cta': 'Open guide',
      'programs.details': 'Details',
      'tuner.eyebrow': 'FlowState Tuner',
      'tuner.title': 'Six phases to a CLI plan',
      'tuner.lede': 'The workflow has six phases. Each collects its measurements and shows its plan; the next one opens only when you finish the current one.',
      'tuner.phases': 'The workflow in six phases',
      'tuner.gates': 'Safety gates',
      'tuner.gates.lede': 'Several checks block writing. They still apply when you switch the optional checklist off.',
      'tuner.exports': 'Exports',
      'tuner.exports.lede': 'Plan as text, manifest as JSON, raw logs as ZIP, Blackbox straight from the flight controller. Everything stays on your machine.',
      'guide.eyebrow': 'FPV Guide',
      'guide.title': 'What the guide covers',
      'guide.lede': 'Takes you from the first build to fine tuning: terms, tables and the workflow step by step.',
      'guide.areas': 'The sections',
      'guide.profile': 'Your profile',
      'guide.profile.lede': 'Quad size, frame, gyro and PID loop rate, Betaflight version, ESC firmware. That decides which values and tables the guide shows.',
      'guide.workspace': 'The workflow',
      'guide.workspace.lede': 'Five steps: ESC, Betaflight basics, filter flight, PID and feedforward, final check. You can read up on each one later.',
      'versions.eyebrow': 'Versions',
      'versions.title': 'What is published right now',
      'versions.lede': 'For each version: channel, date, size and checksum, plus the state right on the card.',
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
      'release.page': 'Own release',
      'release.copied': 'copied',
      'release.noCopy': 'not possible',
      'release.pending': 'pending',
      'release.more': 'Details',
      'release.pros': 'What it does',
      'release.cons': 'Limits',
      'release.hash': 'SHA-256',
      'release.ready': 'ready',
      'faq.eyebrow': 'Questions',
      'faq.title': 'Frequently asked',
      'faq.lede': 'The questions that come up most.',
      'faq.install.q': 'Do I need to install anything?',
      'faq.install.a': 'No. Each program is a single HTML file that you open in the browser. There is nothing to install and no account.',
      'faq.pages.q': 'Why is there a GitHub page at all?',
      'faq.pages.a': 'GitHub Pages only serves files that sit in the repository. It starts nothing and builds nothing. For an address such as /tuner/ to work, the repository settings under Pages must point at the branch holding those files.',
      'faq.offline.q': 'Does it work without internet?',
      'faq.offline.a': 'Yes. Both files load no external scripts, fonts or images. You can download the file or open it directly, the network can stay off. Only the guide’s links point outward: they need a connection, the content does not.',
      'faq.browser.q': 'Which browser?',
      'faq.browser.a': 'The guide runs in any modern browser, on mobile too. For the flight controller the tuner needs Web Serial. Chrome, Edge and Opera ship it on desktop. Other Chromium browsers may work, but that is untested: Brave ships it disabled, so you have to switch it on in the settings first, and some Vivaldi versions lacked it. Firefox and Safari do not have it at all. Log analysis works in every browser.',
      'faq.data.q': 'Where does my data go?',
      'faq.data.a': 'The data stays on your device. Settings and profile live in browser storage, and there is no backend and no telemetry.',
      'faq.safe.q': 'Is this a flight clearance?',
      'faq.safe.a': 'No. The tuner is an alpha: the write path has not been tested on real hardware or in flight, writing is at your own risk, and the liability disclaimer of the licence applies. Back up first, remove props while the quad is on USB, and stop right away on hot motors, desyncs or unclear mechanics.',
      'faq.license.q': 'Is this open source?',
      'faq.license.a': 'No. The source is readable, but modifications are not permitted, so the licence does not meet the open source definition. Unmodified redistribution with the licence and a link to the source is allowed. The reason is the write path to the flight controller: unchecked variants should not go around posing as a finished release.',
      'footer.note': 'Two HTML programs for Betaflight tuning. They load no external scripts, fonts or images.',
      'footer.programs': 'Programs',
      'footer.more': 'More',
      'footer.releases': 'Releases',
      'footer.repo': 'Repository',
      'footer.license': 'License',
      'footer.licenseNote': 'Redistribution only in unmodified form',
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
      'gate.filter.t': 'Filter log', 'gate.filter.d': 'the active log must pass the quality check. An override applies to that log only.',
      'area.simple.t': 'Simple tuning', 'area.simple.d': 'Prepare Betaflight, read logs, tune the profile.',
      'area.advanced.t': 'Advanced tuning', 'area.advanced.d': 'Advanced tune, Sbang or individual settings.',
      'area.ref.t': 'Technique & reference', 'area.ref.d': 'Filter terms, values plus ELRS and Crossfire radio links.',
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
    return (kb / 1000).toLocaleString(locale(), { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + ' MB';
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

  // Beim Speichern einen sprechenden Namen vergeben: Programm + Version.
  // Die Datei im Repo heißt technisch index.html, damit die Adresse /tuner/ funktioniert.
  function downloadName(release) {
    var program = projectOf(release.program);
    var name = (program ? program.name : release.program) || 'FlowState';
    return String(name).replace(/\s+/g, '-') + '-' + String(release.version) + '.html';
  }

  function releaseTemplate(release) {
    var program = projectOf(release.program);
    var actions = [];

    if (release.available) {
      actions.push('<a class="btn btn--sm btn--primary" href="' + esc(program.path) + '">' +
        esc(t('release.open')) +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>' +
        '</a>');
      actions.push('<a class="btn btn--sm btn--ghost" href="' + esc(release.file) + '" download="' + esc(downloadName(release)) + '">' +
        esc(t('release.download')) + '</a>');
      if (release.release_url) {
        actions.push('<a class="btn btn--sm btn--ghost" href="' + esc(release.release_url) + '" target="_blank" rel="noopener">' +
          esc(t('release.page')) + '</a>');
      }
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
            ? '<code class="hash-value">' + esc(release.sha256) + '</code>' +
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

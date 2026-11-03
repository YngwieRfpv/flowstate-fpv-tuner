(function () {
  'use strict';

  var DATA_URL = 'assets/data/versions.json';
  var LANG_KEY = 'flowstate-lang';
  var THEME_KEY = 'flowstate-theme';
  var THEMES = ['ocean', 'sand', 'drakn'];
  // Ein Eintrag für alle Programme: flowstate-theme trägt ocean, sand oder drakn.
  // Ältere Stände haben dark, light und cream gespeichert; die werden übersetzt.
  var THEME_ALIAS = { dark: 'ocean', light: 'sand', cream: 'drakn' };
  var THEME_BG = { ocean: '#06232a', sand: '#eef1f2', drakn: '#140a25' };
  var LANGS = ['de', 'en', 'es'];
  var FALLBACK = 'en';
  var CHANNELS = ['alpha', 'beta', 'rc', 'stable'];

  var UI = {
    de: {
      'theme.label': 'Farben',
      'apps.guide': 'Guide',
      'apps.tuner': 'Autotuner',
      'apps.hangar': 'Hangar',
      'stage.back': 'Zurück zur Übersicht',
      'stage.newTab': 'In neuem Tab',
      'stage.loading': 'Wird geladen',
      'stage.slow': 'Lädt nicht im Rahmen, dann hier direkt öffnen',
      'nav.projects': 'Programme',
      'nav.tuner': 'Tuner',
      'nav.guide': 'Guide',
      'nav.versions': 'Versionen',
      'nav.langs': 'Sprachen',
      'langs.eyebrow': 'Sprachen',
      'langs.title': 'Deutsch und Englisch vollständig, Spanisch überall wählbar und ungeprüft',
      'langs.lede': 'Deutsch und Englisch sind bei allen drei Programmen und in dieser Übersicht vollständig. Spanisch ist überall auswählbar, aber in keinem Bereich geprüft; offene Stellen erscheinen auf Englisch.',
      'langs.notYet': 'noch nicht',
      'langs.h.language': 'Sprache',
      'langs.h.status': 'Stand',
      'langs.h.checked': 'Geprüft',
      'langs.h.overview': 'Übersicht',
      'langs.status.full': 'vollständig integriert',
      'langs.status.unverified': 'nicht geprüft',
      'langs.status.preview': 'Vorschau, nicht geprüft',
      'langs.yes': 'ja',
      'langs.no': 'nein',
      'langs.open': 'Tuner öffnen',
      'langs.openGuide': 'Guide öffnen',
      'langs.openHangar': 'HangarDeck öffnen',
      'langs.openHub': 'Übersicht öffnen',
      'langs.none': 'kein Link',
      'langs.hangar': 'HangarDeck Lite ist jetzt auch auf Spanisch dabei, dort aber so wenig durchgesehen wie im Tuner und im Guide.',
      'langs.note': 'Die Sprache steht in der Adresse: ?lang=de, ?lang=en oder ?lang=es. Ohne Angabe nimmt die Seite die Browsersprache und fällt sonst auf Deutsch zurück.',
      'nav.faq': 'Fragen',
      'hero.eyebrow': 'FlowState FPV',
      'overview.sections': 'Mehr zu den Programmen',
      'hero.title1': 'Drei Programme,',
      'hero.title2': 'je eine HTML-Datei,',
      'hero.accent': 'kein Server',
      'hero.lede': 'HangarDeck Lite führt die Copter-Liste mit Bild und liest auf Wunsch den Flight Controller aus. Der FlowState Tuner liest Blackbox-Logs und schreibt den CLI-Plan. Der FPV Guide erklärt Ablauf, Filter und Begriffe. Keines der drei braucht eine Installation oder ein Konto, und einmal geladen läuft es ohne Verbindung weiter.',
      'hero.cta4': 'Versionen',
      'programs.eyebrow': 'Programme',
      'programs.title': 'Was die drei Programme machen',
      'programs.lede': 'Die drei sind eigenständig. Sie teilen keinen Code und keine Daten, und du öffnest immer nur eines davon. Die Abschnitte darunter zeigen, was jeweils drin ist.',
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
      'row.hangar.kicker': 'Copter-Liste, offline geführt',
      'row.hangar.text': 'Eine Liste pro Copter: Größe, Zellen, KV, ESC, Props und Status. Weitere Felder liegen unter Mehr Details und bleiben leer, wenn du sie nicht brauchst.',
      'row.hangar.p1': 'Copter anlegen, suchen und filtern',
      'row.hangar.p2': 'Export als PDF, CSV, Druck oder JSON',
      'row.hangar.p3': 'Abgleich mit dem eigenen Repository',
      'row.hangar.cta': 'HangarDeck öffnen',
      'hangar.eyebrow': 'HangarDeck',
      'hangar.title': 'Die Copter-Liste',
      'hangar.lede': 'Ein Kopf, eine Liste, ein Dialog. Die Daten bleiben im Browser, der Abgleich mit GitHub ist optional.',
      'hangar.areas': 'Was drin ist',
      'hangar.check': 'Anlegen',
      'hangar.check.lede': 'Name und Größe reichen zum Speichern. Alles andere bleibt leer, bis du es brauchst.',
      'hangar.data': 'Wo die Daten liegen',
      'hangar.data.lede': 'Im localStorage dieses Browsers, mit eingerichtetem Abgleich zusätzlich im eigenen Repository. Kein Konto, keine Telemetrie.',
      'area.list.t': 'Liste', 'area.list.d': 'Name, Größe, Spannung, KV, ESC, Props und Status, wahlweise als Kacheln oder als Tabelle.',
      'area.detail.t': 'Mehr Details', 'area.detail.d': 'Bild, Flight Controller, Empfänger, Videosystem, Akku, Abfluggewicht und Notiz, nur auf Wunsch.',
      'area.export.t': 'Export', 'area.export.d': 'PDF-Tabelle für die Ablage, CSV für Excel, Druck, JSON und HTML als Sicherung.',
      'area.sync.t': 'GitHub-Sync', 'area.sync.d': 'Lesen ohne Token, Schreiben mit Token, Zusammenführen über den Zeitstempel.',
      'area.lang.t': 'Sprache und Farbe', 'area.lang.d': 'Deutsch, Englisch und Spanisch, dazu Ozean, Leinen und Dunkelrot.',
      'area.offline.t': 'Offline', 'area.offline.d': 'Eine HTML-Datei, kein Build, keine fremden Ressourcen.',
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
      'versions.lede': 'Zu jeder Version: Kanal, Datum, Größe und Prüfsumme, dazu der Stand direkt in der Karte. Oben lässt sich alles auf einmal laden, in der Zeile dasselbe Paket mit dem Programmnamen im Dateinamen.',
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
      'release.bundle': 'Mit Hub herunterladen',
      'release.packing': 'Wird gepackt …',
      'release.packed': 'Gespeichert',
      'release.failed': 'Nicht möglich',
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
      'faq.install.a': 'Nein. Jedes Programm besteht aus einer HTML-Datei, die du im Browser öffnest. Es gibt nichts zu installieren und kein Konto.',
      'faq.pages.q': 'Warum gibt es überhaupt eine GitHub-Seite?',
      'faq.pages.a': 'GitHub Pages liefert nur Dateien aus, die im Repository liegen. Es startet nichts und es baut nichts. Damit eine Adresse wie /tuner/ funktioniert, muss in den Repository-Einstellungen unter Pages der Branch ausgewählt sein, in dem die Dateien liegen.',
      'faq.offline.q': 'Funktioniert das auch ohne Internet?',
      'faq.offline.a': 'Ja. Die Dateien laden keine externen Skripte, Schriften oder Bilder. Du kannst sie herunterladen oder direkt öffnen, das WLAN kann dabei aus bleiben. Nur die Verweise im Guide führen ins Netz: Sie öffnen sich erst mit Verbindung, der Inhalt braucht sie nicht.',
      'faq.browser.q': 'Welcher Browser?',
      'faq.browser.a': 'Der Guide läuft in jedem modernen Browser, auch auf dem Handy. Für die Verbindung zum Flight Controller braucht der Tuner Web Serial. Chrome, Edge und Opera haben es am Desktop eingebaut. In anderen Chromium-Browsern kann es funktionieren, getestet ist das aber nicht. Brave liefert Web Serial abgeschaltet, du musst es erst in den Einstellungen einschalten. Bei Vivaldi fehlte es in manchen Versionen. Firefox und Safari haben es gar nicht. Die Log-Analyse funktioniert in jedem Browser.',
      'faq.data.q': 'Wohin gehen meine Daten?',
      'faq.data.a': 'Die Daten bleiben auf deinem Gerät. Einstellungen und Profil liegen im Browser-Speicher, es gibt kein Backend und keine Telemetrie.',
      'faq.safe.q': 'Ist das eine Flugfreigabe?',
      'faq.safe.a': 'Nein. Der Tuner ist eine Alpha: Der Schreibpfad ist an echter Hardware und im Flug nicht getestet. Schreiben geht auf eigene Verantwortung, es gilt der Haftungsausschluss der Lizenz. Vorher sichern, Props ab, solange der Copter am USB hängt, und bei heißen Motoren, Desyncs oder unklarer Mechanik sofort aufhören.',
      'faq.license.q': 'Ist das Open Source?',
      'faq.license.a': 'Nein. Der Quelltext ist einsehbar, Bearbeitungen sind aber nicht erlaubt. Damit erfüllt die Lizenz die Open-Source-Definition nicht. Erlaubt ist die unveränderte Weitergabe mit Lizenz und Quellenverweis. Der Grund ist der Schreibzugriff auf den Flight Controller: Ungeprüfte Abwandlungen sollen nicht als fertige Fassung im Umlauf sein.',
      'footer.note': 'Drei HTML-Programme für deine Copter. Sie laden keine externen Skripte, Schriften oder Bilder.',
      'footer.programs': 'Programme',
      'footer.more': 'Mehr',
      'footer.releases': 'Releases',
      'footer.repo': 'Repository',
      'footer.license': 'Lizenz',
      'footer.asOf': 'Stand',
      'footer.credit': 'Ein Projekt von YngwierFPV · KI-gestützt erstellt',
      'footer.safety': 'Kein Ersatz für einen Pre-Flight-Check, sichere Flugfläche und eigene Verantwortung.',
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
      'area.sources.t': 'Quellen & Links', 'area.sources.d': 'Originalanleitungen, Dokumentation, Werkzeuge.',
      'bundle.all': 'Alles herunterladen',
      'bundle.what': 'Im Paket liegt:',
      'bundle.item.site': 'Diese Startseite mit Kopfzeile und Versionsliste, dazu alle Bilder und Skripte, die sie braucht',
      'bundle.item.programs': 'Die drei Programme als je eine HTML-Datei, mit Vorschau und dem Startbestand für den HangarDeck-Abgleich',
      'bundle.item.readme': 'README.md als Text und dieselbe Beschreibung als lesbare Seite README.html',
      'bundle.item.legal': 'LICENSE und LIESMICH.txt mit den ersten Schritten',
      'bundle.optional': 'Herunterladen ist freiwillig: die drei Programme liegen hier im Rahmen unter der Kopfzeile und starten per Klick. Diese Seite selbst kommt aus dem Netz. Ohne Verbindung laufen die Programme nur aus dem entpackten Paket, dann ohne Server.',
      'update.title': 'Stand prüfen',
      'update.checking': 'Wird geprüft …',
      'update.current': 'Alles auf dem neuesten Stand. Geprüft gegen die veröffentlichte Fassung.',
      'update.newer': 'Neuere Fassungen verfügbar:',
      'update.offline': 'Keine Verbindung. Die Prüfung braucht Internet, die Programme nicht.',
      'update.keep': 'Eine Sicherung ist nicht nötig. Copter-Liste und Tuner-Stand liegen im Browser, nicht in den Dateien, und bleiben erhalten, wenn du die neue Fassung am selben Ort über die alte legst. Nur wenn du den Ordner verschiebst, nimm vorher die Exporte: in HangarDeck JSON, im Tuner Plan und Manifest.',
      'update.download': 'Zum Download',
      'update.close': 'Schließen'
    },
    es: {
      'theme.label': 'Colores',
      'apps.guide': 'Guía',
      'apps.tuner': 'Autotuner',
      'apps.hangar': 'Hangar',
      'stage.back': 'Volver a la vista general',
      'stage.newTab': 'En una pestaña nueva',
      'stage.loading': 'Cargando',
      'stage.slow': 'No carga en el marco, ábrelo directamente aquí',
      'nav.projects': 'Programas',
      'nav.tuner': 'Tuner',
      'nav.guide': 'Guía',
      'nav.versions': 'Versiones',
      'nav.langs': 'Idiomas',
      'langs.eyebrow': 'Idiomas',
      'langs.title': 'Alemán e inglés completos, español disponible en todas partes y sin revisar',
      'langs.lede': 'El alemán y el inglés están completos en los tres programas y en esta vista general. El español se puede elegir en todas partes, pero no está revisado en ningún área; los pasajes sin revisar aparecen en inglés.',
      'langs.notYet': 'todavía no',
      'langs.h.language': 'Idioma',
      'langs.h.status': 'Estado',
      'langs.h.checked': 'Revisado',
      'langs.h.overview': 'Vista general',
      'langs.status.full': 'integrado por completo',
      'langs.status.unverified': 'sin revisar',
      'langs.status.preview': 'vista previa, sin revisar',
      'langs.yes': 'sí',
      'langs.no': 'no',
      'langs.open': 'Abrir el Tuner',
      'langs.openGuide': 'Abrir la Guía',
      'langs.openHangar': 'Abrir HangarDeck',
      'langs.openHub': 'Abrir la vista general',
      'langs.none': 'sin enlace',
      'langs.hangar': 'HangarDeck Lite ya está también en español, aunque tan poco revisado como en el tuner y en la guía.',
      'langs.note': 'El idioma va en la dirección: ?lang=de, ?lang=en o ?lang=es. Sin indicación, la página toma el idioma del navegador y, si no lo reconoce, el alemán.',
      'nav.faq': 'Preguntas',
      'hero.eyebrow': 'FlowState FPV',
      'overview.sections': 'Más sobre los programas',
      'hero.title1': 'Tres programas,',
      'hero.title2': 'cada uno un archivo HTML,',
      'hero.accent': 'sin servidor',
      'hero.lede': 'HangarDeck Lite lleva la lista de copter con imagen y lee la controladora cuando quieres. El FlowState Tuner lee registros Blackbox y escribe el plan CLI. La Guía FPV explica el procedimiento, los filtros y los términos. Ninguno necesita instalación ni cuenta, y una vez cargado sigue funcionando sin conexión.',
      'hero.cta4': 'Versiones',
      'programs.eyebrow': 'Programas',
      'programs.title': 'Qué hacen los tres programas',
      'programs.lede': 'Los tres son independientes. No comparten código ni datos y siempre abres solo uno. Los apartados siguientes muestran qué contiene cada uno.',
      'programs.open': 'Abrir',
      'row.more': 'Cómo trabaja',
      'row.tuner.kicker': 'Análisis de registros y plan CLI',
      'row.tuner.text': 'Lee registros Blackbox y Dataflash, calcula con ellos valores de filtro y PID y muestra el resultado como un plan CLI para leer. La escritura va por Web Serial y solo cuando hay una copia de seguridad y tú das tu conformidad.',
      'row.tuner.p1': 'Seis fases que se apoyan unas en otras',
      'row.tuner.p2': 'Control de copia, firmware y perfil antes de cada escritura',
      'row.tuner.warning': 'Alpha: escribir es responsabilidad tuya. En hardware real y en vuelo la escritura todavía no está probada. Puedes leer el plan completo antes.',
      'row.tuner.p3': 'Chrome, Edge u Opera en escritorio para la conexión con la FC',
      'row.tuner.cta': 'Abrir el Tuner',
      'row.guide.kicker': 'Obra de consulta y procedimiento',
      'row.guide.text': 'Acompaña desde el primer montaje hasta el ajuste fino, con términos, tablas y el procedimiento paso a paso. Los valores que aparecen dependen del perfil, de un tiny whoop a 10 pulgadas.',
      'row.guide.p1': 'Ocho apartados, del Simple Tuning a la lista de enlaces',
      'row.guide.p2': '95 términos de glosario, que se abren directamente en el texto',
      'row.guide.p3': 'Funciona en cualquier navegador, también en el móvil',
      'row.guide.cta': 'Abrir la Guía',
      'row.hangar.kicker': 'Lista de copter, sin conexión',
      'row.hangar.text': 'Una lista por copter: tamaño, celdas, KV, ESC, hélices y estado. Los campos restantes están en Más detalles y se quedan vacíos si no los necesitas.',
      'row.hangar.p1': 'Crear, buscar y filtrar copter',
      'row.hangar.p2': 'Exportar como PDF, CSV, impresión o JSON',
      'row.hangar.p3': 'Sincronización con tu propio repositorio',
      'row.hangar.cta': 'Abrir HangarDeck',
      'hangar.eyebrow': 'HangarDeck',
      'hangar.title': 'La lista de copter',
      'hangar.lede': 'Una cabecera, una lista, un diálogo. Los datos se quedan en el navegador, la sincronización con GitHub es opcional.',
      'hangar.areas': 'Qué incluye',
      'hangar.check': 'Crear',
      'hangar.check.lede': 'Con el nombre y el tamaño ya se puede guardar. Lo demás queda vacío hasta que lo necesites.',
      'hangar.data': 'Dónde están los datos',
      'hangar.data.lede': 'En el localStorage de este navegador y, con la sincronización configurada, también en tu propio repositorio. Sin cuenta y sin telemetría.',
      'area.list.t': 'Lista',
      'area.list.d': 'Nombre, tamaño, tensión, KV, ESC, hélices y estado, como tarjetas o como tabla.',
      'area.detail.t': 'Más detalles',
      'area.detail.d': 'Imagen, controladora, receptor, sistema de vídeo, batería, peso al despegue y nota, solo si quieres.',
      'area.export.t': 'Exportar',
      'area.export.d': 'Tabla PDF para el archivo, CSV para Excel, impresión, JSON y HTML como copia.',
      'area.sync.t': 'Sincronización con GitHub',
      'area.sync.d': 'Leer sin token, escribir con token, unir por la marca de tiempo.',
      'area.lang.t': 'Idioma y color',
      'area.lang.d': 'Alemán, inglés y español, además Océano, Lino y Rojo oscuro.',
      'area.offline.t': 'Sin conexión',
      'area.offline.d': 'Un archivo HTML, sin compilación y sin recursos ajenos.',
      'programs.details': 'Detalles',
      'tuner.eyebrow': 'FlowState Tuner',
      'tuner.title': 'Seis fases hasta el plan CLI',
      'tuner.lede': 'El procedimiento tiene seis fases. Cada una reúne sus mediciones y muestra su plan. Solo se sigue cuando cierras la fase.',
      'tuner.phases': 'El procedimiento en seis fases',
      'tuner.gates': 'Controles de seguridad',
      'tuner.gates.lede': 'Varias comprobaciones bloquean la escritura. Actúan también cuando has desactivado la lista de control opcional.',
      'tuner.exports': 'Exportaciones',
      'tuner.exports.lede': 'Plan como texto, manifiesto como JSON, registros en bruto como ZIP y Blackbox directamente desde la controladora. Todo se queda en tu equipo.',
      'guide.eyebrow': 'Guía FPV',
      'guide.title': 'Qué contiene la Guía',
      'guide.lede': 'Acompaña desde el primer montaje hasta el ajuste fino: términos, tablas y el procedimiento paso a paso.',
      'guide.areas': 'Los apartados',
      'guide.profile': 'Tu perfil',
      'guide.profile.lede': 'Tamaño del copter, chasis, frecuencia de giroscopio y de PID, versión de Betaflight, firmware del ESC. De eso depende qué valores y tablas muestra la Guía.',
      'guide.workspace': 'El procedimiento',
      'guide.workspace.lede': 'Cinco pasos: ESC, base de Betaflight, vuelo de filtros, PID y feedforward, comprobación final. Cada paso puedes releerlo después.',
      'versions.eyebrow': 'Versiones',
      'versions.title': 'Qué está publicado ahora',
      'versions.lede': 'Para cada versión: canal, fecha, tamaño y suma de comprobación, además del estado en la tarjeta. Arriba se descarga todo de una vez; en la fila es el mismo paquete con el nombre del programa en el archivo.',
      'search.label': 'Buscar versiones',
      'search.placeholder': 'Versión, programa o palabra …',
      'filter.all': 'Todos',
      'filter.anyChannel': 'Cualquier canal',
      'filter.reset': 'Quitar los filtros',
      'empty': 'Ninguna versión encaja con esta selección.',
      'count': '{n} de {total}',
      'channel.alpha': 'Alpha',
      'channel.beta': 'Beta',
      'channel.rc': 'Release Candidate',
      'channel.stable': 'Stable',
      'release.open': 'Abrir en el navegador',
      'release.bundle': 'Descargar con la vista general',
      'release.packing': 'Empaquetando …',
      'release.packed': 'Guardado',
      'release.failed': 'No es posible',
      'release.copy': 'copiar',
      'release.page': 'Versión propia',
      'release.copied': 'copiado',
      'release.noCopy': 'no es posible',
      'release.pending': 'pendiente',
      'release.more': 'Detalles',
      'release.pros': 'Qué puede hacer',
      'release.cons': 'Límites',
      'release.hash': 'SHA-256',
      'release.ready': 'listo',
      'faq.eyebrow': 'Preguntas',
      'faq.title': 'Preguntas frecuentes',
      'faq.lede': 'Las preguntas que más se repiten.',
      'faq.install.q': '¿Hay que instalar algo?',
      'faq.install.a': 'No. Cada programa es un archivo HTML que abres en el navegador. No hay nada que instalar y no hace falta cuenta.',
      'faq.pages.q': '¿Por qué hay una página de GitHub?',
      'faq.pages.a': 'GitHub Pages solo entrega archivos que están en el repositorio. No inicia nada y no compila nada. Para que una dirección como /tuner/ funcione, en los ajustes del repositorio, en Pages, tiene que estar elegida la rama en la que están los archivos.',
      'faq.offline.q': '¿Funciona también sin internet?',
      'faq.offline.a': 'Sí. Los archivos no cargan scripts, fuentes ni imágenes externas. Puedes descargarlos o abrirlos directamente, el wifi puede estar apagado. Solo los enlaces de la Guía llevan a la red: se abren con conexión, el contenido no la necesita.',
      'faq.browser.q': '¿Qué navegador?',
      'faq.browser.a': 'La Guía funciona en cualquier navegador moderno, también en el móvil. Para la conexión con la controladora, el Tuner necesita Web Serial. Chrome, Edge y Opera lo traen en escritorio. En otros navegadores Chromium puede funcionar, pero no está probado. Brave lo entrega desactivado y hay que activarlo antes en los ajustes. En algunas versiones de Vivaldi faltaba. Firefox y Safari no lo tienen. El análisis de registros funciona en cualquier navegador.',
      'faq.data.q': '¿Adónde van mis datos?',
      'faq.data.a': 'Los datos se quedan en tu equipo. Los ajustes y el perfil están en el almacenamiento del navegador, no hay servidor ni telemetría.',
      'faq.safe.q': '¿Es una autorización de vuelo?',
      'faq.safe.a': 'No. El Tuner es un alfa: la escritura no está probada en hardware real ni en vuelo. Escribir es responsabilidad tuya y se aplica la exención de responsabilidad de la licencia. Haz copia antes, quita las hélices mientras el copter está en USB y detente en cuanto haya motores calientes, desyncs o mecánica poco clara.',
      'faq.license.q': '¿Es código abierto?',
      'faq.license.a': 'No. El código se puede leer, pero no se permite modificarlo. Por eso la licencia no cumple la definición de código abierto. Sí se permite redistribuirlo sin cambios, con la licencia y la referencia al origen. El motivo es el acceso de escritura a la controladora: las variantes sin probar no deben circular como versión acabada.',
      'footer.note': 'Tres programas HTML para tus copter. No cargan scripts, fuentes ni imágenes externas.',
      'footer.programs': 'Programas',
      'footer.more': 'Más',
      'footer.releases': 'Versiones',
      'footer.repo': 'Repositorio',
      'footer.license': 'Licencia',
      'footer.asOf': 'Estado',
      'footer.credit': 'Un proyecto de YngwierFPV · creado con apoyo de IA',
      'footer.safety': 'No sustituye una revisión previa al vuelo, una zona de vuelo segura y la responsabilidad propia.',
      'date.asOf': 'Estado {date}',
      'phase.setup': 'Preparación',
      'phase.setup.d': 'FC, hardware, perfil',
      'phase.pidname': 'P/D neutro',
      'phase.mastername': 'Master',
      'phase.ffname': 'FF / I / D-Max',
      'phase.archivename': 'Archivo',
      'phase.filter': 'Registro, espectro, auto',
      'phase.pid': 'Seguimiento, pitch:roll',
      'phase.master': 'Escalones, térmica',
      'phase.ff': 'Acabado, CLI',
      'phase.archive': 'Registros, descarga, reinicio',
      'gate.backup.t': 'Copia de seguridad',
      'gate.backup.d': 'tiene que haber un diff all completo, si no el procedimiento vuelve a la fase 1.',
      'gate.firmware.t': 'Firmware',
      'gate.firmware.d': 'escribir solo con Betaflight 4.5 o posterior.',
      'gate.profile.t': 'Perfil de destino',
      'gate.profile.d': 'solo cambia el perfil de PID elegido.',
      'gate.filter.t': 'Registro de filtros',
      'gate.filter.d': 'el registro activo tiene que pasar la comprobación de calidad. Un override vale solo para ese registro.',
      'area.simple.t': 'Simple Tuning',
      'area.simple.d': 'Preparar Betaflight, leer registros, ajustar el perfil.',
      'area.advanced.t': 'Advanced Tuning',
      'area.advanced.d': 'Advanced Tune, Sbang o ajustes sueltos.',
      'area.ref.t': 'Técnica y referencia',
      'area.ref.d': 'Términos de filtro, valores y radioenlaces ELRS y Crossfire.',
      'area.build.t': 'Guía de montaje',
      'area.build.d': 'Base mecánica y eléctrica limpia antes del primer vuelo.',
      'area.glossary.t': 'Glosario',
      'area.glossary.d': '95 términos, que se abren directamente en el texto.',
      'area.sources.t': 'Fuentes y enlaces',
      'area.sources.d': 'Manuales originales, documentación, herramientas.',
      'bundle.all': 'Descargar todo',
      'bundle.what': 'El paquete contiene:',
      'bundle.item.site': 'Esta vista general con cabecera y lista de versiones, además de las imágenes y los scripts que necesita',
      'bundle.item.programs': 'Los tres programas, cada uno en un archivo HTML, con la vista previa y el contenido inicial para la sincronización de HangarDeck',
      'bundle.item.readme': 'README.md como texto y la misma descripción como página legible README.html',
      'bundle.item.legal': 'LICENSE y LIESMICH.txt con los primeros pasos',
      'bundle.optional': 'Descargar es opcional: los tres programas están aquí en el marco bajo la cabecera y arrancan con un clic. Esta página llega desde la red. Sin conexión, los programas solo funcionan desde el paquete descomprimido, sin servidor.',
      'update.title': 'Comprobar el estado',
      'update.checking': 'Comprobando …',
      'update.current': 'Todo está al día. Comprobado con la versión publicada.',
      'update.newer': 'Hay versiones más recientes:',
      'update.offline': 'Sin conexión. La comprobación necesita internet, los programas no.',
      'update.keep': 'No hace falta una copia de seguridad. La lista de copter y el estado del tuner están en el navegador, no en los archivos, y se mantienen si sustituyes los archivos en el mismo sitio. Solo si mueves la carpeta, exporta antes: en HangarDeck JSON, en el tuner el plan y el manifiesto.',
      'update.download': 'Ir a las descargas',
      'update.close': 'Cerrar'
    },
    en: {
      'theme.label': 'Colours',
      'apps.guide': 'Guide',
      'apps.tuner': 'Autotuner',
      'apps.hangar': 'Hangar',
      'stage.back': 'Back to the overview',
      'stage.newTab': 'In a new tab',
      'stage.loading': 'Loading',
      'stage.slow': 'Not loading in the frame? Open it directly',
      'nav.projects': 'Programs',
      'nav.tuner': 'Tuner',
      'nav.guide': 'Guide',
      'nav.versions': 'Versions',
      'nav.langs': 'Languages',
      'langs.eyebrow': 'Languages',
      'langs.title': 'German and English complete, Spanish selectable everywhere and unverified',
      'langs.lede': 'German and English are complete in all three programs and on this page. Spanish is selectable everywhere but verified in no area; unrevised passages appear in English.',
      'langs.notYet': 'not yet',
      'langs.h.language': 'Language',
      'langs.h.status': 'State',
      'langs.h.checked': 'Verified',
      'langs.h.overview': 'Overview',
      'langs.status.full': 'fully integrated',
      'langs.status.unverified': 'not verified',
      'langs.status.preview': 'preview, not verified',
      'langs.yes': 'yes',
      'langs.no': 'no',
      'langs.open': 'Open tuner',
      'langs.openGuide': 'Open guide',
      'langs.openHangar': 'Open HangarDeck',
      'langs.openHub': 'Open the overview',
      'langs.none': 'no link',
      'langs.hangar': 'HangarDeck Lite now ships Spanish too, though as little reviewed there as in the tuner and the guide.',
      'langs.note': 'The language lives in the address: ?lang=de, ?lang=en or ?lang=es. Without it, the page reads the browser language and falls back to German.',
      'nav.faq': 'Questions',
      'hero.eyebrow': 'FlowState FPV',
      'overview.sections': 'More on the programs',
      'hero.title1': 'Three programs,',
      'hero.title2': 'each a single HTML file,',
      'hero.accent': 'no server',
      'hero.lede': 'HangarDeck Lite keeps the quad list with a picture and reads the flight controller when you want it. The FlowState Tuner reads blackbox logs and writes the CLI plan. The FPV guide explains the workflow, the filters and the terms. None of them needs an install or an account, and once loaded each keeps running without a connection.',
      'hero.cta4': 'Versions',
      'programs.eyebrow': 'Programs',
      'programs.title': 'What the three programs do',
      'programs.lede': 'All three are self-contained. They share no code and no data, and you only ever open one of them. The sections below show what each one contains.',
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
      'row.hangar.kicker': 'Quad list, kept offline',
      'row.hangar.text': 'One row per quad: size, cells, KV, ESC, props and status. Further fields sit under More details and stay empty until you need them.',
      'row.hangar.p1': 'Add, search and filter quads',
      'row.hangar.p2': 'Export as PDF, CSV, print or JSON',
      'row.hangar.p3': 'Sync with your own repository',
      'row.hangar.cta': 'Open HangarDeck',
      'hangar.eyebrow': 'HangarDeck',
      'hangar.title': 'The quad list',
      'hangar.lede': 'One header, one list, one dialog. The data stays in the browser, the GitHub sync is optional.',
      'hangar.areas': 'What is inside',
      'hangar.check': 'Adding a quad',
      'hangar.check.lede': 'Name and size are enough to save. Everything else stays empty until you need it.',
      'hangar.data': 'Where the data lives',
      'hangar.data.lede': 'In the localStorage of this browser, plus your own repository once the sync is set up. No account, no telemetry.',
      'area.list.t': 'List', 'area.list.d': 'Name, size, voltage, KV, ESC, props and status, as tiles or as a table.',
      'area.detail.t': 'More details', 'area.detail.d': 'Picture, flight controller, receiver, video system, battery, take-off weight and note, only if you want them.',
      'area.export.t': 'Export', 'area.export.d': 'PDF table for the folder, CSV for Excel, print, JSON and HTML as a backup.',
      'area.sync.t': 'GitHub sync', 'area.sync.d': 'Read without a token, write with one, merged by timestamp.',
      'area.lang.t': 'Language and colour', 'area.lang.d': 'German, English and Spanish, plus Ocean, Sand and Drakn.',
      'area.offline.t': 'Offline', 'area.offline.d': 'One HTML file, no build, no external resources.',
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
      'versions.lede': 'For each version: channel, date, size and checksum, plus the state right on the card. Above the list the whole package is one click away, in a row it is the same ZIP named after the program.',
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
      'release.bundle': 'Download with hub',
      'release.packing': 'Packing …',
      'release.packed': 'Saved',
      'release.failed': 'Not possible',
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
      'faq.offline.a': 'Yes. The files load no external scripts, fonts or images. You can download them or open them directly, the network can stay off. Only the guide’s links point outward: they need a connection, the content does not.',
      'faq.browser.q': 'Which browser?',
      'faq.browser.a': 'The guide runs in any modern browser, on mobile too. For the flight controller the tuner needs Web Serial. Chrome, Edge and Opera ship it on desktop. Other Chromium browsers may work, but that is untested: Brave ships it disabled, so you have to switch it on in the settings first, and some Vivaldi versions lacked it. Firefox and Safari do not have it at all. Log analysis works in every browser.',
      'faq.data.q': 'Where does my data go?',
      'faq.data.a': 'The data stays on your device. Settings and profile live in browser storage, and there is no backend and no telemetry.',
      'faq.safe.q': 'Is this a flight clearance?',
      'faq.safe.a': 'No. The tuner is an alpha: the write path has not been tested on real hardware or in flight, writing is at your own risk, and the liability disclaimer of the licence applies. Back up first, remove props while the quad is on USB, and stop right away on hot motors, desyncs or unclear mechanics.',
      'faq.license.q': 'Is this open source?',
      'faq.license.a': 'No. The source is readable, but modifications are not permitted, so the licence does not meet the open source definition. Unmodified redistribution with the licence and a link to the source is allowed. The reason is the write path to the flight controller: unchecked variants should not go around posing as a finished release.',
      'footer.note': 'Three HTML programs for your quads. They load no external scripts, fonts or images.',
      'footer.programs': 'Programs',
      'footer.more': 'More',
      'footer.releases': 'Releases',
      'footer.repo': 'Repository',
      'footer.license': 'License',
      'footer.asOf': 'As of',
      'footer.credit': 'A project by YngwierFPV · built with AI support',
      'footer.safety': 'No substitute for a pre-flight check, a safe flying area and your own responsibility.',
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
      'area.sources.t': 'Sources & links', 'area.sources.d': 'Original guides, documentation, tools.',
      'bundle.all': 'Download everything',
      'bundle.what': 'The package holds:',
      'bundle.item.site': 'This overview page with header and version list, plus every image and script it needs',
      'bundle.item.programs': 'The three programs, each one HTML file, with the previews and the starting set for the HangarDeck sync',
      'bundle.item.readme': 'README.md as text and the same description as a readable page, README.html',
      'bundle.item.legal': 'LICENSE and LIESMICH.txt with the first steps',
      'bundle.optional': 'Downloading is optional: the three programs sit in the frame below the header and start with a click. This page itself comes from the network. Without a connection the programs only run from the unpacked package, then with no server.',
      'update.title': 'Check for updates',
      'update.checking': 'Checking …',
      'update.current': 'Everything is up to date. Checked against the published version.',
      'update.newer': 'Newer releases available:',
      'update.offline': 'No connection. The check needs internet, the programs do not.',
      'update.keep': 'No backup needed. The quad list and the tuner state live in the browser, not in the files, and survive when you drop the new version over the old one in the same place. Only if you move the folder, take the exports first: JSON in HangarDeck, plan and manifest in the tuner.',
      'update.download': 'Go to downloads',
      'update.close': 'Close'
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
    if (state.lang === 'de') return 'de-DE';
    if (state.lang === 'es') return 'es-ES';
    return 'en-GB';
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

  function syncThemeState() {
    var current = document.documentElement.getAttribute('data-theme') || THEMES[0];
    if (THEMES.indexOf(current) === -1) current = THEMES[0];
    $$('[data-theme-set]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-theme-set') === current));
    });
    var group = $('#theme-switch');
    if (group) group.setAttribute('aria-label', t('theme.label'));
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta && THEME_BG[current]) meta.setAttribute('content', THEME_BG[current]);
  }

  function setTheme(theme) {
    if (THEMES.indexOf(theme) === -1) return;
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
    syncThemeState();
    // Ein offenes Programm liest die Farben beim Laden: neu laden, damit es mitzieht.
    refreshApp();
  }


  function moveAppPill(item) {
    var track = $('#app-switch');
    if (!track || !item) return;
    var pill = track.querySelector('.app-switch__pill');
    if (!pill) return;
    pill.style.width = item.offsetWidth + 'px';
    pill.style.transform = 'translateX(' + item.offsetLeft + 'px)';
    track.setAttribute('data-active', '');
  }

  function hideAppPill() {
    var track = $('#app-switch');
    if (track) track.removeAttribute('data-active');
  }

  var APPS = { hangar: 'hangar/', tuner: 'tuner/', guide: 'guide/' };

  // Palette als Adressbestandteil: so kommt die Wahl auch dann an, wenn ein
  // Browser den Speicher zwischen zwei Dateien nicht teilt (file://).
  function themeValue() {
    var theme = document.documentElement.getAttribute('data-theme');
    return theme === 'sand' || theme === 'drakn' ? theme : 'ocean';
  }

  function appUrl(path, lang) {
    return path + '?lang=' + lang + '&theme=' + themeValue();
  }
  var stageScroll = 0;
  var stageTimer = null;

  function currentAppId() {
    var m = /^#\/(guide|tuner|hangar)$/.exec(location.hash);
    return m ? m[1] : '';
  }

  function openApp(id, opts) {
    var path = APPS[id];
    var stage = $('#app-stage');
    var frame = $('#app-frame');
    var lang = (opts && opts.lang) || state.lang;
    if (!path) return;
    // Per file:// geoeffnet blockieren die meisten Browser den Rahmen. Dann eigenes Tab.
    if (!stage || !frame || location.protocol === 'file:') {
      window.location.href = appUrl(path, lang);
      return;
    }

    if (!document.body.classList.contains('app-open')) stageScroll = window.scrollY;
    document.body.classList.add('app-open');
    stage.hidden = false;
    window.scrollTo(0, 0);

    var loading = $('#app-stage-loading');
    var url = appUrl(path, lang);
    if (frame.getAttribute('data-src') !== url) {
      frame.setAttribute('data-src', url);
      frame.removeAttribute('data-loaded');
      if (loading) loading.hidden = false;
      frame.src = url;
    } else if (loading && frame.getAttribute('data-loaded') === 'true') {
      loading.hidden = true;
    }

    var slow = $('#app-stage-slow');
    var slowLink = $('#app-stage-slow-link');
    if (slowLink) slowLink.setAttribute('href', appUrl(path, lang));
    if (slow) slow.hidden = true;
    if (stageTimer) window.clearTimeout(stageTimer);
    stageTimer = window.setTimeout(function () {
      if (frame.getAttribute('data-loaded') !== 'true' && slow) slow.hidden = false;
    }, 12000);

    var title = $('#app-stage-title');
    if (title) title.textContent = t('apps.' + id);
    frame.setAttribute('title', t('apps.' + id));
    var openLink = $('#app-stage-open');
    if (openLink) openLink.setAttribute('href', appUrl(path, lang));

    var track = $('#app-switch');
    if (track) {
      $$('.app-switch__item', track).forEach(function (item) {
        var on = item.getAttribute('data-app') === id;
        item.classList.toggle('app-switch__item--active', on);
        if (on) moveAppPill(item);
      });
    }

    if (!opts || opts.push !== false) {
      var hash = '#/' + id;
      if (location.hash !== hash) history.pushState({ app: id }, '', hash);
    }
  }

  // Rahmen neu laden, ohne die Adresse anzufassen. Wird gebraucht, wenn sich
  // Sprache oder Farben ändern und ein Programm bereits offen ist.
  function refreshApp() {
    var stage = $('#app-stage');
    var frame = $('#app-frame');
    if (!stage || !frame || stage.hidden) return;
    frame.removeAttribute('data-src');
    frame.removeAttribute('data-loaded');
    var id = currentAppId();
    if (id) openApp(id, { push: false });
  }

  function closeApp(opts) {
    var stage = $('#app-stage');
    if (!stage || stage.hidden) return;
    stage.hidden = true;
    document.body.classList.remove('app-open');

    var track = $('#app-switch');
    if (track) {
      $$('.app-switch__item', track).forEach(function (item) {
        item.classList.remove('app-switch__item--active');
      });
      hideAppPill();
    }

    if (!opts || opts.restore !== false) window.scrollTo(0, stageScroll);
    if (!opts || opts.push !== false) {
      history.pushState({}, '', location.pathname + location.search);
    }
  }

  function routeApp() {
    var id = currentAppId();
    if (id) openApp(id, { push: false });
    else closeApp({ push: false });
  }

  function initAppStage() {
    var stage = $('#app-stage');
    var frame = $('#app-frame');
    if (!stage || !frame) return;

    frame.addEventListener('load', function () {
      if (frame.getAttribute('src') === 'about:blank') return;
      frame.setAttribute('data-loaded', 'true');
      var loading = $('#app-stage-loading');
      if (loading) loading.hidden = true;
      if (stageTimer) { window.clearTimeout(stageTimer); stageTimer = null; }
    });

    var close = $('#app-stage-close');
    if (close) close.addEventListener('click', function () { closeApp(); });

    var brand = document.querySelector('.site-header .brand');
    if (brand) {
      brand.addEventListener('click', function (event) {
        if (stage.hidden) return;
        event.preventDefault();
        closeApp();
      });
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !stage.hidden) closeApp();
    });

    window.addEventListener('popstate', routeApp);

    // Verweise auf die Programme laufen im Rahmen, nicht als Seitenwechsel.
    document.addEventListener('click', function (event) {
      if (event.defaultPrevented) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
      var link = event.target && event.target.closest ? event.target.closest('a') : null;
      if (!link || link.hasAttribute('download')) return;
      if (link.target && link.target !== '_self') return;
      var href = link.getAttribute('href') || '';
      var m = /^(?:\.\/)?(guide|tuner)\/?(?:\?lang=(de|en|es))?$/.exec(href);
      if (!m) return;
      event.preventDefault();
      openApp(m[1], { lang: m[2] });
    });

    routeApp();
  }

  function initAppSwitch() {
    var track = $('#app-switch');
    if (!track) return;
    var items = $$('.app-switch__item', track);

    items.forEach(function (item) {
      item.addEventListener('pointerenter', function () { moveAppPill(item); });
      item.addEventListener('focus', function () { moveAppPill(item); });
    });

    track.addEventListener('pointerleave', hideAppPill);

    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    items.forEach(function (item) {
      if (item.tagName !== 'A') return;
      item.addEventListener('click', function (event) {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
        event.preventDefault();
        moveAppPill(item);
        var id = item.getAttribute('data-app');
        if (reduced) { openApp(id); return; }
        window.setTimeout(function () { openApp(id); }, 120);
      });
    });

    window.addEventListener('resize', hideAppPill);
  }

  function initTheme() {
    syncThemeState();

    // Ein Programm im Rahmen schreibt Farbe und Sprache selbst. Der Hub zieht nach,
    // ohne dass die Seite neu geladen werden muss.
    window.addEventListener('storage', function (event) {
      if (!event || !event.key || !event.newValue) return;
      if (event.key === THEME_KEY) {
        var next = THEME_ALIAS[event.newValue] || event.newValue;
        if (THEMES.indexOf(next) === -1) return;
        if (document.documentElement.getAttribute('data-theme') === next) return;
        document.documentElement.setAttribute('data-theme', next);
        syncThemeState();
        refreshApp();
      } else if (event.key === LANG_KEY) {
        if (LANGS.indexOf(event.newValue) === -1 || event.newValue === state.lang) return;
        setLang(event.newValue, false);
      }
    });

    $$('[data-theme-set]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setTheme(btn.getAttribute('data-theme-set'));
      });
    });
  }

  function applyStatic() {
    $$('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    $$('[data-i18n-placeholder]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });
    $$('[data-i18n-title]').forEach(function (el) {
      el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
    });
    $$('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });
    $$('[data-lang-btn]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang-btn') === state.lang));
    });
    if (typeof syncThemeState === 'function') syncThemeState();
    syncAppLinks();
    document.documentElement.setAttribute('lang', state.lang);
    document.documentElement.setAttribute('data-lang', state.lang);
  }

  // Jeder Verweis auf ein Programm bekommt die laufende Sprache mit.
  // Feste Sprachverweise, etwa in der Tabelle, bleiben unangetastet.
  function syncAppLinks() {
    $$('a[href]').forEach(function (link) {
      var base = link.getAttribute('data-app-base');
      if (!base) {
        var href = link.getAttribute('href') || '';
        if (href.indexOf('?') !== -1) return;
        if (!/(^|\/)(guide|tuner|hangar)\/?$/.test(href)) return;
        base = href;
        link.setAttribute('data-app-base', base);
      }
      link.setAttribute('href', appUrl(base, state.lang));
    });
  }

  function setLang(lang, persist) {
    var previous = state.lang;
    state.lang = LANGS.indexOf(lang) === -1 ? FALLBACK : lang;
    if (persist !== false) {
      try { localStorage.setItem(LANG_KEY, state.lang); } catch (e) {}
    }
    applyStatic();
    if (state.data) {
      renderProjects();
      renderOverview();
      render();
    }
    // Ein offenes Programm liest die Sprache beim Laden: neu laden, damit es mitzieht.
    if (previous !== state.lang) refreshApp();
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
          '<a class="btn btn--sm btn--quiet" href="#' + esc(program.id) + '">' + esc(t('programs.details')) + '</a>' +
        '</div>' +
      '</article>';
  }

  function renderProjects() {
    var grid = $('#project-grid');
    if (!grid || !state.data) return;
    grid.innerHTML = state.data.programs.map(projectTemplate).join('');
  }

  // Startansicht: eine Zeile je Programm, gebaut aus versions.json.
  function renderOverview() {
    var holder = $('#overview-list');
    if (!holder || !state.data) return;

    var releases = state.data.releases || [];

    holder.innerHTML = state.data.programs.map(function (program, index) {
      var release = null;
      releases.forEach(function (r) { if (r.program === program.id) release = r; });
      var version = release ? release.version : '';
      var size = release && release.size_bytes ? formatBytes(release.size_bytes) : '';

      return '' +
        '<a class="tile" href="' + esc(program.path) + '" data-app-open="' + esc(program.id) + '">' +
          '<span class="tile-index">' + ('0' + (index + 1)).slice(-2) + '</span>' +
          '<span class="tile-text">' +
            '<span class="tile-name">' + esc(program.name) + '</span>' +
            '<span class="tile-kind">' + esc(pick(program.kind)) + '</span>' +
          '</span>' +
          '<span class="tile-meta"><span class="tile-version">' + esc(version) + '</span>' +
            (size ? ' <span class="tile-size">' + esc(size) + '</span>' : '') +
          '</span>' +
          '<svg class="tile-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
            'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>' +
        '</a>';
    }).join('');

    // Stand aus den Versionsdaten, in der Form 02.11.2026 wie im Tuner.
    var stamp = formatDay(state.data.updated);
    $$('[data-hero-date]').forEach(function (el) { el.textContent = stamp; });

    syncAppLinks();
  }

  function formatDay(iso) {
    var parts = String(iso || '').split('-');
    if (parts.length !== 3) return iso || '—';
    return parts[2] + '.' + parts[1] + '.' + parts[0];
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

  // ---- Sammel-Download: Hub-Seite plus Programm als ZIP ----
  // Die Dateien werden im Browser geholt und ohne Kompression in ein ZIP gelegt.
  // So muss im Repository kein zweites Mal dieselben Bytes liegen.

  var BUNDLE_BASE = [
    { path: 'index.html', name: 'index.html' },
    { path: 'assets/css/style.css', name: 'assets/css/style.css' },
    { path: 'assets/js/hub.js', name: 'assets/js/hub.js' },
    { path: 'assets/js/markdown.js', name: 'assets/js/markdown.js' },
    { path: 'assets/data/versions.json', name: 'assets/data/versions.json' },
    { path: 'assets/data/versions.js', name: 'assets/data/versions.js' },
    { path: 'assets/images/favicon.png', name: 'assets/images/favicon.png' },
    { path: 'assets/images/mark.png', name: 'assets/images/mark.png' },
    { path: 'assets/images/logo-tuner.png', name: 'assets/images/logo-tuner.png' },
    { path: 'assets/images/logo-tuner-hell.png', name: 'assets/images/logo-tuner-hell.png' },
    { path: 'assets/images/preview-tuner.svg', name: 'assets/images/preview-tuner.svg' },
    { path: 'assets/images/preview-guide.svg', name: 'assets/images/preview-guide.svg' },
    { path: 'assets/images/preview-hangar.svg', name: 'assets/images/preview-hangar.svg' }
  ];

  var CRC_TABLE = (function () {
    var table = new Uint32Array(256);
    for (var i = 0; i < 256; i++) {
      var c = i;
      for (var k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      table[i] = c >>> 0;
    }
    return table;
  })();

  function crc32(bytes) {
    var c = 0xffffffff;
    for (var i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
  }

  function dosStamp(date) {
    var time = (date.getHours() << 11) | (date.getMinutes() << 5) | (date.getSeconds() >> 1);
    var day = ((date.getFullYear() - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
    return { time: time & 0xffff, date: day & 0xffff };
  }

  function zipStore(entries) {
    var stamp = dosStamp(new Date());
    var chunks = [];
    var central = [];
    var offset = 0;

    entries.forEach(function (entry) {
      var nameBytes = new TextEncoder().encode(entry.name);
      var crc = crc32(entry.data);
      var size = entry.data.length;

      var local = new Uint8Array(30 + nameBytes.length);
      var lv = new DataView(local.buffer);
      lv.setUint32(0, 0x04034b50, true);
      lv.setUint16(4, 20, true);
      lv.setUint16(6, 0x0800, true);
      lv.setUint16(8, 0, true);
      lv.setUint16(10, stamp.time, true);
      lv.setUint16(12, stamp.date, true);
      lv.setUint32(14, crc, true);
      lv.setUint32(18, size, true);
      lv.setUint32(22, size, true);
      lv.setUint16(26, nameBytes.length, true);
      lv.setUint16(28, 0, true);
      local.set(nameBytes, 30);

      chunks.push(local, entry.data);

      var head = new Uint8Array(46 + nameBytes.length);
      var cv = new DataView(head.buffer);
      cv.setUint32(0, 0x02014b50, true);
      cv.setUint16(4, 20, true);
      cv.setUint16(6, 20, true);
      cv.setUint16(8, 0x0800, true);
      cv.setUint16(10, 0, true);
      cv.setUint16(12, stamp.time, true);
      cv.setUint16(14, stamp.date, true);
      cv.setUint32(16, crc, true);
      cv.setUint32(20, size, true);
      cv.setUint32(24, size, true);
      cv.setUint16(28, nameBytes.length, true);
      cv.setUint16(30, 0, true);
      cv.setUint16(32, 0, true);
      cv.setUint16(34, 0, true);
      cv.setUint16(36, 0, true);
      cv.setUint32(38, 0, true);
      cv.setUint32(42, offset, true);
      head.set(nameBytes, 46);
      central.push(head);

      offset += local.length + size;
    });

    var centralSize = central.reduce(function (sum, part) { return sum + part.length; }, 0);
    var end = new Uint8Array(22);
    var ev = new DataView(end.buffer);
    ev.setUint32(0, 0x06054b50, true);
    ev.setUint16(8, entries.length, true);
    ev.setUint16(10, entries.length, true);
    ev.setUint32(12, centralSize, true);
    ev.setUint32(16, offset, true);

    return new Blob(chunks.concat(central, [end]), { type: 'application/zip' });
  }

  // README.md als lesbare Seite: gleiche Angaben wie auf GitHub, nur ohne Netz.
  function readmePage(markdown) {
    var body = window.FLOWSTATE_MD ? window.FLOWSTATE_MD.toHtml(markdown) : '<pre>' +
      String(markdown).replace(/[&<>]/g, function (ch) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[ch];
      }) + '</pre>';

    return [
      '<!DOCTYPE html>',
      '<html lang="de">',
      '<head>',
      '<meta charset="utf-8">',
      '<meta name="viewport" content="width=device-width, initial-scale=1">',
      '<title>FlowState FPV · README</title>',
      '<style>',
      ':root { color-scheme: light; }',
      'body { margin: 0; padding: 32px 20px 64px; background: #f4f6f5; color: #22302e;',
      '  font: 16px/1.65 ui-sans-serif, -apple-system, "Segoe UI", Roboto, Arial, sans-serif; }',
      'main { max-width: 46rem; margin: 0 auto; }',
      'h1, h2, h3, h4 { line-height: 1.25; margin: 1.8em 0 0.5em; }',
      'h1 { font-size: 1.9rem; margin-top: 0; }',
      'h2 { font-size: 1.35rem; padding-bottom: 0.3em; border-bottom: 1px solid #d6dcd9; }',
      'h3 { font-size: 1.1rem; }',
      'p, ul, ol, pre, table { margin: 0 0 1em; }',
      'a { color: #1e746b; }',
      'code { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 0.9em;',
      '  background: #eef1f2; border: 1px solid #d6dcd9; border-radius: 3px; padding: 0.1em 0.35em; }',
      'pre { background: #eef1f2; border: 1px solid #d6dcd9; border-radius: 2px; padding: 14px 16px;',
      '  overflow-x: auto; }',
      'pre code { background: none; border: 0; padding: 0; }',
      'table { border-collapse: collapse; width: 100%; font-size: 0.94em; }',
      'th, td { border: 1px solid #d6dcd9; padding: 7px 10px; text-align: left; vertical-align: top; }',
      'th { background: #e9efef; }',
      'hr { border: 0; border-top: 1px solid #d6dcd9; margin: 2em 0; }',
      'footer { max-width: 46rem; margin: 3rem auto 0; color: #5b6a66; font-size: 0.85rem; }',
      '@media (prefers-color-scheme: dark) {',
      '  body { background: #06232a; color: #e7f6f2; }',
      '  h2, hr, th, td, pre, code { border-color: #1c5f63; }',
      '  code, pre, th { background: #0a2e36; }',
      '  a { color: #2ca387; }',
      '  footer { color: #94c4b9; }',
      '}',
      '</style>',
      '</head>',
      '<body>',
      '<main>',
      body,
      '</main>',
      '<footer>FlowState FPV · README.md als Seite, erzeugt beim Packen des ZIP.</footer>',
      '</body>',
      '</html>',
      ''
    ].join('\n');
  }

  // README.md und LICENSE kommen mit ins Paket, wenn sie sich holen lassen.
  // Bilder, die der Guide aus seinem eigenen Ordner lädt.
  var GUIDE_ASSETS = [
    { path: 'guide/assets/flowstate-guide-wordmark.png', name: 'guide/assets/flowstate-guide-wordmark.png' },
    { path: 'guide/assets/yngwierfpv-footer.png', name: 'guide/assets/yngwierfpv-footer.png' }
  ];
  var BUNDLE_EXTRA = [
    { path: 'README.md', name: 'README.md' },
    { path: 'LICENSE', name: 'LICENSE' }
  ];

  function bundleEntries(programId) {
    var files = BUNDLE_BASE.slice();
    Object.keys(APPS).forEach(function (id) {
      files.push({ path: APPS[id] + 'index.html', name: id + '/index.html' });
    });
    files.push({ path: 'hangar/data/hangardeck.json', name: 'hangar/data/hangardeck.json' });
    GUIDE_ASSETS.forEach(function (file) { files.push(file); });

    var releases = (state.data && state.data.releases) || [];

    function versionOf(id) {
      var found = '';
      releases.forEach(function (release) {
        if (release.program === id) found = release.version;
      });
      return found;
    }

    var programLines = ['hangar', 'tuner', 'guide'].map(function (id) {
      var program = projectOf(id);
      var label = program ? program.name : id;
      var version = versionOf(id);
      var path = '  ' + id + '/index.html';
      while (path.length < 24) path += ' ';
      return path + label + (version ? ' ' + version : '');
    });

    var notice = {
      name: 'LIESMICH.txt',
      text: [
        'FlowState FPV, Übersichtsseite mit den Programmen',
        '',
        '1. Dieses Paket entpacken.',
        '2. index.html im Browser öffnen.',
        '3. Im Kopf der Seite zwischen Hangar, Autotuner und Guide wählen.',
        '',
        'Alles läuft lokal, ohne Server und ohne Internet. Wird die Seite über',
        'file:// geöffnet, öffnen sich die Programme in einem eigenen Tab;',
        'über einen lokalen Server oder GitHub Pages auch direkt im Rahmen.',
        '',
        'Programme in diesem Paket:'
      ].concat(programLines).concat([
        '  hangar/data/hangardeck.json   Startbestand für den Abgleich',
        '',
        'Dazu:',
        '  README.md      Beschreibung des Projekts, wie auf GitHub',
        '  README.html    dieselbe Beschreibung als lesbare Seite',
        '  LICENSE        Lizenz auf Deutsch und Englisch',
        '',
        'Hinweis: Der FPV Guide ist rund 7,6 MB groß, der erste Aufruf dauert kurz.',
        ''
      ]).join('\n')
    };

    function grab(file) {
      return fetch(file.path, { cache: 'no-cache' }).then(function (response) {
        if (!response.ok) throw new Error(file.path + ': HTTP ' + response.status);
        return response.arrayBuffer();
      }).then(function (buffer) {
        return { name: file.name, data: new Uint8Array(buffer) };
      });
    }

    var tasks = files.map(grab);
    var extras = BUNDLE_EXTRA.map(function (file) {
      return grab(file).catch(function () { return null; });
    });

    return Promise.all(tasks.concat(extras)).then(function (all) {
      var entries = all.slice(0, files.length);
      var extra = all.slice(files.length);
      var readmeBytes = extra[0] ? extra[0].data : null;

      entries.push({ name: notice.name, data: new TextEncoder().encode(notice.text) });
      extra.forEach(function (entry) { if (entry) entries.push(entry); });

      if (readmeBytes) {
        var markdown = new TextDecoder().decode(readmeBytes);
        entries.push({ name: 'README.html', data: new TextEncoder().encode(readmePage(markdown)) });
      }
      return entries;
    });
  }

  function saveBlob(blob, name) {
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
  }

  function downloadBundle(programId, button) {
    var complete = programId === 'all';
    var program = complete ? null : projectOf(programId);
    var release = null;
    var all = state.data && state.data.releases ? state.data.releases : [];
    all.forEach(function (r) { if (r.program === programId) release = r; });

    var zipName = complete
      ? 'FlowState-FPV-mit-Hub.zip'
      : (program ? program.name.replace(/\s+/g, '-') : programId) +
        (release ? '-' + release.version : '') + '-mit-Hub.zip';

    var label = button.querySelector('[data-i18n]') || button;
    var original = button.getAttribute('data-label') || label.textContent;
    button.setAttribute('data-label', original);
    button.classList.add('is-busy');
    button.setAttribute('aria-busy', 'true');
    label.textContent = t('release.packing');

    bundleEntries(programId)
      .then(function (entries) {
        saveBlob(zipStore(entries), zipName);
        label.textContent = t('release.packed');
        button.removeAttribute('aria-busy');
        window.setTimeout(function () { label.textContent = original; button.classList.remove('is-busy'); }, 2600);
      })
      .catch(function (error) {
        label.textContent = t('release.failed');
        button.removeAttribute('aria-busy');
        button.setAttribute('title', String(error && error.message ? error.message : error));
        window.setTimeout(function () { label.textContent = original; button.classList.remove('is-busy'); }, 3200);
      });
  }

  // ---- Stand prüfen ----
  // Die Programme brauchen kein Netz. Wer wissen will, ob es etwas Neueres gibt,
  // stößt die Prüfung von Hand an. Sie liest nur die Versionsdaten, nichts weiter.

  var UPDATE_URLS = [
    'https://yngwierfpv.github.io/flowstate-fpv-tuner/assets/data/versions.json',
    'https://raw.githubusercontent.com/YngwieRfpv/flowstate-fpv-tuner/main/assets/data/versions.json'
  ];
  var RELEASES_URL = 'https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases';
  var updateBusy = false;
  var updateSeq = 0;

  function localVersions() {
    var data = (state && state.data) || window.FLOWSTATE_DATA || { releases: [], programs: [] };
    var map = {};
    (data.releases || []).forEach(function (release) { map[release.program] = release.version || ''; });
    return map;
  }

  function showUpdate(body) {
    var dialog = $('#update-dialog');
    var target = $('#update-body');
    if (target) target.innerHTML = body;
    if (!dialog) return;
    if (dialog.showModal) {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute('open', 'open');
    }
  }

  function fetchVersions(index) {
    if (typeof fetch !== 'function') return Promise.reject(new Error('kein fetch'));
    var url = UPDATE_URLS[index];
    var controller = typeof AbortController === 'function' ? new AbortController() : null;
    var timer = controller ? window.setTimeout(function () { controller.abort(); }, 7000) : null;

    return fetch(url + (url.indexOf('?') === -1 ? '?' : '&') + 't=' + Date.now(), {
      cache: 'no-store',
      signal: controller ? controller.signal : undefined
    })
      .then(function (response) {
        if (timer) window.clearTimeout(timer);
        if (!response.ok) throw new Error('HTTP ' + response.status);
        return response.json();
      })
      .catch(function (error) {
        if (timer) window.clearTimeout(timer);
        if (index + 1 < UPDATE_URLS.length) return fetchVersions(index + 1);
        throw error;
      });
  }

  function checkUpdate() {
    if (updateBusy) return;
    updateBusy = true;
    var seq = ++updateSeq;
    showUpdate('<p class="update-line">' + esc(t('update.checking')) + '</p>');

    fetchVersions(0)
      .then(function (remote) {
        if (seq !== updateSeq) return;
        updateBusy = false;
        var here = localVersions();
        var rows = [];

        (remote.programs || []).forEach(function (program) {
          var there = '';
          (remote.releases || []).forEach(function (release) {
            if (release.program === program.id) there = release.version || '';
          });
          var mine = here[program.id];
          if (!there || !mine || there === mine) return;
          rows.push('<li><span class="update-name">' + esc(program.name) + '</span>' +
            '<span class="update-ver">' + esc(mine) + '</span>' +
            '<span class="update-arrow" aria-hidden="true">→</span>' +
            '<strong>' + esc(there) + '</strong></li>');
        });

        if (!rows.length) {
          showUpdate('<p class="update-line">' + esc(t('update.current')) + '</p>');
          return;
        }

        showUpdate('<p class="update-line">' + esc(t('update.newer')) + '</p>' +
          '<ul class="update-list">' + rows.join('') + '</ul>' +
          '<p class="update-actions"><a class="btn btn--sm btn--primary" href="' + esc(RELEASES_URL) +
          '" target="_blank" rel="noopener">' + esc(t('update.download')) + '</a></p>');
      })
      .catch(function () {
        if (seq !== updateSeq) return;
        updateBusy = false;
        showUpdate('<p class="update-line">' + esc(t('update.offline')) + '</p>');
      });
  }

  function closeUpdate() {
    updateSeq++;
    updateBusy = false;
    var dialog = $('#update-dialog');
    if (!dialog) return;
    if (dialog.open && typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
  }

  function initUpdate() {
    var button = $('#update-check');
    if (button) button.addEventListener('click', checkUpdate);

    // Schliessen laeuft ueber das Dokument: Kreuz, Escape und Klick daneben.
    document.addEventListener('click', function (event) {
      var target = event.target;
      if (!target || !target.closest) return;
      if (target.closest('#update-close')) {
        event.preventDefault();
        closeUpdate();
        return;
      }
      if (target.closest('#update-dialog') === target) closeUpdate();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;
      var dialog = $('#update-dialog');
      if (dialog && (dialog.open || dialog.hasAttribute('open'))) closeUpdate();
    });

    var dialog = $('#update-dialog');
    if (dialog) dialog.addEventListener('cancel', function () { closeUpdate(); });
  }

  function initDownloads() {
    document.addEventListener('click', function (event) {
      var button = event.target && event.target.closest ? event.target.closest('[data-bundle]') : null;
      if (!button) return;
      event.preventDefault();
      downloadBundle(button.getAttribute('data-bundle'), button);
    });

    // Die Kacheln der Startansicht öffnen das Programm im Rahmen,
    // mit Strg- oder Mittelklick weiterhin in einem eigenen Tab.
    document.addEventListener('click', function (event) {
      var tile = event.target && event.target.closest ? event.target.closest('[data-app-open]') : null;
      if (!tile) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      openApp(tile.getAttribute('data-app-open'));
    });
  }

  function releaseTemplate(release) {
    var program = projectOf(release.program);
    var actions = [];

    if (release.available) {
      actions.push('<a class="btn btn--sm btn--primary" href="' + esc(program.path) + '">' +
        esc(t('release.open')) +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>' +
        '</a>');
      actions.push('<button class="btn btn--sm btn--ghost bundle-btn" type="button" data-bundle="' + esc(release.program) + '">' +
        esc(t('release.bundle')) + '</button>');
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

  function initControls() {
    $$('[data-lang-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang-btn'));
        var stage = $('#app-stage');
        if (stage && !stage.hidden) openApp(currentAppId() || 'guide', { push: false });
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
    initAppSwitch();
    initControls();

    var start = document.documentElement.getAttribute('data-lang');
    state.lang = LANGS.indexOf(start) === -1 ? 'de' : start;
    applyStatic();
    syncThemeState();
    initAppStage();

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
      // Ohne Server kein fetch: die mitgelieferte Kopie der Versionsdaten nehmen.
      if (window.FLOWSTATE_DATA) applyData(window.FLOWSTATE_DATA);
      return;
    }

    function applyData(data) {
      state.data = data;
      renderProjects();
      renderOverview();
      render();
    }

    fetch(DATA_URL, { cache: 'no-cache' })
      .then(function (response) {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        return response.json();
      })
      .then(applyData)
      .catch(function () {
        // Ohne Server (file://) oder wenn die Datei fehlt: mitgelieferte Kopie nehmen.
        if (window.FLOWSTATE_DATA) { applyData(window.FLOWSTATE_DATA); return; }
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

  initDownloads();
  initUpdate();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();

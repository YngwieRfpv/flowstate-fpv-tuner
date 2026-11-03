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
      'langs.title': 'Deutsch und Englisch vollständig, Spanisch ungeprüft',
      'langs.lede': 'Deutsch und Englisch sind bei allen drei Programmen und in dieser Übersicht vollständig. Spanisch ist überall auswählbar, aber in keinem Bereich geprüft; offene Stellen erscheinen auf Englisch.',
      'langs.h.language': 'Sprache',
      'langs.h.status': 'Stand',
      'langs.status.full': 'vollständig',
      'langs.status.open': 'wählbar, nicht geprüft',
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
      'hangar.eyebrow': 'HangarDeck',
      'hangar.title': 'Die Copter-Liste',
      'hangar.lede': 'Ein Kopf, eine Liste, ein Dialog. Die Daten bleiben im Browser, eine Sicherung als JSON oder HTML liegt daneben. Die Liste lässt sich als Code oder Link weitergeben.',
      'hangar.areas': 'Was drin ist',
      'hangar.check': 'Anlegen',
      'hangar.check.lede': 'Name und Größe reichen zum Speichern. Alles andere bleibt leer, bis du es brauchst.',
      'hangar.data': 'Wo die Daten liegen',
      'hangar.data.lede': 'Im localStorage dieses Browsers. Kein Konto, keine Telemetrie, nichts wird hochgeladen.',
      'area.list.t': 'Liste', 'area.list.d': 'Name, Größe, Spannung, KV, ESC, Props und Status, wahlweise als Kacheln oder als Tabelle.',
      'area.detail.t': 'Mehr Details', 'area.detail.d': 'Bild, Flight Controller, Empfänger, Videosystem, Akku, Abfluggewicht und Notiz, nur auf Wunsch.',
      'area.export.t': 'Export', 'area.export.d': 'PDF-Tabelle für die Ablage, CSV für Excel, Druck, JSON und HTML als Sicherung.',
      'area.backup.t': 'Sicherung', 'area.backup.d': 'JSON- oder HTML-Backup schreiben und wieder einlesen, im Browser und ohne Konto.',
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
      'bundle.what': 'Im Paket liegt alles im Ordner FlowState-FPV:',
      'bundle.optional': 'Herunterladen ist freiwillig: die drei Programme liegen hier im Rahmen unter der Kopfzeile und starten per Klick, jede Datei im Paket lässt sich auch allein öffnen. Diese Seite kommt aus dem Netz, ohne Verbindung laufen die Programme nur aus dem entpackten Paket.',
      'bundle.storage': 'Was du hier anlegst, liegt im Speicher dieser Seite, das Paket führt seinen eigenen. Über file:// kann der Browser den Speicher sperren, dann gilt alles nur für die Sitzung.',
      'update.title': 'Stand prüfen',
      'update.checking': 'Wird geprüft …',
      'update.current': 'Alles auf dem neuesten Stand. Geprüft gegen die veröffentlichte Fassung.',
      'update.newer': 'Neuere Fassungen verfügbar:',
      'update.offline': 'Keine Verbindung. Die Prüfung braucht Internet, die Programme nicht.',
      'update.keep': 'Eine Sicherung ist nicht nötig. Copter-Liste und Tuner-Stand liegen im Browser, nicht in den Dateien, und bleiben erhalten, wenn du die neue Fassung am selben Ort über die alte legst. Nur wenn du den Ordner verschiebst, nimm vorher die Exporte: in HangarDeck JSON, im Tuner Plan und Manifest.',
      'update.download': 'Zum Download',
      'update.close': 'Schließen',
      'report.title': 'Fehler melden',
      'report.program': 'Programm',
      'report.what': 'Was ist passiert?',
      'report.whatPh': 'Was hast du gemacht, was ist passiert, was hast du erwartet?',
      'report.contact': 'Kontakt (freiwillig)',
      'report.contactPh': 'Mail oder Name, wenn eine Rückfrage erlaubt ist',
      'report.sendTelegram': 'Mit Telegram senden',
      'report.sendMail': 'E-Mail schreiben',
      'report.copy': 'Bericht kopieren',
      'report.sendDiscord': 'Discord',
      'report.telegramTip': 'Im Telegram-Fenster den Bot @{bot} auswählen',
      'report.telegramCopied': 'Bericht ist kopiert. Im Telegram-Fenster den Bot {bot} auswählen und einfügen (Strg+V).',
      'report.close': 'Schließen',
      'report.hint': 'Angehangen werden Programm-Version, Datum und Browser-Kennung, sonst nichts.',
      'report.lbl.program': 'Programm',
      'report.lbl.contact': 'Kontakt',
      'report.lbl.date': 'Datum',
      'report.lbl.lang': 'Sprache',
      'report.lbl.page': 'Seite',
      'report.lbl.browser': 'Browser',
      'report.status.needText': 'Bitte kurz beschreiben, was passiert ist.',
      'report.status.telegramBlocked': 'Das Fenster wurde blockiert. Pop-ups erlauben oder Bericht kopieren.',
      'report.status.mail': 'E-Mail-Fenster geöffnet. Senden nicht vergessen.',
      'report.status.copied': 'Bericht kopiert.',
      'report.status.copyFail': 'Kopieren ging nicht. Den Text im Feld markieren und von Hand kopieren.',
      'report.status.discord': 'Bericht an Discord übergeben.',
      'report.status.fail': 'Senden ging nicht. Bericht kopieren und den Text selbst schicken.',
      'report.status.thanks': 'Danke, der Bericht ist unterwegs.'
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
      'langs.title': 'Alemán e inglés completos, español sin revisar',
      'langs.lede': 'El alemán y el inglés están completos en los tres programas y en esta vista general. El español se puede elegir en todas partes, pero no está revisado en ningún área; los pasajes sin revisar aparecen en inglés.',
      'langs.h.language': 'Idioma',
      'langs.h.status': 'Estado',
      'langs.status.full': 'completo',
      'langs.status.open': 'elegible, sin revisar',
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
      'hangar.eyebrow': 'HangarDeck',
      'hangar.title': 'La lista de copter',
      'hangar.lede': 'Una cabecera, una lista, un diálogo. Los datos se quedan en el navegador y al lado hay una copia en JSON o HTML. La lista se puede pasar como código o enlace.',
      'hangar.areas': 'Qué incluye',
      'hangar.check': 'Crear',
      'hangar.check.lede': 'Con el nombre y el tamaño ya se puede guardar. Lo demás queda vacío hasta que lo necesites.',
      'hangar.data': 'Dónde están los datos',
      'hangar.data.lede': 'En el localStorage de este navegador. Sin cuenta, sin telemetría y no se sube nada.',
      'area.list.t': 'Lista',
      'area.list.d': 'Nombre, tamaño, tensión, KV, ESC, hélices y estado, como tarjetas o como tabla.',
      'area.detail.t': 'Más detalles',
      'area.detail.d': 'Imagen, controladora, receptor, sistema de vídeo, batería, peso al despegue y nota, solo si quieres.',
      'area.export.t': 'Exportar',
      'area.export.d': 'Tabla PDF para el archivo, CSV para Excel, impresión, JSON y HTML como copia.',
      'area.backup.t': 'Copia de seguridad',
      'area.backup.d': 'Crear una copia JSON o HTML y volver a cargarla, en el navegador y sin cuenta.',
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
      'bundle.what': 'Todo el paquete va en la carpeta FlowState-FPV:',
      'bundle.optional': 'Descargar es opcional: los tres programas están aquí en el marco bajo la cabecera y arrancan con un clic, y cada archivo del paquete también se abre por separado. Esta página llega desde la red, sin conexión los programas solo funcionan desde el paquete descomprimido.',
      'bundle.storage': 'Lo que creas aquí queda en el almacenamiento de esta página, el paquete lleva el suyo. Con file:// el navegador puede bloquear el almacenamiento y entonces todo vale solo para la sesión.',
      'update.title': 'Comprobar el estado',
      'update.checking': 'Comprobando …',
      'update.current': 'Todo está al día. Comprobado con la versión publicada.',
      'update.newer': 'Hay versiones más recientes:',
      'update.offline': 'Sin conexión. La comprobación necesita internet, los programas no.',
      'update.keep': 'No hace falta una copia de seguridad. La lista de copter y el estado del tuner están en el navegador, no en los archivos, y se mantienen si sustituyes los archivos en el mismo sitio. Solo si mueves la carpeta, exporta antes: en HangarDeck JSON, en el tuner el plan y el manifiesto.',
      'update.download': 'Ir a las descargas',
      'update.close': 'Cerrar',
      'report.title': 'Informar de un fallo',
      'report.program': 'Programa',
      'report.what': '¿Qué ha pasado?',
      'report.whatPh': '¿Qué hiciste, qué pasó y qué esperabas?',
      'report.contact': 'Contacto (opcional)',
      'report.contactPh': 'Correo o nombre, si se puede preguntar',
      'report.sendTelegram': 'Enviar por Telegram',
      'report.sendMail': 'Escribir un correo',
      'report.copy': 'Copiar el informe',
      'report.sendDiscord': 'Discord',
      'report.telegramTip': 'En la ventana de Telegram elige el bot @{bot}',
      'report.telegramCopied': 'El informe está copiado. Elige el bot {bot} en la ventana de Telegram y pégalo (Ctrl+V).',
      'report.close': 'Cerrar',
      'report.hint': 'Se adjuntan la versión del programa, la fecha y el identificador del navegador, nada más.',
      'report.lbl.program': 'Programa',
      'report.lbl.contact': 'Contacto',
      'report.lbl.date': 'Fecha',
      'report.lbl.lang': 'Idioma',
      'report.lbl.page': 'Página',
      'report.lbl.browser': 'Navegador',
      'report.status.needText': 'Describe brevemente lo que ha pasado.',
      'report.status.telegramBlocked': 'La ventana fue bloqueada. Permite las ventanas emergentes o copia el informe.',
      'report.status.mail': 'Ventana de correo abierta. No olvides enviarlo.',
      'report.status.copied': 'Informe copiado.',
      'report.status.copyFail': 'No se pudo copiar. Selecciona el texto en el campo y cópialo a mano.',
      'report.status.discord': 'Informe entregado a Discord.',
      'report.status.fail': 'No se pudo enviar. Copia el informe y manda el texto tú mismo.',
      'report.status.thanks': 'Gracias, el informe está en camino.'
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
      'langs.title': 'German and English complete, Spanish unverified',
      'langs.lede': 'German and English are complete in all three programs and on this page. Spanish is selectable everywhere but verified in no area; unrevised passages appear in English.',
      'langs.h.language': 'Language',
      'langs.h.status': 'State',
      'langs.status.full': 'complete',
      'langs.status.open': 'selectable, not verified',
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
      'hangar.eyebrow': 'HangarDeck',
      'hangar.title': 'The quad list',
      'hangar.lede': 'One header, one list, one dialog. The data stays in the browser, a JSON or HTML backup sits next to it. The list can be passed on as a code or a link.',
      'hangar.areas': 'What is inside',
      'hangar.check': 'Adding a quad',
      'hangar.check.lede': 'Name and size are enough to save. Everything else stays empty until you need it.',
      'hangar.data': 'Where the data lives',
      'hangar.data.lede': 'In the localStorage of this browser. No account, no telemetry, nothing is uploaded.',
      'area.list.t': 'List', 'area.list.d': 'Name, size, voltage, KV, ESC, props and status, as tiles or as a table.',
      'area.detail.t': 'More details', 'area.detail.d': 'Picture, flight controller, receiver, video system, battery, take-off weight and note, only if you want them.',
      'area.export.t': 'Export', 'area.export.d': 'PDF table for the folder, CSV for Excel, print, JSON and HTML as a backup.',
      'area.backup.t': 'Backup', 'area.backup.d': 'Write a JSON or HTML backup and read it back, in the browser and without an account.',
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
      'bundle.what': 'Everything in the package sits in the folder FlowState-FPV:',
      'bundle.optional': 'Downloading is optional: the three programs sit in the frame below the header and start with a click, and every file in the package also opens on its own. This page comes from the network, without a connection the programs only run from the unpacked package.',
      'bundle.storage': 'What you create here lives in the storage of this page, the package keeps its own. Over file:// the browser may block storage, then everything only lasts for the session.',
      'update.title': 'Check for updates',
      'update.checking': 'Checking …',
      'update.current': 'Everything is up to date. Checked against the published version.',
      'update.newer': 'Newer releases available:',
      'update.offline': 'No connection. The check needs internet, the programs do not.',
      'update.keep': 'No backup needed. The quad list and the tuner state live in the browser, not in the files, and survive when you drop the new version over the old one in the same place. Only if you move the folder, take the exports first: JSON in HangarDeck, plan and manifest in the tuner.',
      'update.download': 'Go to downloads',
      'update.close': 'Close',
      'report.title': 'Report a bug',
      'report.program': 'Program',
      'report.what': 'What happened?',
      'report.whatPh': 'What did you do, what happened, what did you expect?',
      'report.contact': 'Contact (optional)',
      'report.contactPh': 'Mail or name, if a question back is fine',
      'report.sendTelegram': 'Send with Telegram',
      'report.sendMail': 'Write an email',
      'report.copy': 'Copy report',
      'report.sendDiscord': 'Discord',
      'report.telegramTip': 'In the Telegram window pick the bot @{bot}',
      'report.telegramCopied': 'Report copied. Pick the bot {bot} in the Telegram window and paste it (Ctrl+V).',
      'report.close': 'Close',
      'report.hint': 'Program version, date and browser ID are attached, nothing else.',
      'report.lbl.program': 'Program',
      'report.lbl.contact': 'Contact',
      'report.lbl.date': 'Date',
      'report.lbl.lang': 'Language',
      'report.lbl.page': 'Page',
      'report.lbl.browser': 'Browser',
      'report.status.needText': 'Please describe briefly what happened.',
      'report.status.telegramBlocked': 'The window was blocked. Allow pop-ups or copy the report.',
      'report.status.mail': 'Mail window opened. Do not forget to send.',
      'report.status.copied': 'Report copied.',
      'report.status.copyFail': 'Copy failed. Select the text in the field and copy it by hand.',
      'report.status.discord': 'Report handed to Discord.',
      'report.status.fail': 'Sending failed. Copy the report and send the text yourself.',
      'report.status.thanks': 'Thanks, the report is on its way.'
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

  // Im Paket heißen die Programmdateien nach dem Programm statt alle index.html.
  // Dort stehen die Pfade in der Kopfzeile der Seite.
  ['hangar', 'tuner', 'guide'].forEach(function (id) {
    var value = document.documentElement.getAttribute('data-app-' + id);
    if (value) APPS[id] = value;
  });

  // Palette als Adressbestandteil: so kommt die Wahl auch dann an, wenn ein
  // Browser den Speicher zwischen zwei Dateien nicht teilt (file://).
  function themeValue() {
    var theme = document.documentElement.getAttribute('data-theme');
    return theme === 'sand' || theme === 'drakn' ? theme : 'ocean';
  }

  function appUrl(path, lang) {
    return path + '?lang=' + lang + '&theme=' + themeValue();
  }

  // Ein Verweis auf ein Programm trägt Sprache und Farbe in der Adresse. Erkannt wird
  // das Ziel an der Adresse selbst, damit auch angehängte Angaben nicht stören.
  function appTarget(href) {
    var raw = String(href || '');
    if (raw.indexOf('://') !== -1) return null;
    var cut = raw.indexOf('#');
    if (cut !== -1) raw = raw.slice(0, cut);
    var lang = '';
    var mark = raw.indexOf('?');
    if (mark !== -1) {
      raw.slice(mark + 1).split('&').forEach(function (part) {
        var pair = part.split('=');
        if (pair[0] === 'lang' && LANGS.indexOf(pair[1]) !== -1) lang = pair[1];
      });
      raw = raw.slice(0, mark);
    }
    var m = /(?:^|\/)(hangar|tuner|guide)\/(?:[a-z0-9.-]*\.html)?$/i.exec(raw);
    if (!m) return null;
    return { id: m[1].toLowerCase(), lang: lang };
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
      var target = appTarget(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      openApp(target.id, { lang: target.lang });
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
    refreshReportTexts();
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
        if (!appTarget(href)) return;
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

  // Ein Ordner um alles, und die Startseite heißt nach dem Projekt statt index.html.
  var PACK_FOLDER = 'FlowState-FPV/';
  var PACK_HUB = 'FlowState-FPV.html';
  var PACK_PAGES = {
    hangar: 'hangar/HangarDeck-Lite.html',
    tuner: 'tuner/FlowState-Tuner.html',
    guide: 'guide/FPV-Guide.html'
  };

  // Die Startseite im Paket verweist auf die Dateinamen aus PACK_PAGES und sagt der
  // hub.js ueber data-app-* wo die Programme liegen.
  function packagedHub(html) {
    var text = String(html).replace(/href="(hangar|tuner|guide)\/(\?[^"]*)?"/g, function (all, id, query) {
      return 'href="' + PACK_PAGES[id] + (query || '') + '"';
    });
    return text.replace('<html ', '<html data-app-hangar="' + PACK_PAGES.hangar +
      '" data-app-tuner="' + PACK_PAGES.tuner +
      '" data-app-guide="' + PACK_PAGES.guide + '" ');
  }

  var BUNDLE_BASE = [
    { path: 'index.html', name: PACK_HUB, hub: true },
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
    var files = BUNDLE_BASE.map(function (file) {
      return { path: file.path, name: PACK_FOLDER + file.name, hub: file.hub };
    });
    ['hangar', 'tuner', 'guide'].forEach(function (id) {
      files.push({ path: id + '/index.html', name: PACK_FOLDER + PACK_PAGES[id] });
    });
    files.push({ path: 'hangar/data/hangardeck.json', name: PACK_FOLDER + 'hangar/data/hangardeck.json' });
    GUIDE_ASSETS.forEach(function (file) { files.push({ path: file.path, name: PACK_FOLDER + file.name }); });

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
      var path = '  ' + PACK_PAGES[id];
      while (path.length < 30) path += ' ';
      return path + label + (version ? ' ' + version : '');
    });

    var notice = {
      name: 'LIESMICH.txt',
      text: [
        'FlowState FPV, Übersichtsseite mit den Programmen',
        '',
        '1. Dieses Paket entpacken, es liegt alles im Ordner FlowState-FPV.',
        '2. ' + PACK_HUB + ' im Browser öffnen.',
        '3. Im Kopf der Seite zwischen Hangar, Autotuner und Guide wählen.',
        '',
        'Jedes Programm lässt sich auch einzeln öffnen, ohne die Übersicht:',
        'einfach die jeweilige Datei doppelklicken und als Lesezeichen ablegen.',
        '',
        'Alles läuft lokal, ohne Server und ohne Internet. Wird die Seite über',
        'file:// geöffnet, öffnen sich die Programme in einem eigenen Tab;',
        'über einen lokalen Server oder GitHub Pages auch direkt im Rahmen.',
        '',
        'Programme in diesem Paket:'
      ].concat(programLines).concat([
        '  hangar/data/hangardeck.json   Startbestand für die Copter-Liste',
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
        if (file.hub) {
          var html = new TextDecoder().decode(new Uint8Array(buffer));
          return { name: file.name, data: new TextEncoder().encode(packagedHub(html)) };
        }
        return { name: file.name, data: new Uint8Array(buffer) };
      });
    }

    var tasks = files.map(grab);
    var extras = BUNDLE_EXTRA.map(function (file) {
      return grab({ path: file.path, name: PACK_FOLDER + file.name }).catch(function () { return null; });
    });

    return Promise.all(tasks.concat(extras)).then(function (all) {
      var entries = all.slice(0, files.length);
      var extra = all.slice(files.length);
      var readmeBytes = extra[0] ? extra[0].data : null;

      entries.push({ name: PACK_FOLDER + notice.name, data: new TextEncoder().encode(notice.text) });
      extra.forEach(function (entry) { if (entry) entries.push(entry); });

      if (readmeBytes) {
        var markdown = new TextDecoder().decode(readmeBytes);
        entries.push({ name: PACK_FOLDER + 'README.html', data: new TextEncoder().encode(readmePage(markdown)) });
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

  // ---- Fehler melden: Kanäle ----
  // Leere Einträge blenden den zugehörigen Knopf im Bericht-Dialog aus.
  var REPORT_CONFIG = {
    discordWebhook: '',
    telegramBot: 'flowstate_fpv_feedback_bot',
    mail: 'yngwierfpv@gmail.com',
    senderName: 'FlowState-Feedback'
  };
  // Name und Eintrag in den Versionsdaten. Die Übersicht selbst hat keinen
  // eigenen Versionssatz, dort bleibt die Version leer.
  var REPORT_PROGRAMS = [
    { id: 'hub', name: 'FlowState FPV' },
    { id: 'tuner', name: 'FlowState Tuner' },
    { id: 'guide', name: 'FPV Guide' },
    { id: 'hangar', name: 'HangarDeck Lite' }
  ];

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

  // ---- Fehler melden ----
  // Kein Konto, kein Endpunkt im Projekt: der Bericht geht über Telegram,
  // per Mailprogramm oder in die Zwischenablage. Alles andere bleibt weg.

  function reportProgram() {
    var select = $('#report-program');
    var id = select ? select.value : 'hub';
    for (var i = 0; i < REPORT_PROGRAMS.length; i++) {
      if (REPORT_PROGRAMS[i].id === id) return REPORT_PROGRAMS[i];
    }
    return REPORT_PROGRAMS[0];
  }

  function reportVersion(id) {
    var data = (state && state.data) || window.FLOWSTATE_DATA || null;
    if (!data || !data.releases) return '';
    for (var i = 0; i < data.releases.length; i++) {
      if (data.releases[i].program === id) return String(data.releases[i].version || '');
    }
    return '';
  }

  function reportPage() {
    try { return String(location.href).split('#')[0]; } catch (e) { return ''; }
  }

  function buildReportText() {
    var program = reportProgram();
    var version = reportVersion(program.id);
    var what = $('#report-text') ? String($('#report-text').value || '').replace(/\s+$/, '') : '';
    var contact = $('#report-contact') ? String($('#report-contact').value || '').replace(/^\s+|\s+$/g, '') : '';
    var lines = [];
    lines.push(what);
    if (contact) lines.push(t('report.lbl.contact') + ': ' + contact);
    lines.push('');
    lines.push(t('report.lbl.program') + ': ' + program.name + (version ? ' ' + version : ''));
    lines.push(t('report.lbl.date') + ': ' + new Date().toISOString());
    lines.push(t('report.lbl.lang') + ': ' + state.lang);
    lines.push(t('report.lbl.page') + ': ' + reportPage());
    lines.push(t('report.lbl.browser') + ': ' + (navigator.userAgent || '—'));
    return lines.join('\n');
  }

  function reportStatus(text, kind) {
    var line = $('#report-status');
    if (!line) return;
    line.textContent = text || '';
    line.className = 'report-status' + (kind ? ' is-' + kind : '');
  }

  // Beschreibung ist Pflicht, alles andere nicht.
  function reportReady() {
    var field = $('#report-text');
    var what = field ? String(field.value || '').replace(/\s/g, '') : '';
    if (what) return true;
    reportStatus(t('report.status.needText'), 'warn');
    if (field && field.focus) field.focus();
    return false;
  }

  // Bots füllen das versteckte Feld. Dann gibt es eine freundliche Antwort und nichts weiter.
  function reportTrapFilled() {
    var trap = $('#report-hp');
    return !!(trap && String(trap.value || '').length);
  }

  function reportBlocked() {
    if (!reportTrapFilled()) return false;
    reportStatus(t('report.status.thanks'), 'ok');
    return true;
  }

  function legacyCopy(text) {
    var area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', 'readonly');
    area.style.position = 'absolute';
    area.style.left = '-9999px';
    document.body.appendChild(area);
    var ok = false;
    try {
      area.select();
      ok = document.execCommand('copy');
    } catch (e) {
      ok = false;
    }
    document.body.removeChild(area);
    return ok;
  }

  function copyReport() {
    if (reportBlocked()) return;
    if (!reportReady()) return;
    var text = buildReportText();
    function done() { reportStatus(t('report.status.copied'), 'ok'); }
    function fail() {
      if (legacyCopy(text)) { done(); return; }
      reportStatus(t('report.status.copyFail'), 'warn');
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fail);
      return;
    }
    fail();
  }

  // Telegram nimmt den Text über den Teilen-Link. Ist die App nicht installiert,
  // landet man auf der Website: der Bericht liegt dann in der Zwischenablage und
  // lässt sich im Bot-Chat einfügen.
  function sendTelegram() {
    if (reportBlocked()) return;
    if (!reportReady()) return;
    var full = buildReportText();
    var share = 'https://t.me/share/url?text=' + encodeURIComponent(String(full).slice(0, 3500));
    // Erst das Fenster öffnen (bleibt aus dem Klick heraus erlaubt), dann kopieren.
    try {
      window.open(share, '_blank', 'noopener');
    } catch (e) {
      reportStatus(t('report.status.telegramBlocked'), 'warn');
      return;
    }
    var bot = '@' + REPORT_CONFIG.telegramBot;
    function copied() { reportStatus(t('report.telegramCopied', { bot: bot }), 'ok'); }
    function fallback() {
      if (legacyCopy(full)) { copied(); return; }
      reportStatus(t('report.status.copyFail'), 'warn');
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(full).then(copied, fallback);
      return;
    }
    fallback();
  }

  function sendMail() {
    if (reportBlocked()) return;
    if (!reportReady()) return;
    var program = reportProgram();
    var version = reportVersion(program.id);
    var subject = 'Bug-Report: ' + program.name + (version ? ' ' + version : '');
    var href = 'mailto:' + REPORT_CONFIG.mail +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(buildReportText());
    try { location.href = href; } catch (e) {
      reportStatus(t('report.status.fail'), 'warn');
      return;
    }
    reportStatus(t('report.status.mail'), 'ok');
  }

  // Discord ist vorbereitet, aber ohne Webhook in der Konfiguration bleibt der Knopf weg.
  function sendDiscord() {
    if (reportBlocked()) return;
    if (!reportReady()) return;
    if (!REPORT_CONFIG.discordWebhook) return;
    var text = buildReportText();
    if (text.length > 1900) text = text.slice(0, 1900);
    if (typeof fetch !== 'function') { reportStatus(t('report.status.fail'), 'warn'); return; }
    fetch(REPORT_CONFIG.discordWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: REPORT_CONFIG.senderName, content: text })
    })
      .then(function (response) {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        reportStatus(t('report.status.thanks'), 'ok');
      })
      .catch(function () { reportStatus(t('report.status.fail'), 'warn'); });
  }

  function refreshReportTexts() {
    var telegram = $('#report-telegram');
    if (telegram) {
      telegram.hidden = !REPORT_CONFIG.telegramBot;
      telegram.setAttribute('title', t('report.telegramTip', { bot: REPORT_CONFIG.telegramBot }));
    }
    var mail = $('#report-mail');
    if (mail) mail.hidden = !REPORT_CONFIG.mail;
    var discord = $('#report-discord');
    if (discord) discord.hidden = !REPORT_CONFIG.discordWebhook;
  }

  function openReport() {
    var dialog = $('#report-dialog');
    if (!dialog) return;
    reportStatus('');
    // Steht ein Programm im Rahmen, ist es vorgewählt.
    var select = $('#report-program');
    var current = currentAppId();
    if (select && current) select.value = current;
    if (dialog.showModal) {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute('open', 'open');
    }
    var field = $('#report-text');
    if (field && field.focus) field.focus();
  }

  function closeReport() {
    var dialog = $('#report-dialog');
    if (!dialog) return;
    reportStatus('');
    if (dialog.open && typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
  }

  function initReport() {
    refreshReportTexts();

    var button = $('#report-check');
    if (button) button.addEventListener('click', openReport);
    var telegram = $('#report-telegram');
    if (telegram) telegram.addEventListener('click', sendTelegram);
    var mail = $('#report-mail');
    if (mail) mail.addEventListener('click', sendMail);
    var copy = $('#report-copy');
    if (copy) copy.addEventListener('click', copyReport);
    var discord = $('#report-discord');
    if (discord) discord.addEventListener('click', sendDiscord);

    // Schliessen laeuft ueber das Dokument: Kreuz, Escape und Klick daneben.
    document.addEventListener('click', function (event) {
      var target = event.target;
      if (!target || !target.closest) return;
      if (target.closest('#report-close')) {
        event.preventDefault();
        closeReport();
        return;
      }
      if (target.closest('#report-dialog') === target) closeReport();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;
      var dialog = $('#report-dialog');
      if (dialog && (dialog.open || dialog.hasAttribute('open'))) closeReport();
    });

    var dialog = $('#report-dialog');
    if (dialog) dialog.addEventListener('cancel', function () { closeReport(); });
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

  // RC steht nur im Filter, solange ihn kein Eintrag nutzt.
  function syncChannelFilter() {
    var releases = (state.data && state.data.releases) || [];
    var used = false;
    for (var i = 0; i < releases.length; i += 1) {
      if (releases[i].channel === 'rc') { used = true; break; }
    }
    $$('[data-filter="channel"][data-value="rc"]').forEach(function (button) {
      button.hidden = !used;
    });
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
    syncChannelFilter();
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
    // Alle Dialoge stehen im HTML hinter der Kopfzeile: erst hier verdrahten.
    initDownloads();
    initUpdate();
    initReport();

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


  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();

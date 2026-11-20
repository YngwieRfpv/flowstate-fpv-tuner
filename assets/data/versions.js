// Gleicher Inhalt wie versions.json, für den Betrieb ohne Server (file://) und für das ZIP-Paket.
// Nach jeder Änderung an versions.json neu erzeugen.
window.FLOWSTATE_DATA = {
  "schema": 4,
  "updated": "2026-11-20",
  "programs": [
    {
      "id": "hangar",
      "name": "Hangar",
      "accent": "mint",
      "path": "hangar/",
      "kind": {
        "de": "Copter, Preset-Dateien und Sicherungen an einem Ort",
        "en": "Quads, preset files and backups in one place",
        "es": "Copter, archivos de presets y copias en un solo lugar"
      },
      "description": {
        "de": "Eine Liste pro Copter mit Bild, Größe, Zellen, KV, ESC, Props und Status. Auf Wunsch liest sie den Flight Controller über USB aus und legt ein Betaflight-Backup je Modell ab. Preset-Dateien aus dem Ordner kommen so an, wie sie geschrieben sind, Zeile für Zeile. Die Liste geht als Code oder Link weiter, Bilder und Einträge bleiben im Browser. Export als PDF-Tabelle, CSV, Druck, JSON und HTML-Backup, das sich wieder einlesen lässt.",
        "en": "One list for your quads with a picture, size, cells, KV, ESC, props and status. On request it reads the flight controller over USB and keeps a Betaflight backup per model. Preset files from the folder arrive as they are written, line by line. The list can be passed on as a code or a link, pictures and entries stay in the browser. Export as a PDF table, CSV, print, JSON and an HTML backup that can be read back in.",
        "es": "Una lista por copter con imagen, tamaño, celdas, KV, ESC, hélices y estado. Si quieres, lee la controladora por USB y guarda una copia de Betaflight por modelo. Los archivos de presets del directorio llegan tal como están escritos, línea por línea. La lista se puede pasar como código o enlace, las imágenes y las entradas se quedan en el navegador. Exportación como tabla PDF, CSV, impresión, JSON y copia HTML."
      },
      "highlights": {
        "de": [
          "Name und Größe reichen, Bild und weitere Felder bleiben optional",
          "Preset-Dateien Zeile für Zeile übernehmen, ohne Auswahl",
          "Flight Controller über USB auslesen oder CLI-Text einfügen",
          "Liste als Code oder Link weitergeben, Bilder bleiben im Browser",
          "Export als PDF-Tabelle, CSV, Druck, JSON und HTML-Backup",
          "Deutsch, Englisch und Spanisch, Ozean, Sand und Drakn"
        ],
        "en": [
          "Name and size are enough, picture and further fields stay optional",
          "Take preset files line by line, without a selection",
          "Read the flight controller over USB or paste CLI text",
          "Pass the list on as a code or link, pictures stay in the browser",
          "Export as a PDF table, CSV, print, JSON and an HTML backup",
          "German, English and Spanish, Ocean, Sand and Drakn"
        ],
        "es": [
          "El nombre y el tamaño bastan, la imagen y los demás campos son opcionales",
          "Tomar archivos de presets línea por línea, sin selección",
          "Leer la controladora por USB o pegar texto CLI",
          "Pasar la lista como código o enlace, las imágenes se quedan en el navegador",
          "Exportación como tabla PDF, CSV, impresión, JSON y copia HTML",
          "Alemán, inglés y español, océano, lino y rojo oscuro"
        ]
      },
      "meta": {
        "de": [
          "1 Datei · 146 KB",
          "Bild, Preset-Dateien, FC-Auslese",
          "jeder moderne Browser"
        ],
        "en": [
          "1 file · 146 KB",
          "picture, preset files, controller read",
          "any modern browser"
        ],
        "es": [
          "1 archivo · 146 KB",
          "imagen, archivos de presets, lectura de la FC",
          "cualquier navegador actual"
        ]
      },
      "enabled": true,
      "entry": "index.html",
      "pack": "hangar/Hangar.html",
      "icon": "hangar",
      "extra": [
        "hangar/data/flowstate-hangar.json"
      ]
    },
    {
      "id": "tuner",
      "name": "Tuner",
      "accent": "mint",
      "path": "tuner/",
      "kind": {
        "de": "Tuning aus Blackbox-Logs",
        "en": "Tuning from blackbox logs",
        "es": "Ajuste a partir de registros Blackbox"
      },
      "description": {
        "de": "Liest Blackbox- und Dataflash-Logs, leitet Filter- und PID-Werte ab und zeigt jeden Schritt als lesbaren CLI-Plan. Die geladenen Logs bleiben im Browser und sind beim nächsten Start wieder da. Geschrieben wird über Web Serial, nur nach Sicherung und Bestätigung. Alles läuft im Browser.",
        "en": "Reads Blackbox and Dataflash logs, derives filter and PID values and shows every step as a readable CLI plan. Loaded logs stay in the browser and are back on the next start. Writes go over Web Serial, only after a backup and confirmation. Everything runs in the browser.",
        "es": "Lee registros Blackbox y Dataflash, deduce valores de filtros y PID y muestra cada paso como un plan CLI legible. Los registros cargados se quedan en el navegador y vuelven en el siguiente inicio. La escritura va por Web Serial, solo tras una copia de seguridad y una confirmación. Todo funciona en el navegador."
      },
      "highlights": {
        "de": [
          "Sechs Phasen von Setup bis Archiv, jede mit eigenem Abschluss",
          "Sichtbarer CLI-Plan vor jedem Schreibvorgang",
          "Zielprofil-Schutz: nur das gewählte PID-Profil wird verändert",
          "Geladene Logs bleiben nach dem Neuladen erhalten",
          "Deutsch und Englisch, Ozean, Leinen und Dunkelrot"
        ],
        "en": [
          "Six phases from setup to archive, each with its own completion",
          "Visible CLI plan before every write",
          "Target-profile protection: only the selected PID profile changes",
          "Loaded logs survive a reload",
          "German and English, Ocean, Sand and Drakn"
        ],
        "es": [
          "Seis fases desde el setup hasta el archivo, cada una con su cierre",
          "Plan CLI visible antes de cada escritura",
          "Protección del perfil objetivo: solo cambia el perfil PID elegido",
          "Los registros cargados sobreviven a una recarga",
          "Alemán, inglés y español, océano, lino y rojo oscuro"
        ]
      },
      "meta": {
        "de": [
          "1 Datei · 502 KB",
          "Betaflight 4.5+",
          "Chrome / Edge / Opera"
        ],
        "en": [
          "1 file · 502 KB",
          "Betaflight 4.5+",
          "Chrome / Edge / Opera"
        ],
        "es": [
          "1 archivo · 502 KB",
          "Betaflight 4.5+",
          "Chrome / Edge / Opera"
        ]
      },
      "enabled": true,
      "entry": "index.html",
      "pack": "tuner/Tuner.html",
      "icon": "tuner",
      "extra": []
    },
    {
      "id": "guide",
      "name": "Guide",
      "accent": "sky",
      "path": "guide/",
      "kind": {
        "de": "Nachschlagen und Schritt für Schritt nachbauen",
        "en": "Look things up and rebuild step by step",
        "es": "Consultar y reconstruir paso a paso"
      },
      "description": {
        "de": "Führt vom ersten Build bis zum Feintuning: Simple Tuning, Advanced Tuning, Build-Guide, 95 Glossarbegriffe mit Quellen und der vollständige Sbang-Ablauf. Mit Profilauswahl für Coptergröße, Frame, Taktrate und Firmware.",
        "en": "Leads from the first build to fine tuning: simple tuning, advanced tuning, build guide, 95 glossary terms with sources and the full Sbang workflow. With profile selection for quad size, frame, loop rate and firmware.",
        "es": "Lleva desde el primer montaje hasta el ajuste fino: simple tuning, advanced tuning, guía de montaje, 95 términos de glosario con fuentes y el procedimiento Sbang completo. Con selección de perfil por tamaño de copter, chasis, frecuencia de bucle y firmware."
      },
      "highlights": {
        "de": [
          "Acht Bereiche von der Startseite bis zur Linkliste",
          "95 Glossarbegriffe, direkt im Text aufrufbar",
          "Werte und Tabellen folgen deinem Copterprofil",
          "Ozean, Leinen und Dunkelrot, übernommen aus der Übersichtsseite"
        ],
        "en": [
          "Eight sections from the home page to the link list",
          "95 glossary terms, openable straight from the text",
          "Values and tables follow your quad profile",
          "Ocean, Sand and Drakn, taken over from the overview page"
        ],
        "es": [
          "Ocho secciones desde la portada hasta la lista de enlaces",
          "95 términos de glosario, que se abren directamente en el texto",
          "Los valores y las tablas siguen el perfil de tu copter",
          "Océano, lino y rojo oscuro, tomados de la vista general"
        ]
      },
      "meta": {
        "de": [
          "1 Datei · 7,7 MB",
          "DE / EN / ES",
          "auch mobil"
        ],
        "en": [
          "1 file · 7,7 MB",
          "DE / EN / ES",
          "mobile ready"
        ],
        "es": [
          "1 archivo · 7,7 MB",
          "DE / EN / ES",
          "también en móvil"
        ]
      },
      "enabled": true,
      "entry": "index.html",
      "pack": "guide/Guide.html",
      "icon": "guide",
      "extra": [
        "guide/assets/flowstate-guide-wordmark.png",
        "guide/assets/yngwierfpv-footer.png"
      ]
    },
    {
      "id": "presets",
      "name": "Presets",
      "accent": "mint",
      "path": "presets/",
      "kind": {
        "de": "Presets für Schalter, Beeper, OSD, Raten und Anpassungen",
        "en": "Presets for switches, beeper, OSD, rates and adjustments",
        "es": "Presets para interruptores, beeper, OSD, rates y ajustes"
      },
      "description": {
        "de": "Baut aus Teilen eine CLI-Datei für Betaflight: Features, Beeper, Modes, OSD, Alarme, Rates, Adjustments und Failsafe. Jeder Block lässt sich am Abschnittskopf abschalten und bleibt trotzdem im Preset gespeichert. Copter aus dem Hangar übernehmen, Einträge prüfen und offene Punkte einzeln benennen. Der Block endet mit save und lässt sich kopieren, als Datei sichern oder über Web Serial schreiben. PID, Filter und Motoren bleiben außen vor.",
        "en": "Builds a CLI file for Betaflight from parts: features, beeper, modes, OSD, alarms, rates, adjustments and failsafe. Each block can be switched off at its section header and still stays in the preset. Take a copter from the hangar, check the entries and have open points named one by one. The block ends with save and can be copied, saved as a file or written over Web Serial. PID, filters and motors stay out.",
        "es": "Construye un archivo CLI para Betaflight por partes: funciones, beeper, modos, OSD, alarmas, rates, ajustes y failsafe. Cada bloque se puede apagar en la cabecera de su sección y sigue guardado en el preset. Toma un copter del hangar, revisa las entradas y deja que los puntos abiertos se nombren uno a uno. El bloque termina en save y se puede copiar, guardar como archivo o escribir por Web Serial. PID, filtros y motores quedan fuera."
      },
      "highlights": {
        "de": [
          "Schalter, Beeper, OSD, Anpassungen und Raten in einem Ablauf",
          "Fertiger Block endet mit save, kopierbar oder über USB",
          "Prüfung vor dem Schreiben, offene Punkte einzeln benannt",
          "Mehrere Modelle getrennt, jedes mit eigenem Stand",
          "Deutsch, Englisch und Spanisch, Ozean, Sand und Drakn",
          "Eine HTML-Datei, keine fremden Ressourcen"
        ],
        "en": [
          "Switches, beeper, OSD, adjustments and rates in one flow",
          "Finished block ends with save, ready to copy or send over USB",
          "Check before writing, open points named one by one",
          "Several models kept apart, each with its own state",
          "German, English and Spanish, Ocean, Sand and Drakn",
          "One HTML file, no external resources"
        ],
        "es": [
          "Interruptores, beeper, OSD, ajustes y rates en un flujo",
          "El bloque terminado acaba en save, listo para copiar o enviar por USB",
          "Revisión antes de escribir, lo pendiente se nombra por separado",
          "Varios modelos separados, cada uno con su estado",
          "Alemán, inglés y español, Ocean, Sand y Drakn",
          "Un solo archivo HTML, sin recursos externos"
        ]
      },
      "meta": {
        "de": [
          "1 Datei · 234 KB",
          "Schalter, Beeper, OSD, Raten",
          "Web Serial in Chrome, Edge, Opera"
        ],
        "en": [
          "1 file · 234 KB",
          "switches, beeper, OSD, rates",
          "Web Serial in Chrome, Edge, Opera"
        ],
        "es": [
          "1 archivo · 234 KB",
          "interruptores, beeper, OSD, rates",
          "Web Serial en Chrome, Edge, Opera"
        ]
      },
      "enabled": true,
      "entry": "index.html",
      "pack": "presets/Presets.html",
      "icon": "presets"
    },
    {
      "id": "osd",
      "name": "OSD",
      "accent": "sky",
      "path": "osd/",
      "kind": {
        "de": "Fonts und Startlogo für das Betaflight-OSD",
        "en": "Fonts and startup logo for the Betaflight OSD",
        "es": "Fuentes y logo de arranque para el OSD de Betaflight"
      },
      "description": {
        "de": "Werkbank für MAX7456-Zeichensätze in vier Schritten: Font wählen, Startup und Arming, Zeichen bearbeiten, Export. Über 360 Fonts durchsuchen, Bereiche aus anderen Fonts mischen, eigene Banner über Schwellenwert, Dithering und Kontur anpassen. Dazu Bild-Umrechner, das OSD-Layout als Raster mit CLI und die Auswahl der Betaflight-Seiten 1 bis 4 für ein eigenes Arming-Logo. Eigene .mcm-Fonts bleiben im Browser. Die Arbeitsfläche bleibt hart gepixelt, 12×18 mit zwei Bit.",
        "en": "Workbench for MAX7456 character sets in four steps: choose font, startup and arming, edit characters, export. Search more than 360 fonts, mix areas from other fonts, adjust your own banners by threshold, dithering and outline. Plus an image converter, the OSD layout as a grid with CLI, and the choice of Betaflight pages 1 to 4 for your own arming logo. Your own .mcm fonts stay in the browser. The canvas stays hard-pixelled, 12×18 with two bits.",
        "es": "Banco de trabajo para juegos de caracteres MAX7456 en cuatro pasos: elegir fuente, inicio y arming, editar caracteres, exportar. Busca entre más de 360 fuentes, mezcla zonas de otras fuentes y ajusta tus propios banners con umbral, dithering y contorno. Además conversor de imágenes, el diseño OSD como rejilla con CLI y la elección de las páginas 1 a 4 de Betaflight para un logo de arming propio. Tus fuentes .mcm se quedan en el navegador. El lienzo sigue con píxeles duros, 12×18 y dos bits."
      },
      "highlights": {
        "de": [
          "Über 360 Fonts durchsuchen, nach Gruppe filtern, eigene .mcm einlesen",
          "Basis-Font, Bereiche aus anderen Fonts und Startlogo zu einem Pack",
          "Startup- und Arming-Logo getrennt, Kontur oder Fläche, mit Live-CLI",
          "Bild umrechnen, Betaflight-Seiten 1 bis 4, INAV und WTFOS-PNG",
          "Deutsch, Englisch und Spanisch, Ozean, Sand und Drakn",
          "Eine HTML-Datei, keine fremden Ressourcen"
        ],
        "en": [
          "Search more than 360 fonts, filter by group, load your own .mcm",
          "Base font, areas from other fonts and startup logo as one pack",
          "Startup and arming logo apart, outline or fill, with live CLI",
          "Convert an image, Betaflight pages 1 to 4, INAV and WTFOS PNG",
          "German, English and Spanish, Ocean, Sand and Drakn",
          "One HTML file, no external resources"
        ],
        "es": [
          "Busca entre más de 360 fuentes, filtra por grupo, carga tu propio .mcm",
          "Fuente base, zonas de otras fuentes y logo de arranque en un paquete",
          "Logo de inicio y de arming por separado, contorno o relleno, con CLI en vivo",
          "Convierte una imagen, páginas 1 a 4 de Betaflight, INAV y PNG de WTFOS",
          "Alemán, inglés y español, Ocean, Sand y Drakn",
          "Un solo archivo HTML, sin recursos externos"
        ]
      },
      "meta": {
        "de": [
          "1 Datei · 4,6 MB",
          "Fonts, Start- und Arming-Logo, OSD-Raster",
          "jeder moderne Browser"
        ],
        "en": [
          "1 file · 4,6 MB",
          "fonts, startup and arming logo, OSD grid",
          "any modern browser"
        ],
        "es": [
          "1 archivo · 4,6 MB",
          "fuentes, logo de arranque y arming, rejilla OSD",
          "cualquier navegador actual"
        ]
      },
      "enabled": true,
      "entry": "index.html",
      "pack": "osd/OSD.html",
      "icon": "osd"
    }
  ],
  "releases": [
    {
      "id": "hangar-1.0.0-beta.4",
      "program": "hangar",
      "version": "v1.0.0-beta.4",
      "channel": "beta",
      "released": "2026-11-20",
      "title": {
        "de": "Preset-Hinweis sagt jetzt, was passiert",
        "en": "Preset hint now says what happens",
        "es": "La nota del preset dice ahora qué pasa"
      },
      "summary": {
        "de": "Der Hinweis über den Preset-Dateien beschreibt jetzt den Ablauf im Programm: die Datei wird gelesen, ihre Zeilen wandern in den CLI-Diff, doppelte Zeilen bleiben draußen. Dazu eine Schrift für Text und eine für Code, ohne gemischte Angaben im Stylesheet.",
        "en": "The hint above the preset files now describes what the program does: the file is read, its lines go into the CLI diff, duplicates stay out. Plus one font for text and one for code, with no mixed font stacks in the stylesheet.",
        "es": "La nota sobre los presets describe ahora lo que hace el programa: se lee el archivo, sus líneas van al diff CLI y las repetidas quedan fuera. Además una fuente para texto y otra para código, sin mezclas en la hoja de estilos."
      },
      "file": "hangar/index.html",
      "size_bytes": 145864,
      "sha256": "378b4c32901f9459c55000bc130174ec40a21e843378e76bc95821697295affb",
      "available": true,
      "release_url": "https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v1.0.0-beta.4",
      "signals": [
        {
          "label": {
            "de": "Name",
            "en": "Name",
            "es": "Nombre"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "Preset-Dateien",
            "en": "Preset files",
            "es": "Archivos de presets"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "Bilder",
            "en": "Pictures",
            "es": "Imágenes"
          },
          "state": "ok"
        }
      ]
    },
    {
      "id": "tuner-4.8-alpha.8",
      "program": "tuner",
      "version": "v4.8-alpha.8",
      "channel": "beta",
      "released": "2026-11-20",
      "title": {
        "de": "Klare Ansagen vor dem Schreiben",
        "en": "Clearer wording before writing",
        "es": "Avisos más claros antes de escribir"
      },
      "summary": {
        "de": "Die Bestätigungen vor dem Schreiben lesen sich jetzt wie Sätze statt wie Formulare: geprüfte Verbindung, geprüfter Gesamtplan, ein klarer Hinweis bei umgangener Qualitätsprüfung. Eine Schrift für Text, eine für Code.",
        "en": "The confirmations before writing now read like sentences instead of forms: checked connection, checked full plan, a plain notice when the quality gate was bypassed. One font for text, one for code.",
        "es": "Las confirmaciones antes de escribir se leen ahora como frases y no como formularios: conexión comprobada, plan completo comprobado y un aviso claro cuando se saltó el control de calidad. Una fuente para texto y otra para código."
      },
      "file": "tuner/index.html",
      "size_bytes": 501695,
      "sha256": "898e8d39cd31ffcf615c761c769932ee076ee6ddd6b829f0c8b1fb929cd98fbc",
      "available": true,
      "release_url": "https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v4.8-alpha.8",
      "signals": [
        {
          "label": {
            "de": "Name",
            "en": "Name",
            "es": "Nombre"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "Log-Archiv",
            "en": "Log archive",
            "es": "Archivo de logs"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "Phasen",
            "en": "Phases",
            "es": "Fases"
          },
          "state": "ok"
        }
      ]
    },
    {
      "id": "guide-1.0.2-beta.22-es",
      "program": "guide",
      "version": "v1.0.2-beta.22-es",
      "channel": "beta",
      "released": "2026-11-20",
      "title": {
        "de": "Eine Schrift im ganzen Guide",
        "en": "One font throughout the guide",
        "es": "Una sola fuente en toda la guía"
      },
      "summary": {
        "de": "Alle Schriftangaben im Guide stehen jetzt in zwei Stapeln: einer für Text, einer für Code. Keine gemischten Familien mehr, nichts von außen geladen. Der Inhalt bleibt unverändert.",
        "en": "Every font declaration in the guide now uses two stacks: one for text, one for code. No mixed families, nothing loaded from outside. The content is unchanged.",
        "es": "Todas las declaraciones de fuente de la guía usan ahora dos pilas: una para texto y otra para código. Sin familias mezcladas ni cargas externas. El contenido no cambia."
      },
      "file": "guide/index.html",
      "size_bytes": 7700364,
      "sha256": "a9052b9bd280b919cdc1d7abe64d698a69dc4ddbaad8705c6ee731a924b1278a",
      "available": true,
      "release_url": "https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v1.0.2-beta.22-es",
      "signals": [
        {
          "label": {
            "de": "Name",
            "en": "Name",
            "es": "Nombre"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "Kapitel",
            "en": "Chapters",
            "es": "Capítulos"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "Glossar",
            "en": "Glossary",
            "es": "Glosario"
          },
          "state": "ok"
        }
      ]
    },
    {
      "id": "presets-0.2.0-beta.7",
      "program": "presets",
      "version": "v0.2.0-beta.7",
      "channel": "beta",
      "released": "2026-11-20",
      "title": {
        "de": "Blöcke einzeln schalten, OSD-Alarme am Platz",
        "en": "Blocks on switches, OSD alarms in place",
        "es": "Bloques por separado, alarmas OSD en su sitio"
      },
      "summary": {
        "de": "Jeder Block lässt sich am Abschnittskopf an- und abschalten, ausgeschaltete Blöcke bleiben im Preset und fallen nur aus der CLI. Neu sind der Abschnitt Weitere Features mit den zusätzlichen Einstellungen und die OSD-Alarme mit Kapazitäts- und Höhenalarm. Spezielle Anzeigen stehen eingeklappt darunter, mit ihrem Standardformat. Der Copter-Bezug zum Hangar bleibt.",
        "en": "Every block can be switched at its section header; a block that is off stays in the preset and only drops out of the CLI. New are the Other features section with the additional settings and the OSD alarms with capacity and altitude. Special displays sit collapsed below, with their default format. The hangar link stays.",
        "es": "Cada bloque se puede activar en la cabecera de su sección; un bloque apagado sigue en el preset y solo sale de la CLI. Nuevas son la sección Otras funciones con los ajustes adicionales y las alarmas OSD con capacidad y altitud. Las indicaciones especiales van plegadas debajo, con su formato por defecto. El enlace con el hangar se mantiene."
      },
      "file": "presets/index.html",
      "size_bytes": 233778,
      "sha256": "a9061a066d33f6c94794cd951d9dac513c2d4b67188411628b00b260f4e40035",
      "available": true,
      "release_url": "https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/presets-v0.2.0-beta.7",
      "signals": [
        {
          "label": {
            "de": "Name",
            "en": "Name",
            "es": "Nombre"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "CLI-Kopf",
            "en": "CLI header",
            "es": "Cabecera CLI"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "Import",
            "en": "Import",
            "es": "Importación"
          },
          "state": "ok"
        }
      ]
    },
    {
      "id": "osd-0.1.0-beta.7",
      "program": "osd",
      "version": "v0.1.0-beta.7",
      "channel": "beta",
      "released": "2026-11-20",
      "title": {
        "de": "Startup und Arming, Kontur statt Fläche",
        "en": "Startup and arming, outline instead of fill",
        "es": "Inicio y arming, contorno en vez de relleno"
      },
      "summary": {
        "de": "Der Ablauf steht in vier Schritten: Font wählen, Startup und Arming, Font bearbeiten, Export und CLI. Startup- und Arming-Logo liegen nebeneinander, eigene Banner lassen sich über Schwellenwert, Dithering und einen Konturmodus anpassen. Dazu die Auswahl der Betaflight-Seiten 1 bis 4 mit passender CLI, INAV- und WTFOS-Ausgabe. Importierte Fonts liegen jetzt in IndexedDB statt im kleinen Speicher.",
        "en": "The workflow has four steps: choose font, startup and arming, edit font, export and CLI. Startup and arming logos sit side by side, and your own banners can be adjusted by threshold, dithering and an outline mode. Plus the choice of Betaflight pages 1 to 4 with matching CLI, INAV and WTFOS output. Imported fonts now live in IndexedDB instead of the small store.",
        "es": "El flujo tiene cuatro pasos: elegir fuente, inicio y arming, editar fuente, exportar y CLI. Los logos de inicio y arming van uno al lado del otro, y tus propios banners se ajustan con umbral, dithering y un modo de contorno. Además la elección de las páginas 1 a 4 de Betaflight con su CLI, salida INAV y WTFOS. Las fuentes importadas ahora viven en IndexedDB."
      },
      "file": "osd/index.html",
      "size_bytes": 4551744,
      "sha256": "f5380a8fec95527820e818b2fac791573e0b52c7aad8b61a5c490cbbe27ee5f0",
      "available": true,
      "release_url": "https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/osd-v0.1.0-beta.7",
      "signals": [
        {
          "label": {
            "de": "Name",
            "en": "Name",
            "es": "Nombre"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "Fonts",
            "en": "Fonts",
            "es": "Fuentes"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "Startlogo",
            "en": "Startup logo",
            "es": "Logo de arranque"
          },
          "state": "ok"
        }
      ]
    }
  ],
  "platform": {
    "id": "flowstate-fpv",
    "name": "FlowState FPV",
    "version": "1.1.2",
    "released": "2026-11-20"
  }
};

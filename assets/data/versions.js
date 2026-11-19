// Gleicher Inhalt wie versions.json, für den Betrieb ohne Server (file://) und für das ZIP-Paket.
// Nach jeder Änderung an versions.json neu erzeugen.
window.FLOWSTATE_DATA = {
  "schema": 4,
  "updated": "2026-11-19",
  "programs": [
    {
      "id": "hangar",
      "name": "FlowState Hangar Deck",
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
      "pack": "hangar/FlowState-Hangar-Deck.html",
      "icon": "hangar",
      "extra": [
        "hangar/data/flowstate-hangar.json"
      ]
    },
    {
      "id": "tuner",
      "name": "FlowState Tuner",
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
      "pack": "tuner/FlowState-Tuner.html",
      "icon": "tuner",
      "extra": []
    },
    {
      "id": "guide",
      "name": "FPV Guide",
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
      "pack": "guide/FPV-Guide.html",
      "icon": "guide",
      "extra": [
        "guide/assets/flowstate-guide-wordmark.png",
        "guide/assets/yngwierfpv-footer.png"
      ]
    },
    {
      "id": "presets",
      "name": "FlowState Presets",
      "accent": "mint",
      "path": "presets/",
      "kind": {
        "de": "Presets für Schalter, Beeper, OSD, Raten und Anpassungen",
        "en": "Presets for switches, beeper, OSD, rates and adjustments",
        "es": "Presets para interruptores, beeper, OSD, rates y ajustes"
      },
      "description": {
        "de": "Baut aus Bausteinen eine CLI-Datei für Betaflight: Schalterbelegung, Beeper, OSD-Profile, Anpassungen und Raten. Der Block endet mit save und lässt sich kopieren, als Datei sichern oder über Web Serial in die Konsole schreiben. Vorher prüft das Werkzeug die Eingaben und nennt offene Punkte. PID, Filter und Motoren kommen nicht vor.",
        "en": "Builds a CLI file for Betaflight from parts: switches, beeper, OSD profiles, adjustments and rates. The block ends with save and can be copied, saved as a file or written to the console over Web Serial. The tool checks the entries first and names what is still open. PID, filters and motors are not part of it.",
        "es": "Arma un archivo CLI para Betaflight con piezas: interruptores, beeper, perfiles OSD, ajustes y rates. El bloque termina en save y se puede copiar, guardar como archivo o escribir en la consola por Web Serial. Antes revisa los datos y nombra lo que falta. PID, filtros y motores no aparecen."
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
          "1 Datei · 223 KB",
          "Schalter, Beeper, OSD, Raten",
          "Web Serial in Chrome, Edge, Opera"
        ],
        "en": [
          "1 file · 223 KB",
          "switches, beeper, OSD, rates",
          "Web Serial in Chrome, Edge, Opera"
        ],
        "es": [
          "1 archivo · 223 KB",
          "interruptores, beeper, OSD, rates",
          "Web Serial en Chrome, Edge, Opera"
        ]
      },
      "enabled": true,
      "entry": "index.html",
      "pack": "presets/FlowState-Presets.html",
      "icon": "presets"
    },
    {
      "id": "osd",
      "name": "OSD Customizer",
      "accent": "sky",
      "path": "osd/",
      "kind": {
        "de": "Fonts und Startlogo für das Betaflight-OSD",
        "en": "Fonts and startup logo for the Betaflight OSD",
        "es": "Fuentes y logo de arranque para el OSD de Betaflight"
      },
      "description": {
        "de": "Werkbank für MAX7456-Zeichensätze: über 300 Fonts durchsuchen, Zeichen Pixel für Pixel ändern, Bereiche aus verschiedenen Fonts mischen und als .mcm ausgeben. Dazu das Startlogo für 288×72 oder 32×32, ein Bild-Umrechner und das OSD-Layout als Raster mit CLI-Ausgabe. Eigene .mcm-Fonts bleiben im Browser. Die Arbeitsfläche bleibt absichtlich hart gepixelt, 12×18 mit zwei Bit.",
        "en": "Workbench for MAX7456 character sets: search more than 300 fonts, edit glyphs pixel by pixel, mix areas from different fonts and export .mcm. Plus the startup logo at 288×72 or 32×32, an image converter and the OSD layout as a grid with CLI output. Your own .mcm fonts stay in the browser. The canvas stays deliberately hard-pixelled, 12×18 with two bits.",
        "es": "Banco de trabajo para juegos de caracteres MAX7456: busca entre más de 300 fuentes, edita glifos píxel a píxel, mezcla zonas de distintas fuentes y exporta .mcm. Además el logo de arranque en 288×72 o 32×32, un conversor de imágenes y el diseño OSD como rejilla con salida CLI. El lienzo sigue a propósito con píxeles duros, 12×18 y dos bits. Las fuentes .mcm propias se quedan en el navegador."
      },
      "highlights": {
        "de": [
          "Über 300 Fonts durchsuchen, nach Gruppe filtern, eigene .mcm einlesen",
          "Pack bauen: Basis-Font, einzelne Bereiche aus anderen Fonts, Startlogo",
          "Startlogo zeichnen oder ein Bild umrechnen, als BMP und im Font",
          "OSD-Layout als Raster mit Ziehen, Rasterfang und CLI-Ausgabe",
          "Deutsch, Englisch und Spanisch, Ozean, Sand und Drakn",
          "Eine HTML-Datei, keine fremden Ressourcen"
        ],
        "en": [
          "Search more than 300 fonts, filter by group, load your own .mcm",
          "Build a pack: base font, single areas from other fonts, startup logo",
          "Draw the startup logo or convert an image, as BMP and inside the font",
          "OSD layout as a grid with dragging, snapping and CLI output",
          "German, English and Spanish, Ocean, Sand and Drakn",
          "One HTML file, no external resources"
        ],
        "es": [
          "Busca entre más de 300 fuentes, filtra por grupo, carga tu propio .mcm",
          "Arma un paquete: fuente base, zonas de otras fuentes, logo de arranque",
          "Dibuja el logo o convierte una imagen, como BMP y dentro de la fuente",
          "Diseño OSD como rejilla con arrastre, ajuste y salida CLI",
          "Alemán, inglés y español, Ocean, Sand y Drakn",
          "Un solo archivo HTML, sin recursos externos"
        ]
      },
      "meta": {
        "de": [
          "1 Datei · 4,3 MB",
          "Fonts, Logo, OSD-Raster",
          "jeder moderne Browser"
        ],
        "en": [
          "1 file · 4,3 MB",
          "fonts, logo, OSD grid",
          "any modern browser"
        ],
        "es": [
          "1 archivo · 4,3 MB",
          "fuentes, logo, rejilla OSD",
          "cualquier navegador actual"
        ]
      },
      "enabled": true,
      "entry": "index.html",
      "pack": "osd/FlowState-OSD-Customizer.html",
      "icon": "osd"
    }
  ],
  "releases": [
    {
      "id": "osd-0.1.0-beta.4",
      "program": "osd",
      "version": "v0.1.0-beta.4",
      "channel": "beta",
      "released": "2026-11-19",
      "title": {
        "de": "Eigene Fonts bleiben im Browser",
        "en": "Own fonts stay in the browser",
        "es": "Las fuentes propias se quedan en el navegador"
      },
      "summary": {
        "de": "Importierte .mcm-Fonts liegen jetzt in IndexedDB statt im kleinen Schlüssel-Wertspeicher. Vorher waren nach wenigen Fonts die weiteren weg, jetzt bleiben sie nach dem Neuladen da. Dazu sind zwei Statuszeilen aus der Oberfläche verschwunden, die keine Werte mehr hatten.",
        "en": "Imported .mcm fonts now live in IndexedDB instead of the small key-value store. Before, a few fonts in and the next ones were gone, now they survive a reload. Two status rows without values have also left the interface.",
        "es": "Las fuentes .mcm importadas ahora viven en IndexedDB en lugar del pequeño almacén clave-valor. Antes, tras pocas fuentes, las siguientes ya no estaban; ahora sobreviven a una recarga. Además han desaparecido dos filas de estado sin valores."
      },
      "file": "osd/index.html",
      "size_bytes": 4273766,
      "sha256": "60bd4b109997d26f6cf4e5352497fcdc22a8c4088851a38919907eb16528dac4",
      "available": true,
      "release_url": "https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v0.1.0-beta.4",
      "signals": [
        {
          "label": {
            "de": "Import-Fonts",
            "en": "Imported fonts",
            "es": "Fuentes importadas"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "Statuszeilen",
            "en": "Status rows",
            "es": "Filas de estado"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "Sprachen",
            "en": "Languages",
            "es": "Idiomas"
          },
          "state": "ok"
        }
      ]
    },
    {
      "id": "hangar-1.0.0-beta.2",
      "program": "hangar",
      "version": "v1.0.0-beta.2",
      "channel": "beta",
      "released": "2026-11-19",
      "title": {
        "de": "Preset-Dateien kommen unverändert an",
        "en": "Preset files arrive unchanged",
        "es": "Los archivos de presets llegan sin cambios"
      },
      "summary": {
        "de": "Preset-Dateien werden Zeile für Zeile übernommen, so wie sie geschrieben sind. Die alte Prüfung, die nur Schalter, Beeper und OSD durchließ, ist weg. Dazu liegen Copter-Bilder in IndexedDB und sind nach dem Neuladen wieder da, auch wenn der kleine Speicher voll wäre.",
        "en": "Preset files are taken line by line, as written. The old filter that only let switches, beeper and OSD through is gone. Quad pictures now live in IndexedDB and are back after a reload, even if the small store would be full.",
        "es": "Los archivos de presets se toman línea por línea, tal como están escritos. El filtro antiguo que solo dejaba pasar interruptores, beeper y OSD ya no está. Las imágenes de los copter viven en IndexedDB y vuelven tras una recarga, aunque el almacén pequeño estuviera lleno."
      },
      "file": "hangar/index.html",
      "size_bytes": 145797,
      "sha256": "f2f09d61d479b1ee8be970ac8c010ddce950f26be2d2ba75ef2c53b3284e3bab",
      "available": true,
      "release_url": "https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v1.0.0-beta.2",
      "signals": [
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
        },
        {
          "label": {
            "de": "Flotte",
            "en": "Fleet",
            "es": "Flota"
          },
          "state": "ok"
        }
      ]
    },
    {
      "id": "tuner-4.8-alpha.5",
      "program": "tuner",
      "version": "v4.8-alpha.5",
      "channel": "beta",
      "released": "2026-11-19",
      "title": {
        "de": "Logs bleiben nach dem Neuladen",
        "en": "Logs survive a reload",
        "es": "Los registros sobreviven a una recarga"
      },
      "summary": {
        "de": "Geladene Blackbox-Logs liegen jetzt in IndexedDB und werden beim Start wieder eingelesen. Ein Export ist nicht mehr nötig, um sie zu behalten. Dazu sind die Textzeilen im Log-Archiv kürzer und sagen, dass die Dateien im Browser bleiben.",
        "en": "Loaded blackbox logs now live in IndexedDB and are read back on start. An export is no longer needed to keep them. The text lines in the log archive are shorter and say that the files stay in the browser.",
        "es": "Los registros Blackbox cargados ahora viven en IndexedDB y se vuelven a leer al iniciar. Ya no hace falta exportar para conservarlos. Las líneas de texto del archivo de registros son más cortas y dicen que los archivos se quedan en el navegador."
      },
      "file": "tuner/index.html",
      "size_bytes": 502177,
      "sha256": "c93a391b6676409530c1c16f6c7543b789c579c2a24a67211767ee79baa2648a",
      "available": true,
      "release_url": "https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v4.8-alpha.5",
      "signals": [
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
            "de": "Speicher",
            "en": "Storage",
            "es": "Almacenamiento"
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
      "id": "guide-1.0.2-beta.20-es",
      "program": "guide",
      "version": "v1.0.2-beta.20-es",
      "channel": "beta",
      "released": "2026-11-03",
      "title": {
        "de": "Neuer Stand mit eigener Wortmarke, Farbe und Sprache kommen an.",
        "en": "New build with its own wordmark, colour and language arrive.",
        "es": "Nueva versión con marca propia, el color y el idioma llegan."
      },
      "summary": {
        "de": "Der Guide übernimmt den aktuellen Stand: Wortmarke und Projektzeichen als eigene Bilder in assets, farbige Umschalter im Kopf, Spanisch weiter ausgebaut. Die Palettennamen der Übersichtsseite werden jetzt übersetzt, sonst kam die Farbe dort nicht an. Eigene Änderungen an Farbe und Sprache gehen an die Übersichtsseite zurück.",
        "en": "The guide takes the current build: wordmark and project mark as separate images in assets, colour switches in the header, more Spanish. The palette names of the overview page are translated now, without that the colour never arrived. Changes to colour and language travel back to the overview page.",
        "es": "La guía adopta la versión actual: la marca y el distintivo del proyecto como imágenes propias en assets, selectores de color en la cabecera y más español. Los nombres de paleta de la vista general se traducen ahora, sin eso el color no llegaba. Los cambios de color e idioma vuelven a la vista general."
      },
      "file": "guide/index.html",
      "size_bytes": 7700211,
      "sha256": "24ea9d33e142c45033e2a21d598ec8b789d2ee5b26234de38b3f725f18d3744e",
      "available": true,
      "release_url": "https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v1.0.2-beta.20-es",
      "signals": [
        {
          "label": {
            "de": "Aufbau der Seite",
            "en": "Page structure",
            "es": "Estructura de la página"
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
        },
        {
          "label": {
            "de": "Sprache DE/EN",
            "en": "Language DE/EN",
            "es": "Idioma DE/EN"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "Spanisch",
            "en": "Spanish",
            "es": "Español"
          },
          "state": "pending"
        },
        {
          "label": {
            "de": "Durchsicht",
            "en": "Review",
            "es": "Revisión"
          },
          "state": "pending"
        }
      ],
      "notes": {
        "de": [
          "Wortmarke und Projektzeichen liegen als eigene Dateien in guide/assets",
          "Paletten: Ozean, Leinen, Dunkelrot, übernommen aus der Übersichtsseite",
          "95 Glossarbegriffe, direkt im Text aufrufbar",
          "Quellen und Lizenzangaben unverändert im Dokument"
        ],
        "en": [
          "Wordmark and project mark are separate files in guide/assets",
          "Palettes: ocean, linen, dark red, taken from the overview page",
          "95 glossary terms, openable straight from the text",
          "Sources and licence notices unchanged in the document"
        ],
        "es": [
          "La marca y el distintivo están como archivos propios en guide/assets",
          "Paletas: océano, lino y rojo oscuro, tomadas de la vista general",
          "95 términos de glosario, que se abren directamente en el texto",
          "Fuentes y avisos de licencia sin cambios en el documento"
        ]
      },
      "limits": {
        "de": [
          "Eine große Datei: der erste Aufruf dauert einen Moment",
          "Spanisch bleibt ungeprüfte Vorschau",
          "Werte bleiben firmware- und hardwareabhängig",
          "Sbang inhaltlich und im Ablauf unverändert lassen"
        ],
        "en": [
          "One large file: the first load takes a moment",
          "Spanish remains an unverified preview",
          "Values remain firmware and hardware dependent",
          "Leave Sbang content and sequence unchanged"
        ],
        "es": [
          "Un solo archivo grande: la primera carga tarda un momento",
          "El español sigue siendo una vista previa sin revisar",
          "Los valores dependen del firmware y del hardware",
          "No cambiar el contenido ni el orden de Sbang"
        ]
      }
    },
    {
      "id": "presets-0.2.0-beta.3",
      "program": "presets",
      "version": "v0.2.0-beta.3",
      "channel": "beta",
      "released": "2026-11-19",
      "title": {
        "de": "Copter aus dem Hangar, Farbstreifen bündig",
        "en": "Copters from the hangar, colour stripe flush",
        "es": "Copters del hangar, franja al ras"
      },
      "summary": {
        "de": "Der Preset-Bauer sammelt die Bereiche, die man gefahrlos weitergeben kann: Schalterbelegung, Beeper, OSD-Profile, Anpassungen und Raten. Am Ende steht ein CLI-Block mit save, den man kopiert, als Datei sichert oder über Web Serial in die Konsole schreibt. Vorher läuft eine Prüfung, die fehlende oder widersprüchliche Angaben einzeln nennt. PID, Filter und Motoren sind nicht Teil des Werkzeugs.",
        "en": "The preset builder collects the parts that are safe to pass on: switches, beeper, OSD profiles, adjustments and rates. It ends in a CLI block with save that you copy, save as a file or write to the console over Web Serial. A check runs first and names missing or conflicting entries one by one. PID, filters and motors are not part of the tool.",
        "es": "El creador de presets reúne las partes que se pueden pasar sin riesgo: interruptores, beeper, perfiles OSD, ajustes y rates. Termina en un bloque CLI con save que se copia, se guarda como archivo o se escribe en la consola por Web Serial. Antes corre una revisión que nombra uno por uno los datos que faltan o se contradicen. PID, filtros y motores no forman parte de la herramienta."
      },
      "file": "presets/index.html",
      "size_bytes": 223016,
      "sha256": "a2048eddeea4d23bf900b2d70359e16b4f66cc572655d3434bc84d2bf1ffa77d",
      "available": true,
      "release_url": "https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/presets-0.2.0-beta.3",
      "signals": [
        {
          "label": {
            "de": "Schalter und Beeper",
            "en": "Switches and beeper",
            "es": "Interruptores y beeper"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "OSD-Profile",
            "en": "OSD profiles",
            "es": "Perfiles OSD"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "Sprache DE/EN",
            "en": "Language DE/EN",
            "es": "Idioma DE/EN"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "Schreiben per USB",
            "en": "Writing over USB",
            "es": "Escritura por USB"
          },
          "state": "open"
        },
        {
          "label": {
            "de": "Flugtest",
            "en": "Flight test",
            "es": "Prueba de vuelo"
          },
          "state": "open"
        }
      ],
      "notes": {
        "de": [
          "Copter-Liste des Hangars wird gelesen, Name, Größe und Flight Controller übernommen",
          "Copter-Kennung bleibt am Modell, das Preset nennt sie beim Bereitstellen",
          "Farbstreifen links endet bündig an der Eckrundung"
        ],
        "en": [
          "The hangar's copter list is read, name, size and flight controller are taken over",
          "The copter id stays on the model, the published preset names it",
          "Colour stripe on the left ends flush with the rounded corner"
        ],
        "es": [
          "Se lee la lista de copters del hangar y se toman nombre, tamaño y controladora",
          "El identificador del copter queda en el modelo, el preset publicado lo nombra",
          "La franja de la izquierda termina al ras de la esquina redondeada"
        ]
      },
      "limits": {
        "de": [
          "Schreiben in die Konsole braucht Chrome, Edge oder Opera",
          "Spanisch ist übersetzt, aber nicht durchgesehen",
          "Kein PID, keine Filter, keine Motoren: dafür ist der Tuner da",
          "Über file:// kann der Browser den Speicher sperren"
        ],
        "en": [
          "Writing to the console needs Chrome, Edge or Opera",
          "Spanish is translated but not reviewed",
          "No PID, no filters, no motors: that is the tuner's job",
          "Over file:// the browser may block storage"
        ],
        "es": [
          "Escribir en la consola necesita Chrome, Edge u Opera",
          "El español está traducido pero no revisado",
          "Sin PID, sin filtros, sin motores: eso lo hace el tuner",
          "Con file:// el navegador puede bloquear el almacenamiento"
        ]
      }
    }
  ],
  "platform": {
    "id": "flowstate-fpv",
    "name": "FlowState FPV",
    "version": "1.0.0",
    "released": "2026-11-03"
  }
};

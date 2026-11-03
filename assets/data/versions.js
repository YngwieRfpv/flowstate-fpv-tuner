// Gleicher Inhalt wie versions.json, für den Betrieb ohne Server (file://) und für das ZIP-Paket.
// Nach jeder Änderung an versions.json neu erzeugen.
window.FLOWSTATE_DATA = {
  "schema": 3,
  "updated": "2026-11-03",
  "programs": [
    {
      "id": "hangar",
      "name": "HangarDeck Lite",
      "accent": "mint",
      "path": "hangar/",
      "kind": {
        "de": "Copter in einer Liste führen",
        "en": "Keep quads in one list",
        "es": "Llevar los copter en una lista"
      },
      "description": {
        "de": "Eine Liste pro Copter mit Größe, Zellen, KV, ESC, Props und Status. Export als PDF-Tabelle, CSV, Druck oder JSON, dazu ein Abgleich mit dem eigenen Repository. Alles läuft in einer Datei im Browser.",
        "en": "One list for your quads with size, cells, KV, ESC, props and status. Export as a PDF table, CSV, print or JSON, plus a sync with your own repository. Everything runs from a single file in the browser.",
        "es": "Una lista por copter con tamaño, celdas, KV, ESC, hélices y estado. Exportación como tabla PDF, CSV, impresión o JSON, además de una sincronización con tu propio repositorio. Todo funciona en un solo archivo en el navegador."
      },
      "highlights": {
        "de": [
          "Name und Größe reichen, weitere Felder bleiben optional",
          "Export als PDF-Tabelle, CSV, Druck oder JSON",
          "Abgleich über das eigene Repository, Lesen ohne Token",
          "Deutsch, Englisch und Spanisch, Ozean, Leinen und Dunkelrot"
        ],
        "en": [
          "Name and size are enough, further fields stay optional",
          "Export as a PDF table, CSV, print or JSON",
          "Sync through your own repository, reading needs no token",
          "German, English and Spanish, Ocean, Sand and Drakn"
        ],
        "es": [
          "El nombre y el tamaño bastan, los demás campos son opcionales",
          "Exportación como tabla PDF, CSV, impresión o JSON",
          "Sincronización con tu propio repositorio, lectura sin token",
          "Alemán, inglés y español, océano, lino y rojo oscuro"
        ]
      },
      "meta": {
        "de": [
          "1 Datei · 110 KB",
          "Bild, FC-Auslese, Exporte",
          "jeder moderne Browser"
        ],
        "en": [
          "1 file · 110 KB",
          "picture, controller read, exports",
          "any modern browser"
        ],
        "es": [
          "1 archivo · 110 KB",
          "imagen, lectura de la FC, exportaciones",
          "cualquier navegador actual"
        ]
      }
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
        "de": "Liest Blackbox- und Dataflash-Logs, leitet Filter- und PID-Werte ab und zeigt jeden Schritt als lesbaren CLI-Plan. Geschrieben wird über Web Serial, nur nach Sicherung und Bestätigung. Alles läuft im Browser.",
        "en": "Reads Blackbox and Dataflash logs, derives filter and PID values and shows every step as a readable CLI plan. Writes go over Web Serial, only after a backup and confirmation. Everything runs in the browser.",
        "es": "Lee registros Blackbox y Dataflash, deduce valores de filtros y PID y muestra cada paso como un plan CLI legible. La escritura va por Web Serial, solo tras una copia de seguridad y una confirmación. Todo funciona en el navegador."
      },
      "highlights": {
        "de": [
          "Sechs Phasen von Setup bis Archiv, jede mit eigenem Abschluss",
          "Sichtbarer CLI-Plan vor jedem Schreibvorgang",
          "Zielprofil-Schutz: nur das gewählte PID-Profil wird verändert",
          "Deutsch und Englisch, Ozean, Leinen und Dunkelrot"
        ],
        "en": [
          "Six phases from setup to archive, each with its own completion",
          "Visible CLI plan before every write",
          "Target-profile protection: only the selected PID profile changes",
          "German and English, Ocean, Sand and Drakn"
        ],
        "es": [
          "Seis fases desde el setup hasta el archivo, cada una con su cierre",
          "Plan CLI visible antes de cada escritura",
          "Protección del perfil objetivo: solo cambia el perfil PID elegido",
          "Alemán, inglés y español, océano, lino y rojo oscuro"
        ]
      },
      "meta": {
        "de": [
          "1 Datei · 497 KB",
          "Betaflight 4.5+",
          "Chrome / Edge / Opera"
        ],
        "en": [
          "1 file · 497 KB",
          "Betaflight 4.5+",
          "Chrome / Edge / Opera"
        ],
        "es": [
          "1 archivo · 497 KB",
          "Betaflight 4.5+",
          "Chrome / Edge / Opera"
        ]
      }
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
          "1 file · 7.7 MB",
          "DE / EN / ES",
          "mobile ready"
        ],
        "es": [
          "1 archivo · 7,7 MB",
          "DE / EN / ES",
          "también en móvil"
        ]
      }
    }
  ],
  "releases": [
    {
      "id": "hangar-0.9.2-beta.2",
      "program": "hangar",
      "version": "v0.9.2-beta.2",
      "channel": "beta",
      "released": "2026-11-03",
      "title": {
        "de": "Neuer Stand aus der App, Farbe und Sprache kommen jetzt an.",
        "en": "New app build, colour and language now arrive.",
        "es": "Nueva versión de la aplicación, el color y el idioma llegan."
      },
      "summary": {
        "de": "HangarDeck Lite übernimmt den aktuellen Stand der App: Copter mit Bild, Auslesen des Flight Controllers über USB, CLI-Text, Betaflight-Backup pro Modell, Empfänger, Videosystem und Akku. Spanisch ist jetzt dabei. Farbe und Sprache kommen aus der Adresse und aus der Übersichtsseite und werden dorthin zurückgemeldet.",
        "en": "HangarDeck Lite takes the current app build: quads with a picture, reading the flight controller over USB, CLI text, a Betaflight backup per model, receiver, video system and battery. Spanish is in. Colour and language come from the address and from the overview page, and are reported back there.",
        "es": "HangarDeck Lite adopta la versión actual de la aplicación: copter con imagen, lectura de la controladora por USB, texto CLI, copia de Betaflight por modelo, receptor, sistema de vídeo y batería. El español ya está incluido. El color y el idioma llegan desde la dirección y desde la vista general, y se devuelven allí."
      },
      "file": "hangar/index.html",
      "size_bytes": 112243,
      "sha256": "0ec1c6c6f97375e092f136d644c7b96af4d2754befd46746cde02502badb2709",
      "available": true,
      "release_url": "https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v0.9.2-beta.2",
      "signals": [
        {
          "label": {
            "de": "Flotte",
            "en": "Fleet",
            "es": "Flota"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "CLI-Import",
            "en": "CLI import",
            "es": "Importación CLI"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "Auslese am FC",
            "en": "Reading a controller",
            "es": "Lectura en la FC"
          },
          "state": "pending"
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
            "de": "Datenexport",
            "en": "Data export",
            "es": "Exportación de datos"
          },
          "state": "ok"
        }
      ],
      "notes": {
        "de": [
          "Copter mit Bild, Bild wird vor dem Speichern verkleinert und bleibt lokal",
          "FC auslesen über USB oder CLI-Text einfügen, mit Abgleich des Targets vor der Sicherung",
          "Export als PDF, CSV, Druck, JSON und HTML-Backup",
          "Abgleich mit dem eigenen Repository über updatedAt und Grabsteine"
        ],
        "en": [
          "Quads with a picture, shrunk before saving and kept local",
          "Read the flight controller over USB or paste CLI text, with a target check before the backup",
          "Export as PDF, CSV, print, JSON and HTML backup",
          "Sync with your own repository through updatedAt and tombstones"
        ],
        "es": [
          "Copter con imagen, reducida antes de guardar y guardada en local",
          "Leer la controladora por USB o pegar texto CLI, con comprobación del target antes de la copia",
          "Exportación como PDF, CSV, impresión, JSON y copia HTML",
          "Sincronización con tu propio repositorio mediante updatedAt y lápidas"
        ]
      },
      "limits": {
        "de": [
          "Auslesen am Flight Controller setzt Chrome, Edge oder Opera voraus",
          "Daten liegen im localStorage dieses Browsers",
          "Spanisch ist übersetzt, aber nicht durchgesehen",
          "Bilder bleiben im Browser, nicht im Repository"
        ],
        "en": [
          "Reading the controller requires Chrome, Edge or Opera",
          "Data lives in this browser's localStorage",
          "Spanish is translated but not reviewed",
          "Pictures stay in the browser, not in the repository"
        ],
        "es": [
          "Leer la controladora requiere Chrome, Edge u Opera",
          "Los datos están en el localStorage de este navegador",
          "El español está traducido, pero sin revisar",
          "Las imágenes se quedan en el navegador, no en el repositorio"
        ]
      }
    },
    {
      "id": "tuner-4.8-alpha.4",
      "program": "tuner",
      "version": "v4.8-alpha.4",
      "channel": "alpha",
      "released": "2026-11-02",
      "title": {
        "de": "Farbe kommt aus der Adresse und aus dem zweiten Fenster.",
        "en": "Colour comes in the address and from the second window.",
        "es": "El color llega por la dirección y desde la segunda ventana."
      },
      "summary": {
        "de": "Der Tuner liest die Palette auch aus der Adresse (`?theme=`) und zieht nach, wenn in einem anderen Fenster eine Farbe gewählt wird. Im Umschalter steht er jetzt zwischen HangarDeck und Guide. Der Ablauf der sechs Phasen ist unverändert, an echter Hardware und im Flug weiterhin nicht getestet.",
        "en": "The tuner also reads the palette from the address (`?theme=`) and follows a colour picked in another window. In the switch it now sits between HangarDeck and guide. The six phases are unchanged, still not tested on real hardware or in flight.",
        "es": "El tuner también lee la paleta de la dirección (`?theme=`) y la sigue cuando en otra ventana se elige un color. En el selector está ahora entre HangarDeck y Guide. El desarrollo de las seis fases no cambia y sigue sin probarse en hardware real ni en vuelo."
      },
      "file": "tuner/index.html",
      "size_bytes": 496882,
      "sha256": "ddb1d06a840d99e4c19d823c6d7201017f0ee4da33cebe91a395e9f19fdd5e8a",
      "available": true,
      "release_url": "https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v4.8-alpha.4",
      "signals": [
        {
          "label": {
            "de": "Log-Analyse",
            "en": "Log analysis",
            "es": "Análisis de registros"
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
            "de": "Verbindung zum FC",
            "en": "Connection to FC",
            "es": "Conexión a la FC"
          },
          "state": "pending"
        },
        {
          "label": {
            "de": "Flugtest",
            "en": "Flight test",
            "es": "Prueba en vuelo"
          },
          "state": "pending"
        }
      ],
      "notes": {
        "de": [
          "Ein Eintrag für alle Programme: flowstate-theme trägt ocean, sand und drakn",
          "Alte Werte dark, light und cream werden weiter gelesen",
          "Die Farbe reist zusätzlich als ?theme= in der Adresse mit",
          "Filter-, P/D-, Master- und Finish-Phase arbeiten auf demselben Log-Satz",
          "Importierte Logs behalten ihre Herkunft; fehlende Werte bleiben UNBEKANNT",
          "Mehrere Flüge in einem Log werden als getrennte Segmente geführt",
          "Plan, Manifest und Roh-Logs lassen sich jederzeit exportieren"
        ],
        "en": [
          "One entry for all programs: flowstate-theme carries ocean, sand and drakn",
          "Old values dark, light and cream are still read",
          "The colour also travels in the address as ?theme=",
          "Filter, P/D, master and finish phases work on the same log set",
          "Imported logs keep their origin; missing values stay UNKNOWN",
          "Multiple flights in one log are kept as separate segments",
          "Plan, manifest and raw logs can be exported at any time"
        ],
        "es": [
          "Una entrada para todos los programas: flowstate-theme lleva ocean, sand y drakn",
          "Los valores antiguos dark, light y cream se siguen leyendo",
          "El color viaja además como ?theme= en la dirección",
          "Las fases de filtro, P/D, master y finish trabajan sobre el mismo conjunto de registros",
          "Los registros importados conservan su origen, los valores ausentes quedan como DESCONOCIDO",
          "Varios vuelos en un registro se llevan como segmentos separados",
          "El plan, el manifiesto y los registros en bruto se pueden exportar en cualquier momento"
        ]
      },
      "limits": {
        "de": [
          "Verbindungstest mit echtem Flight Controller steht aus",
          "Schreiben nur mit Betaflight 4.5 oder neuer",
          "Tuning ersetzt keine mechanische Kontrolle",
          "Props ab für alle Arbeiten am USB-verbundenen Copter"
        ],
        "en": [
          "Connection test with a real flight controller is pending",
          "Writing requires Betaflight 4.5 or newer",
          "Tuning does not replace mechanical inspection",
          "Remove props for all work on the USB-connected craft"
        ],
        "es": [
          "La prueba de conexión con una controladora real sigue pendiente",
          "Escritura solo con Betaflight 4.5 o más nuevo",
          "El ajuste no sustituye una revisión mecánica",
          "Quita las hélices para cualquier trabajo en el copter conectado por USB"
        ]
      }
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
    }
  ]
};

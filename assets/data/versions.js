// Gleicher Inhalt wie versions.json, für den Betrieb ohne Server (file://) und für das ZIP-Paket.
// Nach jeder Änderung an versions.json neu erzeugen.
window.FLOWSTATE_DATA = {
  "schema": 4,
  "updated": "2026-11-03",
  "programs": [
    {
      "id": "hangar",
      "name": "HangarDeck Lite",
      "accent": "mint",
      "path": "hangar/",
      "kind": {
        "de": "Copter, Presets und Sicherungen an einem Ort",
        "en": "Quads, presets and backups in one place",
        "es": "Copter, presets y copias en un solo lugar"
      },
      "description": {
        "de": "Eine Liste pro Copter mit Bild, Größe, Zellen, KV, ESC, Props und Status. Auf Wunsch liest sie den Flight Controller über USB aus und legt ein Betaflight-Backup je Modell ab. Presets für Schalter, Beeper und OSD lassen sich einlesen, ohne PID oder Filter mitzunehmen. Die Liste geht als Code oder Link weiter. Export als PDF-Tabelle, CSV, Druck, JSON und HTML-Backup, das sich wieder einlesen lässt.",
        "en": "One list for your quads with a picture, size, cells, KV, ESC, props and status. On request it reads the flight controller over USB and keeps a Betaflight backup per model. Presets for switches, beeper and OSD can be loaded without dragging PIDs or filters along. The list can be passed on as a code or a link. Export as a PDF table, CSV, print, JSON and an HTML backup that can be read back in.",
        "es": "Una lista por copter con imagen, tamaño, celdas, KV, ESC, hélices y estado. Si quieres, lee la controladora por USB y guarda una copia de Betaflight por modelo. Los presets de interruptores, beeper y OSD se cargan sin arrastrar PID ni filtros. La lista se puede pasar como código o enlace. Exportación como tabla PDF, CSV, impresión, JSON y copia HTML que se puede volver a cargar."
      },
      "highlights": {
        "de": [
          "Name und Größe reichen, Bild und weitere Felder bleiben optional",
          "Presets für Schalter, Beeper und OSD, ohne PID und Filter",
          "Flight Controller über USB auslesen oder CLI-Text einfügen",
          "Liste als Code oder Link weitergeben, Bilder bleiben auf dem Gerät",
          "Export als PDF-Tabelle, CSV, Druck, JSON und HTML-Backup",
          "Deutsch, Englisch und Spanisch, Ozean, Sand und Drakn"
        ],
        "en": [
          "Name and size are enough, picture and further fields stay optional",
          "Presets for switches, beeper and OSD, without PIDs and filters",
          "Read the flight controller over USB or paste CLI text",
          "Pass the list on as a code or link, photos stay on the device",
          "Export as a PDF table, CSV, print, JSON and an HTML backup",
          "German, English and Spanish, Ocean, Sand and Drakn"
        ],
        "es": [
          "El nombre y el tamaño bastan, la imagen y los demás campos son opcionales",
          "Presets de interruptores, beeper y OSD, sin PID ni filtros",
          "Leer la controladora por USB o pegar texto CLI",
          "Pasar la lista como código o enlace, las fotos se quedan en el dispositivo",
          "Exportación como tabla PDF, CSV, impresión, JSON y copia HTML",
          "Alemán, inglés y español, océano, lino y rojo oscuro"
        ]
      },
      "meta": {
        "de": [
          "1 Datei · 156 KB",
          "Bild, Presets, FC-Auslese",
          "jeder moderne Browser"
        ],
        "en": [
          "1 file · 156 KB",
          "picture, presets, controller read",
          "any modern browser"
        ],
        "es": [
          "1 archivo · 156 KB",
          "imagen, presets, lectura de la FC",
          "cualquier navegador actual"
        ]
      },
      "enabled": true,
      "entry": "index.html",
      "pack": "hangar/HangarDeck-Lite.html",
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
          "1 file · 7.7 MB",
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
    }
  ],
  "releases": [
    {
      "id": "hangar-0.9.6-beta.1",
      "program": "hangar",
      "version": "v0.9.6-beta.1",
      "channel": "beta",
      "released": "2026-11-03",
      "title": {
        "de": "Neuer Stand: Presets für Schalter, Beeper und OSD",
        "en": "New build: presets for switches, beeper and OSD",
        "es": "Nueva versión: presets para interruptores, beeper y OSD"
      },
      "summary": {
        "de": "HangarDeck Lite übernimmt den Stand 0.9.6. Neu sind Presets für die drei Bereiche, bei denen eine fremde Vorlage keinen Copter kippen kann: Schalter, Beeper und OSD. Beim Einlesen wird jede Zeile geprüft, PID, Filter und Motoren kommen nicht durch. Dazu das gespeicherte OSD als Raster und eigene Presets, die im HTML-Backup mitreisen. Unverändert: Übertragen per Code oder Link, Flight Controller über USB auslesen, Betaflight-Backup je Modell, Export als PDF, CSV, Druck, JSON und HTML.",
        "en": "HangarDeck Lite takes the 0.9.6 build. New are presets for the three areas where a foreign template cannot tip a quad over: switches, beeper and OSD. Every line is checked on load, PIDs, filters and motors do not get through. Also the stored OSD as a grid and your own presets that travel inside the HTML backup. Unchanged: transfer as a code or link, reading the flight controller over USB, a Betaflight backup per model, export as PDF, CSV, print, JSON and HTML.",
        "es": "HangarDeck Lite adopta la versión 0.9.6. Lo nuevo son los presets para las tres áreas donde una plantilla ajena no puede volcar un copter: interruptores, beeper y OSD. Cada línea se comprueba al cargar, PID, filtros y motores no pasan. Además el OSD guardado como rejilla y presets propios que viajan en la copia HTML. Sin cambios: traspaso como código o enlace, lectura de la controladora por USB, copia de Betaflight por modelo, exportación como PDF, CSV, impresión, JSON y HTML."
      },
      "file": "hangar/index.html",
      "size_bytes": 155603,
      "sha256": "5aa0ac2ca1da32ece127104819218be0f9709a2fecd7ae34653158859e055d95",
      "available": true,
      "release_url": "https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v0.9.6-beta.1",
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
            "de": "Presets",
            "en": "Presets",
            "es": "Presets"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "OSD-Raster",
            "en": "OSD grid",
            "es": "Rejilla OSD"
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
            "de": "Spanisch",
            "en": "Spanish",
            "es": "Español"
          },
          "state": "pending"
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
          "Presets für Schalter, Beeper und OSD, alles andere bleibt draußen",
          "Copter mit Bild, FC auslesen über USB oder CLI-Text einfügen",
          "Export als PDF, CSV, Druck, JSON und HTML-Backup",
          "Sicherung als JSON oder HTML, die sich wieder einlesen lässt",
          "Liste als Code oder Link weitergeben, Bilder bleiben auf dem Gerät",
          "CLI-Datei direkt auf die Karte ziehen"
        ],
        "en": [
          "Presets for switches, beeper and OSD, everything else stays out",
          "Quads with a picture, read the controller over USB or paste CLI text",
          "Export as PDF, CSV, print, JSON and HTML backup",
          "A JSON or HTML backup that can be read back in",
          "Pass the list on as a code or link, photos stay on the device",
          "Drop a CLI file straight onto the card"
        ],
        "es": [
          "Presets de interruptores, beeper y OSD, todo lo demás se queda fuera",
          "Copter con imagen, leer la controladora por USB o pegar texto CLI",
          "Exportación como PDF, CSV, impresión, JSON y copia HTML",
          "Copia en JSON o HTML que se puede volver a cargar",
          "Pasar la lista como código o enlace, las fotos se quedan en el dispositivo",
          "Soltar un archivo CLI directamente en la tarjeta"
        ]
      },
      "limits": {
        "de": [
          "Auslesen am Flight Controller setzt Chrome, Edge oder Opera voraus",
          "Daten liegen im localStorage dieses Browsers",
          "Spanisch ist übersetzt, aber nicht durchgesehen",
          "Eigene Presets reisen im HTML-Backup mit, nicht im Übertragungscode",
          "Weitergeben per Link geht nur über http(s), nicht bei einer Datei aus dem Ordner"
        ],
        "en": [
          "Reading the controller requires Chrome, Edge or Opera",
          "Data lives in this browser's localStorage",
          "Spanish is translated but not reviewed",
          "Own presets travel inside the HTML backup, not in the transfer code",
          "Passing the list on by link needs http(s), not a file from a folder"
        ],
        "es": [
          "Leer la controladora requiere Chrome, Edge u Opera",
          "Los datos están en el localStorage de este navegador",
          "El español está traducido, pero sin revisar",
          "Los presets propios viajan en la copia HTML, no en el código de traspaso",
          "Pasar la lista por enlace requiere http(s), no un archivo de la carpeta"
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
  ],
  "platform": {
    "id": "flowstate-fpv",
    "name": "FlowState FPV",
    "version": "1.0.0",
    "released": "2026-11-03"
  }
};

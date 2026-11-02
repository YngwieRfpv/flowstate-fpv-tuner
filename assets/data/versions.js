// Gleicher Inhalt wie versions.json, für den Betrieb ohne Server (file://) und für das ZIP-Paket.
// Nach jeder Änderung an versions.json neu erzeugen.
window.FLOWSTATE_DATA = {
  "schema": 3,
  "updated": "2026-11-02",
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
          "Deutsch und Englisch, Ozean, Leinen und Dunkelrot"
        ],
        "en": [
          "Name and size are enough, further fields stay optional",
          "Export as a PDF table, CSV, print or JSON",
          "Sync through your own repository, reading needs no token",
          "German and English, Ocean, Sand and Drakn"
        ],
        "es": [
          "El nombre y el tamaño bastan, los demás campos son opcionales",
          "Exportación como tabla PDF, CSV, impresión o JSON",
          "Sincronización con tu propio repositorio, lectura sin token",
          "Alemán e inglés, océano, lino y rojo oscuro"
        ]
      },
      "meta": {
        "de": [
          "1 Datei · 65 KB",
          "4 Felder Pflicht, 7 optional",
          "jeder moderne Browser"
        ],
        "en": [
          "1 file · 65 KB",
          "4 required fields, 7 optional",
          "any modern browser"
        ],
        "es": [
          "1 archivo · 65 KB",
          "4 campos obligatorios, 7 opcionales",
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
      "id": "hangar-0.4.0-beta.3",
      "program": "hangar",
      "version": "v0.4.0-beta.3",
      "channel": "beta",
      "released": "2026-11-02",
      "title": {
        "de": "Farbe kommt aus der Adresse, erster Platz im Umschalter.",
        "en": "Colour comes in the address, first place in the switch.",
        "es": "El color llega por la dirección, primer puesto en el selector."
      },
      "summary": {
        "de": "HangarDeck Lite liest die Palette zusätzlich aus der Adresse (`?theme=`) und zieht nach, wenn in einem anderen Fenster eine Farbe gewählt wird. In der Übersicht steht es jetzt an erster Stelle: HangarDeck, Tuner, Guide. Liste, Exporte und Abgleich sind unverändert.",
        "en": "HangarDeck Lite also reads the palette from the address (`?theme=`) and follows a colour picked in another window. In the overview it now comes first: HangarDeck, tuner, guide. List, exports and sync are unchanged.",
        "es": "HangarDeck Lite también lee la paleta de la dirección (`?theme=`) y la sigue cuando en otra ventana se elige un color. En la vista general ocupa ahora el primer puesto: HangarDeck, Tuner, Guide. La lista, las exportaciones y la sincronización no cambian."
      },
      "file": "hangar/index.html",
      "size_bytes": 65431,
      "sha256": "c0651cba657ffe27398aa01b7518f56c6234508c81f3d4c3703c51aaa5f5b75e",
      "available": true,
      "release_url": "https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v0.4.0-beta.3",
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
          "MSP v1 liefert Identität, Sensormaske und Motorkonfiguration, aber keinen Gyro-Chip",
          "Import liest diff all, status und version",
          "Ohne angeschlossenen FC lässt sich der Ablauf mit Beispieldaten prüfen",
          "JSON-Export vor Browserwechsel oder Reinigung"
        ],
        "en": [
          "MSP v1 returns identity, sensor mask and motor configuration but no gyro chip",
          "Import reads diff all, status and version",
          "Without a controller the workflow can be tried with sample data",
          "Export JSON before changing browsers or clearing data"
        ],
        "es": [
          "MSP v1 devuelve identidad, máscara de sensores y configuración de motores, pero no el chip del giroscopio",
          "La importación lee diff all, status y version",
          "Sin una FC conectada el procedimiento se puede probar con datos de ejemplo",
          "Exporta JSON antes de cambiar de navegador o de limpiar los datos"
        ]
      },
      "limits": {
        "de": [
          "Palette kommt aus der Wahl der Übersichtsseite oder aus `?theme=`",
          "Deutsch und Englisch, kein Spanisch",
          "Auslese an echter Hardware steht aus",
          "Daten liegen nur im localStorage dieses Browsers"
        ],
        "en": [
          "Palette comes from the overview choice or from `?theme=`",
          "German and English, no Spanish",
          "Reading from real hardware is pending",
          "Data lives only in this browser's localStorage"
        ],
        "es": [
          "La paleta viene de la elección en la vista general o de `?theme=`",
          "Alemán e inglés, sin español",
          "La lectura en hardware real sigue pendiente",
          "Los datos solo viven en el localStorage de este navegador"
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
      "id": "guide-1.0.2-beta.12-es",
      "program": "guide",
      "version": "v1.0.2-beta.12-es",
      "channel": "beta",
      "released": "2026-11-02",
      "title": {
        "de": "Farbe kommt aus der Adresse, dritter Platz im Umschalter.",
        "en": "Colour comes in the address, third place in the switch.",
        "es": "El color llega por la dirección, tercer puesto en el selector."
      },
      "summary": {
        "de": "Der Guide liest die Palette auch aus der Adresse (`?theme=`) und zieht nach, wenn in einem anderen Fenster eine Farbe gewählt wird. In der Übersicht steht er jetzt an dritter Stelle: HangarDeck, Tuner, Guide. Inhalt, Werte, Quellen und der Sbang-Ablauf sind unverändert, Spanisch bleibt ungeprüfte Vorschau.",
        "en": "The guide also reads the palette from the address (`?theme=`) and follows a colour picked in another window. In the overview it now comes third: HangarDeck, tuner, guide. Content, values, sources and the Sbang workflow are unchanged, Spanish remains an unverified preview.",
        "es": "La guía también lee la paleta de la dirección (`?theme=`) y la sigue cuando en otra ventana se elige un color. En la vista general ocupa ahora el tercer puesto: HangarDeck, Tuner, Guide. El contenido, los valores, las fuentes y el procedimiento Sbang no cambian; el español sigue siendo una vista previa sin revisar."
      },
      "file": "guide/index.html",
      "size_bytes": 7682974,
      "sha256": "42c84cfaa3af61248e4e91434d6c43f35be040fd330caa3ba8576673731ff178",
      "available": true,
      "release_url": "https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v1.0.2-beta.12-es",
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
          "Simple Tuning als gerader Einstieg, Advanced Tuning für Feinarbeit",
          "Build-Guide prüft die Basis, bevor getunt wird",
          "Copterprofil steuert Werte, Tabellen und Checklisten",
          "Sbang ist ein geführter Ablauf in sechs Schritten"
        ],
        "en": [
          "Simple tuning as a straight entry, advanced tuning for detail work",
          "The build guide checks the foundation before tuning starts",
          "The quad profile drives values, tables and checklists",
          "Sbang is a guided workflow in six steps"
        ],
        "es": [
          "Simple tuning como entrada directa, advanced tuning para el trabajo fino",
          "La guía de montaje revisa la base antes de ajustar",
          "El perfil del copter determina los valores, las tablas y las listas de comprobación",
          "Sbang es un procedimiento guiado en seis pasos"
        ]
      },
      "limits": {
        "de": [
          "Betaflight- und ESC-Werte bleiben firmware- und hardwareabhängig",
          "Eine große Datei: der erste Aufruf dauert einen Moment",
          "Sbang inhaltlich und im Ablauf unverändert lassen",
          "Quellen- und Lizenzangaben im Dokument nicht entfernen"
        ],
        "en": [
          "Betaflight and ESC values remain firmware and hardware dependent",
          "One large file: the first load takes a moment",
          "Leave Sbang content and sequence unchanged",
          "Do not remove source or licence notices inside the document"
        ],
        "es": [
          "Los valores de Betaflight y ESC dependen del firmware y del hardware",
          "Un solo archivo grande: la primera carga tarda un momento",
          "No cambiar el contenido ni el orden de Sbang",
          "No quitar los avisos de fuentes y licencias del documento"
        ]
      }
    }
  ]
};

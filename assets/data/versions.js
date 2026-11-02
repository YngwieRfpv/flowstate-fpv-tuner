// Gleicher Inhalt wie versions.json, für den Betrieb ohne Server (file://) und für das ZIP-Paket.
// Nach jeder Änderung an versions.json neu erzeugen.
window.FLOWSTATE_DATA = {
  "schema": 3,
  "updated": "2026-11-02",
  "programs": [
    {
      "id": "tuner",
      "name": "FlowState Tuner",
      "accent": "mint",
      "path": "tuner/",
      "kind": {
        "de": "Tuning aus Blackbox-Logs",
        "en": "Tuning from blackbox logs"
      },
      "description": {
        "de": "Liest Blackbox- und Dataflash-Logs, leitet Filter- und PID-Werte ab und zeigt jeden Schritt als lesbaren CLI-Plan. Geschrieben wird über Web Serial, nur nach Sicherung und Bestätigung. Alles läuft im Browser.",
        "en": "Reads Blackbox and Dataflash logs, derives filter and PID values and shows every step as a readable CLI plan. Writes go over Web Serial, only after a backup and confirmation. Everything runs in the browser."
      },
      "highlights": {
        "de": [
          "Sechs Phasen von Setup bis Archiv, jede mit eigenem Abschluss",
          "Sichtbarer CLI-Plan vor jedem Schreibvorgang",
          "Zielprofil-Schutz: nur das gewählte PID-Profil wird verändert",
          "Deutsch und Englisch, hell, dunkel und creme"
        ],
        "en": [
          "Six phases from setup to archive, each with its own completion",
          "Visible CLI plan before every write",
          "Target-profile protection: only the selected PID profile changes",
          "German and English, light, dark and cream"
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
        "en": "Look things up and rebuild step by step"
      },
      "description": {
        "de": "Führt vom ersten Build bis zum Feintuning: Simple Tuning, Advanced Tuning, Build-Guide, 95 Glossarbegriffe mit Quellen und der vollständige Sbang-Ablauf. Mit Profilauswahl für Coptergröße, Frame, Taktrate und Firmware.",
        "en": "Leads from the first build to fine tuning: simple tuning, advanced tuning, build guide, 95 glossary terms with sources and the full Sbang workflow. With profile selection for quad size, frame, loop rate and firmware."
      },
      "highlights": {
        "de": [
          "Acht Bereiche von der Startseite bis zur Linkliste",
          "95 Glossarbegriffe, direkt im Text aufrufbar",
          "Werte und Tabellen folgen deinem Copterprofil",
          "Workspace als Datei sichern und später wieder laden"
        ],
        "en": [
          "Eight sections from the home page to the link list",
          "95 glossary terms, openable straight from the text",
          "Values and tables follow your quad profile",
          "Save the workspace as a file and load it later"
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
        ]
      }
    },
    {
      "id": "hangar",
      "name": "HangarDeck",
      "accent": "mint",
      "path": "hangar/",
      "kind": {
        "de": "Copter und Flight Controller verwalten",
        "en": "Manage quads and flight controllers"
      },
      "description": {
        "de": "Führt die Flotte und die FC-Bibliothek, liest Betaflight- oder INAV-Controller über Web Serial aus oder importiert CLI-Dumps. Daten liegen als JSON im Browser und lassen sich jederzeit exportieren.",
        "en": "Keeps the fleet and the FC library, reads Betaflight or INAV controllers over Web Serial or imports CLI dumps. Data stays in the browser as JSON and can be exported at any time."
      },
      "highlights": {
        "de": [
          "Flotte mit Filter, Suche und Bestandsliste",
          "FC auslesen per MSP oder CLI-Dump einlesen",
          "Prüfregeln zu Klasse, KV, Props und Wartung",
          "Export als JSON, CSV und Markdown-Bericht"
        ],
        "en": [
          "Fleet with filters, search and a table view",
          "Read a controller over MSP or import a CLI dump",
          "Checks on class, KV, props and maintenance",
          "Export as JSON, CSV and a Markdown report"
        ]
      },
      "meta": {
        "de": [
          "1 Datei · 112 KB",
          "Betaflight, INAV",
          "Web Serial in Chrome / Edge / Opera"
        ],
        "en": [
          "1 file · 112 KB",
          "Betaflight, INAV",
          "Web Serial in Chrome / Edge / Opera"
        ]
      }
    }
  ],
  "releases": [
    {
      "id": "hangar-0.1.0-beta.2",
      "program": "hangar",
      "version": "v0.1.0-beta.2",
      "channel": "beta",
      "released": "2026-11-02",
      "title": {
        "de": "Akzentfarbe folgt der Übersichtsseite.",
        "en": "The accent colour follows the overview page."
      },
      "summary": {
        "de": "HangarDeck hat eine dunkle Palette mit wählbarer Akzentfarbe und nimmt aus der Farbwahl des Hubs den passenden Ton: Ozean cyan, Leinen amber, Dunkelrot violett. Ohne Wahl im Hub bleibt Grün.",
        "en": "HangarDeck has one dark palette with a selectable accent and takes the matching tone from the hub choice: ocean cyan, sand amber, drakn violet. Without a choice in the hub it stays green."
      },
      "file": "hangar/index.html",
      "size_bytes": 112090,
      "sha256": "500cda43df1c14e05fd5af3c260074f1173d0cf6ae696722635bd3fee880d406",
      "available": true,
      "release_url": "https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v0.1.0-beta.2",
      "signals": [
        {
          "label": {
            "de": "Flotte",
            "en": "Fleet"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "CLI-Import",
            "en": "CLI import"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "Auslese am FC",
            "en": "Reading a controller"
          },
          "state": "pending"
        },
        {
          "label": {
            "de": "Sprache DE/EN",
            "en": "Language DE/EN"
          },
          "state": "pending"
        },
        {
          "label": {
            "de": "Datenexport",
            "en": "Data export"
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
        ]
      },
      "limits": {
        "de": [
          "Eine dunkle Palette; die Farbwahl des Hubs steuert nur den Akzent",
          "Oberfläche derzeit nur auf Deutsch",
          "Auslese an echter Hardware steht aus",
          "Daten liegen nur im localStorage dieses Browsers"
        ],
        "en": [
          "One dark palette; the hub choice only drives the accent",
          "Interface currently German only",
          "Reading from real hardware is pending",
          "Data lives only in this browser's localStorage"
        ]
      }
    },
    {
      "id": "tuner-4.8-alpha.2",
      "program": "tuner",
      "version": "v4.8-alpha.2",
      "channel": "alpha",
      "released": "2026-11-02",
      "title": {
        "de": "Farbwahl folgt jetzt der Übersichtsseite.",
        "en": "The colour choice now follows the overview page."
      },
      "summary": {
        "de": "Übernimmt beim Start die Palette der Übersichtsseite und schreibt eine Änderung im Kopf in denselben Eintrag zurück. Im Fuß und im CLI-Kommentar steht die Versionsnummer 4.8-alpha.2. An echter Hardware und im Flug weiterhin nicht getestet.",
        "en": "Takes the palette from the overview page at start and writes a header change back to the same entry. The footer and the CLI comment show version 4.8-alpha.2. Still not tested on real hardware or in flight."
      },
      "file": "tuner/index.html",
      "size_bytes": 496561,
      "sha256": "38cfae5db2dd3f460bd0116d40ca3298dae51b2c89fb3ca1b8306c77e96bd418",
      "available": true,
      "release_url": "https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v4.8-alpha.2",
      "signals": [
        {
          "label": {
            "de": "Log-Analyse",
            "en": "Log analysis"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "Sprache DE/EN",
            "en": "Language DE/EN"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "Spanisch",
            "en": "Spanish"
          },
          "state": "pending"
        },
        {
          "label": {
            "de": "Verbindung zum FC",
            "en": "Connection to FC"
          },
          "state": "pending"
        },
        {
          "label": {
            "de": "Flugtest",
            "en": "Flight test"
          },
          "state": "pending"
        }
      ],
      "notes": {
        "de": [
          "Ein Eintrag für alle Programme: flowstate-theme trägt ocean, sand und drakn",
          "Alte Werte dark, light und cream werden weiter gelesen",
          "Filter-, P/D-, Master- und Finish-Phase arbeiten auf demselben Log-Satz",
          "Importierte Logs behalten ihre Herkunft; fehlende Werte bleiben UNBEKANNT",
          "Mehrere Flüge in einem Log werden als getrennte Segmente geführt",
          "Plan, Manifest und Roh-Logs lassen sich jederzeit exportieren"
        ],
        "en": [
          "One entry for all programs: flowstate-theme carries ocean, sand and drakn",
          "Old values dark, light and cream are still read",
          "Filter, P/D, master and finish phases work on the same log set",
          "Imported logs keep their origin; missing values stay UNKNOWN",
          "Multiple flights in one log are kept as separate segments",
          "Plan, manifest and raw logs can be exported at any time"
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
        ]
      }
    },
    {
      "id": "guide-1.0.2-beta.1-es",
      "program": "guide",
      "version": "v1.0.2-beta.1-es",
      "channel": "beta",
      "released": "2026-11-02",
      "title": {
        "de": "Übernimmt die Farbwahl der Übersichtsseite.",
        "en": "Takes over the colour choice of the overview page."
      },
      "summary": {
        "de": "Beim Öffnen liest der Guide den Eintrag flowstate-theme: Ozean öffnet die dunkle Palette, Leinen die helle. Ein eigenes Dunkelrot gibt es im Guide nicht, deshalb bleibt Dunkelrot dort dunkel. Inhalt, Werte, Quellen und der Sbang-Ablauf sind unverändert, Spanisch bleibt ungeprüfte Vorschau.",
        "en": "On load the guide reads flowstate-theme: ocean opens the dark palette, sand the light one. The guide has no dark red of its own, so drakn stays dark there. Content, values, sources and the Sbang workflow are unchanged, Spanish remains an unverified preview."
      },
      "file": "guide/index.html",
      "size_bytes": 7663821,
      "sha256": "796ec978e462857667f25cb61fff0912379ae6ffbd1712b0223002ac14665674",
      "available": true,
      "release_url": "https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v1.0.2-beta.1-es",
      "signals": [
        {
          "label": {
            "de": "Aufbau der Seite",
            "en": "Page structure"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "Glossar",
            "en": "Glossary"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "Sprache DE/EN",
            "en": "Language DE/EN"
          },
          "state": "ok"
        },
        {
          "label": {
            "de": "Spanisch",
            "en": "Spanish"
          },
          "state": "pending"
        },
        {
          "label": {
            "de": "Durchsicht",
            "en": "Review"
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
        ]
      }
    }
  ]
};

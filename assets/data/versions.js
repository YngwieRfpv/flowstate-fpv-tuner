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
      "id": "presets-0.2.0-beta.5",
      "program": "presets",
      "version": "v0.2.0-beta.5",
      "channel": "beta",
      "released": "2026-11-20",
      "title": {
        "de": "Schrift und Hinweise aufgeräumt",
        "en": "Fonts and hints tidied up",
        "es": "Fuentes y avisos ordenados"
      },
      "summary": {
        "de": "Der Preset-Bauer nutzt dieselben zwei Schriftstapel wie die übrigen Werkzeuge, die Hinweise bleiben im Ton sachlich. Am CLI-Ausgang und an den Daten ändert sich nichts.",
        "en": "The preset builder uses the same two font stacks as the other tools, and the hints stay matter-of-fact. Nothing changes in the CLI output or the data.",
        "es": "El generador de presets usa las mismas dos pilas de fuentes que las demás herramientas y los avisos mantienen un tono sobrio. La salida CLI y los datos no cambian."
      },
      "file": "presets/index.html",
      "size_bytes": 223188,
      "sha256": "ff3e0229f15f636e726a6bf596cd45482dd1df6021d7545bf36da8ce6d7c675e",
      "available": true,
      "release_url": "https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/presets-v0.2.0-beta.5",
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
      "id": "osd-0.1.0-beta.6",
      "program": "osd",
      "version": "v0.1.0-beta.6",
      "channel": "beta",
      "released": "2026-11-20",
      "title": {
        "de": "Eine Schriftangabe für die Oberfläche",
        "en": "One font definition for the interface",
        "es": "Una definición de fuente para la interfaz"
      },
      "summary": {
        "de": "Die Oberfläche des OSD-Editors holt ihre Schriften jetzt aus einer Variablen, die auf denselben Stapel zeigt wie die übrigen Werkzeuge. Fonts, Logo und Raster bleiben, wie sie waren.",
        "en": "The OSD editor interface now takes its fonts from a single variable that points at the same stack as the other tools. Fonts, logo and grid stay as they were.",
        "es": "La interfaz del editor OSD toma ahora sus fuentes de una variable que apunta a la misma pila que las otras herramientas. Las fuentes, el logo y la rejilla siguen igual."
      },
      "file": "osd/index.html",
      "size_bytes": 4273720,
      "sha256": "2d435e2870a90819306c9820b7deed7bc65476c7a7ea2b774a87ef2bede05341",
      "available": true,
      "release_url": "https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/osd-v0.1.0-beta.6",
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
    "version": "1.1.1",
    "released": "2026-11-20"
  }
};

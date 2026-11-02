// Kleiner Markdown-Umsetzer für die README im Gesamtpaket.
// Deckt ab, was in der README vorkommt: Überschriften, Absätze, Listen, Tabellen,
// Code-Blöcke, Trennlinien, fett, kursiv, Code im Text und Verweise.
// Kein CDN, keine Abhängigkeit, keine Netzverbindung.

window.FLOWSTATE_MD = (function () {
  'use strict';

  var MARK = '\u0000';

  function escapeText(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function escapeAttr(value) {
    return escapeText(value).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // Nur Adressen, die ohne Skript auskommen: http(s), mailto, Anker und relative Pfade.
  function safeUrl(url) {
    var value = String(url || '').trim();
    if (!value) return '';
    if (/^(https?:\/\/|mailto:)/i.test(value)) return value;
    if (/^[a-z][a-z0-9+.-]*:/i.test(value)) return '';
    if (value.charAt(0) === '#' || value.charAt(0) === '/' || value.charAt(0) === '.') return value;
    if (/[\s<>"]/.test(value)) return '';
    return value;
  }

  function inline(text) {
    var codes = [];
    var out = escapeText(text);

    out = out.replace(/`([^`]+)`/g, function (all, code) {
      codes.push('<code>' + code + '</code>');
      return MARK + (codes.length - 1) + MARK;
    });

    out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (all, label, href) {
      var url = safeUrl(href);
      if (!url) return label;
      return '<a href="' + escapeAttr(url) + '">' + label + '</a>';
    });

    out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/(^|[\s(])\*([^*\n]+)\*/g, '$1<em>$2</em>');

    out = out.replace(new RegExp(MARK + '(\\d+)' + MARK, 'g'), function (all, index) {
      return codes[Number(index)];
    });

    return out;
  }

  function cells(line) {
    var body = line.trim();
    if (body.charAt(0) === '|') body = body.slice(1);
    if (body.charAt(body.length - 1) === '|') body = body.slice(0, -1);
    return body.split('|').map(function (part) { return part.trim(); });
  }

  function isTableStart(lines, index) {
    if (index + 1 >= lines.length) return false;
    if (lines[index].indexOf('|') === -1) return false;
    return /^\s*\|?[\s:|-]*-[\s:|-]*\|?\s*$/.test(lines[index + 1]) &&
      lines[index + 1].indexOf('|') !== -1;
  }

  function alignments(line) {
    return cells(line).map(function (part) {
      var left = part.charAt(0) === ':';
      var right = part.charAt(part.length - 1) === ':';
      if (left && right) return 'center';
      if (right) return 'right';
      if (left) return 'left';
      return '';
    });
  }

  function slug(text) {
    return String(text)
      .toLowerCase()
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/<[^>]+>/g, '')
      .replace(/[äöüß]/g, function (ch) {
        return { 'ä': 'ae', 'ö': 'oe', 'ü': 'ue', 'ß': 'ss' }[ch];
      })
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function toHtml(markdown) {
    var lines = String(markdown || '').replace(/\r\n?/g, '\n').split('\n');
    var html = [];
    var i = 0;
    var used = {};

    function anchor(text) {
      var id = slug(text) || 'abschnitt';
      if (used[id]) {
        used[id] += 1;
        id = id + '-' + used[id];
      } else {
        used[id] = 1;
      }
      return id;
    }

    while (i < lines.length) {
      var line = lines[i];

      if (!line.trim()) { i += 1; continue; }

      // Code-Block
      if (/^\s*```/.test(line)) {
        var lang = line.replace(/^\s*```/, '').trim();
        var code = [];
        i += 1;
        while (i < lines.length && !/^\s*```/.test(lines[i])) {
          code.push(lines[i]);
          i += 1;
        }
        i += 1;
        html.push('<pre><code' + (lang ? ' class="language-' + escapeAttr(lang) + '"' : '') + '>' +
          escapeText(code.join('\n')) + '</code></pre>');
        continue;
      }

      // Trennlinie
      if (/^\s*([-*_])\1{2,}\s*$/.test(line)) {
        html.push('<hr>');
        i += 1;
        continue;
      }

      // Überschrift
      var heading = /^(#{1,6})\s+(.*)$/.exec(line);
      if (heading) {
        var level = heading[1].length;
        var text = heading[2].replace(/\s+#+\s*$/, '');
        html.push('<h' + level + ' id="' + escapeAttr(anchor(text)) + '">' + inline(text) +
          '</h' + level + '>');
        i += 1;
        continue;
      }

      // Tabelle
      if (isTableStart(lines, i)) {
        var head = cells(lines[i]);
        var align = alignments(lines[i + 1]);
        var rows = [];
        i += 2;
        while (i < lines.length && lines[i].indexOf('|') !== -1 && lines[i].trim()) {
          rows.push(cells(lines[i]));
          i += 1;
        }
        var headHtml = head.map(function (cell, index) {
          return '<th' + (align[index] ? ' style="text-align:' + align[index] + '"' : '') + '>' +
            inline(cell) + '</th>';
        }).join('');
        var bodyHtml = rows.map(function (row) {
          var tds = row.map(function (cell, index) {
            return '<td' + (align[index] ? ' style="text-align:' + align[index] + '"' : '') + '>' +
              inline(cell) + '</td>';
          }).join('');
          return '<tr>' + tds + '</tr>';
        }).join('');
        html.push('<table><thead><tr>' + headHtml + '</tr></thead><tbody>' + bodyHtml +
          '</tbody></table>');
        continue;
      }

      // Listen, auch mit Fortsetzungszeilen
      var bullet = /^\s*[-*+]\s+(.*)$/.exec(line);
      var numbered = /^\s*\d+[.)]\s+(.*)$/.exec(line);
      if (bullet || numbered) {
        var ordered = Boolean(numbered);
        var pattern = ordered ? /^\s*\d+[.)]\s+(.*)$/ : /^\s*[-*+]\s+(.*)$/;
        var items = [];
        while (i < lines.length) {
          var match = pattern.exec(lines[i]);
          if (match) {
            items.push(match[1]);
            i += 1;
            continue;
          }
          if (!lines[i].trim()) break;
          if (/^\s*#{1,6}\s/.test(lines[i]) || /^\s*```/.test(lines[i])) break;
          if (/^\s*[-*+]\s+/.test(lines[i]) || /^\s*\d+[.)]\s+/.test(lines[i])) break;
          // Fortsetzung des letzten Punktes
          if (items.length) items[items.length - 1] += ' ' + lines[i].trim();
          i += 1;
        }
        var tag = ordered ? 'ol' : 'ul';
        html.push('<' + tag + '>' + items.map(function (item) {
          return '<li>' + inline(item) + '</li>';
        }).join('') + '</' + tag + '>');
        continue;
      }

      // Absatz
      var para = [];
      while (i < lines.length && lines[i].trim()) {
        if (para.length && (/^\s*```/.test(lines[i]) || /^(#{1,6})\s+/.test(lines[i]) ||
          isTableStart(lines, i) || /^\s*[-*+]\s+/.test(lines[i]) || /^\s*\d+[.)]\s+/.test(lines[i]) ||
          /^\s*([-*_])\1{2,}\s*$/.test(lines[i]))) break;
        para.push(lines[i].trim());
        i += 1;
      }
      html.push('<p>' + inline(para.join(' ')) + '</p>');
    }

    return html.join('\n');
  }

  return { toHtml: toHtml };
})();

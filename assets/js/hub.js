/* ==========================================================================
   FlowState FPV — Release Hub
   Rendert den Versionsindex aus assets/data/versions.json.
   Kein Framework, keine Abhängigkeiten.
   ========================================================================== */
(() => {
  'use strict';

  const DATA_URL = 'assets/data/versions.json';

  const CHANNEL_LABEL = {
    alpha: 'Alpha',
    beta: 'Beta',
    rc: 'Release Candidate',
    stable: 'Stable'
  };

  const state = {
    project: 'all',
    channel: 'all',
    query: '',
    data: null
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ----------------------------- Helpers -------------------------------- */

  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[ch]);

  const formatBytes = (bytes) => {
    if (!Number.isFinite(bytes) || bytes <= 0) return '—';
    const kb = bytes / 1000;
    if (kb < 1000) return `${Math.round(kb).toLocaleString('de-DE')} KB`;
    return `${(kb / 1000).toFixed(1).replace('.', ',').replace(/,0$/, ',0')} MB`;
  };

  const formatDate = (iso) => {
    if (!iso) return '—';
    const [y, m, d] = String(iso).split('-');
    if (!y || !m || !d) return iso;
    return `${d}.${m}.${y}`;
  };

  const shortHash = (hash) => (hash ? `${hash.slice(0, 16)}…` : null);

  const channelClass = (channel) => `badge badge--${channel in CHANNEL_LABEL ? channel : 'pending'}`;

  const projectOf = (id) => state.data?.projects.find((p) => p.id === id) || null;

  /* ------------------------------ Theme --------------------------------- */

  const initTheme = () => {
    const root = document.documentElement;
    const button = $('#theme-toggle');
    if (!button) return;
    button.addEventListener('click', () => {
      const next = root.dataset.theme === 'light' ? 'dark' : 'light';
      root.dataset.theme = next;
      try { localStorage.setItem('flowstate-theme', next); } catch (e) { /* ignore */ }
    });
  };

  /* ---------------------------- Rendering ------------------------------- */

  const matches = (release) => {
    if (state.project !== 'all' && release.project !== state.project) return false;
    if (state.channel !== 'all' && release.channel !== state.channel) return false;

    const q = state.query.trim().toLowerCase();
    if (!q) return true;

    const project = projectOf(release.project);
    const haystack = [
      release.version,
      release.title,
      release.summary,
      release.channel,
      CHANNEL_LABEL[release.channel] || '',
      project?.name || '',
      project?.kind || '',
      release.source?.filename || '',
      ...(release.notes || []),
      ...(release.limits || []),
      ...(release.signals || []).map((s) => s.label)
    ].join(' ').toLowerCase();

    return q.split(/\s+/).every((token) => haystack.includes(token));
  };

  const renderSignals = (signals = []) => {
    if (!signals.length) return '';
    return `
      <div class="signals" aria-label="Prüfstatus">
        ${signals.map((s) => `
          <span class="signal" data-state="${esc(s.state || 'na')}">
            ${esc(s.label)}${s.state === 'pending' ? ' · offen' : ''}
          </span>`).join('')}
      </div>`;
  };

  const renderNotes = (release) => {
    const notes = release.notes || [];
    const limits = release.limits || [];
    if (!notes.length && !limits.length) return '';

    return `
      <details class="notes">
        <summary>Highlights &amp; Grenzen</summary>
        <div class="notes-body">
          <div class="notes-block">
            <h4>Highlights</h4>
            <ul>${notes.map((n) => `<li>${esc(n)}</li>`).join('')}</ul>
          </div>
          <div class="notes-block notes-block--limit">
            <h4>Grenzen &amp; Vorbehalte</h4>
            <ul>${limits.map((n) => `<li>${esc(n)}</li>`).join('')}</ul>
          </div>
        </div>
      </details>`;
  };

  const renderActions = (release, project) => {
    const appHref = escapeAttr(project?.path || '#');
    const docsHref = escapeAttr(project?.links?.docs || '#');
    const sourceHref = release.source?.folder_url || release.source?.file_url || '';
    const actions = [];

    if (release.available) {
      actions.push(`<a class="btn btn--sm btn--primary" href="${appHref}">
        Version öffnen
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>
      </a>`);
    } else {
      actions.push(`<span class="btn btn--sm btn--ghost" aria-disabled="true" title="Die Anwendungsdatei ist noch nicht im Repository">
        Datei noch nicht eingespielt
      </span>`);
    }

    actions.push(`<a class="btn btn--sm btn--quiet" href="${docsHref}">Release-Notes</a>`);

    if (sourceHref) {
      actions.push(`<a class="btn btn--sm btn--quiet" href="${escapeAttr(sourceHref)}" target="_blank" rel="noopener">Quelle ansehen</a>`);
    }

    const sourceLabel = release.source?.folder
      ? release.source.folder.replace('FPVGuide/Tuner/GitHub Versionen/', '')
      : '';

    return `
      <div class="release-actions">
        ${actions.join('')}
        ${sourceLabel ? `<span class="source-note" title="${escapeAttr(release.source?.folder || '')}">Drive · ${esc(sourceLabel)}</span>` : ''}
      </div>`;
  };

  const escapeAttr = (value) => esc(value);

  const releaseTemplate = (release) => {
    const project = projectOf(release.project);
    const hash = release.sha256;
    const projectId = esc(release.project);

    return `
      <article class="release release--${projectId}" data-release="${esc(release.id)}">
        <div class="release-head">
          <span class="release-project">${esc(project?.name || release.project)}</span>
          <span class="release-version">${esc(release.version)}</span>
          <span class="${channelClass(release.channel)}">${esc(CHANNEL_LABEL[release.channel] || release.channel)}</span>
          <span class="release-date">${esc(formatDate(release.released))}</span>
        </div>

        ${release.title ? `<p class="release-summary"><strong>${esc(release.title)}.</strong> ${esc(release.summary || '')}</p>`
                        : `<p class="release-summary">${esc(release.summary || '')}</p>`}

        <div class="release-meta">
          <span class="chip chip--mono">${esc(release.file)}</span>
          <span class="chip">${esc(formatBytes(release.size_bytes))}</span>
          <span class="chip">${release.available ? 'im Repository' : 'nur Quelle'}</span>
        </div>

        <div class="hash-row">
          <span class="hash-label">SHA-256</span>
          ${hash
            ? `<code class="hash-value" data-hash="${escapeAttr(hash)}">${esc(shortHash(hash))}</code>
               <button class="copy-btn" type="button" data-copy="${escapeAttr(hash)}">kopieren</button>`
            : `<span class="hash-value hash-value--missing">wird beim Einspielen berechnet</span>`}
        </div>

        ${renderSignals(release.signals)}
        ${renderActions(release, project)}
        ${renderNotes(release)}
      </article>`;
  };

  const render = () => {
    const list = $('#release-list');
    const count = $('#result-count');
    if (!list || !state.data) return;

    const releases = (state.data.releases || [])
      .filter(matches)
      .sort((a, b) => String(b.released).localeCompare(String(a.released)));

    list.innerHTML = releases.length
      ? releases.map(releaseTemplate).join('')
      : `<div class="empty">
           <p>Keine Version passt zu dieser Auswahl.</p>
           <button class="btn btn--sm btn--ghost" type="button" data-reset style="margin-top:14px">Filter zurücksetzen</button>
         </div>`;

    if (count) {
      const total = state.data.releases.length;
      count.textContent = releases.length === total
        ? `${total} von ${total}`
        : `${releases.length} von ${total}`;
    }
  };

  const renderStats = () => {
    const releases = state.data.releases || [];
    const set = (key, value) => {
      const el = $(`[data-stat="${key}"]`);
      if (el) el.textContent = value;
    };
    set('projects', state.data.projects.length);
    set('releases', releases.length);
    set('stable', releases.filter((r) => r.channel === 'stable').length);

    const dateEl = $('[data-hero-date]');
    if (dateEl) dateEl.textContent = `Stand ${formatDate(state.data.updated)}`;

    const meta = $('#build-meta');
    if (meta) {
      const available = releases.filter((r) => r.available).length;
      meta.textContent = `Index ${formatDate(state.data.updated)} · ${available}/${releases.length} eingespielt`;
    }
  };

  /* ---------------------------- Controls -------------------------------- */

  const initControls = () => {
    $$('[data-filter]').forEach((button) => {
      button.addEventListener('click', () => {
        const group = button.dataset.filter;
        state[group] = button.dataset.value;
        $$(`[data-filter="${group}"]`).forEach((b) => {
          b.setAttribute('aria-pressed', String(b === button));
        });
        render();
      });
    });

    const search = $('#search');
    if (search) {
      let timer;
      search.addEventListener('input', () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          state.query = search.value;
          render();
        }, 90);
      });
    }

    // Filter-Reset im Leerzustand.
    document.addEventListener('click', (event) => {
      if (!event.target.closest('[data-reset]')) return;
      state.project = 'all';
      state.channel = 'all';
      state.query = '';
      const search = $('#search');
      if (search) search.value = '';
      $$('[data-filter]').forEach((b) => {
        b.setAttribute('aria-pressed', String(b.dataset.value === 'all'));
      });
      render();
    });

    // Kopieren delegiert, damit neu gerenderte Karten automatisch funktionieren.
    document.addEventListener('click', async (event) => {
      const button = event.target.closest('[data-copy]');
      if (!button) return;
      const value = button.dataset.copy;
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(value);
        } else {
          const area = document.createElement('textarea');
          area.value = value;
          area.setAttribute('readonly', '');
          area.style.position = 'fixed';
          area.style.opacity = '0';
          document.body.appendChild(area);
          area.select();
          document.execCommand('copy');
          area.remove();
        }
        button.dataset.copied = 'true';
        button.textContent = 'kopiert';
        setTimeout(() => {
          button.dataset.copied = 'false';
          button.textContent = 'kopieren';
        }, 1600);
      } catch (e) {
        button.textContent = 'nicht möglich';
      }
    });
  };

  /* ----------------------------- Reveal --------------------------------- */

  const initReveal = () => {
    const items = $$('.reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

    items.forEach((el) => observer.observe(el));
  };

  /* ------------------------------ Boot ---------------------------------- */

  const fail = (message) => {
    const list = $('#release-list');
    if (list) {
      list.innerHTML = `<p class="empty">${esc(message)}</p>`;
    }
    const count = $('#result-count');
    if (count) count.textContent = 'nicht verfügbar';
  };

  const boot = async () => {
    initTheme();
    initControls();
    initReveal();

    const year = $('#year');
    if (year) year.textContent = String(new Date().getFullYear());

    if (location.protocol === 'file:') {
      fail('Der Index wird per fetch() geladen. Bitte über einen lokalen Server öffnen: python3 -m http.server 8080');
      return;
    }

    try {
      const response = await fetch(DATA_URL, { cache: 'no-cache' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      state.data = await response.json();
    } catch (error) {
      fail(`versions.json konnte nicht geladen werden (${error.message}).`);
      return;
    }

    renderStats();
    render();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();

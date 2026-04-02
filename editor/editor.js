/**
 * Nomentor Designer - Main editor script
 */

(function () {
  'use strict';

  const page = document.getElementById('nomentor-page');
  let draggedComponent = null;
  let dropIndicator = null;

  // ── Component renderers ──
  const components = {
    heading: () => {
      const el = document.createElement('div');
      el.innerHTML = '<h2 contenteditable="true" style="outline:none">Heading</h2>';
      return el.firstChild;
    },
    text: () => {
      const el = document.createElement('div');
      el.innerHTML = '<p contenteditable="true" style="outline:none">Type your text here...</p>';
      return el.firstChild;
    },
    image: () => {
      const el = document.createElement('div');
      el.style.cssText = 'background:#f0f0f0;display:flex;align-items:center;justify-content:center;min-height:120px;border-radius:4px;color:#999;font-size:13px';
      el.textContent = 'Click to set image';
      return el;
    },
    grid: () => {
      const el = document.createElement('div');
      el.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:16px;min-height:60px';
      for (let i = 0; i < 2; i++) {
        const col = document.createElement('div');
        col.style.cssText = 'background:#fafafa;border:1px dashed #ddd;border-radius:4px;min-height:60px;padding:12px';
        col.textContent = 'Column ' + (i + 1);
        el.appendChild(col);
      }
      return el;
    }
  };

  // ── Create a canvas row wrapping a component ──
  function createRow(type) {
    const row = document.createElement('div');
    row.className = 'canvas-row';
    row.dataset.type = type;

    const label = document.createElement('div');
    label.className = 'row-label';
    label.textContent = type;
    row.appendChild(label);

    const content = components[type]();
    row.appendChild(content);

    return row;
  }

  // ── Remove empty state if present ──
  function removeEmptyState() {
    const empty = page.querySelector('.canvas-empty');
    if (empty) empty.remove();
  }

  // ── Show empty state if no rows ──
  function showEmptyStateIfNeeded() {
    if (!page.querySelector('.canvas-row')) {
      const empty = document.createElement('div');
      empty.className = 'canvas-empty';
      empty.textContent = 'Drag components here to start building';
      page.appendChild(empty);
    }
  }

  // ── Create drop indicator ──
  function createDropIndicator() {
    const el = document.createElement('div');
    el.className = 'drop-indicator';
    return el;
  }

  // ── Toolbox drag start ──
  document.querySelectorAll('.toolbox-item').forEach(item => {
    item.addEventListener('dragstart', e => {
      draggedComponent = item.dataset.component;
      e.dataTransfer.effectAllowed = 'copy';
      e.dataTransfer.setData('text/plain', draggedComponent);
    });

    item.addEventListener('dragend', () => {
      draggedComponent = null;
      removeDropIndicator();
    });
  });

  // ── Canvas drop zone ──
  page.addEventListener('dragover', e => {
    if (!draggedComponent) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';

    const rows = Array.from(page.querySelectorAll('.canvas-row'));
    const afterRow = getDropTarget(rows, e.clientY);

    removeDropIndicator();
    dropIndicator = createDropIndicator();

    if (afterRow) {
      afterRow.before(dropIndicator);
    } else {
      page.appendChild(dropIndicator);
    }
  });

  page.addEventListener('dragleave', e => {
    if (!page.contains(e.relatedTarget)) {
      removeDropIndicator();
    }
  });

  page.addEventListener('drop', e => {
    if (!draggedComponent) return;
    e.preventDefault();

    removeEmptyState();
    removeDropIndicator();

    const rows = Array.from(page.querySelectorAll('.canvas-row'));
    const afterRow = getDropTarget(rows, e.clientY);
    const newRow = createRow(draggedComponent);

    if (afterRow) {
      afterRow.before(newRow);
    } else {
      page.appendChild(newRow);
    }

    draggedComponent = null;
    updateNavigator();
  });

  // ── Find which row the cursor is above ──
  function getDropTarget(rows, y) {
    for (const row of rows) {
      const rect = row.getBoundingClientRect();
      const mid = rect.top + rect.height / 2;
      if (y < mid) return row;
    }
    return null;
  }

  function removeDropIndicator() {
    if (dropIndicator) {
      dropIndicator.remove();
      dropIndicator = null;
    }
    document.querySelectorAll('.drop-indicator').forEach(el => el.remove());
  }

  // ── Row selection ──
  page.addEventListener('click', e => {
    const row = e.target.closest('.canvas-row');
    page.querySelectorAll('.canvas-row').forEach(r => r.classList.remove('selected'));
    if (row) row.classList.add('selected');
  });

  // ── Delete selected row with Backspace/Delete (when not editing text) ──
  document.addEventListener('keydown', e => {
    if (e.key === 'Delete' || e.key === 'Backspace') {
      const active = document.activeElement;
      if (active && (active.isContentEditable || active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) return;

      const selected = page.querySelector('.canvas-row.selected');
      if (selected) {
        selected.remove();
        showEmptyStateIfNeeded();
        updateNavigator();
      }
    }
  });

  // ── Navigator ──
  const navigator = document.getElementById('nomentor-navigator');

  function updateNavigator() {
    const rows = page.querySelectorAll('.canvas-row');
    if (!rows.length) {
      navigator.innerHTML = '<div style="color:#bbb;font-size:13px;text-align:center;padding:20px">No elements yet</div>';
      return;
    }

    let html = '<ul style="list-style:none;font-size:13px">';
    rows.forEach((row, i) => {
      const type = row.dataset.type || 'unknown';
      const selected = row.classList.contains('selected') ? 'font-weight:600;color:#4a90d9' : '';
      html += `<li data-index="${i}" style="padding:6px 8px;cursor:pointer;border-radius:4px;${selected}">${type}</li>`;
    });
    html += '</ul>';
    navigator.innerHTML = html;

    // Click navigator item to select row
    navigator.querySelectorAll('li').forEach(li => {
      li.addEventListener('click', () => {
        const idx = parseInt(li.dataset.index);
        const rows = page.querySelectorAll('.canvas-row');
        page.querySelectorAll('.canvas-row').forEach(r => r.classList.remove('selected'));
        if (rows[idx]) {
          rows[idx].classList.add('selected');
          rows[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        updateNavigator();
      });
    });
  }

  updateNavigator();

})();

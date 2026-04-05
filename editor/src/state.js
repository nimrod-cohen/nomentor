import { signal } from '@preact/signals';

// ── Save state ──
export const saveStatus = signal('saved');
export const history = signal([]);
const MAX_HISTORY = 100;

function pushHistory(action = '') {
  const snapshot = JSON.stringify(rows.value);
  const list = [...history.value];
  list.push({ timestamp: Date.now(), snapshot, action, pinned: false });
  while (list.length > MAX_HISTORY) {
    const idx = list.findIndex(e => !e.pinned);
    if (idx === -1) break;
    list.splice(idx, 1);
  }
  history.value = list;
}

export function togglePin(index) {
  history.value = history.value.map((entry, i) =>
    i === index ? { ...entry, pinned: !entry.pinned } : entry
  );
  debouncedSave();
}

function autoSave() {
  const { ajaxUrl, nonce, postId } = window.nomentor;
  const data = JSON.stringify(rows.value);
  const historyData = JSON.stringify(history.value);

  saveStatus.value = 'saving';

  const body = new URLSearchParams({
    action: 'nomentor_save',
    nonce,
    post_id: postId,
    data: btoa(unescape(encodeURIComponent(data))),
    page_history: btoa(unescape(encodeURIComponent(historyData)))
  });

  fetch(ajaxUrl, { method: 'POST', body })
    .then(r => r.json())
    .then(r => { saveStatus.value = r.success ? 'saved' : 'error'; })
    .catch(() => { saveStatus.value = 'error'; });
}

export function loadHistory(entries) {
  if (Array.isArray(entries)) history.value = entries;
}

let saveTimer = null;
function debouncedSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(autoSave, 800);
}

// ── History preview / revert ──
export const previewIndex = signal(null);
let _liveSnapshot = null;

export function previewVersion(index) {
  const entry = history.value[index];
  if (!entry) return;
  try {
    if (previewIndex.value === null) {
      _liveSnapshot = JSON.stringify(rows.value);
    }
    rows.value = JSON.parse(entry.snapshot);
    previewIndex.value = index;
  } catch (e) { console.error('Preview error:', e); }
}

export function exitPreview() {
  if (_liveSnapshot !== null) {
    try { rows.value = JSON.parse(_liveSnapshot); } catch {}
    _liveSnapshot = null;
  }
  previewIndex.value = null;
}

export function revertToVersion(index) {
  const entry = history.value[index];
  if (!entry) return;
  try {
    clearTimeout(saveTimer);
    rows.value = JSON.parse(entry.snapshot);
    _liveSnapshot = null;
    previewIndex.value = null;
    pushHistory('Reverted to version ' + (index + 1));
    autoSave();
  } catch {}
}

// ── Left sidebar mode ──
export const sidebarMode = signal('toolbox');
export const leftSidebarOpen = signal(true);
export const rightSidebarOpen = signal(true);

// ── Viewport preview ──
export const viewportMode = signal('desktop');

// ── Typography settings ──
// Inheritance: defaults → global.desktop → global.[viewport] → page.desktop → page.[viewport]
export const DEFAULT_SIZES = { xs: 0.75, sm: 0.875, base: 1, lg: 1.125, xl: 1.25, '2xl': 1.5, '3xl': 1.875, '4xl': 2.25 };
export const DEFAULT_HEADING_SIZES = { h1: 2.5, h2: 2, h3: 1.75, h4: 1.5, h5: 1.25, h6: 1 };
const DEFAULT_DESKTOP = { base: 16, fontFamily: '', sizes: { ...DEFAULT_SIZES }, headingSizes: { ...DEFAULT_HEADING_SIZES } };

// Global settings: only stores explicit values. desktop is the base, tablet/mobile only store overrides.
export const globalSettings = signal(window.nomentor?.globalSettings || {});
export const pageSettings = signal(null);

// Load Google Fonts used in settings on startup
const _loadedFonts = new Set();
export function loadGoogleFontCSS(family) {
  if (!family || family.includes(',') || _loadedFonts.has(family) || typeof document === 'undefined') return;
  _loadedFonts.add(family);
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@300;400;500;600;700&display=swap`;
  document.head.appendChild(link);
}

if (typeof document !== 'undefined') {
  const gs = window.nomentor?.globalSettings || {};
  for (const vp of ['desktop', 'tablet', 'mobile']) {
    loadGoogleFontCSS(gs[vp]?.fontFamily);
  }
}

export function loadPageSettings(settings) {
  pageSettings.value = settings || null;
  if (settings) {
    for (const vp of ['desktop', 'tablet', 'mobile']) {
      loadGoogleFontCSS(settings[vp]?.fontFamily);
    }
  }
}

/**
 * Get effective settings for a viewport.
 * Chain: defaults → global.desktop → global.tablet → global.mobile → page.desktop → page.tablet → page.mobile
 * mobile inherits from tablet, tablet inherits from desktop.
 */
export function getEffectiveSettings(viewport) {
  const g = globalSettings.value;
  const p = pageSettings.value;

  // Build the lookup chain: desktop, then tablet (if applicable), then mobile (if applicable)
  const vpChain = viewport === 'desktop' ? ['desktop']
    : viewport === 'tablet' ? ['desktop', 'tablet']
    : ['desktop', 'tablet', 'mobile'];

  function resolve(key, fallback) {
    // Walk page chain (most specific first), then global chain
    for (let i = vpChain.length - 1; i >= 0; i--) {
      if (p?.[vpChain[i]]?.[key] != null) return p[vpChain[i]][key];
    }
    for (let i = vpChain.length - 1; i >= 0; i--) {
      if (g[vpChain[i]]?.[key] != null) return g[vpChain[i]][key];
    }
    return fallback;
  }

  // Merge sizes through the full chain
  const sizes = { ...DEFAULT_SIZES };
  for (const vp of vpChain) Object.assign(sizes, g[vp]?.sizes || {});
  for (const vp of vpChain) Object.assign(sizes, p?.[vp]?.sizes || {});

  // Merge heading sizes
  const headingSizes = { ...DEFAULT_HEADING_SIZES };
  for (const vp of vpChain) Object.assign(headingSizes, g[vp]?.headingSizes || {});
  for (const vp of vpChain) Object.assign(headingSizes, p?.[vp]?.headingSizes || {});

  return {
    base: resolve('base', DEFAULT_DESKTOP.base),
    fontFamily: resolve('fontFamily', DEFAULT_DESKTOP.fontFamily),
    sizes,
    headingSizes,
  };
}

/** Get computed heading size map in em for a viewport */
export function getHeadingSizeMap(viewport) {
  const { headingSizes } = getEffectiveSettings(viewport);
  const map = {};
  for (const [key, em] of Object.entries(headingSizes)) {
    map[key] = em + 'em';
  }
  return map;
}

/**
 * Check if a specific field has an explicit override at this level.
 * Used by Settings UI to show reset buttons.
 */
export function hasExplicitValue(settingsObj, viewport, key) {
  return settingsObj?.[viewport]?.[key] != null;
}

export function hasExplicitSize(settingsObj, viewport, sizeKey) {
  return settingsObj?.[viewport]?.sizes?.[sizeKey] != null;
}

/** Get effective page direction */
export function getEffectiveDirection() {
  return pageSettings.value?.direction || globalSettings.value.direction || 'rtl';
}

/** Get effective color palette: global colors + page color overrides/additions */
export function getEffectiveColors() {
  const g = globalSettings.value.colors || [];
  const p = pageSettings.value?.colors;
  if (!p) return g;
  // Page colors override global by name, or add new ones
  const merged = [...g];
  for (const pc of p) {
    const idx = merged.findIndex(c => c.name === pc.name);
    if (idx >= 0) merged[idx] = pc;
    else merged.push(pc);
  }
  return merged;
}

/** Get the computed size map in em for a viewport */
export function getSizeMap(viewport) {
  const { sizes } = getEffectiveSettings(viewport);
  const map = {};
  for (const [key, em] of Object.entries(sizes)) {
    map[key] = em + 'em';
  }
  return map;
}

export function saveGlobalSettings(settings) {
  globalSettings.value = settings;
  const { ajaxUrl, nonce } = window.nomentor;
  fetch(ajaxUrl, {
    method: 'POST',
    body: new URLSearchParams({ action: 'nomentor_save_global_settings', nonce, settings: JSON.stringify(settings) })
  });
}

export function savePageSettings(settings) {
  pageSettings.value = settings;
  const { ajaxUrl, nonce, postId } = window.nomentor;
  fetch(ajaxUrl, {
    method: 'POST',
    body: new URLSearchParams({ action: 'nomentor_save_page_settings', nonce, post_id: postId, settings: JSON.stringify(settings) })
  });
}

// ── Page title ──
export const pageTitle = signal(window.nomentor?.title || '');

export function renamePost(newTitle) {
  const clean = newTitle.replace(/<[^>]*>/g, '').trim();
  if (!clean) return;
  pageTitle.value = clean;
  window.nomentor.title = clean;

  const { ajaxUrl, nonce, postId } = window.nomentor;
  fetch(ajaxUrl, {
    method: 'POST',
    body: new URLSearchParams({ action: 'nomentor_rename', nonce, post_id: postId, title: clean })
  });
}

/**
 * Page structure:
 *
 * rows[] — flex column items
 *   row.id
 *   row.elements[] — components inside the row
 *     element.id
 *     element.type — 'heading' | 'text' | 'image' | 'grid'
 *     element.props — type-specific properties
 *     element.children[] — (grid only) array of cells, each cell has elements[]
 *       cells can contain grids too (max 2 nesting levels)
 */

export const rows = signal([]);
export const selectedId = signal(null);

let _nextId = 1;
function nextId(prefix = 'el') { return prefix + '-' + (_nextId++); }

export function syncIdCounter(rowList) {
  let max = 0;
  function scan(items) {
    if (!items) return;
    for (const item of items) {
      const num = parseInt((item.id || '').split('-').pop());
      if (num > max) max = num;
      if (item.elements) scan(item.elements);
      if (item.children) scan(item.children);
    }
  }
  scan(rowList);
  if (max >= _nextId) _nextId = max + 1;
}

// ── Default props per element type ──
function defaultProps(type) {
  switch (type) {
    case 'heading': return { text: 'Heading', level: 'h2' };
    case 'text': return { text: 'Type your text here...' };
    case 'image': return { src: '', alt: '' };
    case 'grid': return { columns: 2 };
    case 'button': return { text: 'Click me', url: '', newTab: false, bgColor: '#4a90d9', color: '#ffffff', borderRadius: '6', fontSize: 'base' };
    case 'form': return {
      fields: [
        { id: 'f1', type: 'text', label: 'Full Name', placeholder: '', required: true, validation: 'none', name: 'name' },
        { id: 'f2', type: 'text', label: 'Email', placeholder: '', required: true, validation: 'email', name: 'email' },
      ],
    };
    case 'list': return {
      listType: 'ul',
      items: [{ id: 'li1', text: 'Item 1' }, { id: 'li2', text: 'Item 2' }, { id: 'li3', text: 'Item 3' }],
      icon: '', iconColor: '',
      fontSize: 'base', fontWeight: '400',
      itemPadding: '8px 12px', itemBgColor: '', itemRadius: '0', itemGap: '4',
    };
    case 'timer': return { targetDate: '', timezone: 'Asia/Jerusalem', bgColor: '#eef2f7', color: '#1a2744', labelDays: 'ימים', labelHours: 'שעות', labelMinutes: 'דקות', labelSeconds: 'שניות', expiredText: 'הזמן נגמר!' };
    default: return {};
  }
}

// ── Create an element ──
export function createElement(type) {
  const el = { id: nextId(), type, props: defaultProps(type) };
  if (type === 'grid') {
    el.children = Array.from({ length: 2 }, () => ({
      id: nextId('cell'),
      elements: []
    }));
  }
  if (type === 'form') {
    el.children = [
      { id: nextId('form-before'), elements: [], slot: 'before' },
      { id: nextId('form-after'), elements: [], slot: 'after' },
    ];
  }
  return el;
}

// ── Deep tree helpers (support nested grids, max 2 levels) ──

function deepFilterElement(elements, elementId) {
  return elements
    .filter(el => el.id !== elementId)
    .map(el => {
      if (!el.children) return el;
      return { ...el, children: el.children.map(cell => ({ ...cell, elements: deepFilterElement(cell.elements, elementId) })) };
    });
}

function deepMapElement(elements, elementId, fn) {
  return elements.map(el => {
    if (el.id === elementId) return fn(el);
    if (!el.children) return el;
    return { ...el, children: el.children.map(cell => ({ ...cell, elements: deepMapElement(cell.elements, elementId, fn) })) };
  });
}

function deepMapCell(elements, cellId, fn) {
  return elements.map(el => {
    if (!el.children) return el;
    let found = false;
    const newChildren = el.children.map(cell => {
      if (cell.id === cellId) { found = true; return fn(cell); }
      return cell;
    });
    if (found) return { ...el, children: newChildren };
    return { ...el, children: el.children.map(cell => ({ ...cell, elements: deepMapCell(cell.elements, cellId, fn) })) };
  });
}

function findInElements(elements, elementId) {
  for (const el of elements) {
    if (el.id === elementId) return el;
    if (el.children) {
      for (const cell of el.children) {
        const found = findInElements(cell.elements, elementId);
        if (found) return found;
      }
    }
  }
  return null;
}

export function findElementById(elementId) {
  for (const row of rows.value) {
    const found = findInElements(row.elements, elementId);
    if (found) return found;
  }
  return null;
}

function findCellInElements(elements, cellId) {
  for (const el of elements) {
    if (el.children) {
      for (const cell of el.children) {
        if (cell.id === cellId) return cell;
        const found = findCellInElements(cell.elements, cellId);
        if (found) return found;
      }
    }
  }
  return null;
}

export function findCellById(cellId) {
  for (const row of rows.value) {
    const found = findCellInElements(row.elements, cellId);
    if (found) return found;
  }
  return null;
}

export function updateCellProps(cellId, props) {
  rows.value = rows.value.map(row => ({
    ...row,
    elements: deepMapCell(row.elements, cellId, cell => ({
      ...cell, props: { ...(cell.props || {}), ...props }
    }))
  }));
}

// ── Row operations ──
export function updateRowProps(rowId, props) {
  rows.value = rows.value.map(row => {
    if (row.id !== rowId) return row;
    return { ...row, props: { ...(row.props || {}), ...props } };
  });
}

export function addRow(beforeRowId = null) {
  const row = { id: nextId('row'), elements: [], props: {} };
  const list = [...rows.value];
  if (beforeRowId) {
    const idx = list.findIndex(r => r.id === beforeRowId);
    if (idx >= 0) list.splice(idx, 0, row);
    else list.push(row);
  } else {
    list.push(row);
  }
  rows.value = list;
  return row.id;
}

export function removeRow(rowId) {
  rows.value = rows.value.filter(r => r.id !== rowId);
  if (selectedId.value === rowId) selectedId.value = null;
}

export function reorderRow(rowId, beforeRowId) {
  const list = JSON.parse(JSON.stringify(rows.value));
  const idx = list.findIndex(r => r.id === rowId);
  if (idx < 0) return;
  const [row] = list.splice(idx, 1);
  if (beforeRowId) {
    const tIdx = list.findIndex(r => r.id === beforeRowId);
    list.splice(tIdx >= 0 ? tIdx : list.length, 0, row);
  } else {
    list.push(row);
  }
  rows.value = list;
}

// ── Element operations ──
export function addElementToRow(rowId, type, beforeElementId = null) {
  const el = createElement(type);
  rows.value = rows.value.map(row => {
    if (row.id !== rowId) return row;
    const elements = [...row.elements];
    if (beforeElementId) {
      const idx = elements.findIndex(e => e.id === beforeElementId);
      if (idx >= 0) elements.splice(idx, 0, el);
      else elements.push(el);
    } else {
      elements.push(el);
    }
    return { ...row, elements };
  });
  selectedId.value = el.id;
  return el.id;
}

export function addElementToCell(cellId, type) {
  const el = createElement(type);
  rows.value = rows.value.map(row => ({
    ...row,
    elements: deepMapCell(row.elements, cellId, cell => ({
      ...cell, elements: [...cell.elements, el]
    }))
  }));
  selectedId.value = el.id;
  return el.id;
}

export function addGridCell(elementId) {
  rows.value = rows.value.map(row => ({
    ...row,
    elements: deepMapElement(row.elements, elementId, el => {
      if (!el.children) return el;
      const newCell = { id: nextId('cell'), elements: [] };
      return {
        ...el,
        props: { ...el.props, columns: el.children.length + 1 },
        children: [...el.children, newCell]
      };
    })
  }));
}

export function removeGridCell(elementId, cellId) {
  rows.value = rows.value.map(row => ({
    ...row,
    elements: deepMapElement(row.elements, elementId, el => {
      if (!el.children || el.children.length <= 1) return el;
      return {
        ...el,
        props: { ...el.props, columns: el.children.length - 1 },
        children: el.children.filter(c => c.id !== cellId)
      };
    })
  }));
}

export function removeElement(elementId) {
  rows.value = rows.value.map(row => ({
    ...row,
    elements: deepFilterElement(row.elements, elementId)
  }));
  if (selectedId.value === elementId) selectedId.value = null;
}

export function updateElementProps(elementId, props) {
  rows.value = rows.value.map(row => ({
    ...row,
    elements: deepMapElement(row.elements, elementId, el => ({
      ...el, props: { ...el.props, ...props }
    }))
  }));
}

// ── Move element (navigator drag-and-drop) ──
export function moveElement(elementId, target) {
  const element = findElementById(elementId);
  if (!element) return;
  const el = JSON.parse(JSON.stringify(element));

  // Remove from current location
  let newRows = rows.value.map(row => ({
    ...row,
    elements: deepFilterElement(row.elements, elementId)
  }));

  // Insert at target
  if (target.cellId) {
    newRows = newRows.map(row => ({
      ...row,
      elements: deepMapCell(row.elements, target.cellId, cell => {
        const elems = [...cell.elements];
        if (target.beforeElementId) {
          const idx = elems.findIndex(e => e.id === target.beforeElementId);
          elems.splice(idx >= 0 ? idx : elems.length, 0, el);
        } else {
          elems.push(el);
        }
        return { ...cell, elements: elems };
      })
    }));
  } else if (target.rowId) {
    newRows = newRows.map(row => {
      if (row.id !== target.rowId) return row;
      const elems = [...row.elements];
      if (target.beforeElementId) {
        const idx = elems.findIndex(e => e.id === target.beforeElementId);
        elems.splice(idx >= 0 ? idx : elems.length, 0, el);
      } else {
        elems.push(el);
      }
      return { ...row, elements: elems };
    });
  }

  rows.value = newRows;
}

// ── Drop on canvas: always creates a new container with the element ──
export function dropOnCanvas(type, beforeRowId = null) {
  const rowId = addRow(beforeRowId);
  addElementToRow(rowId, type);
  commitChange('Add ' + type);
}

// ── Drop on existing container: adds element to bottom of that container ──
export function dropOnContainer(type, rowId) {
  addElementToRow(rowId, type);
  commitChange('Add ' + type);
}

// ── Explicit change tracking ──
export function commitChange(action = '') {
  pushHistory(action);
  debouncedSave();
}

// ── Select element and show properties ──
export function selectElement(id) {
  selectedId.value = id;
  if (id) {
    sidebarMode.value = 'properties';
    if (!leftSidebarOpen.value) leftSidebarOpen.value = true;
  }
}

// ── Drag state ──
export const dragging = signal(null);
export const dropTargetId = signal(null);

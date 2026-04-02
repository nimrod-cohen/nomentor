import { signal } from '@preact/signals';

// ── Save state ──
export const saveStatus = signal('saved'); // 'saved' | 'saving' | 'error'
export const history = signal([]); // { timestamp, snapshot }
const MAX_HISTORY = 50;

function pushHistory() {
  const snapshot = JSON.stringify(rows.value);
  const list = [...history.value];
  list.push({ timestamp: Date.now(), snapshot });
  if (list.length > MAX_HISTORY) list.shift();
  history.value = list;
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
    data,
    page_history: historyData
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

// Changes are committed explicitly via commitChange() — no auto-effect

// ── History preview / revert ──
export const previewIndex = signal(null); // null = live, number = previewing that index
let _liveSnapshot = null; // stash live state while previewing

export function previewVersion(index) {
  const entry = history.value[index];
  if (!entry) { console.warn('No history entry at index', index); return; }
  try {
    if (previewIndex.value === null) {
      _liveSnapshot = JSON.stringify(rows.value);
    }
    const parsed = JSON.parse(entry.snapshot);
    console.log('Preview version', index, '- rows:', parsed.length);
    rows.value = parsed;
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
    // Clear any pending saves from preview clicks
    clearTimeout(saveTimer);
    const reverted = JSON.parse(entry.snapshot);
    rows.value = reverted;
    _liveSnapshot = null;
    previewIndex.value = null;
    // Single history entry + save for the revert
    pushHistory();
    autoSave();
  } catch {}
}

// ── Left sidebar mode ──
export const sidebarMode = signal('toolbox'); // 'toolbox' | 'history'

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
 */

export const rows = signal([]);
export const selectedId = signal(null);

let _nextId = 1;
function nextId(prefix = 'el') { return prefix + '-' + (_nextId++); }

// After loading layout, ensure _nextId is higher than any existing ID
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
  return el;
}

// ── Row operations ──
export function addRow(beforeRowId = null) {
  const row = { id: nextId('row'), elements: [] };
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
    elements: row.elements.map(element => {
      if (!element.children) return element;
      return {
        ...element,
        children: element.children.map(cell => {
          if (cell.id !== cellId) return cell;
          return { ...cell, elements: [...cell.elements, el] };
        })
      };
    })
  }));
  selectedId.value = el.id;
  return el.id;
}

export function addGridCell(elementId) {
  rows.value = rows.value.map(row => ({
    ...row,
    elements: row.elements.map(el => {
      if (el.id !== elementId || !el.children) return el;
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
    elements: row.elements.map(el => {
      if (el.id !== elementId || !el.children || el.children.length <= 1) return el;
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
    elements: row.elements
      .filter(el => el.id !== elementId)
      .map(el => {
        if (!el.children) return el;
        return {
          ...el,
          children: el.children.map(cell => ({
            ...cell,
            elements: cell.elements.filter(e => e.id !== elementId)
          }))
        };
      })
  }));
  if (selectedId.value === elementId) selectedId.value = null;
}

export function updateElementProps(elementId, props) {
  rows.value = rows.value.map(row => ({
    ...row,
    elements: row.elements.map(el => {
      if (el.id === elementId) return { ...el, props: { ...el.props, ...props } };
      if (!el.children) return el;
      return {
        ...el,
        children: el.children.map(cell => ({
          ...cell,
          elements: cell.elements.map(e =>
            e.id === elementId ? { ...e, props: { ...e.props, ...props } } : e
          )
        }))
      };
    })
  }));
}

// ── Drop on canvas: always creates a new container with the element ──
export function dropOnCanvas(type, beforeRowId = null) {
  const rowId = addRow(beforeRowId);
  addElementToRow(rowId, type);
  commitChange();
}

// ── Drop on existing container: adds element to bottom of that container ──
export function dropOnContainer(type, rowId) {
  addElementToRow(rowId, type);
  commitChange();
}

// ── Explicit change tracking (no auto-effect) ──
export function commitChange() {
  pushHistory();
  debouncedSave();
}

// ── Drag state ──
export const dragging = signal(null);
export const dropTargetId = signal(null);

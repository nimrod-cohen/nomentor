import { signal, effect } from '@preact/signals';

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

  saveStatus.value = 'saving';

  fetch(ajaxUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `action=nomentor_save&nonce=${encodeURIComponent(nonce)}&post_id=${postId}&data=${encodeURIComponent(data)}`
  })
    .then(r => r.json())
    .then(r => { saveStatus.value = r.success ? 'saved' : 'error'; })
    .catch(() => { saveStatus.value = 'error'; });
}

let saveTimer = null;
function debouncedSave() {
  pushHistory();
  clearTimeout(saveTimer);
  saveTimer = setTimeout(autoSave, 800);
}

// Auto-save effect — initialized after rows is declared (see bottom of file)

// ── Undo to history snapshot ──
export function undoTo(index) {
  const entry = history.value[index];
  if (!entry) return;
  try {
    rows.value = JSON.parse(entry.snapshot);
    // Trim history to this point
    history.value = history.value.slice(0, index);
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

// ── Drop: add element type into a row (creates row if needed) ──
export function dropComponent(type, beforeRowId = null) {
  const rowId = addRow(beforeRowId);
  addElementToRow(rowId, type);
}

// ── Drag state ──
export const dragging = signal(null);
export const dropTargetId = signal(null);

// ── Auto-save effect (must be after rows is declared) ──
let _initialized = false;
effect(() => {
  rows.value; // subscribe to changes
  if (!_initialized) { _initialized = true; return; }
  debouncedSave();
});

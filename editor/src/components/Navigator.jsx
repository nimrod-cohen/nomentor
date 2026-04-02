import { rows, selectedId, removeRow, removeElement, commitChange } from '../state';
import { signal } from '@preact/signals';

// Context menu state
const contextMenu = signal(null); // { x, y, id, kind: 'container'|'element' }

// Close on click anywhere
if (typeof document !== 'undefined') {
  document.addEventListener('click', () => { contextMenu.value = null; });
}

export function Navigator() {
  const rowList = rows.value;

  return (
    <aside class="nomentor-sidebar-right">
      <div class="sidebar-header">Navigator</div>
      <div class="sidebar-content">
        {!rowList.length ? (
          <div class="nav-empty">No elements yet</div>
        ) : (
          <ul class="nav-tree">
            {rowList.map(row => (
              <NavRow key={row.id} row={row} />
            ))}
          </ul>
        )}
      </div>
      {contextMenu.value && <ContextMenu />}
    </aside>
  );
}

function ContextMenu() {
  const { x, y, id, kind } = contextMenu.value;

  function onRemove(e) {
    e.stopPropagation();
    if (kind === 'container') {
      removeRow(id);
    } else {
      removeElement(id);
    }
    commitChange();
    contextMenu.value = null;
  }

  return (
    <div class="nav-context-menu" style={{ top: y, left: x }} onClick={e => e.stopPropagation()}>
      <button onClick={onRemove}>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
        Remove {kind}
      </button>
    </div>
  );
}

function openContextMenu(e, id, kind) {
  e.preventDefault();
  e.stopPropagation();
  contextMenu.value = {
    x: e.clientX,
    y: e.clientY,
    id,
    kind
  };
}

function NavRow({ row }) {
  const isSelected = selectedId.value === row.id;

  return (
    <li>
      <div
        class={`nav-item ${isSelected ? 'selected' : ''}`}
        onClick={() => selectedId.value = row.id}
        onContextMenu={e => openContextMenu(e, row.id, 'container')}
      >
        container
      </div>
      {row.elements.length > 0 && (
        <ul class="nav-children">
          {row.elements.map(el => (
            <NavElement key={el.id} element={el} />
          ))}
        </ul>
      )}
    </li>
  );
}

function NavElement({ element }) {
  const isSelected = selectedId.value === element.id;

  return (
    <li>
      <div
        class={`nav-item ${isSelected ? 'selected' : ''}`}
        onClick={(e) => { e.stopPropagation(); selectedId.value = element.id; }}
        onContextMenu={e => openContextMenu(e, element.id, 'element')}
      >
        {element.type}
      </div>
      {element.children && (
        <ul class="nav-children">
          {element.children.map(cell => (
            <li key={cell.id}>
              <div class="nav-item nav-cell">cell</div>
              {cell.elements.length > 0 && (
                <ul class="nav-children">
                  {cell.elements.map(el => (
                    <NavElement key={el.id} element={el} />
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

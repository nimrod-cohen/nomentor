import { rows, selectedId, selectElement, removeRow, removeElement, addGridCell, removeGridCell, commitChange, reorderRow, moveElement, findElementById, addRow, duplicateElement, duplicateRow } from '../state';
import { signal } from '@preact/signals';

const contextMenu = signal(null);
const navDrag = signal(null);
const navDrop = signal(null);
const collapsed = signal({});  // { [id]: true }

function toggleCollapse(id, e) {
  e.stopPropagation();
  collapsed.value = { ...collapsed.value, [id]: !collapsed.value[id] };
}

function isCollapsed(id) {
  return !!collapsed.value[id];
}

// ── Icons ──
function NavIcon({ type }) {
  const s = { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' };
  switch (type) {
    case 'container': return <svg {...s}><rect width="18" height="18" x="3" y="3" rx="2"/></svg>;
    case 'grid': return <svg {...s}><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/></svg>;
    case 'cell': return <svg {...s}><rect width="14" height="14" x="5" y="5" rx="1" stroke-dasharray="3 2"/></svg>;
    case 'heading': return <svg {...s}><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M17 10l3-2v8"/></svg>;
    case 'text': return <svg {...s}><path d="M17 6.1H3"/><path d="M21 12.1H3"/><path d="M15.1 18H3"/></svg>;
    case 'image': return <svg {...s}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>;
    case 'button': return <svg {...s}><rect width="18" height="10" x="3" y="7" rx="4"/><line x1="8" x2="16" y1="12" y2="12"/></svg>;
    case 'timer': return <svg {...s}><line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/></svg>;
    case 'form': return <svg {...s}><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>;
    case 'list': return <svg {...s}><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>;
    default: return <svg {...s}><circle cx="12" cy="12" r="4"/></svg>;
  }
}

function TriangleIcon({ expanded }) {
  return (
    <svg class={`nav-triangle ${expanded ? 'expanded' : ''}`} width="10" height="10" viewBox="0 0 10 10">
      <path d="M3 2l4 3-4 3z" fill="currentColor" />
    </svg>
  );
}

if (typeof document !== 'undefined') {
  document.addEventListener('click', () => { contextMenu.value = null; });
  document.addEventListener('dragend', () => { navDrag.value = null; navDrop.value = null; });
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
  const { x, y, id, kind, parentId } = contextMenu.value;

  function onRemove(e) {
    e.stopPropagation();
    if (kind === 'container') { removeRow(id); commitChange('Remove container'); }
    else if (kind === 'cell') { removeGridCell(parentId, id); commitChange('Remove grid cell'); }
    else { removeElement(id); commitChange('Remove ' + kind); }
    contextMenu.value = null;
  }

  function onDuplicate(e) {
    e.stopPropagation();
    if (kind === 'container') { duplicateRow(id); commitChange('Duplicate container'); }
    else { duplicateElement(id); commitChange('Duplicate ' + kind); }
    contextMenu.value = null;
  }

  function onAddCell(e) {
    e.stopPropagation();
    addGridCell(id);
    commitChange('Add grid cell');
    contextMenu.value = null;
  }

  const isGrid = kind === 'element' && findElementById(id)?.type === 'grid';

  let canRemoveCell = true;
  if (kind === 'cell') {
    const grid = findElementById(parentId);
    if (grid?.children) canRemoveCell = grid.children.length > 1;
  }

  const dupIcon = <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>;
  const trashIcon = <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>;

  // Position upward if too close to the bottom
  const menuHeight = 80; // approximate
  const openUp = y + menuHeight > window.innerHeight;
  const posStyle = { right: window.innerWidth - x };
  if (openUp) posStyle.bottom = window.innerHeight - y;
  else posStyle.top = y;

  return (
    <div class="nav-context-menu" style={posStyle} onClick={e => e.stopPropagation()}>
      {kind === 'cell' ? (
        canRemoveCell
          ? <button onClick={onRemove}>{trashIcon} Remove cell</button>
          : <span class="context-disabled">No actions available</span>
      ) : (
        <>
          {isGrid && (
            <button class="context-action" onClick={onAddCell}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
              Add cell
            </button>
          )}
          <button onClick={onDuplicate}>{dupIcon} Duplicate</button>
          <button onClick={onRemove}>{trashIcon} Remove {kind}</button>
        </>
      )}
    </div>
  );
}

function openContextMenu(e, id, kind, parentId = null) {
  e.preventDefault();
  e.stopPropagation();
  contextMenu.value = { x: e.clientX, y: e.clientY, id, kind, parentId };
}

// ── Container row ──

function NavRow({ row }) {
  const isSelected = selectedId.value === row.id;
  const drop = navDrop.value;
  const isBefore = drop?.kind === 'row' && drop?.id === row.id && drop?.position === 'before';
  const isAfter = drop?.kind === 'row' && drop?.id === row.id && drop?.position === 'after';
  const isInto = drop?.kind === 'row' && drop?.id === row.id && drop?.position === 'into';

  function onDragStart(e) {
    navDrag.value = { kind: 'container', id: row.id };
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', '');
  }

  function onDragOver(e) {
    const drag = navDrag.value;
    if (!drag) return;
    e.stopPropagation();

    if (drag.kind === 'container') {
      if (drag.id === row.id) { navDrop.value = null; return; }
      const rect = e.currentTarget.getBoundingClientRect();
      const y = e.clientY - rect.top;
      const h = rect.height;
      // Only allow reorder at the edges (top/bottom 30%), ignore center
      if (y < h * 0.3) {
        e.preventDefault();
        navDrop.value = { kind: 'row', id: row.id, position: 'before' };
      } else if (y > h * 0.7) {
        e.preventDefault();
        navDrop.value = { kind: 'row', id: row.id, position: 'after' };
      } else {
        navDrop.value = null;
      }
    } else if (drag.kind === 'element') {
      e.preventDefault();
      const rect = e.currentTarget.getBoundingClientRect();
      const y = e.clientY - rect.top;
      const h = rect.height;
      if (y < h * 0.25) {
        navDrop.value = { kind: 'row', id: row.id, position: 'before' };
      } else if (y > h * 0.75) {
        navDrop.value = { kind: 'row', id: row.id, position: 'after' };
      } else {
        navDrop.value = { kind: 'row', id: row.id, position: 'into' };
      }
    }
  }

  function onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    const drag = navDrag.value;
    const dt = navDrop.value;
    navDrag.value = null;
    navDrop.value = null;
    if (!drag || !dt) return;

    if (drag.kind === 'container' && dt.kind === 'row' && (dt.position === 'before' || dt.position === 'after')) {
      const list = rows.value;
      const targetIdx = list.findIndex(r => r.id === dt.id);
      const beforeId = dt.position === 'before'
        ? dt.id
        : (targetIdx + 1 < list.length ? list[targetIdx + 1].id : null);
      reorderRow(drag.id, beforeId);
      commitChange('Reorder container');
    } else if (drag.kind === 'element' && dt.kind === 'row') {
      if (dt.position === 'into') {
        moveElement(drag.id, { rowId: dt.id });
        commitChange('Move element');
      } else {
        const list = rows.value;
        const targetIdx = list.findIndex(r => r.id === dt.id);
        const beforeRowId = dt.position === 'before'
          ? dt.id
          : (targetIdx + 1 < list.length ? list[targetIdx + 1].id : null);
        const newRowId = addRow(beforeRowId);
        moveElement(drag.id, { rowId: newRowId });
        commitChange('Move element to new container');
      }
    }
  }

  function onDragLeave() {
    if (navDrop.value?.id === row.id && navDrop.value?.kind === 'row') navDrop.value = null;
  }

  const cls = ['nav-item',
    isSelected && 'selected',
    isBefore && 'nav-drop-before',
    isAfter && 'nav-drop-after',
    isInto && 'nav-drop-into',
  ].filter(Boolean).join(' ');

  const hasChildren = row.elements.length > 0;
  const expanded = hasChildren && !isCollapsed(row.id);

  return (
    <li class="nav-container-li">
      <div
        class={cls}
        draggable
        onClick={() => selectElement(row.id)}
        onContextMenu={e => openContextMenu(e, row.id, 'container')}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onDragLeave={onDragLeave}
      >
        {hasChildren ? <span class="nav-toggle" onClick={e => toggleCollapse(row.id, e)}><TriangleIcon expanded={expanded} /></span> : <span class="nav-toggle-spacer" />}
        <NavIcon type="container" />
        <span class="nav-label">container</span>
      </div>
      {expanded && (
        <ul class="nav-children">
          {row.elements.map(el => (
            <NavElement key={el.id} element={el} parentContext={{ rowId: row.id }} siblings={row.elements} gridDepth={0} />
          ))}
        </ul>
      )}
    </li>
  );
}

// ── Element ──

function NavElement({ element, parentContext, siblings, gridDepth }) {
  const isSelected = selectedId.value === element.id;
  const drop = navDrop.value;
  const isBefore = drop?.kind === 'element' && drop?.id === element.id && drop?.position === 'before';
  const isAfter = drop?.kind === 'element' && drop?.id === element.id && drop?.position === 'after';

  function onDragStart(e) {
    e.stopPropagation();
    navDrag.value = { kind: 'element', id: element.id };
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', '');
  }

  function onDragOver(e) {
    const drag = navDrag.value;
    if (!drag || drag.kind !== 'element' || drag.id === element.id) return;
    e.preventDefault();
    e.stopPropagation();

    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientY - rect.top) / rect.height;
    navDrop.value = {
      kind: 'element', id: element.id,
      position: pct < 0.5 ? 'before' : 'after',
      parentContext, siblings
    };
  }

  function onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    const drag = navDrag.value;
    const dt = navDrop.value;
    if (!drag || !dt || drag.kind !== 'element') return;

    const idx = dt.siblings.findIndex(s => s.id === dt.id);
    const beforeId = dt.position === 'before'
      ? dt.id
      : (idx + 1 < dt.siblings.length ? dt.siblings[idx + 1].id : null);

    if (dt.parentContext.rowId) {
      moveElement(drag.id, { rowId: dt.parentContext.rowId, beforeElementId: beforeId });
    } else if (dt.parentContext.cellId) {
      moveElement(drag.id, { cellId: dt.parentContext.cellId, beforeElementId: beforeId });
    }
    commitChange('Move element');

    navDrag.value = null;
    navDrop.value = null;
  }

  function onDragLeave() {
    if (navDrop.value?.id === element.id && navDrop.value?.kind === 'element') navDrop.value = null;
  }

  const cls = ['nav-item',
    isSelected && 'selected',
    isBefore && 'nav-drop-before',
    isAfter && 'nav-drop-after',
  ].filter(Boolean).join(' ');

  const isForm = element.type === 'form';
  const formBefore = isForm ? (element.children?.find(c => c.slot === 'before') || element.children?.[0]) : null;
  const formAfter = isForm ? (element.children?.find(c => c.slot === 'after') || element.children?.[1]) : null;
  const hasChildren = isForm
    ? ((formBefore?.elements?.length || 0) + (formAfter?.elements?.length || 0) > 0 || (element.props?.fields?.length || 0) > 0)
    : (element.children && element.children.length > 0);
  const expanded = hasChildren && !isCollapsed(element.id);

  return (
    <li>
      <div
        class={cls}
        draggable
        onClick={e => { e.stopPropagation(); selectElement(element.id); }}
        onContextMenu={e => openContextMenu(e, element.id, 'element')}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onDragLeave={onDragLeave}
      >
        {hasChildren ? <span class="nav-toggle" onClick={e => toggleCollapse(element.id, e)}><TriangleIcon expanded={expanded} /></span> : <span class="nav-toggle-spacer" />}
        <NavIcon type={element.type} />
        <span class="nav-label">{element.type}</span>
      </div>
      {expanded && (
        <ul class="nav-children">
          {isForm ? (
            <>
              {formBefore?.elements?.map(el => (
                <NavElement key={el.id} element={el} parentContext={{ cellId: formBefore.id }} siblings={formBefore.elements} gridDepth={gridDepth + 1} />
              ))}
              <NavFormFields
                element={element}
                beforeSlot={formBefore}
                afterSlot={formAfter}
              />
              {formAfter?.elements?.map(el => (
                <NavElement key={el.id} element={el} parentContext={{ cellId: formAfter.id }} siblings={formAfter.elements} gridDepth={gridDepth + 1} />
              ))}
            </>
          ) : (
            element.children.map(cell => (
              <NavCell key={cell.id} cell={cell} gridId={element.id} gridDepth={gridDepth} />
            ))
          )}
        </ul>
      )}
    </li>
  );
}

// ── Cell (not draggable, is a drop target) ──

function NavCell({ cell, gridId, gridDepth }) {
  const drop = navDrop.value;
  const isInto = drop?.kind === 'cell' && drop?.id === cell.id;

  function onDragOver(e) {
    const drag = navDrag.value;
    if (!drag || drag.kind !== 'element') return;
    // Prevent grids inside nested cells (max 2 levels)
    const draggedEl = findElementById(drag.id);
    if (draggedEl?.type === 'grid' && gridDepth >= 1) return;
    e.preventDefault();
    e.stopPropagation();
    navDrop.value = { kind: 'cell', id: cell.id, position: 'into' };
  }

  function onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    const drag = navDrag.value;
    if (!drag || drag.kind !== 'element') return;
    moveElement(drag.id, { cellId: cell.id });
    commitChange('Move element to cell');
    navDrag.value = null;
    navDrop.value = null;
  }

  function onDragLeave() {
    if (navDrop.value?.id === cell.id && navDrop.value?.kind === 'cell') navDrop.value = null;
  }

  const hasChildren = cell.elements.length > 0;
  const expanded = hasChildren && !isCollapsed(cell.id);

  return (
    <li>
      <div
        class={`nav-item nav-cell ${isInto ? 'nav-drop-into' : ''} ${selectedId.value === cell.id ? 'selected' : ''}`}
        onClick={e => { e.stopPropagation(); selectElement(cell.id); }}
        onContextMenu={e => openContextMenu(e, cell.id, 'cell', gridId)}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onDragLeave={onDragLeave}
      >
        {hasChildren ? <span class="nav-toggle" onClick={e => toggleCollapse(cell.id, e)}><TriangleIcon expanded={expanded} /></span> : <span class="nav-toggle-spacer" />}
        <NavIcon type="cell" />
        <span class="nav-label">cell</span>
      </div>
      {expanded && (
        <ul class="nav-children">
          {cell.elements.map(el => (
            <NavElement key={el.id} element={el} parentContext={{ cellId: cell.id }} siblings={cell.elements} gridDepth={gridDepth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

// ── Form fields row (drop target for moving elements between before/after slots) ──

function NavFormFields({ element, beforeSlot, afterSlot }) {
  const drop = navDrop.value;
  const isBefore = drop?.kind === 'form-fields' && drop?.id === element.id && drop?.position === 'before';
  const isAfter = drop?.kind === 'form-fields' && drop?.id === element.id && drop?.position === 'after';

  function onDragOver(e) {
    const drag = navDrag.value;
    if (!drag || drag.kind !== 'element') return;
    e.preventDefault();
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientY - rect.top) / rect.height;
    navDrop.value = {
      kind: 'form-fields', id: element.id,
      position: pct < 0.5 ? 'before' : 'after',
      beforeSlot, afterSlot,
    };
  }

  function onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    const drag = navDrag.value;
    const dt = navDrop.value;
    if (!drag || !dt || drag.kind !== 'element') return;

    const targetCellId = dt.position === 'before' ? beforeSlot.id : afterSlot.id;
    const beforeElementId = dt.position === 'after' && afterSlot.elements.length > 0 ? afterSlot.elements[0].id : null;
    moveElement(drag.id, { cellId: targetCellId, beforeElementId });
    commitChange('Move element');
    navDrag.value = null;
    navDrop.value = null;
  }

  function onDragLeave() {
    if (navDrop.value?.kind === 'form-fields' && navDrop.value?.id === element.id) navDrop.value = null;
  }

  return (
    <li>
      <div
        class={`nav-item nav-form-fields ${isBefore ? 'nav-drop-before' : ''} ${isAfter ? 'nav-drop-after' : ''}`}
        onClick={() => selectElement(element.id)}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onDragLeave={onDragLeave}
      >
        <span class="nav-toggle-spacer" />
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/><rect width="16" height="16" x="4" y="4" rx="2"/></svg>
        <span class="nav-label">fields ({element.props?.fields?.length || 0})</span>
      </div>
    </li>
  );
}

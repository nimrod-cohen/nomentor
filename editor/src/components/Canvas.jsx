import { useRef, useCallback } from 'preact/hooks';
import { rows, dragging, dropTargetId, dropOnCanvas, dropOnContainer, selectedId, selectElement, removeRow, removeElement, commitChange, viewportMode, getEffectiveDirection } from '../state';

function isHiddenOnViewport(props, viewport) {
  return !!props?.hideOn?.[viewport];
}
import { buildFlexContainerStyle } from '../utils';
import { ElementRenderer } from './rows/ElementRenderer';
import { useEffect } from 'preact/hooks';

export function Canvas() {
  const pageRef = useRef(null);

  // ── Find drop position ──
  const getDropBeforeId = useCallback((y) => {
    const rowEls = pageRef.current?.querySelectorAll('.canvas-row');
    if (!rowEls) return null;
    for (const el of rowEls) {
      const rect = el.getBoundingClientRect();
      if (y < rect.top + rect.height / 2) return el.dataset.rowId;
    }
    return null;
  }, []);

  function onDragOver(e) {
    if (!dragging.value) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    dropTargetId.value = getDropBeforeId(e.clientY);
  }

  function onDragLeave(e) {
    if (!pageRef.current?.contains(e.relatedTarget)) {
      dropTargetId.value = null;
    }
  }

  function onDrop(e) {
    if (!dragging.value) return;
    e.preventDefault();
    const type = dragging.value.type;
    const beforeId = dropTargetId.value;
    dropOnCanvas(type, beforeId);
    dragging.value = null;
    dropTargetId.value = null;
  }

  // ── Delete key ──
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key !== 'Delete' && e.key !== 'Backspace') return;
      const active = document.activeElement;
      if (active?.isContentEditable || active?.tagName === 'INPUT' || active?.tagName === 'TEXTAREA') return;

      const sel = selectedId.value;
      if (!sel) return;

      // Check if it's a row or element
      const row = rows.value.find(r => r.id === sel);
      if (row) { removeRow(sel); commitChange('Remove container'); return; }

      removeElement(sel);
      commitChange('Remove element');
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  // ── Scroll selected element into view ──
  const sel = selectedId.value;
  useEffect(() => {
    if (!sel) return;
    const el = pageRef.current?.querySelector(`[data-row-id="${sel}"], [data-element-id="${sel}"]`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [sel]);

  const rowList = rows.value;
  const isDragging = !!dragging.value;
  const viewport = viewportMode.value;

  return (
    <main class="nomentor-canvas">
      <div
        ref={pageRef}
        class={`canvas-page ${isDragging ? 'drag-over' : ''} viewport-${viewport}`}
        dir={getEffectiveDirection()}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {rowList.length === 0 && (
          <div class="canvas-empty">Drag components here to start building</div>
        )}
        {rowList.map(row => (
          <CanvasRow key={row.id} row={row} />
        ))}
        {isDragging && (
          <div class="canvas-drop-end" onDragOver={e => { e.preventDefault(); e.stopPropagation(); }} onDrop={e => { e.preventDefault(); e.stopPropagation(); dropOnCanvas(dragging.value.type, null); dragging.value = null; dropTargetId.value = null; }}>
            + New container
          </div>
        )}
      </div>
    </main>
  );
}

function CanvasRow({ row }) {
  const isSelected = selectedId.value === row.id;
  const isDropTarget = dropTargetId.value === row.id;

  function onRowDragOver(e) {
    if (!dragging.value) return;
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy';
  }

  function onRowDrop(e) {
    if (!dragging.value) return;
    e.preventDefault();
    e.stopPropagation();
    dropOnContainer(dragging.value.type, row.id);
    dragging.value = null;
    dropTargetId.value = null;
  }

  return (
    <>
      {isDropTarget && <div class="drop-indicator" />}
      <div
        class={`canvas-row ${isSelected ? 'selected' : ''} ${isHiddenOnViewport(row.props, viewportMode.value) ? 'vp-hidden' : ''}`}
        data-row-id={row.id}
        style={buildFlexContainerStyle(row.props)}
        onClick={e => { e.stopPropagation(); selectElement(row.id); }}
        onDragOver={onRowDragOver}
        onDrop={onRowDrop}
      >
        <div class="row-label">container{isHiddenOnViewport(row.props, viewportMode.value) ? ' (hidden)' : ''}</div>
        {row.elements.length === 0 && (
          <div class="row-empty">Empty container — drag a component here</div>
        )}
        {row.elements.map(el => (
          <ElementRenderer key={el.id} element={el} />
        ))}
      </div>
    </>
  );
}

import { addElementToCell, addGridCell, removeGridCell, dragging, commitChange } from '../../state';
import { ElementRenderer } from './ElementRenderer';

export function GridElement({ element }) {
  const cols = element.props.columns || 2;

  function onCellDragOver(e) {
    if (!dragging.value || dragging.value.source !== 'toolbox') return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    e.currentTarget.classList.add('cell-drag-over');
  }

  function onCellDragLeave(e) {
    e.currentTarget.classList.remove('cell-drag-over');
  }

  function onCellDrop(e, cellId) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.remove('cell-drag-over');
    if (!dragging.value) return;
    const type = dragging.value.type;
    if (type === 'grid') return;
    addElementToCell(cellId, type);
    dragging.value = null;
    commitChange();
  }

  function onAddCell(e) {
    e.stopPropagation();
    addGridCell(element.id);
    commitChange();
  }

  function onRemoveCell(e, cellId) {
    e.stopPropagation();
    removeGridCell(element.id, cellId);
    commitChange();
  }

  return (
    <div class="grid-wrapper">
      <div class="grid-element" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {element.children.map(cell => (
          <div
            key={cell.id}
            class="grid-cell"
            onDragOver={onCellDragOver}
            onDragLeave={onCellDragLeave}
            onDrop={e => onCellDrop(e, cell.id)}
          >
            {element.children.length > 1 && (
              <button
                class="cell-remove-btn"
                onClick={e => onRemoveCell(e, cell.id)}
                title="Remove cell"
              >×</button>
            )}
            {cell.elements.length === 0 && (
              <div class="cell-empty">Drop here</div>
            )}
            {cell.elements.map(el => (
              <ElementRenderer key={el.id} element={el} />
            ))}
          </div>
        ))}
      </div>
      <button class="grid-add-cell-btn" onClick={onAddCell} title="Add cell">
        + Add cell
      </button>
    </div>
  );
}

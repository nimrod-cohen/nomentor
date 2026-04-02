import { addElementToCell, dragging, commitChange } from '../../state';
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
    if (type === 'grid') return; // no nested grids
    addElementToCell(cellId, type);
    dragging.value = null;
    commitChange();
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: '12px' }}>
      {element.children.map(cell => (
        <div
          key={cell.id}
          class="grid-cell"
          onDragOver={onCellDragOver}
          onDragLeave={onCellDragLeave}
          onDrop={e => onCellDrop(e, cell.id)}
        >
          {cell.elements.length === 0 && (
            <div class="cell-empty">Drop here</div>
          )}
          {cell.elements.map(el => (
            <ElementRenderer key={el.id} element={el} />
          ))}
        </div>
      ))}
    </div>
  );
}

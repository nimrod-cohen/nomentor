import { addElementToCell, dragging, commitChange, selectedId, selectElement, viewportMode } from '../../state';
import { ElementRenderer } from './ElementRenderer';
import { buildCellStyle, buildFlexContainerStyle } from '../../utils';

function buildGridStyle(props, cols) {
  const flexStyle = buildFlexContainerStyle(props) || {};
  // Drop flex-specific properties; grid uses display:grid (set by .grid-element class)
  delete flexStyle.display;
  delete flexStyle.flexDirection;
  delete flexStyle.justifyContent;
  delete flexStyle.alignItems;
  delete flexStyle.backgroundColor;
  return { ...flexStyle, gridTemplateColumns: `repeat(${cols}, 1fr)` };
}

export function GridElement({ element, gridDepth = 0 }) {
  const cols = element.props.columns || 2;

  function onCellDragOver(e) {
    if (!dragging.value || dragging.value.source !== 'toolbox') return;
    if (dragging.value.type === 'grid' && gridDepth >= 1) return;
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
    if (type === 'grid' && gridDepth >= 1) return;
    addElementToCell(cellId, type);
    dragging.value = null;
    commitChange('Add ' + type + ' to cell');
  }

  return (
    <div class="grid-element" style={buildGridStyle(element.props, cols)}>
      {element.children.map(cell => {
        const isSelected = selectedId.value === cell.id;
        const cellHidden = !!cell.props?.hideOn?.[viewportMode.value];
        return (
          <div
            key={cell.id}
            class={`grid-cell ${isSelected ? 'cell-selected' : ''} ${cellHidden ? 'vp-hidden' : ''}`}
            style={buildCellStyle(cell.props)}
            data-element-id={cell.id}
            onClick={e => { e.stopPropagation(); selectElement(cell.id); }}
            onDragOver={onCellDragOver}
            onDragLeave={onCellDragLeave}
            onDrop={e => onCellDrop(e, cell.id)}
          >
            {cell.elements.length === 0 && (
              <div class="cell-empty">Drop here</div>
            )}
            {cell.elements.map(el => (
              <ElementRenderer key={el.id} element={el} gridDepth={gridDepth + 1} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

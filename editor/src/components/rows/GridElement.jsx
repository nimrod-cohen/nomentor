import { addElementToCell, dragging, commitChange, selectedId, selectElement, viewportMode } from '../../state';
import { ElementRenderer } from './ElementRenderer';
import { buildCellStyle } from '../../utils';

function buildGridStyle(props, cols) {
  const s = { gridTemplateColumns: `repeat(${cols}, 1fr)` };
  if (props.maxWidth) { s.width = props.maxWidth; s.maxWidth = '100%'; s.marginLeft = 'auto'; s.marginRight = 'auto'; }
  const vp = viewportMode.value;
  function resolve(prop) {
    if (vp === 'mobile') return props['mobile_' + prop] ?? props['tablet_' + prop] ?? props[prop];
    if (vp === 'tablet') return props['tablet_' + prop] ?? props[prop];
    return props[prop];
  }
  const rg = resolve('rowGap');
  const cg = resolve('colGap');
  if (rg) s.rowGap = rg + 'px';
  if (cg) s.columnGap = cg + 'px';
  return s;
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

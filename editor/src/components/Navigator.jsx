import { rows, selectedId } from '../state';

export function Navigator() {
  const rowList = rows.value;

  if (!rowList.length) {
    return (
      <aside class="nomentor-sidebar-right">
        <div class="sidebar-header">Navigator</div>
        <div class="sidebar-content">
          <div class="nav-empty">No elements yet</div>
        </div>
      </aside>
    );
  }

  return (
    <aside class="nomentor-sidebar-right">
      <div class="sidebar-header">Navigator</div>
      <div class="sidebar-content">
        <ul class="nav-tree">
          {rowList.map(row => (
            <NavRow key={row.id} row={row} />
          ))}
        </ul>
      </div>
    </aside>
  );
}

function NavRow({ row }) {
  const isSelected = selectedId.value === row.id;

  return (
    <li>
      <div
        class={`nav-item ${isSelected ? 'selected' : ''}`}
        onClick={() => selectedId.value = row.id}
      >
        row
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

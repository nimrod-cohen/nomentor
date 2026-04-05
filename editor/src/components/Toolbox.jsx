import { Grid, Heading, AlignLeft, Image, MousePointerClick, Timer, ClipboardList, List } from '../icons';
import { dragging } from '../state';

const COMPONENTS = [
  { type: 'grid', label: 'Grid', icon: Grid },
  { type: 'heading', label: 'Heading', icon: Heading },
  { type: 'text', label: 'Text', icon: AlignLeft },
  { type: 'image', label: 'Image', icon: Image },
  { type: 'button', label: 'Button', icon: MousePointerClick },
  { type: 'list', label: 'List', icon: List },
  { type: 'timer', label: 'Timer', icon: Timer },
  { type: 'form', label: 'Form', icon: ClipboardList },
];

export function Toolbox() {
  function onDragStart(e, type) {
    dragging.value = { type, source: 'toolbox' };
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('text/plain', type);
  }

  function onDragEnd() {
    dragging.value = null;
  }

  return (
    <aside class="nomentor-sidebar-left">
      <div class="sidebar-header">Toolbox</div>
      <div class="sidebar-content">
        <div class="toolbox-grid">
          {COMPONENTS.map(c => (
            <div
              key={c.type}
              class="toolbox-item"
              draggable
              onDragStart={e => onDragStart(e, c.type)}
              onDragEnd={onDragEnd}
            >
              <c.icon />
              <span>{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

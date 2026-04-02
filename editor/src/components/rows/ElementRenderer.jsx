import { HeadingElement } from './HeadingElement';
import { TextElement } from './TextElement';
import { ImageElement } from './ImageElement';
import { GridElement } from './GridElement';
import { selectedId } from '../../state';

const RENDERERS = {
  heading: HeadingElement,
  text: TextElement,
  image: ImageElement,
  grid: GridElement,
};

export function ElementRenderer({ element }) {
  const Comp = RENDERERS[element.type];
  if (!Comp) return <div>Unknown: {element.type}</div>;

  const isSelected = selectedId.value === element.id;

  return (
    <div
      class={`element-wrapper ${isSelected ? 'selected' : ''}`}
      onClick={e => { e.stopPropagation(); selectedId.value = element.id; }}
    >
      <div class="element-label">{element.type}</div>
      <Comp element={element} />
    </div>
  );
}

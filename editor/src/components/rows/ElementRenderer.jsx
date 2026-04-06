import { HeadingElement } from './HeadingElement';
import { TextElement } from './TextElement';
import { ImageElement } from './ImageElement';
import { GridElement } from './GridElement';
import { ButtonElement } from './ButtonElement';
import { TimerElement } from './TimerElement';
import { FormElement } from './FormElement';
import { ListElement } from './ListElement';
import { SeparatorElement } from './SeparatorElement';
import { selectedId, selectElement, viewportMode } from '../../state';

const RENDERERS = {
  heading: HeadingElement,
  text: TextElement,
  image: ImageElement,
  grid: GridElement,
  button: ButtonElement,
  timer: TimerElement,
  form: FormElement,
  list: ListElement,
  separator: SeparatorElement,
};

function isHiddenOnViewport(props, viewport) {
  return !!props?.hideOn?.[viewport];
}

export function ElementRenderer({ element, gridDepth = 0 }) {
  const Comp = RENDERERS[element.type];
  if (!Comp) return <div>Unknown: {element.type}</div>;

  const isSelected = selectedId.value === element.id;
  const hidden = isHiddenOnViewport(element.props, viewportMode.value);
  const stretch = !['button', 'image'].includes(element.type);

  return (
    <div
      class={`element-wrapper ${isSelected ? 'selected' : ''} ${hidden ? 'vp-hidden' : ''} ${stretch ? 'el-stretch' : ''}`}
      data-element-id={element.id}
      onClick={e => { e.stopPropagation(); selectElement(element.id); }}
    >
      <div class="element-label">{element.type}{hidden ? ' (hidden)' : ''}</div>
      <Comp element={element} gridDepth={gridDepth} />
    </div>
  );
}

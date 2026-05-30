import { HeadingElement } from './HeadingElement';
import { TextElement } from './TextElement';
import { ImageElement } from './ImageElement';
import { GridElement } from './GridElement';
import { ButtonElement } from './ButtonElement';
import { TimerElement } from './TimerElement';
import { FormElement } from './FormElement';
import { ListElement } from './ListElement';
import { SeparatorElement } from './SeparatorElement';
import { VideoElement } from './VideoElement';
import { selectedId, selectElement, viewportMode } from '../../state';
import { scopedCustomCss } from '../../utils';

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
  video: VideoElement,
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

  const htmlId = element.props?.anchorId || element.id;
  const scoped = scopedCustomCss(element.props?.customCss, htmlId);
  // Effects classes live on the wrapper so motion/shadow/hover preview in
  // the canvas. Entrance effects (.nm-fx-fade etc) auto-trigger via a
  // .nm-fx-in class added on mount (see editor.css fallback).
  const fx = Array.isArray(element.props?.effects)
    ? element.props.effects.map(k => `nm-fx-${k}`).join(' ')
    : '';
  return (
    <div
      class={`element-wrapper ${isSelected ? 'selected' : ''} ${hidden ? 'vp-hidden' : ''} ${stretch ? 'el-stretch' : ''} nm-fx-in ${fx}`}
      data-element-id={element.id}
      onClick={e => { e.stopPropagation(); selectElement(element.id); }}
    >
      {scoped && <style>{scoped}</style>}
      <div class="element-label">{element.type}{hidden ? ' (hidden)' : ''}</div>
      <Comp element={element} gridDepth={gridDepth} />
    </div>
  );
}

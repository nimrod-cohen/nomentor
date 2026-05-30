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
import { useEffect, useState } from 'preact/hooks';
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
  // Effects classes + per-effect speed CSS vars on the wrapper so the
  // canvas previews motion/shadow/hover at the configured speed. Entrance
  // effects (.nm-fx-fade etc) auto-show via the .nm-fx-in class.
  const fxList = Array.isArray(element.props?.effects) ? element.props.effects : [];
  const fx = fxList.map(k => `nm-fx-${k}`).join(' ');
  const sp = element.props?.effectSpeeds || {};
  const fxStyle = {};
  for (const k of fxList) {
    const v = sp[k];
    if (typeof v === 'number' && v > 0 && Math.abs(v - 1) > 0.01) {
      fxStyle[`--nm-fx-${k}-speed`] = String(v);
    }
  }
  // Replay entrance effects in the canvas: hold `.nm-fx-in` off for one
  // frame after mount or whenever the effect set / speeds change, then
  // turn it on so the transition plays through. Mirrors what the rendered
  // page's IntersectionObserver does on scroll-into-view.
  const [shown, setShown] = useState(false);
  useEffect(() => {
    setShown(false);
    const f1 = requestAnimationFrame(() => {
      const f2 = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(f2);
    });
    return () => cancelAnimationFrame(f1);
  }, [fx, JSON.stringify(fxStyle)]);
  return (
    <div
      class={`element-wrapper ${isSelected ? 'selected' : ''} ${hidden ? 'vp-hidden' : ''} ${stretch ? 'el-stretch' : ''} ${shown ? 'nm-fx-in' : ''} ${fx}`}
      data-element-id={element.id}
      style={Object.keys(fxStyle).length ? fxStyle : undefined}
      onClick={e => { e.stopPropagation(); selectElement(element.id); }}
    >
      {scoped && <style>{scoped}</style>}
      <div class="element-label">{element.type}{hidden ? ' (hidden)' : ''}</div>
      <Comp element={element} gridDepth={gridDepth} />
    </div>
  );
}

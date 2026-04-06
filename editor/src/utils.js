import { getSizeMap, getEffectiveSettings, viewportMode } from './state';
import { shadowToCSS } from './components/BoxShadowEditor';
import { resolveColor } from './components/ColorSelector';

/** Resolve a simple numeric prop for current viewport (mobile → tablet → desktop) */
const resolveViewportProp = (props, prop) => {
  const vp = viewportMode.value;
  if (vp === 'mobile') return props[`mobile_${prop}`] ?? props[`tablet_${prop}`] ?? props[prop];
  if (vp === 'tablet') return props[`tablet_${prop}`] ?? props[prop];
  return props[prop];
};

/** Resolve border for current viewport */
const resolveBorder = (props) => {
  const b = resolveViewportProp(props, 'border');
  if (!b || typeof b !== 'object' || !b.width || b.style === 'none') return null;
  return `${b.width}px ${b.style} ${resolveColor(b.color) || '#000'}`;
};

/** Resolve border-radius for current viewport */
const resolveBorderRadius = (props) => {
  const r = resolveViewportProp(props, 'borderRadius');
  if (!r || typeof r !== 'object') return undefined;
  const { topLeft, topRight, bottomRight, bottomLeft } = r;
  if (!topLeft && !topRight && !bottomRight && !bottomLeft) return undefined;
  return `${topLeft || 0}px ${topRight || 0}px ${bottomRight || 0}px ${bottomLeft || 0}px`;
};

const applyBorder = (props, s) => {
  const border = resolveBorder(props);
  const radius = resolveBorderRadius(props);
  if (border) s.border = border;
  if (radius) s.borderRadius = radius;
  if (props.boxShadow) s.boxShadow = shadowToCSS(props.boxShadow);
};

/** Resolve spacing object for current viewport (mobile → tablet → desktop) */
const resolveSpacing = (props, prop) => {
  const vp = viewportMode.value;
  let val;
  if (vp === 'mobile') val = props[`mobile_${prop}`] || props[`tablet_${prop}`] || props[prop];
  else if (vp === 'tablet') val = props[`tablet_${prop}`] || props[prop];
  else val = props[prop];
  if (val == null || val === '') return undefined;
  if (typeof val === 'string') return val;
  if (typeof val !== 'object') return undefined;
  const { top, right, bottom, left } = val;
  return `${top || 0}px ${right || 0}px ${bottom || 0}px ${left || 0}px`;
};

// flex-direction: column → justify = vertical, align = horizontal
const ALIGN_MAP = {
  'top-left':      { justifyContent: 'flex-start', alignItems: 'flex-start' },
  'top-center':    { justifyContent: 'flex-start', alignItems: 'center' },
  'top-right':     { justifyContent: 'flex-start', alignItems: 'flex-end' },
  'middle-left':   { justifyContent: 'center',     alignItems: 'flex-start' },
  'middle-center': { justifyContent: 'center',     alignItems: 'center' },
  'middle-right':  { justifyContent: 'center',     alignItems: 'flex-end' },
  'bottom-left':   { justifyContent: 'flex-end',   alignItems: 'flex-start' },
  'bottom-center': { justifyContent: 'flex-end',   alignItems: 'center' },
  'bottom-right':  { justifyContent: 'flex-end',   alignItems: 'flex-end' },
};

const parseCustomCss = (css, s) => {
  if (!css) return;
  for (const rule of css.split(';')) {
    const [key, ...rest] = rule.split(':');
    if (!key || !rest.length) continue;
    const prop = key.trim();
    const val = rest.join(':').trim();
    if (!prop || !val) continue;
    const camel = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    s[camel] = val;
  }
};

/**
 * Build an inline style object from element props.
 */
export function buildStyle(props) {
  const s = {};
  const viewport = viewportMode.value;
  const settings = getEffectiveSettings(viewport);

  if (settings.fontFamily) s.fontFamily = settings.fontFamily;
  if (props.color) s.color = resolveColor(props.color);
  if (props.fontSize) {
    const sizeMap = getSizeMap(viewport);
    if (sizeMap[props.fontSize]) s.fontSize = sizeMap[props.fontSize];
  }
  if (props.textAlign) s.textAlign = props.textAlign;
  if (props.direction) s.direction = props.direction;
  const lh = resolveViewportProp(props, 'lineHeight');
  if (lh) s.lineHeight = lh;
  applyBorder(props, s);
  const pad = resolveSpacing(props, 'padding');
  const mar = resolveSpacing(props, 'margin');
  if (pad) s.padding = pad;
  if (mar) s.margin = mar;
  parseCustomCss(props.customCss, s);
  return s;
}

/**
 * Build inline style for a container (row) or cell with flex alignment.
 */
export function buildFlexContainerStyle(props) {
  if (!props) return undefined;
  const s = { display: 'flex', flexDirection: 'column' };
  if (props.maxWidth) {
    s.width = props.maxWidth;
    s.maxWidth = '100%';
    const m = props.margin;
    const top = (m && typeof m === 'object') ? (m.top || 0) : 0;
    const bot = (m && typeof m === 'object') ? (m.bottom || 0) : 0;
    s.margin = `${top}px auto ${bot}px auto`;
  }
  const cPad = resolveSpacing(props, 'padding');
  const cMar = resolveSpacing(props, 'margin');
  if (cPad) s.padding = cPad;
  if (cMar && !props.maxWidth) s.margin = cMar;
  const rg = resolveViewportProp(props, 'rowGap');
  const cg = resolveViewportProp(props, 'colGap');
  if (rg) s.rowGap = `${rg}px`;
  if (cg) s.columnGap = `${cg}px`;
  if (props.bgColor) s.backgroundColor = resolveColor(props.bgColor);
  applyBorder(props, s);
  if (props.align && ALIGN_MAP[props.align]) {
    Object.assign(s, ALIGN_MAP[props.align]);
  }
  if (props.direction) s.direction = props.direction;
  parseCustomCss(props.customCss, s);
  return s;
}

/**
 * Build inline style for a grid cell.
 */
export function buildCellStyle(props) {
  if (!props) return undefined;
  const s = { display: 'flex', flexDirection: 'column' };
  const cellPad = resolveSpacing(props, 'padding');
  const cellMar = resolveSpacing(props, 'margin');
  if (cellPad) s.padding = cellPad;
  if (cellMar) s.margin = cellMar;
  const cellRg = resolveViewportProp(props, 'rowGap');
  const cellCg = resolveViewportProp(props, 'colGap');
  if (cellRg) s.rowGap = `${cellRg}px`;
  if (cellCg) s.columnGap = `${cellCg}px`;
  applyBorder(props, s);
  if (props.align && ALIGN_MAP[props.align]) {
    Object.assign(s, ALIGN_MAP[props.align]);
  }
  if (props.direction) s.direction = props.direction;
  parseCustomCss(props.customCss, s);
  return s;
}

export { ALIGN_MAP };

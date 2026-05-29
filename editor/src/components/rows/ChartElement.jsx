import { useMemo } from 'preact/hooks';
import { buildStyle } from '../../utils';

/**
 * Mirror of nomentor_chart_svg() in renderer.php. CSS is embedded inside the
 * SVG so the chart animates identically in the editor canvas and on the
 * published page, with no global keyframes required.
 */
function chartSvg(props, u) {
  const line  = props.lineColor || '#111a45';
  const bar   = props.barColor  || '#9fb4e6';
  const area  = props.areaColor || line;
  const tipBg = props.tipColor  || line;
  return (
    `<svg viewBox="0 0 560 250" role="img" aria-label="Growth chart" style="display:block;width:100%;height:auto;overflow:visible">` +
      `<defs><linearGradient id="${u}g" x1="0" y1="0" x2="0" y2="1">` +
        `<stop offset="0" stop-color="${area}" stop-opacity="0.18"/>` +
        `<stop offset="1" stop-color="${area}" stop-opacity="0"/></linearGradient></defs>` +
      `<style>` +
        `@keyframes ${u}draw{to{stroke-dashoffset:0}}` +
        `@keyframes ${u}grow{to{transform:scaleY(1)}}` +
        `@keyframes ${u}pop{to{opacity:1;transform:scale(1)}}` +
        `@keyframes ${u}float{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}` +
        `.${u}l{stroke-dasharray:640;stroke-dashoffset:640;animation:${u}draw 1.7s cubic-bezier(.16,1,.3,1) forwards}` +
        `.${u}b{transform:scaleY(0);transform-origin:bottom;animation:${u}grow .7s ease forwards}` +
        `.${u}t{opacity:0;transform:scale(.4);transform-origin:center;animation:${u}pop .35s ease 1.55s forwards}` +
        `.${u}tw{animation:${u}float 2.4s ease-in-out 1.9s infinite}` +
        `@media (prefers-reduced-motion:reduce){.${u}l{stroke-dashoffset:0;animation:none}.${u}b{transform:none;animation:none}.${u}t{opacity:1;transform:none;animation:none}.${u}tw{animation:none}}` +
      `</style>` +
      `<line x1="20" y1="220" x2="540" y2="220" stroke="#dfe5f2" stroke-width="2"/>` +
      `<g fill="${bar}">` +
        `<rect class="${u}b" x="70"  y="170" width="34" height="50"  rx="4" style="animation-delay:.15s"/>` +
        `<rect class="${u}b" x="170" y="135" width="34" height="85"  rx="4" style="animation-delay:.30s"/>` +
        `<rect class="${u}b" x="270" y="95"  width="34" height="125" rx="4" style="animation-delay:.45s"/>` +
        `<rect class="${u}b" x="370" y="55"  width="34" height="165" rx="4" style="animation-delay:.60s"/>` +
        `<rect class="${u}b" x="470" y="25"  width="34" height="195" rx="4" style="animation-delay:.75s"/>` +
      `</g>` +
      `<path d="M30 205 L120 180 L220 150 L320 110 L420 70 L520 30 L520 220 L30 220 Z" fill="url(#${u}g)"/>` +
      `<path class="${u}l" d="M30 205 L120 180 L220 150 L320 110 L420 70 L520 30" fill="none" stroke="${line}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>` +
      `<g class="${u}tw"><g class="${u}t" transform="translate(520,30)">` +
        `<circle r="9" fill="${tipBg}"/><path d="M-4 2 L0 -4 L4 2" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>` +
      `</g></g>` +
    `</svg>`
  );
}

export function ChartElement({ element }) {
  const style = buildStyle(element.props);
  const mw = element.props.maxWidth || '560px';
  // New unique prefix on each remount so the animation replays in the canvas
  // when the user tweaks colors / props (re-render replays the keyframes).
  const u = useMemo(
    () => 'c' + Math.random().toString(36).slice(2, 10),
    [element.props.lineColor, element.props.barColor, element.props.areaColor, element.props.tipColor]
  );
  return (
    <div style={{ ...style, maxWidth: mw, marginInline: 'auto' }}
      dangerouslySetInnerHTML={{ __html: chartSvg(element.props, u) }} />
  );
}

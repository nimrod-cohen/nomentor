/**
 * EffectsField — collapsible multi-select chip grid + per-effect speed sliders.
 *
 * Storage on element/row props:
 *   props.effects        = ['fade', 'float', ...]       (enabled keys)
 *   props.effectSpeeds   = { fade: 0.7, float: 1.5 }    (duration multiplier;
 *                                                        1 = default, <1 faster, >1 slower)
 *
 * Shadow effects are static and don't get a speed slider.
 *
 * The fold-open state is held in a module signal so it persists across
 * element selections within an editor session.
 */
import { signal } from '@preact/signals';

const EFFECTS = [
  { group: 'Entrance', items: [
    { key: 'fade',        label: 'Fade' },
    { key: 'slide-up',    label: 'Up',    arrow: 'up' },
    { key: 'slide-down',  label: 'Down',  arrow: 'down' },
    { key: 'slide-left',  label: 'Left',  arrow: 'left' },
    { key: 'slide-right', label: 'Right', arrow: 'right' },
    { key: 'zoom-in',     label: 'Zoom',  arrow: 'zoom' },
  ]},
  { group: 'Motion', items: [
    { key: 'float', label: 'Float' },
    { key: 'pulse', label: 'Pulse' },
    { key: 'sway',  label: 'Sway' },
  ]},
  { group: 'Hover', items: [
    { key: 'hover-lift',  label: 'Lift' },
    { key: 'hover-glow',  label: 'Glow' },
    { key: 'hover-scale', label: 'Scale' },
  ]},
  { group: 'Shadow', items: [
    { key: 'shadow-sm', label: 'Small' },
    { key: 'shadow-md', label: 'Medium' },
    { key: 'shadow-lg', label: 'Large' },
  ]},
];

const ALL_KEYS = EFFECTS.flatMap(g => g.items.map(i => i.key));
const NO_SPEED = new Set(['shadow-sm', 'shadow-md', 'shadow-lg']);
const ITEM_LABEL = Object.fromEntries(EFFECTS.flatMap(g => g.items.map(i => [i.key, i.label])));

// Persist open/closed across element selections within the session.
const expanded = signal(true);

function ArrowIcon({ dir }) {
  const common = { width: 12, height: 12, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2.4, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' };
  switch (dir) {
    case 'up':    return <svg {...common}><path d="M12 19V5M5 12l7-7 7 7"/></svg>;
    case 'down':  return <svg {...common}><path d="M12 5v14M5 12l7 7 7-7"/></svg>;
    case 'left':  return <svg {...common}><path d="M19 12H5M12 5l-7 7 7 7"/></svg>;
    case 'right': return <svg {...common}><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
    case 'zoom':  return <svg {...common}><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>;
    default:      return null;
  }
}

function ChevronIcon({ open }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"
         style={{ transform: `rotate(${open ? 90 : 0}deg)`, transition: 'transform 180ms ease-out' }}>
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

export function EffectsField({ value, onChange, speeds, onSpeedsChange }) {
  const list = Array.isArray(value)
    ? value.filter(k => ALL_KEYS.includes(k)).filter((k, i, a) => a.indexOf(k) === i)
    : [];
  const selected = new Set(list);
  const speedMap = (speeds && typeof speeds === 'object') ? speeds : {};

  function toggle(key) {
    if (selected.has(key)) {
      onChange(list.filter(k => k !== key));
      // Drop the speed entry too — keeps the saved JSON tidy.
      if (key in speedMap) {
        const next = { ...speedMap };
        delete next[key];
        onSpeedsChange(next);
      }
    } else {
      onChange([...list, key]);
    }
  }
  function clearAll() {
    if (list.length) {
      onChange([]);
      if (Object.keys(speedMap).length) onSpeedsChange({});
    }
  }
  function setSpeed(key, v) {
    const next = { ...speedMap };
    // Treat the default (1.0) as "no override" — drop it so the renderer
    // skips emitting a CSS var.
    if (Math.abs(v - 1) < 0.01) delete next[key];
    else next[key] = v;
    onSpeedsChange(next);
  }

  const open = expanded.value;

  return (
    <div class={`prop-field effects-field ${open ? '' : 'collapsed'}`}>
      <button
        type="button"
        class="effects-header"
        onClick={() => { expanded.value = !open; }}
        aria-expanded={open}
      >
        <ChevronIcon open={open} />
        <span class="prop-label">Effects</span>
        {list.length > 0 && <span class="effects-count">{list.length}</span>}
      </button>

      {open && (
        <div class="effects-body">
          {list.length > 0 && (
            <div class="effects-toolbar">
              <button type="button" class="effects-clear" onClick={clearAll}>Clear all</button>
            </div>
          )}
          {EFFECTS.map(group => {
            const groupSelected = group.items.filter(i => selected.has(i.key) && !NO_SPEED.has(i.key));
            return (
              <div key={group.group} class="effects-group">
                <div class="effects-group-label">{group.group}</div>
                <div class="effects-chips">
                  {group.items.map(item => {
                    const on = selected.has(item.key);
                    return (
                      <button
                        type="button"
                        key={item.key}
                        class={`effect-chip ${on ? 'on' : ''}`}
                        onClick={() => toggle(item.key)}
                        aria-pressed={on}
                        title={item.label}
                      >
                        {item.arrow && <ArrowIcon dir={item.arrow} />}
                        <span class="effect-chip-label">{item.label}</span>
                        {on && <span class="effect-chip-check"><CheckIcon /></span>}
                      </button>
                    );
                  })}
                </div>
                {groupSelected.length > 0 && (
                  <div class="effects-speeds">
                    {groupSelected.map(item => (
                      <SpeedRow
                        key={item.key}
                        label={item.label}
                        value={speedMap[item.key] ?? 1}
                        onInput={v => setSpeed(item.key, v)}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/**
 * Single effect-speed row. The slider is a duration multiplier (smaller =
 * faster). We invert the visual: left = slow (higher multiplier), right =
 * fast (smaller multiplier). Range 0.3–3 with default 1.
 */
function SpeedRow({ label, value, onInput }) {
  // Slider position 0..1 → multiplier 3 (slow, left) → 0.3 (fast, right).
  // log scale keeps the default (1) at the visual center.
  const MIN = 0.3, MAX = 3;
  const logMin = Math.log(MIN), logMax = Math.log(MAX);
  const pos = (Math.log(MAX) - Math.log(Math.max(MIN, Math.min(MAX, value)))) / (logMax - logMin);
  function onChange(e) {
    const p = parseFloat(e.target.value);
    const m = Math.exp(logMax - p * (logMax - logMin));
    // Snap close-to-default (within 5%) to exactly 1 for a stable detent.
    const snapped = Math.abs(m - 1) < 0.05 ? 1 : Math.round(m * 100) / 100;
    onInput(snapped);
  }
  const display = value === 1 ? '1×' : `${value < 1 ? value.toFixed(2).replace(/0+$/, '').replace(/\.$/, '') : value.toFixed(1)}×`;
  return (
    <div class="effect-speed-row">
      <span class="effect-speed-label">{label}</span>
      <input
        type="range"
        class="effect-speed-slider"
        min="0"
        max="1"
        step="0.01"
        value={pos}
        onInput={onChange}
        aria-label={`${label} speed`}
        title="Drag right = faster, left = slower"
      />
      <span class="effect-speed-value">{display}</span>
    </div>
  );
}

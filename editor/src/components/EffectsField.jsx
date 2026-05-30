/**
 * EffectsField — multi-select chip grid for the effects library.
 *
 * Props mirror the PHP catalog in includes/effects.php. Storage is an
 * array of effect keys under `props.effects`. Selecting a chip toggles
 * membership; the result is the merged class set rendered on the element.
 */
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

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

export function EffectsField({ value, onChange }) {
  // Defensive: dedupe + drop unknown keys.
  const list = Array.isArray(value)
    ? value.filter(k => ALL_KEYS.includes(k)).filter((k, i, a) => a.indexOf(k) === i)
    : [];
  const selected = new Set(list);

  function toggle(key) {
    if (selected.has(key)) onChange(list.filter(k => k !== key));
    else onChange([...list, key]);
  }
  function clearAll() {
    if (list.length) onChange([]);
  }

  return (
    <div class="prop-field effects-field">
      <div class="effects-header">
        <span class="prop-label">Effects</span>
        {list.length > 0 && (
          <>
            <span class="effects-count">{list.length}</span>
            <button type="button" class="effects-clear" onClick={clearAll} title="Remove all effects">Clear</button>
          </>
        )}
      </div>
      {EFFECTS.map(group => (
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
        </div>
      ))}
    </div>
  );
}

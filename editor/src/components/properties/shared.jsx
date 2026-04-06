import { updateElementProps, updateRowProps, updateCellProps, commitChange, getEffectiveColors, viewportMode } from '../../state';
import { ColorSelector } from '../ColorSelector';

// ── Viewport prefix map ──
export const VP_PREFIX = { desktop: '', tablet: 'tablet_', mobile: 'mobile_' };

// ── Layout helper ──
export function PropField({ label, children }) {
  return (
    <div class="prop-field">
      <label class="prop-label">{label}</label>
      {children}
    </div>
  );
}

// ── Color field shorthand ──
export function ColorField({ element, label }) {
  return (
    <PropField label={label || 'Color'}>
      <ColorSelector
        value={element.props.color || ''}
        onChange={v => { updateElementProps(element.id, { color: v }); commitChange('Change color'); }}
      />
    </PropField>
  );
}

// ── Text alignment ──
const ALIGN_OPTIONS = [
  { value: 'left', icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="15" x2="3" y1="12" y2="12"/><line x1="17" x2="3" y1="18" y2="18"/></svg> },
  { value: 'center', icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="17" x2="7" y1="12" y2="12"/><line x1="19" x2="5" y1="18" y2="18"/></svg> },
  { value: 'right', icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="9" y1="12" y2="12"/><line x1="21" x2="7" y1="18" y2="18"/></svg> },
];

export function AlignField({ element }) {
  const align = element.props.textAlign;
  return (
    <PropField label="Alignment">
      <div class="prop-btn-group">
        {ALIGN_OPTIONS.map(opt => (
          <button
            key={opt.value}
            class={`prop-btn ${align === opt.value ? 'active' : ''}`}
            onClick={() => { updateElementProps(element.id, { textAlign: align === opt.value ? '' : opt.value }); commitChange('Change alignment'); }}
          >
            {opt.icon}
          </button>
        ))}
      </div>
    </PropField>
  );
}

// ── Direction field for elements ──
export function DirectionField({ element }) {
  const dir = element.props.direction;
  return (
    <PropField label="Direction">
      <div class="prop-btn-group">
        {['ltr', 'rtl'].map(d => (
          <button key={d} class={`prop-btn ${dir === d ? 'active' : ''}`}
            onClick={() => { updateElementProps(element.id, { direction: dir === d ? '' : d }); commitChange('Change direction'); }}>
            {d.toUpperCase()}
          </button>
        ))}
        {dir && <button class="prop-btn-clear" onClick={() => { updateElementProps(element.id, { direction: '' }); commitChange('Reset direction'); }} title="Reset">&times;</button>}
      </div>
    </PropField>
  );
}

// ── Direction picker (for containers/cells) ──
export function DirectionPicker({ value, onChange }) {
  return (
    <PropField label="Direction">
      <div class="prop-btn-group">
        {['ltr', 'rtl'].map(d => (
          <button key={d} class={`prop-btn ${value === d ? 'active' : ''}`} onClick={() => onChange(value === d ? '' : d)}>
            {d.toUpperCase()}
          </button>
        ))}
        {value && <button class="prop-btn-clear" onClick={() => onChange('')} title="Reset to page default">&times;</button>}
      </div>
    </PropField>
  );
}

// ── 9-square alignment picker ──
const ALIGN_POSITIONS = [
  ['top-left', 'top-center', 'top-right'],
  ['middle-left', 'middle-center', 'middle-right'],
  ['bottom-left', 'bottom-center', 'bottom-right'],
];

export function AlignmentPicker({ value, onChange }) {
  return (
    <PropField label="Content Alignment">
      <div class="align-grid">
        {ALIGN_POSITIONS.map(row => row.map(pos => (
          <button key={pos} class={`align-cell ${value === pos ? 'active' : ''}`}
            onClick={() => onChange(value === pos ? '' : pos)} title={pos}>
            <span class="align-dot" />
          </button>
        )))}
      </div>
    </PropField>
  );
}

// ── Visibility per viewport ──
function VisibilityIcon({ vp, hidden }) {
  const s = { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' };
  if (hidden) {
    return <svg {...s}><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>;
  }
  return <svg {...s}><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>;
}

export function VisibilityField({ props, onUpdate }) {
  const hide = props.hideOn || {};
  function toggle(vp) {
    const next = { ...hide, [vp]: !hide[vp] };
    for (const k of Object.keys(next)) { if (!next[k]) delete next[k]; }
    onUpdate('hideOn', Object.keys(next).length ? next : undefined);
  }
  return (
    <PropField label="Visibility">
      <div class="visibility-row">
        {['desktop', 'tablet', 'mobile'].map(vp => (
          <button key={vp} class={`visibility-btn ${hide[vp] ? 'hidden-vp' : 'visible-vp'}`}
            onClick={() => toggle(vp)} title={hide[vp] ? `Hidden on ${vp}` : `Visible on ${vp}`}>
            <VisibilityIcon vp={vp} hidden={!!hide[vp]} />
            <span>{vp.charAt(0).toUpperCase() + vp.slice(1)}</span>
          </button>
        ))}
      </div>
    </PropField>
  );
}

// ── CSS Editor ──
export function CssEditor({ value, selector, onChange, onBlur }) {
  return (
    <PropField label="Custom CSS">
      <div class="css-editor-wrap">
        <div class="css-editor-selector">{selector} {'{'}</div>
        <textarea class="prop-textarea prop-css css-editor-textarea" value={value}
          placeholder="font-weight: bold;&#10;border-radius: 8px;"
          onInput={e => onChange(e.target.value)} onBlur={onBlur} rows={5} />
        <div class="css-editor-selector">{'}'}</div>
      </div>
    </PropField>
  );
}

// ── Link icon SVG ──
function LinkIcon({ linked }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      {linked ? (
        <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></>
      ) : (
        <><path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"/><path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"/><line x1="8" x2="8" y1="2" y2="5"/><line x1="2" x2="5" y1="8" y2="8"/><line x1="16" x2="16" y1="19" y2="22"/><line x1="19" x2="22" y1="16" y2="16"/></>
      )}
    </svg>
  );
}

// ── Spacing (padding/margin) with 4-box + link ──
const SIDES = ['top', 'right', 'bottom', 'left'];

export function SpacingFields({ props, onUpdate, label }) {
  const vp = viewportMode.value;
  const prefix = VP_PREFIX[vp];
  const key = prefix + label;

  function getEffective() {
    if (vp === 'mobile') return props['mobile_' + label] || props['tablet_' + label] || props[label];
    if (vp === 'tablet') return props['tablet_' + label] || props[label];
    return props[label];
  }

  const raw = props[key];
  const effective = getEffective() || { top: 0, right: 0, bottom: 0, left: 0, linked: true };
  const hasOverride = vp !== 'desktop' && !!raw;
  const isDesktop = vp === 'desktop';

  function set(newVal) { onUpdate(key, newVal); }
  function onSideChange(side, val) {
    const num = val === '' ? 0 : val;
    if (effective.linked) set({ ...effective, top: num, right: num, bottom: num, left: num });
    else set({ ...effective, [side]: num });
  }

  return (
    <PropField label={<>{label.charAt(0).toUpperCase() + label.slice(1)}{!isDesktop && <span class="spacing-vp-label"> ({vp})</span>}{hasOverride && <button class="settings-reset" onClick={() => onUpdate(key, undefined)} title="Reset">&times;</button>}</>}>
      <div class={`spacing-box ${hasOverride ? 'overridden' : ''}`}>
        {SIDES.map(side => (
          <div key={side} class="spacing-side">
            <input type="number" class="spacing-input" value={effective[side] ?? 0}
              onInput={e => onSideChange(side, parseInt(e.target.value) || 0)} />
            <span class="spacing-side-label">{side.charAt(0).toUpperCase()}</span>
          </div>
        ))}
        <button class={`spacing-link-btn ${effective.linked ? 'linked' : ''}`}
          onClick={() => set({ ...effective, linked: !effective.linked })}
          title={effective.linked ? 'Unlink sides' : 'Link sides'}>
          <LinkIcon linked={effective.linked} />
        </button>
      </div>
    </PropField>
  );
}

// ── Gap (row gap / column gap) ──
export function GapFields({ props, onUpdate }) {
  const vp = viewportMode.value;
  const prefix = VP_PREFIX[vp];
  const rowKey = prefix + 'rowGap';
  const colKey = prefix + 'colGap';

  function resolve(prop) {
    if (vp === 'mobile') return props['mobile_' + prop] ?? props['tablet_' + prop] ?? props[prop];
    if (vp === 'tablet') return props['tablet_' + prop] ?? props[prop];
    return props[prop];
  }

  const effectiveRow = resolve('rowGap') ?? 0;
  const effectiveCol = resolve('colGap') ?? 0;
  const hasRowOverride = vp !== 'desktop' && props[rowKey] != null;
  const hasColOverride = vp !== 'desktop' && props[colKey] != null;
  const isDesktop = vp === 'desktop';

  return (
    <PropField label={<>Gap{!isDesktop && <span class="spacing-vp-label"> ({vp})</span>}</>}>
      <div class="gap-row">
        <div class="gap-field">
          <label class="gap-label">Row</label>
          <div class="gap-input-wrap">
            <input type="number" class={`spacing-input ${hasRowOverride ? 'overridden' : ''}`}
              value={effectiveRow} min={0} onInput={e => onUpdate(rowKey, parseInt(e.target.value) || 0)} />
            {hasRowOverride && <button class="prop-btn-clear" onClick={() => onUpdate(rowKey, undefined)} title="Reset">&times;</button>}
          </div>
        </div>
        <div class="gap-field">
          <label class="gap-label">Col</label>
          <div class="gap-input-wrap">
            <input type="number" class={`spacing-input ${hasColOverride ? 'overridden' : ''}`}
              value={effectiveCol} min={0} onInput={e => onUpdate(colKey, parseInt(e.target.value) || 0)} />
            {hasColOverride && <button class="prop-btn-clear" onClick={() => onUpdate(colKey, undefined)} title="Reset">&times;</button>}
          </div>
        </div>
        <span class="gap-unit">px</span>
      </div>
    </PropField>
  );
}

// ── Border ──
const BORDER_STYLES = ['none', 'solid', 'dashed', 'dotted'];
const CORNERS = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'];
const CORNER_LABELS = { topLeft: 'TL', topRight: 'TR', bottomRight: 'BR', bottomLeft: 'BL' };

export function BorderFields({ props, onUpdate }) {
  const vp = viewportMode.value;
  const prefix = VP_PREFIX[vp];
  const borderKey = prefix + 'border';
  const radiusKey = prefix + 'borderRadius';

  function resolveBorder() {
    if (vp === 'mobile') return props.mobile_border || props.tablet_border || props.border;
    if (vp === 'tablet') return props.tablet_border || props.border;
    return props.border;
  }
  function resolveRadius() {
    if (vp === 'mobile') return props.mobile_borderRadius || props.tablet_borderRadius || props.borderRadius;
    if (vp === 'tablet') return props.tablet_borderRadius || props.borderRadius;
    return props.borderRadius;
  }

  const border = resolveBorder() || { width: 0, style: 'none', color: '#000000' };
  const radius = resolveRadius() || { topLeft: 0, topRight: 0, bottomRight: 0, bottomLeft: 0, linked: true };
  const hasBorderOverride = vp !== 'desktop' && !!props[borderKey];
  const hasRadiusOverride = vp !== 'desktop' && !!props[radiusKey];
  const isDesktop = vp === 'desktop';

  function setBorder(patch) { onUpdate(borderKey, { ...border, ...patch }); }
  function setRadius(corner, val) {
    const num = parseInt(val) || 0;
    if (radius.linked) onUpdate(radiusKey, { ...radius, topLeft: num, topRight: num, bottomRight: num, bottomLeft: num });
    else onUpdate(radiusKey, { ...radius, [corner]: num });
  }

  return (
    <>
      <PropField label={<>Border{!isDesktop && <span class="spacing-vp-label"> ({vp})</span>}{hasBorderOverride && <button class="settings-reset" onClick={() => onUpdate(borderKey, undefined)} title="Reset">&times;</button>}</>}>
        <div class={`border-controls ${hasBorderOverride ? 'overridden' : ''}`}>
          <div class="border-row">
            <input type="number" class="spacing-input" value={border.width ?? 0} min={0}
              onInput={e => setBorder({ width: parseInt(e.target.value) || 0 })} />
            <span class="border-unit">px</span>
            <div class="prop-btn-group">
              {BORDER_STYLES.map(s => (
                <button key={s} class={`prop-btn ${border.style === s ? 'active' : ''}`}
                  onClick={() => setBorder({ style: s })} style={{ fontSize: '10px', padding: '3px 6px' }}>{s}</button>
              ))}
            </div>
          </div>
          <div style={{ marginTop: '4px' }}>
            <ColorSelector value={border.color || ''} onChange={v => setBorder({ color: v })} placeholder="#000000" />
          </div>
        </div>
      </PropField>
      <PropField label={<>Border Radius{!isDesktop && <span class="spacing-vp-label"> ({vp})</span>}{hasRadiusOverride && <button class="settings-reset" onClick={() => onUpdate(radiusKey, undefined)} title="Reset">&times;</button>}</>}>
        <div class={`spacing-box ${hasRadiusOverride ? 'overridden' : ''}`}>
          {CORNERS.map(c => (
            <div key={c} class="spacing-side">
              <input type="number" class="spacing-input" value={radius[c] ?? 0} min={0}
                onInput={e => setRadius(c, e.target.value)} />
              <span class="spacing-side-label">{CORNER_LABELS[c]}</span>
            </div>
          ))}
          <button class={`spacing-link-btn ${radius.linked ? 'linked' : ''}`}
            onClick={() => onUpdate(radiusKey, { ...radius, linked: !radius.linked })}
            title={radius.linked ? 'Unlink corners' : 'Link corners'}>
            <LinkIcon linked={radius.linked} />
          </button>
        </div>
      </PropField>
    </>
  );
}

// ── Text sizes ──
export const TEXT_SIZES = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl'];
export const FONT_WEIGHTS = ['300', '400', '500', '600', '700', '800'];

// ── Line height (viewport-aware) ──
export function LineHeightField({ element }) {
  const vp = viewportMode.value;
  const prefix = VP_PREFIX[vp];
  const key = prefix + 'lineHeight';
  const isDesktop = vp === 'desktop';
  const raw = element.props[key];
  const effective = (() => {
    if (vp === 'mobile') return element.props.mobile_lineHeight ?? element.props.tablet_lineHeight ?? element.props.lineHeight ?? '';
    if (vp === 'tablet') return element.props.tablet_lineHeight ?? element.props.lineHeight ?? '';
    return element.props.lineHeight ?? '';
  })();
  const hasOverride = !isDesktop && raw != null && raw !== '';

  return (
    <PropField label={<>Line Height{!isDesktop && <span class="spacing-vp-label"> ({vp})</span>}{hasOverride && <button class="settings-reset" onClick={() => { updateElementProps(element.id, { [key]: undefined }); commitChange('Reset line height'); }} title="Reset">&times;</button>}</>}>
      <input type="text" class={`prop-input ${hasOverride ? 'overridden' : ''}`} value={effective}
        placeholder="e.g. 1.6, 24px"
        onInput={e => updateElementProps(element.id, { [key]: e.target.value })}
        onBlur={() => commitChange('Change line height')} />
    </PropField>
  );
}

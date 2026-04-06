import { globalSettings, pageSettings, saveGlobalSettings, savePageSettings, viewportMode, DEFAULT_SIZES, DEFAULT_HEADING_SIZES, hasExplicitValue, hasExplicitSize, loadGoogleFontCSS } from '../state';
import { FontPicker } from './FontPicker';

const SIZE_LABELS = { xs: 'XS', sm: 'SM', lg: 'LG', xl: 'XL', '2xl': '2XL', '3xl': '3XL', '4xl': '4XL' };
const HEADING_LABELS = { h1: 'H1', h2: 'H2', h3: 'H3', h4: 'H4', h5: 'H5', h6: 'H6' };

/**
 * Resolve settings UP TO the current editing level (not beyond).
 * mobile inherits tablet, tablet inherits desktop.
 * Global panel: defaults → global chain
 * Page panel: defaults → global chain → page chain
 */
function resolveForLevel(isGlobal, viewport) {
  const g = globalSettings.value;
  const p = pageSettings.value;

  const vpChain = viewport === 'desktop' ? ['desktop']
    : viewport === 'tablet' ? ['desktop', 'tablet']
    : ['desktop', 'tablet', 'mobile'];

  function resolve(key, fallback) {
    if (!isGlobal) {
      for (let i = vpChain.length - 1; i >= 0; i--) {
        if (p?.[vpChain[i]]?.[key] != null) return p[vpChain[i]][key];
      }
    }
    for (let i = vpChain.length - 1; i >= 0; i--) {
      if (g[vpChain[i]]?.[key] != null) return g[vpChain[i]][key];
    }
    return fallback;
  }

  const sizes = { ...DEFAULT_SIZES };
  for (const vp of vpChain) Object.assign(sizes, g[vp]?.sizes || {});
  if (!isGlobal) { for (const vp of vpChain) Object.assign(sizes, p?.[vp]?.sizes || {}); }

  const headingSizes = { ...DEFAULT_HEADING_SIZES };
  for (const vp of vpChain) Object.assign(headingSizes, g[vp]?.headingSizes || {});
  if (!isGlobal) { for (const vp of vpChain) Object.assign(headingSizes, p?.[vp]?.headingSizes || {}); }

  return {
    base: resolve('base', 16),
    fontFamily: resolve('fontFamily', ''),
    sizes,
    headingSizes,
  };
}

export function Settings({ mode }) {
  const isGlobal = mode === 'globalSettings';
  const viewport = viewportMode.value;
  const isDesktop = viewport === 'desktop';

  // The raw settings object for this level (global or page)
  const raw = isGlobal ? globalSettings.value : pageSettings.value;

  const globalVal = globalSettings.value;

  // Resolved up to this level only
  const effective = resolveForLevel(isGlobal, viewport);

  // Check if this level has an explicit override for a field
  function hasOverride(key) {
    return hasExplicitValue(raw, viewport, key);
  }

  function hasSizeOverride(sizeKey) {
    return hasExplicitSize(raw, viewport, sizeKey);
  }

  // For global non-desktop: show if this viewport overrides desktop
  // For page: show if this page overrides global
  function showReset(key) {
    if (isGlobal && isDesktop) return false; // desktop global is the root, no reset
    return hasOverride(key);
  }

  function showSizeReset(sizeKey) {
    if (isGlobal && isDesktop) {
      // Show reset to default if changed from default
      const val = raw?.desktop?.sizes?.[sizeKey];
      return val != null && val !== DEFAULT_SIZES[sizeKey];
    }
    return hasSizeOverride(sizeKey);
  }

  function update(key, value) {
    const current = JSON.parse(JSON.stringify(isGlobal ? globalSettings.value : (pageSettings.value || {})));
    if (!current[viewport]) current[viewport] = {};
    current[viewport][key] = value;
    if (key === 'fontFamily') loadGoogleFontCSS(value);
    isGlobal ? saveGlobalSettings(current) : savePageSettings(current);
  }

  function updateSize(sizeKey, em) {
    const current = JSON.parse(JSON.stringify(isGlobal ? globalSettings.value : (pageSettings.value || {})));
    if (!current[viewport]) current[viewport] = {};
    if (!current[viewport].sizes) current[viewport].sizes = {};
    current[viewport].sizes[sizeKey] = em;
    isGlobal ? saveGlobalSettings(current) : savePageSettings(current);
  }

  function updateHeadingSize(key, em) {
    const current = JSON.parse(JSON.stringify(isGlobal ? globalSettings.value : (pageSettings.value || {})));
    if (!current[viewport]) current[viewport] = {};
    if (!current[viewport].headingSizes) current[viewport].headingSizes = {};
    current[viewport].headingSizes[key] = em;
    isGlobal ? saveGlobalSettings(current) : savePageSettings(current);
  }

  function showHeadingSizeReset(key) {
    if (isGlobal && isDesktop) {
      const val = raw?.desktop?.headingSizes?.[key];
      return val != null && val !== DEFAULT_HEADING_SIZES[key];
    }
    return hasExplicitSize(raw, viewport, 'headingSizes') && raw?.[viewport]?.headingSizes?.[key] != null;
  }

  function clearHeadingSizeOverride(key) {
    const current = JSON.parse(JSON.stringify(isGlobal ? globalSettings.value : (pageSettings.value || {})));
    if (current[viewport]?.headingSizes) {
      delete current[viewport].headingSizes[key];
      if (!Object.keys(current[viewport].headingSizes).length) delete current[viewport].headingSizes;
      if (!Object.keys(current[viewport]).length) delete current[viewport];
    }
    isGlobal ? saveGlobalSettings(current) : savePageSettings(Object.keys(current).length ? current : null);
  }

  function clearOverride(key) {
    const current = JSON.parse(JSON.stringify(isGlobal ? globalSettings.value : (pageSettings.value || {})));
    if (current[viewport]) {
      delete current[viewport][key];
      if (!Object.keys(current[viewport]).length || (Object.keys(current[viewport]).length === 1 && current[viewport].sizes && !Object.keys(current[viewport].sizes).length)) {
        delete current[viewport];
      }
    }
    isGlobal ? saveGlobalSettings(current) : savePageSettings(Object.keys(current).length ? current : null);
  }

  function clearSizeOverride(sizeKey) {
    const current = JSON.parse(JSON.stringify(isGlobal ? globalSettings.value : (pageSettings.value || {})));
    if (current[viewport]?.sizes) {
      delete current[viewport].sizes[sizeKey];
      if (!Object.keys(current[viewport].sizes).length) delete current[viewport].sizes;
      if (!Object.keys(current[viewport]).length) delete current[viewport];
    }
    isGlobal ? saveGlobalSettings(current) : savePageSettings(Object.keys(current).length ? current : null);
  }

  function resetSizeToDefault(sizeKey) {
    clearSizeOverride(sizeKey);
  }

  const inheritLabel = isGlobal
    ? (isDesktop ? null : 'Inherits from desktop. Override below.')
    : 'Inherits from global settings. Override below.';

  return (
    <aside class="nomentor-sidebar-left">
      <div class="sidebar-header">
        {isGlobal ? 'Global Settings' : 'Page Settings'}
        <span class="settings-viewport-badge">{viewport}</span>
      </div>
      <div class="sidebar-content">
        {inheritLabel && (
          <div class="settings-inherit-note">{inheritLabel}</div>
        )}

        <div class="prop-field">
          <label class="prop-label">
            Base Font Size (px)
            {showReset('base') && (
              <button class="settings-reset" onClick={() => clearOverride('base')} title="Reset">&times;</button>
            )}
          </label>
          <input
            type="number"
            class={`prop-input ${showReset('base') ? 'overridden' : ''}`}
            value={effective.base}
            min={8}
            max={48}
            onInput={e => update('base', parseInt(e.target.value) || 16)}
          />
        </div>

        <div class="prop-field">
          <label class="prop-label">Sizes (em)</label>
          <div class="settings-size-table">
            <div class="settings-size-row settings-size-header">
              <span>Name</span>
              <span>em</span>
              <span>px</span>
              <span></span>
            </div>
            {Object.entries(SIZE_LABELS).map(([key, label]) => {
              const em = effective.sizes[key] ?? DEFAULT_SIZES[key];
              const px = Math.round(effective.base * em * 100) / 100;
              return (
                <div key={key} class="settings-size-row">
                  <span class="settings-size-label">{label}</span>
                  <input
                    type="number"
                    class={`settings-size-input ${showSizeReset(key) ? 'overridden' : ''}`}
                    value={em}
                    step={0.0625}
                    min={0.25}
                    max={6}
                    onInput={e => updateSize(key, parseFloat(e.target.value) || DEFAULT_SIZES[key])}
                  />
                  <span class="settings-size-px">{px}px</span>
                  <span class="settings-size-actions">
                    {showSizeReset(key) && (
                      <button class="settings-reset" onClick={() => resetSizeToDefault(key)} title="Reset">&times;</button>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div class="prop-field">
          <label class="prop-label">Heading Sizes (em)</label>
          <div class="settings-size-table">
            <div class="settings-size-row settings-size-header">
              <span>Tag</span>
              <span>em</span>
              <span>px</span>
              <span></span>
            </div>
            {Object.entries(HEADING_LABELS).map(([key, label]) => {
              const em = effective.headingSizes?.[key] ?? DEFAULT_HEADING_SIZES[key];
              const px = Math.round(effective.base * em * 100) / 100;
              return (
                <div key={key} class="settings-size-row">
                  <span class="settings-size-label">{label}</span>
                  <input
                    type="number"
                    class={`settings-size-input ${showHeadingSizeReset(key) ? 'overridden' : ''}`}
                    value={em}
                    step={0.125}
                    min={0.5}
                    max={8}
                    onInput={e => updateHeadingSize(key, parseFloat(e.target.value) || DEFAULT_HEADING_SIZES[key])}
                  />
                  <span class="settings-size-px">{px}px</span>
                  <span class="settings-size-actions">
                    {showHeadingSizeReset(key) && (
                      <button class="settings-reset" onClick={() => clearHeadingSizeOverride(key)} title="Reset">&times;</button>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div class="prop-field">
          <label class="prop-label">
            Font Family
            {showReset('fontFamily') && (
              <button class="settings-reset" onClick={() => clearOverride('fontFamily')} title="Reset">&times;</button>
            )}
          </label>
          <FontPicker
            value={effective.fontFamily}
            onChange={val => update('fontFamily', val)}
            className={showReset('fontFamily') ? 'overridden' : ''}
          />
        </div>

        <div class="prop-field">
          <label class="prop-label">Form Validation Messages</label>
          {['required', 'email', 'phone', 'number'].map(key => {
            const defaults = { required: 'This field is required', email: 'Invalid email address', phone: 'Invalid phone number', number: 'Must be a number' };
            const msgKey = 'validationMsg_' + key;
            const val = isGlobal ? (raw?.[msgKey] ?? '') : (raw?.[msgKey] ?? '');
            const effectiveVal = isGlobal ? (val || defaults[key]) : (val || globalVal?.[msgKey] || defaults[key]);
            return (
              <div key={key} style={{ marginBottom: '4px' }}>
                <label style={{ fontSize: '10px', color: '#999', textTransform: 'capitalize' }}>{key}</label>
                <input type="text" class="prop-input" value={effectiveVal} placeholder={defaults[key]}
                  onInput={e => {
                    if (isGlobal) saveGlobalSettings({ ...globalSettings.value, [msgKey]: e.target.value });
                    else savePageSettings({ ...(pageSettings.value || {}), [msgKey]: e.target.value });
                  }} style={{ fontSize: '11px' }} />
              </div>
            );
          })}
        </div>

        <div class="prop-field">
          <label class="prop-label">
            Page Direction
            {!isGlobal && raw?.direction && (
              <button class="settings-reset" onClick={() => {
                const c = { ...(pageSettings.value || {}) };
                delete c.direction;
                savePageSettings(Object.keys(c).length ? c : null);
              }} title="Reset">&times;</button>
            )}
          </label>
          <div class="prop-btn-group">
            {['rtl', 'ltr'].map(d => (
              <button
                key={d}
                class={`prop-btn ${(isGlobal ? raw?.direction : (raw?.direction || globalVal?.direction)) === d ? 'active' : ''}`}
                onClick={() => {
                  if (isGlobal) saveGlobalSettings({ ...globalSettings.value, direction: d });
                  else savePageSettings({ ...(pageSettings.value || {}), direction: d });
                }}
              >
                {d.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div class="settings-viewports-hint">
          Switch viewport in the toolbar to set different values for tablet and mobile.
        </div>

        {!isGlobal && (
          <div class="prop-field">
            <label class="prop-label">Scripts</label>
            <ScriptsEditor
              scripts={raw?.scripts || []}
              onChange={s => savePageSettings({ ...(pageSettings.value || {}), scripts: s })}
            />
          </div>
        )}

        {!isGlobal && (
          <div class="prop-field">
            <label class="prop-label">Meta Tags</label>
            <MetaEditor
              meta={raw?.meta || []}
              onChange={m => savePageSettings({ ...(pageSettings.value || {}), meta: m.length ? m : undefined })}
            />
          </div>
        )}

        <ColorPaletteEditor isGlobal={isGlobal} />
      </div>
    </aside>
  );
}

// ── Color Palette Editor ──

function ColorPaletteEditor({ isGlobal }) {
  const raw = isGlobal ? globalSettings.value : pageSettings.value;
  const colors = raw?.colors || [];
  const globalColors = globalSettings.value.colors || [];

  function saveColors(newColors) {
    if (isGlobal) {
      saveGlobalSettings({ ...globalSettings.value, colors: newColors });
    } else {
      savePageSettings({ ...(pageSettings.value || {}), colors: newColors.length ? newColors : undefined });
    }
  }

  function addColor() {
    saveColors([...colors, { name: 'Color ' + (colors.length + 1), value: '#4a90d9' }]);
  }

  function updateColor(idx, field, val) {
    const updated = colors.map((c, i) => i === idx ? { ...c, [field]: val } : c);
    saveColors(updated);
  }

  function removeColor(idx) {
    saveColors(colors.filter((_, i) => i !== idx));
  }

  function moveColor(idx, dir) {
    const list = [...colors];
    const swapIdx = idx + dir;
    if (swapIdx < 0 || swapIdx >= list.length) return;
    [list[idx], list[swapIdx]] = [list[swapIdx], list[idx]];
    saveColors(list);
  }

  return (
    <div class="prop-field">
      <label class="prop-label">Color Palette</label>
      {!isGlobal && colors.length === 0 && globalColors.length > 0 && (
        <div class="settings-inherit-note" style={{ marginBottom: '8px' }}>
          Using {globalColors.length} color{globalColors.length > 1 ? 's' : ''} from global. Add page-specific colors below.
        </div>
      )}
      {!isGlobal && globalColors.length > 0 && (
        <div class="palette-inherited">
          {globalColors.map(c => (
            <div key={c.name} class="palette-color-row palette-color-inherited">
              <span class="prop-color-swatch" style={{ backgroundColor: c.value }} />
              <span class="palette-color-name">{c.name}</span>
              <span class="palette-color-hex">{c.value}</span>
            </div>
          ))}
        </div>
      )}
      <div class="palette-list">
        {colors.map((c, i) => (
          <div key={i} class="palette-color-row">
            <input
              type="color"
              class="prop-color"
              value={c.value}
              onInput={e => updateColor(i, 'value', e.target.value)}
            />
            <input
              type="text"
              class="palette-name-input"
              value={c.name}
              onInput={e => updateColor(i, 'name', e.target.value)}
              placeholder="Name"
            />
            <input
              type="text"
              class="palette-hex-input"
              value={c.value}
              onInput={e => updateColor(i, 'value', e.target.value)}
            />
            <button class="form-field-action" onClick={() => moveColor(i, -1)} disabled={i === 0} title="Move up">&uarr;</button>
            <button class="form-field-action" onClick={() => moveColor(i, 1)} disabled={i === colors.length - 1} title="Move down">&darr;</button>
            <button class="prop-btn-clear" onClick={() => removeColor(i)} title="Remove">&times;</button>
          </div>
        ))}
      </div>
      <button class="palette-add-btn" onClick={addColor}>+ Add Color</button>
    </div>
  );
}

// ── Scripts Editor ──

function ScriptsEditor({ scripts, onChange }) {
  // Handle legacy string format (one URL per line)
  const list = Array.isArray(scripts) ? scripts : (typeof scripts === 'string' && scripts ? scripts.split('\n').filter(Boolean).map(s => ({ url: s.trim(), position: 'body' })) : []);

  function update(newList) {
    onChange(newList.length ? newList : undefined);
  }

  function addScript() {
    update([...list, { url: '', position: 'body' }]);
  }

  function updateScript(idx, patch) {
    update(list.map((s, i) => i === idx ? { ...s, ...patch } : s));
  }

  function removeScript(idx) {
    update(list.filter((_, i) => i !== idx));
  }

  return (
    <div class="scripts-list">
      {list.map((s, i) => (
        <div key={i} class="script-row">
          <input type="text" class="prop-input prop-css" value={s.url || ''} placeholder="/path/to/script.js"
            onInput={e => updateScript(i, { url: e.target.value })} style={{ flex: 1, fontSize: '11px' }} />
          <div class="prop-btn-group">
            <button class={`prop-btn ${(s.position || 'body') === 'head' ? 'active' : ''}`}
              onClick={() => updateScript(i, { position: 'head' })} style={{ fontSize: '9px', padding: '2px 6px' }}>Head</button>
            <button class={`prop-btn ${(s.position || 'body') === 'body' ? 'active' : ''}`}
              onClick={() => updateScript(i, { position: 'body' })} style={{ fontSize: '9px', padding: '2px 6px' }}>Body</button>
          </div>
          <button class="form-field-action form-field-remove" onClick={() => removeScript(i)}>&times;</button>
        </div>
      ))}
      <button class="palette-add-btn" onClick={addScript}>+ Add Script</button>
    </div>
  );
}

// ── Meta Tags Editor ──

function MetaEditor({ meta, onChange }) {
  const list = Array.isArray(meta) ? meta : [];

  const addMeta = () => onChange([...list, { name: '', content: '' }]);
  const updateMeta = (idx, patch) => onChange(list.map((m, i) => i === idx ? { ...m, ...patch } : m));
  const removeMeta = (idx) => onChange(list.filter((_, i) => i !== idx));

  return (
    <div class="scripts-list">
      {list.map((m, i) => (
        <div key={i} class="script-row">
          <input type="text" class="prop-input prop-css" value={m.name || ''} placeholder="name / property"
            onInput={e => updateMeta(i, { name: e.target.value })} style={{ width: '35%', fontSize: '11px' }} />
          <input type="text" class="prop-input prop-css" value={m.content || ''} placeholder="content"
            onInput={e => updateMeta(i, { content: e.target.value })} style={{ flex: 1, fontSize: '11px' }} />
          <button class="form-field-action form-field-remove" onClick={() => removeMeta(i)}>&times;</button>
        </div>
      ))}
      <button class="palette-add-btn" onClick={addMeta}>+ Add Meta Tag</button>
    </div>
  );
}

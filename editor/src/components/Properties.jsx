import { selectedId, rows, findElementById, findCellById, updateElementProps, updateRowProps, updateCellProps, commitChange, getEffectiveColors, viewportMode } from '../state';
import { openMediaPicker } from './MediaPicker';
import { IconPicker } from './IconPicker';
import { ColorSelector } from './ColorSelector';
import { BoxShadowEditor, shadowToCSS } from './BoxShadowEditor';

export function Properties() {
  const sel = selectedId.value;

  if (!sel) {
    return (
      <aside class="nomentor-sidebar-left">
        <div class="sidebar-header">Properties</div>
        <div class="sidebar-content">
          <div class="props-empty">Select an element to edit its properties</div>
        </div>
      </aside>
    );
  }

  // Check if it's a container
  const row = rows.value.find(r => r.id === sel);
  if (row) {
    return (
      <aside class="nomentor-sidebar-left">
        <div class="sidebar-header">Container Properties</div>
        <div class="sidebar-content">
          <ContainerProps row={row} />
          <VisibilityField props={row.props || {}} onUpdate={(k, v) => { updateRowProps(row.id, { [k]: v }); commitChange('Edit visibility'); }} />
          <BorderFields props={row.props || {}} onUpdate={(k, v) => { updateRowProps(row.id, { [k]: v }); commitChange('Edit border'); }} />
          <PropField label="Box Shadow">
            <BoxShadowEditor value={row.props?.boxShadow} onChange={v => { updateRowProps(row.id, { boxShadow: v }); commitChange('Edit shadow'); }} />
          </PropField>
          <SpacingFields label="padding" props={row.props || {}} onUpdate={(k, v) => { updateRowProps(row.id, { [k]: v }); commitChange('Edit padding'); }} />
          <SpacingFields label="margin" props={row.props || {}} onUpdate={(k, v) => { updateRowProps(row.id, { [k]: v }); commitChange('Edit margin'); }} />
          <CssEditor
            value={row.props?.customCss || ''}
            selector="selector"
            onChange={v => updateRowProps(row.id, { customCss: v })}
            onBlur={() => commitChange('Edit container CSS')}
          />
        </div>
      </aside>
    );
  }

  // Check if it's a cell
  const cell = findCellById(sel);
  if (cell) {
    return (
      <aside class="nomentor-sidebar-left">
        <div class="sidebar-header">Cell Properties</div>
        <div class="sidebar-content">
          <CellProps cell={cell} />
        </div>
      </aside>
    );
  }

  // It's an element
  const element = findElementById(sel);
  if (!element) {
    return (
      <aside class="nomentor-sidebar-left">
        <div class="sidebar-header">Properties</div>
        <div class="sidebar-content">
          <div class="props-empty">Element not found</div>
        </div>
      </aside>
    );
  }

  return (
    <aside class="nomentor-sidebar-left">
      <div class="sidebar-header">{element.type.charAt(0).toUpperCase() + element.type.slice(1)} Properties</div>
      <div class="sidebar-content">
        <ElementProps element={element} />
        <VisibilityField props={element.props} onUpdate={(k, v) => { updateElementProps(element.id, { [k]: v }); commitChange('Edit visibility'); }} />
        <DirectionField element={element} />
        <BorderFields props={element.props} onUpdate={(k, v) => { updateElementProps(element.id, { [k]: v }); commitChange('Edit border'); }} />
        <PropField label="Box Shadow">
          <BoxShadowEditor value={element.props.boxShadow} onChange={v => { updateElementProps(element.id, { boxShadow: v }); commitChange('Edit shadow'); }} />
        </PropField>
        <SpacingFields label="padding" props={element.props} onUpdate={(k, v) => { updateElementProps(element.id, { [k]: v }); commitChange('Edit padding'); }} />
        <SpacingFields label="margin" props={element.props} onUpdate={(k, v) => { updateElementProps(element.id, { [k]: v }); commitChange('Edit margin'); }} />
        <CssEditor
          value={element.props.customCss || ''}
          selector="selector"
          onChange={v => updateElementProps(element.id, { customCss: v })}
          onBlur={() => commitChange('Edit custom CSS')}
        />
      </div>
    </aside>
  );
}

function ElementProps({ element }) {
  switch (element.type) {
    case 'heading': return <HeadingProps element={element} />;
    case 'text': return <TextProps element={element} />;
    case 'image': return <ImageProps element={element} />;
    case 'grid': return <GridProps element={element} />;
    case 'button': return <ButtonProps element={element} />;
    case 'list': return <ListProps element={element} />;
    case 'timer': return <TimerProps element={element} />;
    case 'form': return <FormProps element={element} />;
    default: return null;
  }
}

// ── Heading ──

function HeadingProps({ element }) {
  const { text, level } = element.props;

  function update(props) {
    updateElementProps(element.id, props);
    commitChange('Edit heading');
  }

  return (
    <>
      <PropField label="Content">
        <textarea
          class="prop-textarea"
          value={text || ''}
          onInput={e => updateElementProps(element.id, { text: e.target.value })}
          onBlur={() => commitChange('Edit heading text')}
          rows={3}
        />
      </PropField>
      <PropField label="Size">
        <div class="prop-btn-group">
          {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(h => (
            <button
              key={h}
              class={`prop-btn ${level === h ? 'active' : ''}`}
              onClick={() => update({ level: h })}
            >
              {h.toUpperCase()}
            </button>
          ))}
        </div>
      </PropField>
      <ColorField element={element} label="Color" />
      <AlignField element={element} />
    </>
  );
}

// ── Text ──

const TEXT_SIZES = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl'];
const ALIGN_OPTIONS = [
  { value: 'left', icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="15" x2="3" y1="12" y2="12"/><line x1="17" x2="3" y1="18" y2="18"/></svg> },
  { value: 'center', icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="17" x2="7" y1="12" y2="12"/><line x1="19" x2="5" y1="18" y2="18"/></svg> },
  { value: 'right', icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="9" y1="12" y2="12"/><line x1="21" x2="7" y1="18" y2="18"/></svg> },
];

function TextProps({ element }) {
  const { fontSize } = element.props;

  function update(props) {
    updateElementProps(element.id, props);
    commitChange('Edit text');
  }

  return (
    <>
      <PropField label="Size">
        <div class="prop-btn-group">
          {TEXT_SIZES.map(s => (
            <button
              key={s}
              class={`prop-btn ${fontSize === s ? 'active' : ''}`}
              onClick={() => update({ fontSize: s })}
            >
              {s}
            </button>
          ))}
        </div>
      </PropField>
      <ColorField element={element} label="Color" />
      <AlignField element={element} />
    </>
  );
}

// ── Image ──

function ImageProps({ element }) {
  const { src, alt } = element.props;

  function selectImage() {
    openMediaPicker().then(img => {
      if (img) {
        updateElementProps(element.id, { src: img.url, alt: img.alt });
        commitChange('Set image');
      }
    });
  }

  function uploadFile(file) {
    if (!file || !file.type.startsWith('image/')) return;
    const { ajaxUrl, nonce } = window.nomentor;
    const formData = new FormData();
    formData.append('action', 'nomentor_upload');
    formData.append('nonce', nonce);
    formData.append('file', file);
    fetch(ajaxUrl, { method: 'POST', body: formData })
      .then(r => r.json())
      .then(r => {
        if (r.success) {
          updateElementProps(element.id, { src: r.data.url, alt: r.data.alt || '' });
          commitChange('Upload image');
        }
      });
  }

  function onDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('prop-drop-active');
    const file = e.dataTransfer.files?.[0];
    if (file) uploadFile(file);
  }

  return (
    <>
      <PropField label="Image">
        {src ? (
          <div class="prop-image-preview">
            <img src={src} alt={alt} />
            <div class="prop-image-actions">
              <button class="prop-btn" onClick={selectImage}>Change</button>
              <button class="prop-btn-clear" onClick={() => { updateElementProps(element.id, { src: '', alt: '' }); commitChange('Remove image'); }} title="Remove">&times;</button>
            </div>
          </div>
        ) : (
          <div
            class="prop-image-drop"
            onDragOver={e => { e.preventDefault(); e.currentTarget.classList.add('prop-drop-active'); }}
            onDragLeave={e => e.currentTarget.classList.remove('prop-drop-active')}
            onDrop={onDrop}
          >
            <button class="prop-btn" onClick={selectImage} style={{ width: '100%' }}>Select from Media Library</button>
            <span class="prop-image-drop-hint">or drop an image here</span>
          </div>
        )}
      </PropField>
      <PropField label="Alt Text">
        <input
          type="text"
          class="prop-input"
          value={alt || ''}
          placeholder="Describe the image"
          onInput={e => updateElementProps(element.id, { alt: e.target.value })}
          onBlur={() => commitChange('Edit alt text')}
        />
      </PropField>
      <ImageDimensions element={element} />
    </>
  );
}

// ── Image dimensions (viewport-aware) ──

const VP_DIM_KEYS = {
  desktop: { w: 'width', h: 'height' },
  tablet:  { w: 'tabletWidth', h: 'tabletHeight' },
  mobile:  { w: 'mobileWidth', h: 'mobileHeight' },
};

function ImageDimensions({ element }) {
  const vp = viewportMode.value;
  const keys = VP_DIM_KEYS[vp];
  const desktopW = element.props.width || '';
  const desktopH = element.props.height || '';
  const w = element.props[keys.w] ?? (vp === 'desktop' ? '' : '');
  const h = element.props[keys.h] ?? (vp === 'desktop' ? '' : '');
  const isDesktop = vp === 'desktop';

  // Effective value: viewport-specific or fall through tablet → desktop
  function effective(prop) {
    if (vp === 'mobile') return element.props.mobileWidth !== undefined ? element.props[prop === 'w' ? 'mobileWidth' : 'mobileHeight'] : (element.props[prop === 'w' ? 'tabletWidth' : 'tabletHeight'] ?? element.props[prop === 'w' ? 'width' : 'height'] ?? '');
    if (vp === 'tablet') return element.props[prop === 'w' ? 'tabletWidth' : 'tabletHeight'] ?? element.props[prop === 'w' ? 'width' : 'height'] ?? '';
    return element.props[prop === 'w' ? 'width' : 'height'] ?? '';
  }

  const effectiveW = effective('w');
  const effectiveH = effective('h');
  const hasWOverride = !isDesktop && element.props[keys.w] != null;
  const hasHOverride = !isDesktop && element.props[keys.h] != null;

  function setDim(key, val) {
    updateElementProps(element.id, { [key]: val });
    commitChange('Change image dimensions');
  }

  function clearOverride(key) {
    updateElementProps(element.id, { [key]: undefined });
    // Remove the key entirely from props
    const el = findElementById(element.id);
    if (el) delete el.props[key];
    commitChange('Reset image dimensions');
  }

  return (
    <>
      <PropField label={`Width${!isDesktop ? ' (' + vp + ')' : ''}`}>
        <div class="prop-dim-row">
          <input
            type="text"
            class={`prop-input ${hasWOverride ? 'overridden' : ''}`}
            value={effectiveW}
            placeholder="auto (e.g. 100%, 300px)"
            onInput={e => setDim(keys.w, e.target.value)}
            onBlur={() => commitChange('Change image width')}
          />
          {hasWOverride && <button class="prop-btn-clear" onClick={() => clearOverride(keys.w)} title="Reset">&times;</button>}
        </div>
      </PropField>
      <PropField label={`Height${!isDesktop ? ' (' + vp + ')' : ''}`}>
        <div class="prop-dim-row">
          <input
            type="text"
            class={`prop-input ${hasHOverride ? 'overridden' : ''}`}
            value={effectiveH}
            placeholder="auto (e.g. 200px, 50vh)"
            onInput={e => setDim(keys.h, e.target.value)}
            onBlur={() => commitChange('Change image height')}
          />
          {hasHOverride && <button class="prop-btn-clear" onClick={() => clearOverride(keys.h)} title="Reset">&times;</button>}
        </div>
      </PropField>
    </>
  );
}

// ── Shared: Color picker ──

function ColorField({ element, label }) {
  return (
    <PropField label={label}>
      <ColorSelector
        value={element.props.color || ''}
        onChange={v => { updateElementProps(element.id, { color: v }); commitChange('Change color'); }}
        placeholder="inherit"
      />
    </PropField>
  );
}

// ── Shared: Align ──

function AlignField({ element }) {
  const textAlign = element.props.textAlign;
  return (
    <PropField label="Align">
      <div class="prop-btn-group">
        {ALIGN_OPTIONS.map(a => (
          <button
            key={a.value}
            class={`prop-btn prop-btn-icon ${textAlign === a.value ? 'active' : ''}`}
            onClick={() => { updateElementProps(element.id, { textAlign: a.value }); commitChange('Change alignment'); }}
            title={a.value}
          >
            {a.icon}
          </button>
        ))}
      </div>
    </PropField>
  );
}

// ── Button ──

function ButtonProps({ element }) {
  const { text, url, newTab, bgColor, color, borderRadius, fontSize, fullWidth } = element.props;
  const palette = getEffectiveColors();

  function update(p) {
    updateElementProps(element.id, p);
    commitChange('Edit button');
  }

  return (
    <>
      <PropField label="Label">
        <input
          type="text"
          class="prop-input"
          value={text || ''}
          onInput={e => updateElementProps(element.id, { text: e.target.value })}
          onBlur={() => commitChange('Edit button text')}
        />
      </PropField>
      <PropField label="Icon">
        <div class="icon-field-row">
          <IconPicker value={element.props.icon || ''} onChange={v => update({ icon: v })} />
          {element.props.icon && (
            <div class="prop-btn-group" style={{ marginLeft: 8 }}>
              <button class={`prop-btn ${(element.props.iconPosition || 'before') === 'before' ? 'active' : ''}`} onClick={() => update({ iconPosition: 'before' })}>Before</button>
              <button class={`prop-btn ${element.props.iconPosition === 'after' ? 'active' : ''}`} onClick={() => update({ iconPosition: 'after' })}>After</button>
            </div>
          )}
        </div>
      </PropField>
      <PropField label="Action">
        <div class="prop-btn-group" style={{ marginBottom: '6px' }}>
          {[['link', 'Link'], ['submitForm', 'Submit Form'], ['redirect', 'Redirect'], ['showMessage', 'Show Message']].map(([val, label]) => (
            <button key={val} class={`prop-btn ${(element.props.action || 'link') === val ? 'active' : ''}`}
              onClick={() => update({ action: val })} style={{ fontSize: '10px' }}>{label}</button>
          ))}
        </div>
      </PropField>
      {(element.props.action || 'link') === 'link' && (
        <>
          <PropField label="URL">
            <input type="text" class="prop-input" value={url || ''} placeholder="https://..."
              onInput={e => updateElementProps(element.id, { url: e.target.value })}
              onBlur={() => commitChange('Edit button URL')} />
          </PropField>
          <PropField label="Open in new tab">
            <label class="prop-checkbox">
              <input type="checkbox" checked={newTab || false} onChange={e => update({ newTab: e.target.checked })} />
              <span>Open link in new tab</span>
            </label>
          </PropField>
        </>
      )}
      {element.props.action === 'submitForm' && (
        <>
          <PropField label="Form Target">
            <select class="prop-input" value={element.props.formTarget || ''}
              onChange={e => update({ formTarget: e.target.value })}>
              <option value="">Auto (closest form)</option>
              {rows.value.flatMap(r => r.elements).filter(e => e.type === 'form').map(f => (
                <option key={f.id} value={f.id}>{f.id}</option>
              ))}
            </select>
          </PropField>
          <PropField label="Callback (optional)">
            <input type="text" class="prop-input prop-css" value={element.props.callbackFn || ''} placeholder="window.handleSubmit"
              onInput={e => update({ callbackFn: e.target.value })} />
            <span style={{ fontSize: '10px', color: '#999' }}>JS function(formData, formEl) → Promise</span>
          </PropField>
          <PropField label="After Submit">
            <div class="prop-btn-group" style={{ marginBottom: '4px' }}>
              <button class={`prop-btn ${(element.props.afterSubmit || 'message') === 'message' ? 'active' : ''}`} onClick={() => update({ afterSubmit: 'message' })}>Message</button>
              <button class={`prop-btn ${element.props.afterSubmit === 'redirect' ? 'active' : ''}`} onClick={() => update({ afterSubmit: 'redirect' })}>Redirect</button>
            </div>
            {(element.props.afterSubmit || 'message') === 'message' && (
              <input type="text" class="prop-input" value={element.props.successMessage || ''} placeholder="Thank you!"
                onInput={e => update({ successMessage: e.target.value })} />
            )}
            {element.props.afterSubmit === 'redirect' && (
              <input type="text" class="prop-input" value={element.props.redirectUrl || ''} placeholder="https://..."
                onInput={e => update({ redirectUrl: e.target.value })} />
            )}
          </PropField>
        </>
      )}
      {element.props.action === 'redirect' && (
        <PropField label="Redirect URL">
          <input type="text" class="prop-input" value={element.props.redirectUrl || ''} placeholder="https://..."
            onInput={e => update({ redirectUrl: e.target.value })} />
        </PropField>
      )}
      {element.props.action === 'showMessage' && (
        <PropField label="Message">
          <input type="text" class="prop-input" value={element.props.successMessage || ''} placeholder="Thank you!"
            onInput={e => update({ successMessage: e.target.value })} />
        </PropField>
      )}
      <PropField label="Width">
        <div class="prop-btn-group">
          <button class={`prop-btn ${!fullWidth ? 'active' : ''}`} onClick={() => update({ fullWidth: false })}>Auto</button>
          <button class={`prop-btn ${fullWidth ? 'active' : ''}`} onClick={() => update({ fullWidth: true })}>Full Width</button>
        </div>
      </PropField>
      <PropField label="Size">
        <div class="prop-btn-group">
          {['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl'].map(s => (
            <button
              key={s}
              class={`prop-btn ${fontSize === s ? 'active' : ''}`}
              onClick={() => update({ fontSize: s })}
            >
              {s}
            </button>
          ))}
        </div>
      </PropField>
      <PropField label="Background Color">
        <ColorSelector value={bgColor || ''} onChange={v => update({ bgColor: v })} placeholder="#4a90d9" />
      </PropField>
      <PropField label="Text Color">
        <ColorSelector value={color || ''} onChange={v => update({ color: v })} placeholder="#ffffff" />
      </PropField>
      <PropField label="Border Radius (px)">
        <input
          type="number"
          class="prop-input"
          value={borderRadius || '6'}
          min={0}
          onInput={e => updateElementProps(element.id, { borderRadius: e.target.value })}
          onBlur={() => commitChange('Change button radius')}
        />
      </PropField>
      <AlignField element={element} />
    </>
  );
}

// ── Form ──

const FIELD_TYPES = [
  { value: 'text', label: 'Text' },
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' },
  { value: 'number', label: 'Number' },
  { value: 'textarea', label: 'Textarea' },
  { value: 'select', label: 'Dropdown' },
  { value: 'radio', label: 'Radio' },
  { value: 'checkbox', label: 'Checkbox' },
];

const VALIDATIONS = [
  { value: 'none', label: 'None' },
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' },
  { value: 'number', label: 'Number' },
];

function FormProps({ element }) {
  const { fields } = element.props;

  function update(p) {
    updateElementProps(element.id, p);
    commitChange('Edit form');
  }

  function updateField(fieldId, patch) {
    const newFields = (fields || []).map(f => f.id === fieldId ? { ...f, ...patch } : f);
    update({ fields: newFields });
  }

  function addField() {
    const id = 'f' + Date.now();
    update({ fields: [...(fields || []), { id, type: 'text', label: 'New Field', placeholder: '', required: false, validation: 'none', name: 'field_' + id }] });
  }

  function removeField(fieldId) {
    update({ fields: (fields || []).filter(f => f.id !== fieldId) });
  }

  function moveField(fieldId, dir) {
    const list = [...(fields || [])];
    const idx = list.findIndex(f => f.id === fieldId);
    if (idx < 0) return;
    const swapIdx = idx + dir;
    if (swapIdx < 0 || swapIdx >= list.length) return;
    [list[idx], list[swapIdx]] = [list[swapIdx], list[idx]];
    update({ fields: list });
  }

  return (
    <>
      <PropField label="Form ID">
        <input type="text" class="prop-input prop-css" value={element.id} disabled style={{ opacity: 0.6 }} />
        <span style={{ fontSize: '10px', color: '#999', display: 'block', marginTop: '2px' }}>
          Use this ID in a Button's "Submit Form" action
        </span>
      </PropField>
      <PropField label="Form Fields">
        <div class="form-fields-list">
          {(fields || []).map((f, i) => (
            <FormFieldEditor
              key={f.id}
              field={f}
              index={i}
              total={(fields || []).length}
              onChange={(k, v) => updateField(f.id, { [k]: v })}
              onRemove={() => removeField(f.id)}
              onMove={dir => moveField(f.id, dir)}
            />
          ))}
        </div>
        <button class="palette-add-btn" onClick={addField}>+ Add Field</button>
      </PropField>
    </>
  );
}

function FormFieldEditor({ field, index, total, onChange, onRemove, onMove }) {
  const hasOptions = field.type === 'select' || field.type === 'radio';

  // Options stored as [{label, value}] or legacy string[]
  function getOptions() {
    const opts = field.options || [];
    return opts.map(o => typeof o === 'string' ? { label: o, value: o } : o);
  }

  function setOptions(opts) {
    onChange('options', opts);
  }

  function addOption() {
    setOptions([...getOptions(), { label: 'Option', value: 'option' }]);
  }

  function updateOption(i, key, val) {
    const opts = getOptions().map((o, j) => j === i ? { ...o, [key]: val } : o);
    setOptions(opts);
  }

  function removeOption(i) {
    setOptions(getOptions().filter((_, j) => j !== i));
  }

  return (
    <div class="form-field-editor">
      <div class="form-field-header">
        <select class="form-field-type-select" value={field.type} onChange={e => onChange('type', e.target.value)}>
          {FIELD_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
        </select>
        <div class="form-field-actions">
          <button class="form-field-action" onClick={() => onMove(-1)} disabled={index === 0} title="Move up">&uarr;</button>
          <button class="form-field-action" onClick={() => onMove(1)} disabled={index === total - 1} title="Move down">&darr;</button>
          <button class="form-field-action form-field-remove" onClick={onRemove} title="Remove">&times;</button>
        </div>
      </div>
      <input type="text" class="prop-input" value={field.label || ''} placeholder="Label"
        onInput={e => onChange('label', e.target.value)} style={{ marginBottom: '3px' }} />
      <input type="text" class="prop-input" value={field.name || ''} placeholder="Field name (for form data)"
        onInput={e => onChange('name', e.target.value)} style={{ marginBottom: '3px', fontFamily: 'monospace', fontSize: '11px' }} />
      {field.type !== 'checkbox' && field.type !== 'radio' && field.type !== 'select' && (
        <input type="text" class="prop-input" value={field.placeholder || ''} placeholder="Placeholder"
          onInput={e => onChange('placeholder', e.target.value)} style={{ marginBottom: '3px' }} />
      )}
      {field.type === 'select' && (
        <input type="text" class="prop-input" value={field.placeholder || ''} placeholder="Placeholder (e.g. Select...)"
          onInput={e => onChange('placeholder', e.target.value)} style={{ marginBottom: '3px' }} />
      )}
      {hasOptions && (
        <div class="form-options-list">
          {getOptions().map((opt, i) => (
            <div key={i} class="form-option-row">
              <input type="text" class="prop-input" value={opt.label} placeholder="Label"
                onInput={e => updateOption(i, 'label', e.target.value)} style={{ flex: 1 }} />
              <input type="text" class="prop-input prop-css" value={opt.value} placeholder="Value"
                onInput={e => updateOption(i, 'value', e.target.value)} style={{ flex: 1 }} />
              <button class="form-field-action form-field-remove" onClick={() => removeOption(i)}>&times;</button>
            </div>
          ))}
          <button class="palette-add-btn" onClick={addOption} style={{ fontSize: '10px', padding: '3px' }}>+ Option</button>
        </div>
      )}
      <div class="form-field-flags">
        <label class="prop-checkbox"><input type="checkbox" checked={field.required} onChange={e => onChange('required', e.target.checked)} /><span>Required</span></label>
        {field.type === 'text' && (
          <select class="form-field-type-select" value={field.validation || 'none'} onChange={e => onChange('validation', e.target.value)} style={{ marginLeft: '8px' }}>
            {VALIDATIONS.map(v => <option key={v.value} value={v.value}>{v.label}</option>)}
          </select>
        )}
      </div>
      <input type="text" class="prop-input prop-css" value={field.customValidator || ''} placeholder="Custom validator: window.validateField"
        onInput={e => onChange('customValidator', e.target.value)} style={{ marginTop: '3px', fontSize: '10px' }} />
      {field.customValidator && (
        <span style={{ fontSize: '9px', color: '#999' }}>async fn(value, fieldName) → null | "error message"</span>
      )}
    </div>
  );
}

// ── List ──

const FONT_WEIGHTS = ['300', '400', '500', '600', '700', '800'];

function ListProps({ element }) {
  const { listType, items, icon, iconColor, fontSize, fontWeight, itemPadding, itemBgColor, itemRadius, itemGap } = element.props;
  const palette = getEffectiveColors();

  function update(p) {
    updateElementProps(element.id, p);
    commitChange('Edit list');
  }

  function updateItem(idx, patch) {
    const newItems = (items || []).map((item, i) => i === idx ? { ...item, ...patch } : item);
    update({ items: newItems });
  }

  function addItem() {
    update({ items: [...(items || []), { id: 'li' + Date.now(), text: 'New item' }] });
  }

  function removeItem(idx) {
    update({ items: (items || []).filter((_, i) => i !== idx) });
  }

  function moveItem(idx, dir) {
    const list = [...(items || [])];
    const swapIdx = idx + dir;
    if (swapIdx < 0 || swapIdx >= list.length) return;
    [list[idx], list[swapIdx]] = [list[swapIdx], list[idx]];
    update({ items: list });
  }

  return (
    <>
      <PropField label="Type">
        <div class="prop-btn-group">
          <button class={`prop-btn ${(listType || 'ul') === 'ul' ? 'active' : ''}`} onClick={() => update({ listType: 'ul' })}>Unordered</button>
          <button class={`prop-btn ${listType === 'ol' ? 'active' : ''}`} onClick={() => update({ listType: 'ol' })}>Ordered</button>
        </div>
      </PropField>
      <PropField label="Default Icon">
        <IconPicker value={icon || ''} onChange={v => update({ icon: v })} />
        {icon && (
          <>
            <div class="prop-color-row" style={{ marginTop: '4px' }}>
              <input type="color" class="prop-color" value={iconColor || '#000000'} onInput={e => update({ iconColor: e.target.value })} />
              <input type="text" class="prop-input" value={iconColor || ''} placeholder="currentColor" onInput={e => update({ iconColor: e.target.value })} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
              <span style={{ fontSize: '11px', color: '#999' }}>Weight</span>
              <input type="range" min={0.5} max={4} step={0.25} value={element.props.iconWeight || 2}
                onInput={e => update({ iconWeight: parseFloat(e.target.value) })} style={{ flex: 1 }} />
              <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#666', minWidth: '24px' }}>{element.props.iconWeight || 2}</span>
            </div>
          </>
        )}
      </PropField>
      <PropField label="Font Size">
        <div class="prop-btn-group">
          {['xs', 'sm', 'base', 'lg', 'xl', '2xl'].map(s => (
            <button key={s} class={`prop-btn ${(fontSize || 'base') === s ? 'active' : ''}`} onClick={() => update({ fontSize: s })}>{s}</button>
          ))}
        </div>
      </PropField>
      <PropField label="Font Weight">
        <div class="prop-btn-group">
          {FONT_WEIGHTS.map(w => (
            <button key={w} class={`prop-btn ${(fontWeight || '400') === w ? 'active' : ''}`} onClick={() => update({ fontWeight: w })}>{w}</button>
          ))}
        </div>
      </PropField>
      <PropField label="Item Background">
        <ColorSelector value={itemBgColor || ''} onChange={v => update({ itemBgColor: v })} placeholder="none" />
      </PropField>
      <PropField label="Item Padding">
        <input type="text" class="prop-input" value={itemPadding || ''} placeholder="8px 12px" onInput={e => update({ itemPadding: e.target.value })} />
      </PropField>
      <PropField label="Item Radius (px)">
        <input type="number" class="prop-input" value={itemRadius || '0'} min={0} onInput={e => update({ itemRadius: e.target.value })} />
      </PropField>
      <PropField label="Item Shadow">
        <BoxShadowEditor value={element.props.itemShadow} onChange={v => update({ itemShadow: v })} />
      </PropField>
      <PropField label="Item Gap (px)">
        <input type="number" class="prop-input" value={itemGap || '4'} min={0} onInput={e => update({ itemGap: e.target.value })} />
      </PropField>
      <ColorField element={element} label="Text Color" />
      <PropField label="Items">
        <div class="form-fields-list">
          {(items || []).map((item, i) => (
            <div key={item.id || i} class="list-item-editor">
              <div class="form-field-header">
                <IconPicker value={item.icon ?? ''} onChange={v => updateItem(i, { icon: v || undefined })} />
                <div class="form-field-actions">
                  <button class="form-field-action" onClick={() => moveItem(i, -1)} disabled={i === 0}>&uarr;</button>
                  <button class="form-field-action" onClick={() => moveItem(i, 1)} disabled={i === (items || []).length - 1}>&darr;</button>
                  <button class="form-field-action form-field-remove" onClick={() => removeItem(i)}>&times;</button>
                </div>
              </div>
              <input type="text" class="prop-input" value={item.text || ''} placeholder="Item text"
                onInput={e => updateItem(i, { text: e.target.value })} style={{ marginBottom: '3px' }} />
              <div class="prop-color-row">
                <input type="color" class="prop-color" value={item.bgColor || itemBgColor || '#ffffff'}
                  onInput={e => updateItem(i, { bgColor: e.target.value })} />
                <input type="text" class="prop-input" value={item.bgColor || ''} placeholder="inherit"
                  onInput={e => updateItem(i, { bgColor: e.target.value })} />
                {item.bgColor && <button class="prop-btn-clear" onClick={() => updateItem(i, { bgColor: '' })}>&times;</button>}
              </div>
            </div>
          ))}
        </div>
        <button class="palette-add-btn" onClick={addItem}>+ Add Item</button>
      </PropField>
    </>
  );
}

// ── Timer ──

const TIMEZONES = [
  'Asia/Jerusalem', 'Europe/London', 'Europe/Paris', 'Europe/Berlin',
  'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
  'Asia/Tokyo', 'Asia/Shanghai', 'Asia/Dubai', 'Asia/Kolkata',
  'Australia/Sydney', 'Pacific/Auckland', 'UTC',
];

function TimerProps({ element }) {
  const { targetDate, timezone, bgColor, color, labelDays, labelHours, labelMinutes, labelSeconds, expiredText, borderRadius } = element.props;
  const palette = getEffectiveColors();

  function update(p) {
    updateElementProps(element.id, p);
    commitChange('Edit timer');
  }

  return (
    <>
      <PropField label="Target Date & Time">
        <input
          type="datetime-local"
          class="prop-input"
          value={targetDate || ''}
          onInput={e => update({ targetDate: e.target.value })}
        />
      </PropField>
      <PropField label="Timezone">
        <select class="prop-input" value={timezone || 'Asia/Jerusalem'} onChange={e => update({ timezone: e.target.value })}>
          {TIMEZONES.map(tz => <option key={tz} value={tz}>{tz}</option>)}
        </select>
      </PropField>
      <PropField label="Box Background">
        <ColorSelector value={bgColor || ''} onChange={v => update({ bgColor: v })} placeholder="#eef2f7" />
      </PropField>
      <PropField label="Text Color">
        <ColorSelector value={color || ''} onChange={v => update({ color: v })} placeholder="#1a2744" />
      </PropField>
      <PropField label="Box Radius (px)">
        <input type="number" class="prop-input" value={borderRadius || '12'} min={0}
          onInput={e => updateElementProps(element.id, { borderRadius: e.target.value })}
          onBlur={() => commitChange('Change timer radius')} />
      </PropField>
      <PropField label="Box Width (%)">
        <div class="prop-dim-row">
          <input type="range" min={10} max={25} value={element.props.boxWidth || 20}
            onInput={e => update({ boxWidth: parseInt(e.target.value) })}
            style={{ flex: 1 }} />
          <span style={{ fontSize: '12px', color: '#666', minWidth: '30px', textAlign: 'right' }}>{element.props.boxWidth || 20}%</span>
        </div>
      </PropField>
      <PropField label="Labels">
        <div class="timer-labels-grid">
          <input type="text" class="prop-input" value={labelDays || ''} placeholder="Days" onInput={e => update({ labelDays: e.target.value })} />
          <input type="text" class="prop-input" value={labelHours || ''} placeholder="Hours" onInput={e => update({ labelHours: e.target.value })} />
          <input type="text" class="prop-input" value={labelMinutes || ''} placeholder="Minutes" onInput={e => update({ labelMinutes: e.target.value })} />
          <input type="text" class="prop-input" value={labelSeconds || ''} placeholder="Seconds" onInput={e => update({ labelSeconds: e.target.value })} />
        </div>
      </PropField>
      <PropField label="Expired Text">
        <input type="text" class="prop-input" value={expiredText || ''} placeholder="Time is up!"
          onInput={e => update({ expiredText: e.target.value })} />
      </PropField>
    </>
  );
}

// ── Grid ──

function GridProps({ element }) {
  function update(p) {
    updateElementProps(element.id, p);
    commitChange('Edit grid');
  }

  return (
    <>
      <PropField label="Width">
        <div class="prop-btn-group" style={{ marginBottom: '6px' }}>
          <button class={`prop-btn ${!element.props.maxWidth ? 'active' : ''}`} onClick={() => update({ maxWidth: '' })}>Full</button>
          <button class={`prop-btn ${element.props.maxWidth ? 'active' : ''}`} onClick={() => { if (!element.props.maxWidth) update({ maxWidth: '1200px' }); }}>Set Width</button>
        </div>
        {element.props.maxWidth && (
          <input
            type="text"
            class="prop-input"
            value={element.props.maxWidth}
            placeholder="e.g. 1200px, 960px, 80%"
            onInput={e => updateElementProps(element.id, { maxWidth: e.target.value })}
            onBlur={() => commitChange('Change grid max width')}
          />
        )}
      </PropField>
      <GapFields props={element.props} onUpdate={(k, v) => { updateElementProps(element.id, { [k]: v }); commitChange('Edit gap'); }} />
    </>
  );
}

// ── Container ──

function ContainerProps({ row }) {
  const props = row.props || {};
  const { bgColor } = props;
  const palette = getEffectiveColors();

  function update(p) {
    updateRowProps(row.id, p);
    commitChange('Edit container');
  }

  function setBg(val) {
    updateRowProps(row.id, { bgColor: val });
    commitChange('Change container background');
  }

  return (
    <>
    <PropField label="Width">
      <div class="prop-btn-group" style={{ marginBottom: '6px' }}>
        <button class={`prop-btn ${!props.maxWidth ? 'active' : ''}`} onClick={() => update({ maxWidth: '' })}>Full</button>
        <button class={`prop-btn ${props.maxWidth ? 'active' : ''}`} onClick={() => { if (!props.maxWidth) update({ maxWidth: '1200px' }); }}>Set Width</button>
      </div>
      {props.maxWidth && (
        <input
          type="text"
          class="prop-input"
          value={props.maxWidth}
          placeholder="e.g. 1200px, 960px, 80%"
          onInput={e => updateRowProps(row.id, { maxWidth: e.target.value })}
          onBlur={() => commitChange('Change container max width')}
        />
      )}
    </PropField>
    <GapFields props={props} onUpdate={(k, v) => { updateRowProps(row.id, { [k]: v }); commitChange('Edit gap'); }} />
    <AlignmentPicker
      value={props.align}
      onChange={val => update({ align: val })}
    />
    <DirectionPicker
      value={props.direction}
      onChange={val => update({ direction: val })}
    />
    <PropField label="Background Color">
      <ColorSelector value={bgColor || ''} onChange={v => { updateRowProps(row.id, { bgColor: v }); commitChange('Change container background'); }} placeholder="none" />
    </PropField>
    </>
  );
}

// ── Cell ──

function CellProps({ cell }) {
  const props = cell.props || {};

  function update(p) {
    updateCellProps(cell.id, p);
    commitChange('Edit cell');
  }

  return (
    <>
      <VisibilityField props={props} onUpdate={(k, v) => { updateCellProps(cell.id, { [k]: v }); commitChange('Edit visibility'); }} />
      <GapFields props={props} onUpdate={(k, v) => { updateCellProps(cell.id, { [k]: v }); commitChange('Edit gap'); }} />
      <AlignmentPicker value={props.align} onChange={val => update({ align: val })} />
      <DirectionPicker value={props.direction} onChange={val => update({ direction: val })} />
      <BorderFields props={props} onUpdate={(k, v) => { updateCellProps(cell.id, { [k]: v }); commitChange('Edit border'); }} />
      <PropField label="Box Shadow">
        <BoxShadowEditor value={props.boxShadow} onChange={v => { updateCellProps(cell.id, { boxShadow: v }); commitChange('Edit shadow'); }} />
      </PropField>
      <SpacingFields label="padding" props={props} onUpdate={(k, v) => { updateCellProps(cell.id, { [k]: v }); commitChange('Edit padding'); }} />
      <SpacingFields label="margin" props={props} onUpdate={(k, v) => { updateCellProps(cell.id, { [k]: v }); commitChange('Edit margin'); }} />
      <CssEditor
        value={props.customCss || ''}
        selector="selector"
        onChange={v => updateCellProps(cell.id, { customCss: v })}
        onBlur={() => commitChange('Edit cell CSS')}
      />
    </>
  );
}

// ── Shared: Spacing (padding/margin) with 4-box + link ──

const SIDES = ['top', 'right', 'bottom', 'left'];
const VP_PREFIX = { desktop: '', tablet: 'tablet_', mobile: 'mobile_' };

function SpacingFields({ props, onUpdate, label }) {
  // label = 'padding' or 'margin'
  const vp = viewportMode.value;
  const prefix = VP_PREFIX[vp];
  const key = prefix + label; // e.g. 'padding', 'tablet_padding', 'mobile_padding'

  // Resolve effective value: mobile → tablet → desktop
  function getEffective() {
    if (vp === 'mobile') return props['mobile_' + label] || props['tablet_' + label] || props[label];
    if (vp === 'tablet') return props['tablet_' + label] || props[label];
    return props[label];
  }

  const raw = props[key]; // explicit value at this viewport
  const effective = getEffective() || { top: 0, right: 0, bottom: 0, left: 0, linked: true };
  const hasOverride = vp !== 'desktop' && !!raw;

  function set(newVal) {
    onUpdate(key, newVal);
  }

  function onSideChange(side, val) {
    const num = val === '' ? 0 : val;
    if (effective.linked) {
      set({ ...effective, top: num, right: num, bottom: num, left: num });
    } else {
      set({ ...effective, [side]: num });
    }
  }

  function toggleLinked() {
    set({ ...effective, linked: !effective.linked });
  }

  function clearOverride() {
    onUpdate(key, undefined);
  }

  const isDesktop = vp === 'desktop';

  return (
    <PropField label={<>{label.charAt(0).toUpperCase() + label.slice(1)}{!isDesktop && <span class="spacing-vp-label"> ({vp})</span>}{hasOverride && <button class="settings-reset" onClick={clearOverride} title="Reset">&times;</button>}</>}>
      <div class={`spacing-box ${hasOverride ? 'overridden' : ''}`}>
        {SIDES.map(side => (
          <div key={side} class="spacing-side">
            <input
              type="number"
              class="spacing-input"
              value={effective[side] ?? 0}
              onInput={e => onSideChange(side, parseInt(e.target.value) || 0)}
            />
            <span class="spacing-side-label">{side.charAt(0).toUpperCase()}</span>
          </div>
        ))}
        <button class={`spacing-link-btn ${effective.linked ? 'linked' : ''}`} onClick={toggleLinked} title={effective.linked ? 'Unlink sides' : 'Link sides'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            {effective.linked ? (
              <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></>
            ) : (
              <><path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"/><path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"/><line x1="8" x2="8" y1="2" y2="5"/><line x1="2" x2="5" y1="8" y2="8"/><line x1="16" x2="16" y1="19" y2="22"/><line x1="19" x2="22" y1="16" y2="16"/></>
            )}
          </svg>
        </button>
      </div>
    </PropField>
  );
}

// ── Shared: Gap (row gap / column gap) ──

function GapFields({ props, onUpdate }) {
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
            <input
              type="number"
              class={`spacing-input ${hasRowOverride ? 'overridden' : ''}`}
              value={effectiveRow}
              min={0}
              onInput={e => onUpdate(rowKey, parseInt(e.target.value) || 0)}
            />
            {hasRowOverride && <button class="prop-btn-clear" onClick={() => onUpdate(rowKey, undefined)} title="Reset">&times;</button>}
          </div>
        </div>
        <div class="gap-field">
          <label class="gap-label">Col</label>
          <div class="gap-input-wrap">
            <input
              type="number"
              class={`spacing-input ${hasColOverride ? 'overridden' : ''}`}
              value={effectiveCol}
              min={0}
              onInput={e => onUpdate(colKey, parseInt(e.target.value) || 0)}
            />
            {hasColOverride && <button class="prop-btn-clear" onClick={() => onUpdate(colKey, undefined)} title="Reset">&times;</button>}
          </div>
        </div>
        <span class="gap-unit">px</span>
      </div>
    </PropField>
  );
}

// ── Shared: Border ──

const BORDER_STYLES = ['none', 'solid', 'dashed', 'dotted'];
const CORNERS = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'];
const CORNER_LABELS = { topLeft: 'TL', topRight: 'TR', bottomRight: 'BR', bottomLeft: 'BL' };

function BorderFields({ props, onUpdate }) {
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
  const palette = getEffectiveColors();

  function setBorder(patch) {
    onUpdate(borderKey, { ...border, ...patch });
  }

  function setRadius(corner, val) {
    const num = parseInt(val) || 0;
    if (radius.linked) {
      onUpdate(radiusKey, { ...radius, topLeft: num, topRight: num, bottomRight: num, bottomLeft: num });
    } else {
      onUpdate(radiusKey, { ...radius, [corner]: num });
    }
  }

  function toggleRadiusLinked() {
    onUpdate(radiusKey, { ...radius, linked: !radius.linked });
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
                <button key={s} class={`prop-btn ${border.style === s ? 'active' : ''}`} onClick={() => setBorder({ style: s })} style={{ fontSize: '10px', padding: '3px 6px' }}>
                  {s}
                </button>
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
          <button class={`spacing-link-btn ${radius.linked ? 'linked' : ''}`} onClick={toggleRadiusLinked} title={radius.linked ? 'Unlink corners' : 'Link corners'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              {radius.linked ? (
                <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></>
              ) : (
                <><path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"/><path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"/><line x1="8" x2="8" y1="2" y2="5"/><line x1="2" x2="5" y1="8" y2="8"/><line x1="16" x2="16" y1="19" y2="22"/><line x1="19" x2="22" y1="16" y2="16"/></>
              )}
            </svg>
          </button>
        </div>
      </PropField>
    </>
  );
}

// ── Shared: Visibility per viewport ──

function VisibilityField({ props, onUpdate }) {
  const hide = props.hideOn || {};

  function toggle(vp) {
    const next = { ...hide, [vp]: !hide[vp] };
    // Clean up false values
    for (const k of Object.keys(next)) { if (!next[k]) delete next[k]; }
    onUpdate('hideOn', Object.keys(next).length ? next : undefined);
  }

  return (
    <PropField label="Visibility">
      <div class="visibility-row">
        {['desktop', 'tablet', 'mobile'].map(vp => (
          <button
            key={vp}
            class={`visibility-btn ${hide[vp] ? 'hidden-vp' : 'visible-vp'}`}
            onClick={() => toggle(vp)}
            title={hide[vp] ? `Hidden on ${vp}` : `Visible on ${vp}`}
          >
            <VisibilityIcon vp={vp} hidden={!!hide[vp]} />
            <span>{vp.charAt(0).toUpperCase() + vp.slice(1)}</span>
          </button>
        ))}
      </div>
    </PropField>
  );
}

function VisibilityIcon({ vp, hidden }) {
  const s = { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' };
  if (hidden) {
    return <svg {...s}><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>;
  }
  return <svg {...s}><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>;
}

// ── Shared: CSS Editor with selector wrapper ──

function CssEditor({ value, selector, onChange, onBlur }) {
  return (
    <PropField label="Custom CSS">
      <div class="css-editor-wrap">
        <div class="css-editor-selector">{selector} {'{'}</div>
        <textarea
          class="prop-textarea prop-css css-editor-textarea"
          value={value}
          placeholder="font-weight: bold;&#10;border-radius: 8px;"
          onInput={e => onChange(e.target.value)}
          onBlur={onBlur}
          rows={5}
        />
        <div class="css-editor-selector">{'}'}</div>
      </div>
    </PropField>
  );
}

// ── Shared: 9-square alignment picker ──

const ALIGN_POSITIONS = [
  ['top-left', 'top-center', 'top-right'],
  ['middle-left', 'middle-center', 'middle-right'],
  ['bottom-left', 'bottom-center', 'bottom-right'],
];

function AlignmentPicker({ value, onChange }) {
  return (
    <PropField label="Content Alignment">
      <div class="align-grid">
        {ALIGN_POSITIONS.map(row => row.map(pos => (
          <button
            key={pos}
            class={`align-cell ${value === pos ? 'active' : ''}`}
            onClick={() => onChange(value === pos ? '' : pos)}
            title={pos}
          >
            <span class="align-dot" />
          </button>
        )))}
      </div>
    </PropField>
  );
}

// ── Shared: Direction picker (for containers/cells) ──

function DirectionPicker({ value, onChange }) {
  return (
    <PropField label="Direction">
      <div class="prop-btn-group">
        {['ltr', 'rtl'].map(d => (
          <button
            key={d}
            class={`prop-btn ${value === d ? 'active' : ''}`}
            onClick={() => onChange(value === d ? '' : d)}
          >
            {d.toUpperCase()}
          </button>
        ))}
        {value && <button class="prop-btn-clear" onClick={() => onChange('')} title="Reset to page default">&times;</button>}
      </div>
    </PropField>
  );
}

// ── Shared: Direction field for elements ──

function DirectionField({ element }) {
  const dir = element.props.direction;
  return (
    <PropField label="Direction">
      <div class="prop-btn-group">
        {['ltr', 'rtl'].map(d => (
          <button
            key={d}
            class={`prop-btn ${dir === d ? 'active' : ''}`}
            onClick={() => { updateElementProps(element.id, { direction: dir === d ? '' : d }); commitChange('Change direction'); }}
          >
            {d.toUpperCase()}
          </button>
        ))}
        {dir && <button class="prop-btn-clear" onClick={() => { updateElementProps(element.id, { direction: '' }); commitChange('Reset direction'); }} title="Reset">&times;</button>}
      </div>
    </PropField>
  );
}

// ── Layout helper ──

function PropField({ label, children }) {
  return (
    <div class="prop-field">
      <label class="prop-label">{label}</label>
      {children}
    </div>
  );
}

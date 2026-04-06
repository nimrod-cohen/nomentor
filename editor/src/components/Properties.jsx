import { selectedId, rows, findElementById, findCellById, updateElementProps, updateRowProps, updateCellProps, commitChange, getEffectiveColors, viewportMode } from '../state';
import { openMediaPicker } from './MediaPicker';
import { IconPicker } from './IconPicker';
import { ColorSelector } from './ColorSelector';
import { BoxShadowEditor, shadowToCSS } from './BoxShadowEditor';
import {
  PropField, ColorField, AlignField, DirectionField, DirectionPicker, AlignmentPicker,
  VisibilityField, CssEditor, SpacingFields, GapFields, BorderFields,
  TEXT_SIZES, FONT_WEIGHTS, VP_PREFIX,
} from './properties/shared';

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
          <CssEditor value={row.props?.customCss || ''} selector="selector"
            onChange={v => updateRowProps(row.id, { customCss: v })} onBlur={() => commitChange('Edit container CSS')} />
          <PropField label="Container ID">
            <input type="text" class="prop-input prop-css" value={row.props?.anchorId || ''} placeholder={row.id}
              onInput={e => updateRowProps(row.id, { anchorId: e.target.value.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9_-]/g, '') })}
              onBlur={() => commitChange('Set container ID')} />
          </PropField>
        </div>
      </aside>
    );
  }

  const cell = findCellById(sel);
  if (cell) {
    return (
      <aside class="nomentor-sidebar-left">
        <div class="sidebar-header">Cell Properties</div>
        <div class="sidebar-content"><CellProps cell={cell} /></div>
      </aside>
    );
  }

  const element = findElementById(sel);
  if (!element) {
    return (
      <aside class="nomentor-sidebar-left">
        <div class="sidebar-header">Properties</div>
        <div class="sidebar-content"><div class="props-empty">Element not found</div></div>
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
        <CssEditor value={element.props.customCss || ''} selector="selector"
          onChange={v => updateElementProps(element.id, { customCss: v })} onBlur={() => commitChange('Edit custom CSS')} />
        <PropField label="Element ID">
          <input type="text" class="prop-input prop-css" value={element.props.anchorId || ''} placeholder={element.id}
            onInput={e => updateElementProps(element.id, { anchorId: e.target.value.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9_-]/g, '') })}
            onBlur={() => commitChange('Set element ID')} />
        </PropField>
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
    case 'separator': return <SeparatorProps element={element} />;
    default: return null;
  }
}

// ── Heading ──

function HeadingProps({ element }) {
  const { text, level } = element.props;
  function update(props) { updateElementProps(element.id, props); commitChange('Edit heading'); }

  return (
    <>
      <PropField label="Content">
        <textarea class="prop-textarea" value={text || ''}
          onInput={e => updateElementProps(element.id, { text: e.target.value })}
          onBlur={() => commitChange('Edit heading text')} rows={3} />
      </PropField>
      <PropField label="Size">
        <div class="prop-btn-group">
          {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(h => (
            <button key={h} class={`prop-btn ${level === h ? 'active' : ''}`} onClick={() => update({ level: h })}>{h.toUpperCase()}</button>
          ))}
        </div>
      </PropField>
      <ColorField element={element} label="Color" />
      <AlignField element={element} />
    </>
  );
}

// ── Text ──

function TextProps({ element }) {
  const { fontSize } = element.props;
  function update(props) { updateElementProps(element.id, props); commitChange('Edit text'); }

  return (
    <>
      <PropField label="Size">
        <div class="prop-btn-group">
          {TEXT_SIZES.map(s => (
            <button key={s} class={`prop-btn ${fontSize === s ? 'active' : ''}`} onClick={() => update({ fontSize: s })}>{s}</button>
          ))}
        </div>
      </PropField>
      <ColorField element={element} label="Color" />
      <AlignField element={element} />
    </>
  );
}

// ── Image ──

const VP_DIM_KEYS = {
  desktop: { w: 'width', h: 'height' },
  tablet:  { w: 'tabletWidth', h: 'tabletHeight' },
  mobile:  { w: 'mobileWidth', h: 'mobileHeight' },
};

function ImageProps({ element }) {
  const { src, alt } = element.props;

  function selectImage() {
    openMediaPicker().then(img => {
      if (img) { updateElementProps(element.id, { src: img.url, alt: img.alt }); commitChange('Set image'); }
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
        if (r.success) { updateElementProps(element.id, { src: r.data.url, alt: r.data.alt || '' }); commitChange('Upload image'); }
      });
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
          <div class="prop-image-drop"
            onDragOver={e => { e.preventDefault(); e.currentTarget.classList.add('prop-drop-active'); }}
            onDragLeave={e => e.currentTarget.classList.remove('prop-drop-active')}
            onDrop={e => { e.preventDefault(); e.currentTarget.classList.remove('prop-drop-active'); const f = e.dataTransfer.files?.[0]; if (f) uploadFile(f); }}>
            <button class="prop-btn" onClick={selectImage} style={{ width: '100%' }}>Select from Media Library</button>
            <span class="prop-image-drop-hint">or drop an image here</span>
          </div>
        )}
      </PropField>
      <PropField label="Alt Text">
        <input type="text" class="prop-input" value={alt || ''} placeholder="Describe the image"
          onInput={e => updateElementProps(element.id, { alt: e.target.value })}
          onBlur={() => commitChange('Edit alt text')} />
      </PropField>
      <ImageDimensions element={element} />
    </>
  );
}

function ImageDimensions({ element }) {
  const vp = viewportMode.value;
  const keys = VP_DIM_KEYS[vp];
  const isDesktop = vp === 'desktop';

  function effective(prop) {
    if (vp === 'mobile') return element.props.mobileWidth !== undefined ? element.props[prop === 'w' ? 'mobileWidth' : 'mobileHeight'] : (element.props[prop === 'w' ? 'tabletWidth' : 'tabletHeight'] ?? element.props[prop === 'w' ? 'width' : 'height'] ?? '');
    if (vp === 'tablet') return element.props[prop === 'w' ? 'tabletWidth' : 'tabletHeight'] ?? element.props[prop === 'w' ? 'width' : 'height'] ?? '';
    return element.props[prop === 'w' ? 'width' : 'height'] ?? '';
  }

  const effectiveW = effective('w');
  const effectiveH = effective('h');
  const hasWOverride = !isDesktop && element.props[keys.w] != null;
  const hasHOverride = !isDesktop && element.props[keys.h] != null;

  function setDim(key, val) { updateElementProps(element.id, { [key]: val }); commitChange('Change image dimensions'); }
  function clearOverride(key) {
    updateElementProps(element.id, { [key]: undefined });
    const el = findElementById(element.id);
    if (el) delete el.props[key];
    commitChange('Reset image dimensions');
  }

  return (
    <>
      <PropField label={`Width${!isDesktop ? ' (' + vp + ')' : ''}`}>
        <div class="prop-dim-row">
          <input type="text" class={`prop-input ${hasWOverride ? 'overridden' : ''}`} value={effectiveW}
            placeholder="auto (e.g. 100%, 300px)" onInput={e => setDim(keys.w, e.target.value)}
            onBlur={() => commitChange('Change image width')} />
          {hasWOverride && <button class="prop-btn-clear" onClick={() => clearOverride(keys.w)} title="Reset">&times;</button>}
        </div>
      </PropField>
      <PropField label={`Height${!isDesktop ? ' (' + vp + ')' : ''}`}>
        <div class="prop-dim-row">
          <input type="text" class={`prop-input ${hasHOverride ? 'overridden' : ''}`} value={effectiveH}
            placeholder="auto (e.g. 300px, 50vh)" onInput={e => setDim(keys.h, e.target.value)}
            onBlur={() => commitChange('Change image height')} />
          {hasHOverride && <button class="prop-btn-clear" onClick={() => clearOverride(keys.h)} title="Reset">&times;</button>}
        </div>
      </PropField>
    </>
  );
}

// ── Button ──

function ButtonProps({ element }) {
  const { text, url, newTab, bgColor, color, borderRadius, fontSize, fullWidth } = element.props;
  function update(p) { updateElementProps(element.id, p); commitChange('Edit button'); }

  return (
    <>
      <PropField label="Label">
        <input type="text" class="prop-input" value={text || ''}
          onInput={e => updateElementProps(element.id, { text: e.target.value })}
          onBlur={() => commitChange('Edit button text')} />
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
            <select class="prop-input" value={element.props.formTarget || ''} onChange={e => update({ formTarget: e.target.value })}>
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
          {TEXT_SIZES.map(s => (
            <button key={s} class={`prop-btn ${fontSize === s ? 'active' : ''}`} onClick={() => update({ fontSize: s })}>{s}</button>
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
        <input type="number" class="prop-input" value={borderRadius || '6'} min={0}
          onInput={e => updateElementProps(element.id, { borderRadius: e.target.value })}
          onBlur={() => commitChange('Change button radius')} />
      </PropField>
      <AlignField element={element} />
    </>
  );
}

// ── Form ──

const FIELD_TYPES = [
  { value: 'text', label: 'Text' }, { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' }, { value: 'number', label: 'Number' },
  { value: 'textarea', label: 'Textarea' }, { value: 'select', label: 'Dropdown' },
  { value: 'radio', label: 'Radio' }, { value: 'checkbox', label: 'Checkbox' },
];

const VALIDATIONS = [
  { value: 'none', label: 'None' }, { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' }, { value: 'number', label: 'Number' },
];

function FormProps({ element }) {
  const { fields } = element.props;
  function update(p) { updateElementProps(element.id, p); commitChange('Edit form'); }
  function updateField(fieldId, patch) { update({ fields: (fields || []).map(f => f.id === fieldId ? { ...f, ...patch } : f) }); }
  function addField() { update({ fields: [...(fields || []), { id: 'f' + Date.now(), type: 'text', label: 'New Field', placeholder: '', required: false, validation: 'none', name: 'field_' + 'f' + Date.now() }] }); }
  function removeField(fieldId) { update({ fields: (fields || []).filter(f => f.id !== fieldId) }); }
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
      <PropField label="Form Fields">
        <div class="form-fields-list">
          {(fields || []).map((f, i) => (
            <FormFieldEditor key={f.id} field={f} index={i} total={(fields || []).length}
              onChange={(k, v) => updateField(f.id, { [k]: v })}
              onRemove={() => removeField(f.id)} onMove={dir => moveField(f.id, dir)} />
          ))}
        </div>
        <button class="palette-add-btn" onClick={addField}>+ Add Field</button>
      </PropField>
    </>
  );
}

function FormFieldEditor({ field, index, total, onChange, onRemove, onMove }) {
  const hasOptions = field.type === 'select' || field.type === 'radio';

  function getOptions() {
    return (field.options || []).map(o => typeof o === 'string' ? { label: o, value: o } : o);
  }
  function setOptions(opts) { onChange('options', opts); }

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
                onInput={e => { const opts = getOptions().map((o, j) => j === i ? { ...o, label: e.target.value } : o); setOptions(opts); }} style={{ flex: 1 }} />
              <input type="text" class="prop-input prop-css" value={opt.value} placeholder="Value"
                onInput={e => { const opts = getOptions().map((o, j) => j === i ? { ...o, value: e.target.value } : o); setOptions(opts); }} style={{ flex: 1 }} />
              <button class="form-field-action form-field-remove" onClick={() => setOptions(getOptions().filter((_, j) => j !== i))}>&times;</button>
            </div>
          ))}
          <button class="palette-add-btn" onClick={() => setOptions([...getOptions(), { label: 'Option', value: 'option' }])} style={{ fontSize: '10px', padding: '3px' }}>+ Option</button>
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

function ListProps({ element }) {
  const { listType, items, icon, iconColor, fontSize, fontWeight, itemPadding, itemBgColor, itemRadius, itemGap } = element.props;
  function update(p) { updateElementProps(element.id, p); commitChange('Edit list'); }
  function updateItem(idx, patch) { update({ items: (items || []).map((item, i) => i === idx ? { ...item, ...patch } : item) }); }
  function addItem() { update({ items: [...(items || []), { id: 'li' + Date.now(), text: 'New item' }] }); }
  function removeItem(idx) { update({ items: (items || []).filter((_, i) => i !== idx) }); }
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
  function update(p) { updateElementProps(element.id, p); commitChange('Edit timer'); }

  return (
    <>
      <PropField label="Target Date & Time">
        <input type="datetime-local" class="prop-input" value={targetDate || ''} onInput={e => update({ targetDate: e.target.value })} />
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
            onInput={e => update({ boxWidth: parseInt(e.target.value) })} style={{ flex: 1 }} />
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
        <input type="text" class="prop-input" value={expiredText || ''} placeholder="Time is up!" onInput={e => update({ expiredText: e.target.value })} />
      </PropField>
    </>
  );
}

// ── Separator ──

const LINE_STYLES = ['solid', 'dashed', 'dotted', 'wave'];

function SeparatorProps({ element }) {
  const { lineColor, lineThickness, lineWidth, lineStyle, lineAlign } = element.props;
  function update(p) { updateElementProps(element.id, p); commitChange('Edit separator'); }

  return (
    <>
      <PropField label="Color">
        <ColorSelector value={lineColor || ''} onChange={v => update({ lineColor: v })} placeholder="#ddd" />
      </PropField>
      <PropField label="Thickness (px)">
        <input type="number" class="prop-input" value={lineThickness || '1'} min={1} max={20}
          onInput={e => update({ lineThickness: e.target.value })} />
      </PropField>
      <PropField label="Width">
        <div class="prop-btn-group" style={{ marginBottom: '6px' }}>
          <button class={`prop-btn ${!lineWidth ? 'active' : ''}`} onClick={() => update({ lineWidth: '' })}>Full</button>
          <button class={`prop-btn ${lineWidth ? 'active' : ''}`} onClick={() => { if (!lineWidth) update({ lineWidth: '50%' }); }}>Set Width</button>
        </div>
        {lineWidth && (
          <input type="text" class="prop-input" value={lineWidth} placeholder="e.g. 50%, 200px"
            onInput={e => updateElementProps(element.id, { lineWidth: e.target.value })}
            onBlur={() => commitChange('Change separator width')} />
        )}
      </PropField>
      {lineWidth && (
        <PropField label="Alignment">
          <div class="prop-btn-group">
            {[['left', 'Left'], ['center', 'Center'], ['right', 'Right']].map(([val, label]) => (
              <button key={val} class={`prop-btn ${(lineAlign || 'center') === val ? 'active' : ''}`}
                onClick={() => update({ lineAlign: val })}>{label}</button>
            ))}
          </div>
        </PropField>
      )}
      <PropField label="Style">
        <div class="prop-btn-group">
          {LINE_STYLES.map(s => (
            <button key={s} class={`prop-btn ${(lineStyle || 'solid') === s ? 'active' : ''}`}
              onClick={() => update({ lineStyle: s })}>{s}</button>
          ))}
        </div>
      </PropField>
    </>
  );
}

// ── Grid ──

function GridProps({ element }) {
  function update(p) { updateElementProps(element.id, p); commitChange('Edit grid'); }
  return (
    <>
      <PropField label="Width">
        <div class="prop-btn-group" style={{ marginBottom: '6px' }}>
          <button class={`prop-btn ${!element.props.maxWidth ? 'active' : ''}`} onClick={() => update({ maxWidth: '' })}>Full</button>
          <button class={`prop-btn ${element.props.maxWidth ? 'active' : ''}`} onClick={() => { if (!element.props.maxWidth) update({ maxWidth: '1200px' }); }}>Set Width</button>
        </div>
        {element.props.maxWidth && (
          <input type="text" class="prop-input" value={element.props.maxWidth} placeholder="e.g. 1200px, 960px, 80%"
            onInput={e => updateElementProps(element.id, { maxWidth: e.target.value })}
            onBlur={() => commitChange('Change grid max width')} />
        )}
      </PropField>
      <GapFields props={element.props} onUpdate={(k, v) => { updateElementProps(element.id, { [k]: v }); commitChange('Edit gap'); }} />
    </>
  );
}

// ── Container ──

function ContainerProps({ row }) {
  const props = row.props || {};
  function update(p) { updateRowProps(row.id, p); commitChange('Edit container'); }

  return (
    <>
      <PropField label="Width">
        <div class="prop-btn-group" style={{ marginBottom: '6px' }}>
          <button class={`prop-btn ${!props.maxWidth ? 'active' : ''}`} onClick={() => update({ maxWidth: '' })}>Full</button>
          <button class={`prop-btn ${props.maxWidth ? 'active' : ''}`} onClick={() => { if (!props.maxWidth) update({ maxWidth: '1200px' }); }}>Set Width</button>
        </div>
        {props.maxWidth && (
          <input type="text" class="prop-input" value={props.maxWidth} placeholder="e.g. 1200px, 960px, 80%"
            onInput={e => updateRowProps(row.id, { maxWidth: e.target.value })}
            onBlur={() => commitChange('Change container max width')} />
        )}
      </PropField>
      <GapFields props={props} onUpdate={(k, v) => { updateRowProps(row.id, { [k]: v }); commitChange('Edit gap'); }} />
      <AlignmentPicker value={props.align} onChange={val => update({ align: val })} />
      <DirectionPicker value={props.direction} onChange={val => update({ direction: val })} />
      <PropField label="Background Color">
        <ColorSelector value={props.bgColor || ''} onChange={v => { updateRowProps(row.id, { bgColor: v }); commitChange('Change container background'); }} placeholder="none" />
      </PropField>
    </>
  );
}

// ── Cell ──

function CellProps({ cell }) {
  const props = cell.props || {};
  function update(p) { updateCellProps(cell.id, p); commitChange('Edit cell'); }

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
      <CssEditor value={props.customCss || ''} selector="selector"
        onChange={v => updateCellProps(cell.id, { customCss: v })} onBlur={() => commitChange('Edit cell CSS')} />
    </>
  );
}

import { buildStyle } from '../../utils';
import { addElementToCell, dragging, commitChange } from '../../state';
import { ElementRenderer } from './ElementRenderer';

export function FormElement({ element, gridDepth = 0 }) {
  const { fields } = element.props;
  const style = buildStyle(element.props);

  // Ensure children exist (backward compat)
  if (!element.children || element.children.length < 2) {
    element.children = [
      { id: element.id + '-before', elements: [], slot: 'before' },
      { id: element.id + '-after', elements: [], slot: 'after' },
    ];
  }
  const beforeSlot = element.children.find(c => c.slot === 'before') || element.children[0];
  const afterSlot = element.children.find(c => c.slot === 'after') || element.children[1];

  return (
    <div class="form-element" style={style} data-form-id={element.id}>
      <FormDropZone slot={beforeSlot} gridDepth={gridDepth} label="Drop elements before fields" />
      <div class="form-fields-block">
        {(fields || []).map(f => (
          <FormFieldPreview key={f.id} field={f} />
        ))}
        {(!fields || fields.length === 0) && (
          <div class="form-placeholder">Add fields in the properties panel</div>
        )}
      </div>
      <FormDropZone slot={afterSlot} gridDepth={gridDepth} label="Drop elements after fields (e.g. submit button)" />
    </div>
  );
}

function FormDropZone({ slot, gridDepth, label }) {
  function onDragOver(e) {
    if (!dragging.value || dragging.value.source !== 'toolbox') return;
    if (dragging.value.type === 'form') return;
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy';
    e.currentTarget.classList.add('form-body-drag-over');
  }

  function onDragLeave(e) {
    e.currentTarget.classList.remove('form-body-drag-over');
  }

  function onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.remove('form-body-drag-over');
    if (!dragging.value) return;
    const type = dragging.value.type;
    if (type === 'form') return;
    addElementToCell(slot.id, type);
    dragging.value = null;
    commitChange('Add ' + type + ' to form');
  }

  const hasElements = slot.elements.length > 0;

  return (
    <div
      class="form-slot"
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {hasElements ? (
        slot.elements.map(el => (
          <ElementRenderer key={el.id} element={el} gridDepth={gridDepth + 1} />
        ))
      ) : (
        <div class="form-slot-placeholder">{label}</div>
      )}
    </div>
  );
}

function getOptLabel(o) { return typeof o === 'string' ? o : o.label || o.value || ''; }

function FormFieldPreview({ field }) {
  const { type, label, placeholder, required, options } = field;

  return (
    <div class="form-field-preview">
      {label && type !== 'checkbox' && (
        <label class="form-field-label">
          {label}
          {required && <span class="form-required"> *</span>}
        </label>
      )}
      {(type === 'text' || type === 'email' || type === 'phone' || type === 'number') && (
        <input type="text" class="form-field-input" placeholder={placeholder || ''} disabled />
      )}
      {type === 'textarea' && (
        <textarea class="form-field-input form-field-textarea" placeholder={placeholder || ''} disabled rows={3} />
      )}
      {type === 'select' && (
        <select class="form-field-input" disabled>
          <option>{placeholder || 'Select...'}</option>
          {(options || []).map((o, i) => <option key={i}>{getOptLabel(o)}</option>)}
        </select>
      )}
      {type === 'radio' && (
        <div class="form-field-options">
          {(options || []).map((o, i) => (
            <label key={i} class="form-field-option"><input type="radio" disabled /><span>{getOptLabel(o)}</span></label>
          ))}
        </div>
      )}
      {type === 'checkbox' && (
        <label class="form-field-option"><input type="checkbox" disabled /><span>{label}{required && <span class="form-required"> *</span>}</span></label>
      )}
    </div>
  );
}

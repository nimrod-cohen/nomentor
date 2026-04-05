import { useState, useEffect, useRef } from 'preact/hooks';
import { getEffectiveColors } from '../state';

export function ColorSelector({ value, onChange, placeholder }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const palette = getEffectiveColors();

  useEffect(() => {
    if (!open) return;
    function onClick(e) {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [open]);

  const selectedColor = palette.find(c => c.value === value);

  return (
    <div class="color-selector" ref={wrapRef}>
      <div class="color-selector-input" onClick={() => setOpen(!open)}>
        <span class="color-selector-swatch" style={{ backgroundColor: value || 'transparent', border: value ? 'none' : '1px dashed #ccc' }} />
        <span class="color-selector-label">{selectedColor ? selectedColor.name : (value || placeholder || 'Select color...')}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
      </div>
      {open && (
        <div class="color-selector-dropdown">
          {palette.length > 0 && (
            <>
              <div class="color-selector-section">Preset Colors</div>
              {palette.map(c => (
                <button
                  key={c.name}
                  class={`color-selector-option ${value === c.value ? 'active' : ''}`}
                  onClick={() => { onChange(c.value); setOpen(false); }}
                >
                  <span class="color-selector-swatch" style={{ backgroundColor: c.value }} />
                  <span class="color-selector-option-name">{c.name}</span>
                  <span class="color-selector-option-hex">{c.value}</span>
                </button>
              ))}
              <div class="color-selector-divider" />
            </>
          )}
          <div class="color-selector-section">Custom Color</div>
          <div class="color-selector-custom">
            <input type="color" class="prop-color" value={value || '#000000'}
              onInput={e => onChange(e.target.value)} />
            <input type="text" class="color-selector-hex-input" value={value || ''} placeholder="#000000"
              onInput={e => onChange(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') setOpen(false); }} />
          </div>
          {value && (
            <button class="color-selector-option color-selector-clear" onClick={() => { onChange(''); setOpen(false); }}>
              <span class="color-selector-swatch" style={{ border: '1px dashed #ccc' }} />
              <span class="color-selector-option-name">Clear / Inherit</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

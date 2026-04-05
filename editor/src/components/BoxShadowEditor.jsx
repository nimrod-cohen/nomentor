import { useState, useRef, useCallback } from 'preact/hooks';

function shadowToCSS(shadow) {
  if (!shadow || (!shadow.x && !shadow.y && !shadow.blur && !shadow.spread)) return '';
  return `${shadow.inset ? 'inset ' : ''}${shadow.x || 0}px ${shadow.y || 0}px ${shadow.blur || 0}px ${shadow.spread || 0}px ${shadow.color || 'rgba(0,0,0,0.1)'}`;
}

export { shadowToCSS };

export function BoxShadowEditor({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const shadow = value || { x: 0, y: 0, blur: 0, spread: 0, color: 'rgba(0,0,0,0.1)', inset: false };
  const css = shadowToCSS(value);
  const padRef = useRef(null);
  const dragging = useRef(false);

  function set(patch) {
    onChange({ ...shadow, ...patch });
  }

  function clear() {
    onChange(undefined);
    setOpen(false);
  }

  // XY pad drag
  const onPadPointerDown = useCallback((e) => {
    dragging.current = true;
    padRef.current?.setPointerCapture(e.pointerId);
    updateXY(e);
  }, [shadow]);

  const onPadPointerMove = useCallback((e) => {
    if (!dragging.current) return;
    updateXY(e);
  }, [shadow]);

  const onPadPointerUp = useCallback((e) => {
    dragging.current = false;
  }, []);

  function updateXY(e) {
    const rect = padRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.round(((e.clientX - rect.left) / rect.width - 0.5) * 40);
    const y = Math.round(((e.clientY - rect.top) / rect.height - 0.5) * 40);
    set({ x: Math.max(-20, Math.min(20, x)), y: Math.max(-20, Math.min(20, y)) });
  }

  const dotX = ((shadow.x || 0) / 40 + 0.5) * 100;
  const dotY = ((shadow.y || 0) / 40 + 0.5) * 100;

  return (
    <div class="shadow-editor">
      <div class="shadow-trigger" onClick={() => setOpen(!open)}>
        {css ? (
          <div class="shadow-trigger-preview" style={{ boxShadow: css }} />
        ) : (
          <span class="shadow-trigger-none">None</span>
        )}
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
      </div>
      {open && (
        <div class="shadow-dropdown">
          <div class="shadow-row">
            <span class="shadow-label">Type</span>
            <div class="prop-btn-group">
              <button class={`prop-btn ${!shadow.inset ? 'active' : ''}`} onClick={() => set({ inset: false })}>Outset</button>
              <button class={`prop-btn ${shadow.inset ? 'active' : ''}`} onClick={() => set({ inset: true })}>Inset</button>
            </div>
          </div>
          <div class="shadow-xy-section">
            <div class="shadow-xy-inputs">
              <div class="shadow-row">
                <span class="shadow-label">X</span>
                <input type="number" class="shadow-num" value={shadow.x || 0} onInput={e => set({ x: parseInt(e.target.value) || 0 })} />
              </div>
              <div class="shadow-row">
                <span class="shadow-label">Y</span>
                <input type="number" class="shadow-num" value={shadow.y || 0} onInput={e => set({ y: parseInt(e.target.value) || 0 })} />
              </div>
            </div>
            <div
              ref={padRef}
              class="shadow-xy-pad"
              onPointerDown={onPadPointerDown}
              onPointerMove={onPadPointerMove}
              onPointerUp={onPadPointerUp}
            >
              <div class="shadow-xy-crosshair-h" />
              <div class="shadow-xy-crosshair-v" />
              <div class="shadow-xy-dot" style={{ left: dotX + '%', top: dotY + '%' }} />
            </div>
          </div>
          <div class="shadow-row">
            <span class="shadow-label">Blur</span>
            <input type="range" min={0} max={50} value={shadow.blur || 0} onInput={e => set({ blur: parseInt(e.target.value) })} class="shadow-slider" />
            <input type="number" class="shadow-num" value={shadow.blur || 0} min={0} onInput={e => set({ blur: parseInt(e.target.value) || 0 })} />
          </div>
          <div class="shadow-row">
            <span class="shadow-label">Spread</span>
            <input type="range" min={-20} max={20} value={shadow.spread || 0} onInput={e => set({ spread: parseInt(e.target.value) })} class="shadow-slider" />
            <input type="number" class="shadow-num" value={shadow.spread || 0} onInput={e => set({ spread: parseInt(e.target.value) || 0 })} />
          </div>
          <div class="shadow-row">
            <span class="shadow-label">Color</span>
            <input type="text" class="shadow-color-input" value={shadow.color || ''} placeholder="rgba(0,0,0,0.1)"
              onInput={e => set({ color: e.target.value })} />
          </div>
          {css && (
            <button class="shadow-clear-btn" onClick={clear}>Remove Shadow</button>
          )}
        </div>
      )}
    </div>
  );
}

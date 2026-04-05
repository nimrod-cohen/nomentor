import { useState, useEffect, useRef } from 'preact/hooks';
import { ICON_LIST, renderIconSvg } from '../lucide-icons';

export function IconPicker({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const wrapRef = useRef(null);
  const searchRef = useRef(null);

  const filtered = search
    ? ICON_LIST.filter(i => i.name.toLowerCase().includes(search.toLowerCase()) || i.id.includes(search.toLowerCase()))
    : ICON_LIST;

  function toggle() {
    setOpen(!open);
    if (!open) setTimeout(() => searchRef.current?.focus(), 50);
  }

  useEffect(() => {
    if (!open) return;
    function onClick(e) {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [open]);

  return (
    <div class="icon-picker" ref={wrapRef}>
      <div class="icon-picker-selected" onClick={toggle}>
        {value ? (
          <span class="icon-picker-preview" dangerouslySetInnerHTML={{ __html: renderIconSvg(value, 16) }} />
        ) : (
          <span class="icon-picker-none">No icon</span>
        )}
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
      </div>
      {value && (
        <button class="prop-btn-clear icon-picker-clear" onClick={e => { e.stopPropagation(); onChange(''); }} title="Remove icon">&times;</button>
      )}
      {open && (
        <div class="icon-picker-dropdown">
          <input
            ref={searchRef}
            type="text"
            class="icon-picker-search"
            placeholder="Search icons..."
            value={search}
            onInput={e => setSearch(e.target.value)}
          />
          <div class="icon-picker-grid">
            {filtered.map(icon => (
              <button
                key={icon.id}
                class={`icon-picker-item ${value === icon.id ? 'active' : ''}`}
                onClick={() => { onChange(icon.id); setOpen(false); setSearch(''); }}
                title={icon.name}
                dangerouslySetInnerHTML={{ __html: renderIconSvg(icon.id, 18) }}
              />
            ))}
            {filtered.length === 0 && <div class="icon-picker-empty">No icons found</div>}
          </div>
        </div>
      )}
    </div>
  );
}

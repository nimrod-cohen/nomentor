import { useState, useEffect, useRef } from 'preact/hooks';
import { loadGoogleFontCSS } from '../state';

export function FontPicker({ value, onChange, className }) {
  const [fonts, setFonts] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [loaded, setLoaded] = useState(false);
  const wrapRef = useRef(null);
  const searchRef = useRef(null);
  const searchTimer = useRef(null);

  // Load font for current value
  useEffect(() => {
    if (value && !value.includes(',')) loadGoogleFontCSS(value);
  }, [value]);

  function fetchFonts(q) {
    const { ajaxUrl, nonce } = window.nomentor;
    const params = new URLSearchParams({ action: 'nomentor_fonts', nonce, search: q || '' });
    fetch(`${ajaxUrl}?${params}`)
      .then(r => r.json())
      .then(r => {
        if (r.success) {
          setFonts(r.data);
          // Preload visible Google Fonts
          r.data.forEach(f => { if (f.type === 'google') loadGoogleFontCSS(f.family); });
        }
        setLoaded(true);
      });
  }

  function toggle() {
    if (!open) {
      setOpen(true);
      if (!loaded) fetchFonts('');
      setTimeout(() => searchRef.current?.focus(), 50);
    } else {
      setOpen(false);
    }
  }

  function onSearch(e) {
    const val = e.target.value;
    setSearch(val);
    clearTimeout(searchTimer.current);
    searchTimer.current = setTimeout(() => fetchFonts(val), 200);
  }

  function select(font) {
    onChange(font.family);
    setOpen(false);
    setSearch('');
  }

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function onClick(e) {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [open]);

  const displayName = value
    ? (value.includes(',') ? value.split(',')[0].replace(/"/g, '') : value)
    : 'Select font...';

  return (
    <div class="font-picker" ref={wrapRef}>
      <button class={`font-picker-btn ${className || ''}`} onClick={toggle} type="button" style={value && !value.includes(',') ? { fontFamily: value } : undefined}>
        {displayName}
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      {open && (
        <div class="font-picker-dropdown">
          <input
            ref={searchRef}
            type="text"
            class="font-picker-search"
            placeholder="Search fonts..."
            value={search}
            onInput={onSearch}
          />
          <div class="font-picker-list">
            {fonts.map(f => (
              <button
                key={f.family}
                class={`font-picker-option ${f.family === value ? 'active' : ''}`}
                onClick={() => select(f)}
                style={f.type === 'google' ? { fontFamily: f.family } : undefined}
              >
                <span>{f.name}</span>
                {f.type === 'google' && <span class="font-picker-badge">Google</span>}
              </button>
            ))}
            {loaded && fonts.length === 0 && <div class="font-picker-empty">No fonts found</div>}
            {!loaded && <div class="font-picker-empty">Loading...</div>}
          </div>
        </div>
      )}
    </div>
  );
}

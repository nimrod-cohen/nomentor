import { signal } from '@preact/signals';
import { useEffect, useRef, useState } from 'preact/hooks';

const pickerState = signal(null); // { resolve, reject } or null

/**
 * Open the media picker. Returns a promise that resolves with { url, alt } or null if cancelled.
 */
export function openMediaPicker() {
  return new Promise((resolve) => {
    pickerState.value = { resolve };
  });
}

export function MediaPicker() {
  const state = pickerState.value;
  if (!state) return null;

  return <MediaPickerModal onSelect={img => { state.resolve(img); pickerState.value = null; }}
                           onClose={() => { state.resolve(null); pickerState.value = null; }} />;
}

function MediaPickerModal({ onSelect, onClose }) {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [preview, setPreview] = useState(null);
  const fileRef = useRef(null);
  const searchTimer = useRef(null);

  function load(p, s) {
    setLoading(true);
    const { ajaxUrl, nonce } = window.nomentor;
    const params = new URLSearchParams({ action: 'nomentor_media', nonce, page: p, search: s });
    fetch(`${ajaxUrl}?${params}`)
      .then(r => r.json())
      .then(r => {
        if (r.success) {
          setItems(prev => p === 1 ? r.data.items : [...prev, ...r.data.items]);
          setHasMore(r.data.hasMore);
          setPage(p);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }

  useEffect(() => { load(1, ''); }, []);

  function onSearch(e) {
    const val = e.target.value;
    setSearch(val);
    clearTimeout(searchTimer.current);
    searchTimer.current = setTimeout(() => load(1, val), 300);
  }

  function onUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setUploadError('');
    const { ajaxUrl, nonce } = window.nomentor;
    const formData = new FormData();
    formData.append('action', 'nomentor_upload');
    formData.append('nonce', nonce);
    formData.append('file', file);
    fetch(ajaxUrl, { method: 'POST', body: formData })
      .then(async r => {
        // Surface non-JSON / non-200 responses (e.g. check_ajax_referer dying
        // with '-1' on nonce mismatch) instead of swallowing them silently.
        const ct = r.headers.get('content-type') || '';
        const text = await r.text();
        if (!ct.includes('application/json')) {
          throw new Error(`HTTP ${r.status}: ${text.slice(0, 120) || '(empty)'}`);
        }
        return JSON.parse(text);
      })
      .then(r => {
        setUploading(false);
        if (r.success) {
          onSelect({ url: r.data.url, alt: r.data.alt || '' });
        } else {
          const msg = typeof r.data === 'string' ? r.data : (r.data?.message || 'Upload failed');
          setUploadError(msg);
          console.error('[Nomentor] Upload failed:', r);
        }
      })
      .catch(err => {
        setUploading(false);
        setUploadError(err.message || 'Upload failed');
        console.error('[Nomentor] Upload error:', err);
      })
      .finally(() => {
        // Reset so picking the same file again still triggers onChange.
        if (fileRef.current) fileRef.current.value = '';
      });
  }

  function onBackdropClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div class="media-picker-overlay" onClick={onBackdropClick}>
      <div class="media-picker">
        <div class="media-picker-header">
          <span class="media-picker-title">Media Library</span>
          <button class="media-picker-close" onClick={onClose}>&times;</button>
        </div>
        <div class="media-picker-toolbar">
          <input
            type="text"
            class="media-picker-search"
            placeholder="Search images..."
            value={search}
            onInput={onSearch}
          />
          <button class="media-picker-upload-btn" onClick={() => fileRef.current?.click()} disabled={uploading}>
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
          <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={onUpload} />
        </div>
        {uploadError && (
          <div class="media-picker-upload-error" role="alert"
               style={{ padding: '8px 12px', margin: '0 12px 8px', background: '#fee2e2', color: '#991b1b', border: '1px solid #fecaca', borderRadius: '6px', fontSize: '13px' }}>
            <strong>Upload failed:</strong> {uploadError}
          </div>
        )}
        <div class="media-picker-grid">
          {items.map(img => (
            <div key={img.id} class="media-picker-item" onClick={() => setPreview(img)} title={img.title}>
              <img src={img.thumb || img.url} alt={img.alt} loading="lazy" />
            </div>
          ))}
          {loading && <div class="media-picker-loading">Loading...</div>}
          {!loading && items.length === 0 && <div class="media-picker-empty">No images found</div>}
        </div>
        {preview && (
          <div class="media-picker-preview" onClick={() => setPreview(null)}>
            <img src={preview.url} alt={preview.alt} onClick={e => e.stopPropagation()} />
            {preview.title && <div class="media-picker-preview-title">{preview.title}</div>}
            <div class="media-picker-preview-actions" onClick={e => e.stopPropagation()}>
              <button class="preview-select" onClick={() => { onSelect({ url: preview.url, alt: preview.alt || preview.title || '' }); }}>Select</button>
              <button class="preview-cancel" onClick={() => setPreview(null)}>Back</button>
            </div>
          </div>
        )}
        {hasMore && !loading && (
          <div class="media-picker-footer">
            <button class="media-picker-load-more" onClick={() => load(page + 1, search)}>Load more</button>
          </div>
        )}
      </div>
    </div>
  );
}

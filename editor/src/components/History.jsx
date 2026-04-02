import { history, previewIndex, previewVersion, exitPreview, revertToVersion } from '../state';

export function History() {
  const entries = history.value;
  const previewing = previewIndex.value;

  return (
    <aside class="nomentor-sidebar-left">
      <div class="sidebar-header">
        History
        {previewing !== null && (
          <button class="history-exit-btn" onClick={exitPreview}>Back to live</button>
        )}
      </div>
      <div class="sidebar-content">
        {entries.length === 0 ? (
          <div class="history-empty">No changes yet</div>
        ) : (
          <ul class="history-list">
            {[...entries].reverse().map((entry, ri) => {
              const i = entries.length - 1 - ri;
              const isActive = previewing === i;
              return (
                <li key={i} class={`history-item ${isActive ? 'active' : ''}`} onClick={() => previewVersion(i)}>
                  <span class="history-time">{formatTime(entry.timestamp)}</span>
                  <span class="history-action">Version {i + 1}</span>
                  <button class={`history-revert-btn ${isActive ? '' : 'hidden'}`} onClick={e => { e.stopPropagation(); revertToVersion(i); }} title="Revert to this version">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </aside>
  );
}

function formatTime(ts) {
  const d = new Date(ts);
  return d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

import { history, previewIndex, previewVersion, exitPreview, revertToVersion, togglePin } from '../state';

export function History() {
  const entries = history.value;
  const previewing = previewIndex.value;
  const count = entries.length;

  return (
    <aside class="nomentor-sidebar-left">
      <div class="sidebar-header">
        <span>History <span class="history-count">{count}/100</span></span>
        {previewing !== null && (
          <button class="history-exit-btn" onClick={exitPreview}>Back to live</button>
        )}
      </div>
      <div class="sidebar-content">
        {count === 0 ? (
          <div class="history-empty">No changes yet</div>
        ) : (
          <ul class="history-list">
            {[...entries].reverse().map((entry, ri) => {
              const i = count - 1 - ri;
              const isLast = i === count - 1;
              const isActive = previewing === i;
              const label = isLast ? 'Current' : (entry.action || 'Version ' + (i + 1));
              return (
                <li key={i} class={`history-item ${isActive ? 'active' : ''} ${isLast ? 'is-current' : ''}`}>
                  <div class="history-item-row" onClick={() => isLast ? exitPreview() : previewVersion(i)}>
                    <span class="history-time">{formatTime(entry.timestamp)}</span>
                    <span class="history-action">{label}</span>
                  </div>
                  <div class="history-item-actions">
                    {!isLast && (
                      <button
                        class={`history-pin-btn ${entry.pinned ? 'pinned' : ''}`}
                        onClick={e => { e.stopPropagation(); togglePin(i); }}
                        title={entry.pinned ? 'Unpin' : 'Pin to keep'}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                          fill={entry.pinned ? 'currentColor' : 'none'}
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                        </svg>
                      </button>
                    )}
                    <button class={`history-revert-btn ${isActive && !isLast ? '' : 'hidden'}`}
                      onClick={e => { e.stopPropagation(); revertToVersion(i); }}
                      title="Revert to this version">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                    </button>
                  </div>
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

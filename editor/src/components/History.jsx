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
                <li key={i} class={`history-item ${isActive ? 'active' : ''}`}>
                  <div class="history-item-row" onClick={() => previewVersion(i)}>
                    <span class="history-time">{formatTime(entry.timestamp)}</span>
                    <span class="history-action">Version {i + 1}</span>
                  </div>
                  {isActive && (
                    <button class="history-revert-btn" onClick={() => revertToVersion(i)}>
                      Revert to this version
                    </button>
                  )}
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

import { history, undoTo } from '../state';

export function History() {
  const entries = history.value;

  return (
    <aside class="nomentor-sidebar-left">
      <div class="sidebar-header">History</div>
      <div class="sidebar-content">
        {entries.length === 0 ? (
          <div class="history-empty">No changes yet</div>
        ) : (
          <ul class="history-list">
            {entries.map((entry, i) => (
              <li key={i} class="history-item" onClick={() => undoTo(i)}>
                <span class="history-time">{formatTime(entry.timestamp)}</span>
                <span class="history-action">Snapshot {i + 1}</span>
              </li>
            )).reverse()}
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

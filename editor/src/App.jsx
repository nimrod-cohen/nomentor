import { Toolbar } from './components/Toolbar';
import { Toolbox } from './components/Toolbox';
import { History } from './components/History';
import { Canvas } from './components/Canvas';
import { Navigator } from './components/Navigator';
import { sidebarMode, rows, syncIdCounter, loadHistory } from './state';

// Load saved layout on mount
(async function loadLayout() {
  const { ajaxUrl, postId } = window.nomentor;
  try {
    const resp = await fetch(`${ajaxUrl}?action=nomentor_load&post_id=${postId}`);
    const data = await resp.json();
    if (data.success && data.data?.layout) {
      const layout = JSON.parse(data.data.layout);
      if (Array.isArray(layout) && layout.length > 0) {
        rows.value = layout;
        syncIdCounter(layout);
      }
    }
    if (data.success && data.data?.history) {
      try {
        const decoded = decodeURIComponent(escape(atob(data.data.history)));
        const h = JSON.parse(decoded);
        console.log('Loaded history:', h.length, 'entries');
        loadHistory(h);
      } catch (he) {
        console.warn('Failed to parse history:', he);
      }
    }
  } catch (e) {
    console.warn('Failed to load layout:', e);
  }
})();

export function App() {
  const { title, backUrl, viewUrl } = window.nomentor;
  const mode = sidebarMode.value;

  return (
    <>
      <Toolbar title={title} backUrl={backUrl} viewUrl={viewUrl} />
      <div class="nomentor-editor">
        {mode === 'toolbox' ? <Toolbox /> : <History />}
        <Canvas />
        <Navigator />
      </div>
    </>
  );
}

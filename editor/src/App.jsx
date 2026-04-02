import { Toolbar } from './components/Toolbar';
import { Toolbox } from './components/Toolbox';
import { History } from './components/History';
import { Canvas } from './components/Canvas';
import { Navigator } from './components/Navigator';
import { sidebarMode, rows } from './state';

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

import { Toolbar } from './components/Toolbar';
import { Toolbox } from './components/Toolbox';
import { History } from './components/History';
import { Properties } from './components/Properties';
import { Settings } from './components/Settings';
import { Canvas } from './components/Canvas';
import { Navigator } from './components/Navigator';
import { MediaPicker } from './components/MediaPicker';
import { sidebarMode, rows, syncIdCounter, loadHistory, loadPageSettings, leftSidebarOpen, rightSidebarOpen } from './state';

// Load saved layout on mount
(async function loadLayout() {
  const { ajaxUrl, postId } = window.nomentor;
  try {
    const resp = await fetch(`${ajaxUrl}?action=nomentor_load&post_id=${postId}`);
    const data = await resp.json();
    if (data.success && data.data?.layoutB64) {
      try {
        const json = decodeURIComponent(escape(atob(data.data.layoutB64)));
        const layout = JSON.parse(json);
        if (Array.isArray(layout) && layout.length > 0) {
          rows.value = layout;
          syncIdCounter(layout);
        }
      } catch (le) {
        console.warn('Failed to parse layout, starting fresh:', le);
      }
    }
    if (data.success && data.data?.history && data.data.history.length > 2) {
      try {
        const decoded = decodeURIComponent(escape(atob(data.data.history)));
        const h = JSON.parse(decoded);
        if (Array.isArray(h) && h.length > 0) {
          console.log('Loaded history:', h.length, 'entries');
          loadHistory(h);
        }
      } catch (he) {
        // Not base64 or invalid — ignore stale data
      }
    }
    if (data.success && data.data?.pageSettings) {
      loadPageSettings(data.data.pageSettings);
    }
  } catch (e) {
    console.warn('Failed to load layout:', e);
  }
})();

export function App() {
  const { title, backUrl, viewUrl } = window.nomentor;
  const mode = sidebarMode.value;
  const showLeft = leftSidebarOpen.value;
  const showRight = rightSidebarOpen.value;

  const editorClass = `nomentor-editor ${!showLeft ? 'no-left' : ''} ${!showRight ? 'no-right' : ''}`;

  return (
    <>
      <Toolbar backUrl={backUrl} viewUrl={viewUrl} />
      <div class={editorClass}>
        {mode === 'globalSettings' || mode === 'pageSettings' ? <Settings mode={mode} />
          : mode === 'properties' ? <Properties />
          : mode === 'toolbox' ? <Toolbox />
          : <History />}
        <Canvas />
        <Navigator />
      </div>
      <MediaPicker />
    </>
  );
}

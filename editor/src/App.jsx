import { Toolbar } from './components/Toolbar';
import { Toolbox } from './components/Toolbox';
import { History } from './components/History';
import { Properties } from './components/Properties';
import { Settings } from './components/Settings';
import { Canvas } from './components/Canvas';
import { Navigator } from './components/Navigator';
import { MediaPicker } from './components/MediaPicker';
import { sidebarMode, rows, syncIdCounter, loadHistory, loadPageSettings, leftSidebarOpen, rightSidebarOpen, sidebarWidth } from './state';

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

function ResizeHandle({ side, offset }) {
  function onMouseDown(e) {
    e.preventDefault();
    const startX = e.clientX;
    const startW = sidebarWidth.value;
    function onMove(ev) {
      const delta = side === 'left' ? ev.clientX - startX : startX - ev.clientX;
      sidebarWidth.value = Math.max(200, Math.min(500, startW + delta));
    }
    function onUp() {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      localStorage.setItem('nm_sidebar_width', sidebarWidth.value);
    }
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  }
  const pos = side === 'left' ? { left: offset + 'px' } : { right: offset + 'px' };
  return <div class="sidebar-resize-handle" style={pos} onMouseDown={onMouseDown} />;
}

export function App() {
  const { title, backUrl, viewUrl } = window.nomentor;
  const mode = sidebarMode.value;
  const showLeft = leftSidebarOpen.value;
  const showRight = rightSidebarOpen.value;
  const sw = sidebarWidth.value;

  const editorClass = `nomentor-editor ${!showLeft ? 'no-left' : ''} ${!showRight ? 'no-right' : ''}`;
  const gridStyle = {
    gridTemplateColumns: `${showLeft ? sw + 'px' : '0px'} 1fr ${showRight ? sw + 'px' : '0px'}`,
  };

  return (
    <>
      <Toolbar backUrl={backUrl} viewUrl={viewUrl} />
      <div class={editorClass} style={gridStyle}>
        {mode === 'globalSettings' || mode === 'pageSettings' ? <Settings mode={mode} />
          : mode === 'properties' ? <Properties />
          : mode === 'toolbox' ? <Toolbox />
          : <History />}
        <Canvas />
        <Navigator />
        {showLeft && <ResizeHandle side="left" offset={sw} />}
        {showRight && <ResizeHandle side="right" offset={sw} />}
      </div>
      <MediaPicker />
    </>
  );
}

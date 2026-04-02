import { ArrowLeft, Eye } from '../icons';
import { saveStatus, sidebarMode, exitPreview, previewIndex } from '../state';

export function Toolbar({ title, backUrl, viewUrl }) {
  const status = saveStatus.value;
  const mode = sidebarMode.value;

  return (
    <div class="nomentor-toolbar">
      <a href={backUrl}>
        <ArrowLeft size={16} />
        Back
      </a>
      <span class="separator" />
      <span class="page-title">{title}</span>

      <span class="separator" />
      <div class="toolbar-toggle">
        <button
          class={mode === 'toolbox' ? 'active' : ''}
          onClick={() => { sidebarMode.value = 'toolbox'; if (previewIndex.value !== null) exitPreview(); }}
          title="Toolbox"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/></svg>
        </button>
        <button
          class={mode === 'history' ? 'active' : ''}
          onClick={() => sidebarMode.value = 'history'}
          title="History"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>
        </button>
      </div>

      <span class="spacer" />

      <span class={`save-status ${status}`}>
        {status === 'saving' ? 'Saving...' : status === 'error' ? 'Save failed' : 'Saved'}
      </span>

      <a href={viewUrl || '#'} target="_blank" class={viewUrl ? '' : 'disabled'} title="View page">
        <Eye size={16} />
      </a>
    </div>
  );
}

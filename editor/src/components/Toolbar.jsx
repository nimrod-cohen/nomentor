import { useRef } from 'preact/hooks';
import { signal } from '@preact/signals';
import { Eye } from '../icons';
import { saveStatus, sidebarMode, exitPreview, previewIndex, leftSidebarOpen, rightSidebarOpen, viewportMode, pageTitle, renamePost, selectedId } from '../state';

const menuOpen = signal(false);

if (typeof document !== 'undefined') {
  document.addEventListener('click', () => { menuOpen.value = false; });
}

export function Toolbar({ backUrl, viewUrl }) {
  const titleRef = useRef(null);
  const status = saveStatus.value;
  const mode = sidebarMode.value;
  const leftOpen = leftSidebarOpen.value;
  const rightOpen = rightSidebarOpen.value;
  const viewport = viewportMode.value;
  const title = pageTitle.value;
  const isMenuOpen = menuOpen.value;

  function onTitleBlur() {
    if (!titleRef.current) return;
    const text = titleRef.current.textContent.trim();
    if (text && text !== title) renamePost(text);
  }

  function onTitleKeyDown(e) {
    if (e.key === 'Enter') { e.preventDefault(); titleRef.current?.blur(); }
  }

  function openPanel(panel) {
    sidebarMode.value = panel;
    if (!leftOpen) leftSidebarOpen.value = true;
    menuOpen.value = false;
  }

  return (
    <div class="nomentor-toolbar">
      {/* Menu dropdown */}
      <div class="toolbar-menu-wrap" onClick={e => e.stopPropagation()}>
        <button class="toolbar-menu-btn" onClick={() => menuOpen.value = !isMenuOpen}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
        {isMenuOpen && (
          <div class="toolbar-menu-dropdown">
            <button onClick={() => openPanel('globalSettings')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              Global Settings
            </button>
            <button onClick={() => openPanel('pageSettings')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
              Page Settings
            </button>
            <div class="toolbar-menu-divider" />
            <a href={backUrl}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
              Exit to WordPress
            </a>
          </div>
        )}
      </div>
      <span class="separator" />

      <span
        ref={titleRef}
        class="page-title"
        contentEditable
        spellcheck={false}
        onBlur={onTitleBlur}
        onKeyDown={onTitleKeyDown}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {/* Left sidebar toggle */}
      <button
        class={`toolbar-icon-btn ${leftOpen ? 'active' : ''}`}
        onClick={() => leftSidebarOpen.value = !leftOpen}
        title={leftOpen ? 'Hide sidebar' : 'Show sidebar'}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/></svg>
      </button>

      <span class="separator" />
      <div class="toolbar-toggle">
        <button
          class={mode === 'toolbox' ? 'active' : ''}
          onClick={() => { sidebarMode.value = 'toolbox'; if (previewIndex.value !== null) exitPreview(); if (!leftOpen) leftSidebarOpen.value = true; }}
          title="Toolbox"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/></svg>
        </button>
        <button
          class={mode === 'properties' ? 'active' : ''}
          onClick={() => { sidebarMode.value = 'properties'; if (!leftOpen) leftSidebarOpen.value = true; }}
          title="Properties"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/></svg>
        </button>
        <button
          class={mode === 'history' ? 'active' : ''}
          onClick={() => { sidebarMode.value = 'history'; if (!leftOpen) leftSidebarOpen.value = true; }}
          title="History"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>
        </button>
      </div>

      <span class="spacer" />

      {/* Viewport selectors */}
      <div class="toolbar-toggle viewport-toggle">
        <button class={viewport === 'desktop' ? 'active' : ''} onClick={() => viewportMode.value = 'desktop'} title="Desktop">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>
        </button>
        <button class={viewport === 'tablet' ? 'active' : ''} onClick={() => viewportMode.value = 'tablet'} title="Tablet">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M12 18h.01"/></svg>
        </button>
        <button class={viewport === 'mobile' ? 'active' : ''} onClick={() => viewportMode.value = 'mobile'} title="Mobile">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/></svg>
        </button>
      </div>

      <span class="spacer" />

      <span class={`save-status ${status}`}>
        {status === 'saving' ? 'Saving...' : status === 'error' ? 'Save failed' : 'Saved'}
      </span>

      <span class="separator" />

      {/* Navigator toggle */}
      <button
        class={`toolbar-icon-btn ${rightOpen ? 'active' : ''}`}
        onClick={() => rightSidebarOpen.value = !rightOpen}
        title={rightOpen ? 'Hide navigator' : 'Show navigator'}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>
      </button>

      <a href={viewUrl || '#'} target="_blank" class={viewUrl ? '' : 'disabled'} title="View page">
        <Eye size={16} />
      </a>
    </div>
  );
}

import { useRef, useState, useEffect, useCallback } from 'preact/hooks';
import { updateElementProps, commitChange } from '../../state';
import { buildStyle } from '../../utils';

const TOOLBAR_BUTTONS = [
  { cmd: 'bold', label: 'B', style: 'font-weight:bold' },
  { cmd: 'italic', label: 'I', style: 'font-style:italic' },
  { cmd: 'underline', label: 'U', style: 'text-decoration:underline' },
  { cmd: 'strikeThrough', label: 'S', style: 'text-decoration:line-through' },
  { type: 'sep' },
  { cmd: 'insertUnorderedList', label: '• List', icon: 'ul' },
  { cmd: 'insertOrderedList', label: '1. List', icon: 'ol' },
  { type: 'sep' },
  { cmd: 'fontSize', label: 'A−', icon: 'font-down', action: 'decrease' },
  { cmd: 'fontSize', label: 'A+', icon: 'font-up', action: 'increase' },
  { type: 'sep' },
  { cmd: 'createLink', label: 'Link', icon: 'link', prompt: true },
  { cmd: 'unlink', label: 'Unlink', icon: 'unlink' },
];

export function TextElement({ element }) {
  const ref = useRef(null);
  const toolbarRef = useRef(null);
  const [showToolbar, setShowToolbar] = useState(false);
  const [toolbarPos, setToolbarPos] = useState({ top: 0, left: 0, below: false });
  const [activeStates, setActiveStates] = useState({});
  const style = buildStyle(element.props);
  const TOOLBAR_H = 38;

  function saveContent() {
    if (!ref.current) return;
    const html = ref.current.innerHTML;
    if (html !== element.props.text) {
      updateElementProps(element.id, { text: html });
      commitChange('Edit text');
    }
  }

  function execCmd(btn) {
    if (btn.action === 'increase' || btn.action === 'decrease') {
      changeFontSize(btn.action === 'increase' ? 1 : -1);
    } else if (btn.prompt) {
      const url = prompt('Enter URL:');
      if (url) document.execCommand(btn.cmd, false, url);
    } else {
      document.execCommand(btn.cmd, false, null);
    }
    ref.current?.focus();
    updateActiveStates();
  }

  function changeFontSize(delta) {
    const sel = window.getSelection();
    if (!sel || !ref.current?.contains(sel.anchorNode)) return;

    const SIZES = [10, 12, 14, 16, 18, 20, 24, 28, 32, 40, 48, 64];

    function getCurrentSize(node) {
      const el = node?.nodeType === 3 ? node.parentElement : node;
      if (!el) return 16;
      return parseFloat(getComputedStyle(el).fontSize) || 16;
    }

    function nextSize(current, d) {
      if (d > 0) {
        for (const s of SIZES) { if (s > current) return s; }
        return SIZES[SIZES.length - 1];
      } else {
        for (let i = SIZES.length - 1; i >= 0; i--) { if (SIZES[i] < current) return SIZES[i]; }
        return SIZES[0];
      }
    }

    if (sel.isCollapsed) {
      // No selection — change the whole element
      const current = getCurrentSize(ref.current);
      const size = nextSize(current, delta);
      ref.current.style.fontSize = size + 'px';
    } else {
      // Wrap selection with a span, then restore selection
      const current = getCurrentSize(sel.anchorNode);
      const size = nextSize(current, delta);
      document.execCommand('fontSize', false, '7'); // use size 7 as marker
      const fonts = ref.current.querySelectorAll('font[size="7"]');
      const spans = [];
      fonts.forEach(f => {
        const span = document.createElement('span');
        span.style.fontSize = size + 'px';
        span.innerHTML = f.innerHTML;
        f.replaceWith(span);
        spans.push(span);
      });
      // Restore selection across all replaced spans
      if (spans.length) {
        const range = document.createRange();
        range.setStartBefore(spans[0].firstChild || spans[0]);
        const last = spans[spans.length - 1];
        range.setEndAfter(last.lastChild || last);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  }

  function updateActiveStates() {
    const states = {};
    for (const btn of TOOLBAR_BUTTONS) {
      if (btn.cmd) {
        try { states[btn.cmd] = document.queryCommandState(btn.cmd); } catch {}
      }
    }
    setActiveStates(states);
  }

  function calcPosition(anchorRect) {
    const gap = 6;
    const below = anchorRect.top < TOOLBAR_H + gap + 60; // 60 = toolbar bar height
    return {
      top: below ? anchorRect.bottom + gap : anchorRect.top - TOOLBAR_H - gap,
      left: anchorRect.left + anchorRect.width / 2,
      below,
    };
  }

  const positionToolbar = useCallback(() => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || !ref.current?.contains(sel.anchorNode)) return;
    const rect = sel.getRangeAt(0).getBoundingClientRect();
    setToolbarPos(calcPosition(rect));
    setShowToolbar(true);
    updateActiveStates();
  }, []);

  function onFocus() {
    setTimeout(() => {
      if (ref.current) {
        setShowToolbar(true);
        setToolbarPos(calcPosition(ref.current.getBoundingClientRect()));
        updateActiveStates();
      }
    }, 0);
  }

  function onBlur(e) {
    // Don't hide if clicking toolbar
    if (toolbarRef.current?.contains(e.relatedTarget)) return;
    setTimeout(() => {
      if (!ref.current?.contains(document.activeElement) && !toolbarRef.current?.contains(document.activeElement)) {
        setShowToolbar(false);
        saveContent();
      }
    }, 150);
  }

  function onSelectionChange() {
    if (!ref.current?.contains(window.getSelection()?.anchorNode)) return;
    positionToolbar();
  }

  useEffect(() => {
    document.addEventListener('selectionchange', onSelectionChange);
    return () => document.removeEventListener('selectionchange', onSelectionChange);
  }, []);

  function onKeyDown(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
    }
  }

  return (
    <div class="text-element-wrap">
      {showToolbar && (
        <div
          ref={toolbarRef}
          class="rte-toolbar"
          style={{ position: 'fixed', top: toolbarPos.top, left: toolbarPos.left }}
          onMouseDown={e => e.preventDefault()}
        >
          {TOOLBAR_BUTTONS.map((btn, i) => {
            if (btn.type === 'sep') return <span key={i} class="rte-sep" />;
            return (
              <button
                key={btn.cmd}
                class={`rte-btn ${activeStates[btn.cmd] ? 'active' : ''}`}
                onClick={() => execCmd(btn)}
                title={btn.label}
              >
                {btn.icon ? <RteIcon type={btn.icon} /> : <span style={btn.style}>{btn.label.charAt(0)}</span>}
              </button>
            );
          })}
        </div>
      )}
      <div
        ref={ref}
        class="text-editable"
        contentEditable
        style={style}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onInput={updateActiveStates}
        dangerouslySetInnerHTML={{ __html: element.props.text }}
      />
    </div>
  );
}

function RteIcon({ type }) {
  switch (type) {
    case 'ul': return <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>;
    case 'ol': return <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="10" x2="21" y1="6" y2="6"/><line x1="10" x2="21" y1="12" y2="12"/><line x1="10" x2="21" y1="18" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg>;
    case 'link': return <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
    case 'unlink': return <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"/><path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"/><line x1="8" x2="8" y1="2" y2="5"/><line x1="2" x2="5" y1="8" y2="8"/><line x1="16" x2="16" y1="19" y2="22"/><line x1="19" x2="22" y1="16" y2="16"/></svg>;
    case 'font-down': return <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19 8.5 5h3L16 19"/><path d="M5.5 14h9"/><path d="M18 14h4"/></svg>;
    case 'font-up': return <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19 8.5 5h3L16 19"/><path d="M5.5 14h9"/><path d="M18 12v4"/><path d="M16 14h4"/></svg>;
    default: return null;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var ver = nmentorList.version;
  var nonce = nmentorList.importNonce;
  var exportNonce = nmentorList.exportNonce;

  // Add "Import Page" and "Export All" buttons next to "Add New Page"
  var addBtn = document.querySelector('.wrap .page-title-action');
  if (addBtn) {
    var importBtn = document.createElement('button');
    importBtn.className = 'page-title-action';
    importBtn.textContent = 'Import Page';
    importBtn.type = 'button';
    addBtn.parentNode.insertBefore(importBtn, addBtn.nextSibling);

    var exportAllBtn = document.createElement('button');
    exportAllBtn.className = 'page-title-action';
    exportAllBtn.textContent = 'Export All Pages';
    exportAllBtn.type = 'button';
    importBtn.parentNode.insertBefore(exportAllBtn, importBtn.nextSibling);

    importBtn.addEventListener('click', function() { doImport(); });
    exportAllBtn.addEventListener('click', function() { doExport('all'); });
  }

  // File input for import
  var inp = document.createElement('input');
  inp.type = 'file'; inp.accept = '.json'; inp.style.display = 'none';
  document.body.appendChild(inp);

  // Import flow (target_id = null for new page, or existing post ID)
  function doImport(targetId) {
    inp._targetId = targetId || null;
    inp.click();
  }

  inp.addEventListener('change', function() {
    var file = inp.files[0];
    if (!file) return;
    var targetId = inp._targetId;
    var reader = new FileReader();
    reader.onload = function() {
      try {
        var data = JSON.parse(reader.result);
        if (!data.nomentor || (!Array.isArray(data.layout) && !Array.isArray(data.pages))) {
          alert('Not a valid Nomentor export file'); return;
        }
        if (data.version && data.version !== ver) {
          if (!confirm('This export was created with v' + data.version + ', but you are running v' + ver + '. Continue anyway?')) return;
        }
        var applyGlobal = false;
        if (data.globalSettings) {
          applyGlobal = confirm('This export includes global settings. Apply them? (This will overwrite your current global settings)');
        }
        var fd = new FormData();
        fd.append('action', 'nomentor_import');
        fd.append('nonce', nonce);
        fd.append('data', JSON.stringify(data));
        fd.append('apply_global', applyGlobal ? '1' : '0');
        if (targetId) fd.append('post_id', targetId);
        fetch(nmentorList.ajaxUrl, { method: 'POST', body: fd })
          .then(function(r) { return r.json(); })
          .then(function(r) {
            if (r.success) window.location.href = r.data.design_url || r.data.redirect;
            else alert('Import failed: ' + (r.data || 'Unknown error'));
          });
      } catch(e) { alert('Import failed: ' + e.message); }
    };
    reader.readAsText(file);
    inp.value = '';
  });

  // Export flow
  function doExport(idOrAll) {
    var includeGlobal = confirm('Include global settings (typography, colors, direction) in the export?');
    var fd = new FormData();
    fd.append('action', 'nomentor_export');
    fd.append('nonce', exportNonce);
    fd.append('target', idOrAll);
    fd.append('include_global', includeGlobal ? '1' : '0');
    fetch(nmentorList.ajaxUrl, { method: 'POST', body: fd })
      .then(function(r) { return r.json(); })
      .then(function(r) {
        if (!r.success) { alert('Export failed: ' + (r.data || 'Unknown error')); return; }
        var blob = new Blob([JSON.stringify(r.data.export, null, 2)], { type: 'application/json' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url; a.download = r.data.filename; a.click();
        URL.revokeObjectURL(url);
      });
  }

  // Wire up row action clicks (delegated)
  document.addEventListener('click', function(e) {
    var link = e.target.closest('.nomentor-export-link');
    if (link) { e.preventDefault(); doExport(link.dataset.postId); }
    var imp = e.target.closest('.nomentor-import-link');
    if (imp) { e.preventDefault(); doImport(imp.dataset.postId); }
  });
});

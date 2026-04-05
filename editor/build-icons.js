/**
 * Build script: converts lucide icon data into SVG string maps for JS and PHP.
 * Run: node editor/build-icons.js
 */
const { icons } = require('lucide');
const fs = require('fs');
const path = require('path');

function attrsToString(attrs) {
  return Object.entries(attrs).map(([k, v]) => {
    const prop = k.replace(/([A-Z])/g, '-$1').toLowerCase();
    return `${prop}="${v}"`;
  }).join(' ');
}

function iconToSvgInner(elements) {
  return elements.map(([tag, attrs, children]) => {
    const a = attrsToString(attrs);
    if (children && children.length) {
      return `<${tag} ${a}>${iconToSvgInner(children)}</${tag}>`;
    }
    return `<${tag} ${a}/>`;
  }).join('');
}

// Convert PascalCase to kebab-case for display
function toTitle(name) {
  return name.replace(/([A-Z])/g, ' $1').trim();
}

const entries = Object.entries(icons).map(([name, elements]) => {
  const id = name.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
  const svg = iconToSvgInner(elements);
  const title = toTitle(name);
  return { id, name: title, svg };
});

// Sort alphabetically
entries.sort((a, b) => a.name.localeCompare(b.name));

// Write JS module
const jsLines = entries.map(e => `  ['${e.id}', '${e.name.replace(/'/g, "\\'")}', '${e.svg.replace(/'/g, "\\'")}'],`);
const jsContent = `// Auto-generated from lucide icons — do not edit manually
// Run: node editor/build-icons.js
const ICONS = [
${jsLines.join('\n')}
];

export const ICON_LIST = ICONS.map(([id, name, svg]) => ({ id, name, svg }));

export const ICON_MAP = {};
ICONS.forEach(([id, , svg]) => { ICON_MAP[id] = svg; });

export function renderIconSvg(iconId, size = 20) {
  const svg = ICON_MAP[iconId];
  if (!svg) return '';
  return \`<svg xmlns="http://www.w3.org/2000/svg" width="\${size}" height="\${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\${svg}</svg>\`;
}
`;
fs.writeFileSync(path.join(__dirname, 'src/lucide-icons.js'), jsContent);
console.log(`JS: ${entries.length} icons written to src/lucide-icons.js`);

// Write PHP icon map
const phpLines = entries.map(e => `      '${e.id}' => '${e.svg.replace(/'/g, "\\'")}',`);
const phpContent = `<?php
// Auto-generated from lucide icons — do not edit manually
// Run: node editor/build-icons.js

function nomentor_get_icon_svg($icon_id, $size = 20) {
  static $icons = null;
  if ($icons === null) {
    $icons = [
${phpLines.join('\n')}
    ];
  }
  if (!isset($icons[$icon_id])) return '';
  $s = intval($size);
  return '<svg xmlns="http://www.w3.org/2000/svg" width="' . $s . '" height="' . $s . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' . $icons[$icon_id] . '</svg>';
}
`;
fs.writeFileSync(path.join(__dirname, '../includes/lucide-icons.php'), phpContent);
console.log(`PHP: ${entries.length} icons written to includes/lucide-icons.php`);

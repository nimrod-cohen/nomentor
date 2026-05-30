<?php
/**
 * Effects library — opt-in CSS animations & static effects applied via
 * nm-fx-{key} class. Authored once, applied per-element via the
 * `effects` prop (array of keys). Categories:
 *
 *   entrance  one-shot fade/slide/zoom triggered when the element scrolls
 *             into view (IntersectionObserver toggles .nm-fx-in)
 *   motion    continuous loops (float / pulse / sway) — decorative idle
 *   hover     :hover transforms (lift / glow / scale)
 *   shadow    static box-shadow presets (sm / md / lg)
 *
 * All animations target transform/opacity/box-shadow only (no layout-
 * thrashing properties). prefers-reduced-motion disables motion+entrance
 * and snaps entrance state to visible.
 */

defined('ABSPATH') || exit;

/**
 * Catalog of effects. Key → ['group' => …, 'label' => …].
 * Used by both the renderer (for CSS emission) and the editor (via the
 * REST/AJAX endpoint that exposes the catalog).
 */
function nomentor_effects_catalog() {
  return [
    // entrance (one-shot on scroll into view)
    'fade'         => ['group' => 'entrance', 'label' => 'Fade in'],
    'slide-up'     => ['group' => 'entrance', 'label' => 'Slide up'],
    'slide-down'   => ['group' => 'entrance', 'label' => 'Slide down'],
    'slide-left'   => ['group' => 'entrance', 'label' => 'Slide left'],
    'slide-right'  => ['group' => 'entrance', 'label' => 'Slide right'],
    'zoom-in'      => ['group' => 'entrance', 'label' => 'Zoom in'],
    // motion (continuous idle loops)
    'float'        => ['group' => 'motion',   'label' => 'Float'],
    'pulse'        => ['group' => 'motion',   'label' => 'Pulse'],
    'sway'         => ['group' => 'motion',   'label' => 'Sway'],
    // hover (CSS-only on :hover)
    'hover-lift'   => ['group' => 'hover',    'label' => 'Lift'],
    'hover-glow'   => ['group' => 'hover',    'label' => 'Glow'],
    'hover-scale'  => ['group' => 'hover',    'label' => 'Scale'],
    // shadow (static box-shadow presets)
    'shadow-sm'    => ['group' => 'shadow',   'label' => 'Small'],
    'shadow-md'    => ['group' => 'shadow',   'label' => 'Medium'],
    'shadow-lg'    => ['group' => 'shadow',   'label' => 'Large'],
  ];
}

/**
 * Build a leading-space class fragment for an effects array (or null).
 * Returns '' when nothing valid is selected.
 */
function nomentor_effect_classes($effects) {
  if (!is_array($effects) || !$effects) return '';
  $catalog = nomentor_effects_catalog();
  $cls = [];
  foreach ($effects as $k) {
    if (is_string($k) && isset($catalog[$k])) $cls[] = 'nm-fx-' . esc_attr($k);
  }
  return $cls ? ' ' . implode(' ', $cls) : '';
}

/**
 * Has any element on the current render opted into an entrance effect?
 * Tracked via the global $_nomentor_has_entrance flag during rendering.
 */
function nomentor_mark_effects_used($effects) {
  if (!is_array($effects) || !$effects) return;
  global $_nomentor_has_entrance;
  static $entrance_keys = ['fade', 'slide-up', 'slide-down', 'slide-left', 'slide-right', 'zoom-in'];
  foreach ($effects as $k) {
    if (in_array($k, $entrance_keys, true)) { $_nomentor_has_entrance = true; return; }
  }
}

/** CSS rules for the entire effects library. Always emitted; tiny size. */
function nomentor_effects_css() {
  return <<<CSS

    /* ── Effects library ── */
    /* entrance — start hidden, .nm-fx-in (added by IntersectionObserver) reveals */
    .nm-fx-fade,
    .nm-fx-slide-up, .nm-fx-slide-down, .nm-fx-slide-left, .nm-fx-slide-right,
    .nm-fx-zoom-in { opacity: 0; will-change: opacity, transform;
                     transition: opacity 500ms ease-out, transform 500ms cubic-bezier(.2,.7,.2,1); }
    .nm-fx-slide-up    { transform: translateY(20px); }
    .nm-fx-slide-down  { transform: translateY(-20px); }
    .nm-fx-slide-left  { transform: translateX(20px); }
    .nm-fx-slide-right { transform: translateX(-20px); }
    .nm-fx-zoom-in     { transform: scale(.92); }
    .nm-fx-in.nm-fx-fade,
    .nm-fx-in.nm-fx-slide-up, .nm-fx-in.nm-fx-slide-down,
    .nm-fx-in.nm-fx-slide-left, .nm-fx-in.nm-fx-slide-right,
    .nm-fx-in.nm-fx-zoom-in { opacity: 1; transform: none; }

    /* motion — idle loops; respect reduced-motion below */
    @keyframes nm-fx-float-kf { from { transform: translateY(0); } to { transform: translateY(-6px); } }
    @keyframes nm-fx-pulse-kf { from { transform: scale(1); } to { transform: scale(1.04); } }
    @keyframes nm-fx-sway-kf  { from { transform: rotate(-2deg); } to { transform: rotate(2deg); } }
    .nm-fx-float { animation: nm-fx-float-kf 3s ease-in-out infinite alternate; }
    .nm-fx-pulse { animation: nm-fx-pulse-kf 2.4s ease-in-out infinite alternate; }
    .nm-fx-sway  { animation: nm-fx-sway-kf 4.2s ease-in-out infinite alternate; transform-origin: 50% 100%; }

    /* hover */
    .nm-fx-hover-lift  { transition: transform 220ms ease-out, box-shadow 220ms ease-out; }
    .nm-fx-hover-lift:hover  { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,.12); }
    .nm-fx-hover-glow  { transition: box-shadow 220ms ease-out; }
    .nm-fx-hover-glow:hover  { box-shadow: 0 0 0 4px rgba(74,144,217,.18), 0 8px 24px rgba(74,144,217,.25); }
    .nm-fx-hover-scale { transition: transform 220ms ease-out; }
    .nm-fx-hover-scale:hover { transform: scale(1.03); }

    /* shadow presets */
    .nm-fx-shadow-sm { box-shadow: 0 1px 2px rgba(0,0,0,.06), 0 1px 3px rgba(0,0,0,.08); }
    .nm-fx-shadow-md { box-shadow: 0 4px 6px rgba(0,0,0,.07), 0 2px 4px rgba(0,0,0,.06); }
    .nm-fx-shadow-lg { box-shadow: 0 10px 25px rgba(0,0,0,.10), 0 4px 10px rgba(0,0,0,.08); }

    /* respect user preference: kill decorative motion */
    @media (prefers-reduced-motion: reduce) {
      .nm-fx-float, .nm-fx-pulse, .nm-fx-sway { animation: none; }
      .nm-fx-fade, .nm-fx-slide-up, .nm-fx-slide-down,
      .nm-fx-slide-left, .nm-fx-slide-right, .nm-fx-zoom-in { opacity: 1; transform: none; transition: none; }
      .nm-fx-hover-lift:hover, .nm-fx-hover-scale:hover { transform: none; }
    }
CSS;
}

/**
 * Tiny IntersectionObserver script that toggles .nm-fx-in on entrance
 * elements when they enter the viewport. Only emitted if used.
 */
function nomentor_effects_entrance_script() {
  global $_nomentor_has_entrance;
  if (empty($_nomentor_has_entrance)) return '';
  return <<<JS
<script>
(function(){
  var sel='.nm-fx-fade,.nm-fx-slide-up,.nm-fx-slide-down,.nm-fx-slide-left,.nm-fx-slide-right,.nm-fx-zoom-in';
  var els=document.querySelectorAll(sel);if(!els.length)return;
  if(!('IntersectionObserver' in window)){els.forEach(function(el){el.classList.add('nm-fx-in');});return;}
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('nm-fx-in');io.unobserve(e.target);}});
  },{threshold:0.12,rootMargin:'0px 0px -8% 0px'});
  els.forEach(function(el){io.observe(el);});
})();
</script>
JS;
}

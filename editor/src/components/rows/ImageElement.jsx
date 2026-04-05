import { buildStyle } from '../../utils';
import { viewportMode } from '../../state';

function getImageDimensions(props) {
  const vp = viewportMode.value;
  let w, h;
  if (vp === 'mobile') {
    w = props.mobileWidth ?? props.tabletWidth ?? props.width;
    h = props.mobileHeight ?? props.tabletHeight ?? props.height;
  } else if (vp === 'tablet') {
    w = props.tabletWidth ?? props.width;
    h = props.tabletHeight ?? props.height;
  } else {
    w = props.width;
    h = props.height;
  }
  const s = {};
  if (w) s.width = w;
  if (h) s.height = h;
  return s;
}

export function ImageElement({ element }) {
  const style = buildStyle(element.props);
  const dims = getImageDimensions(element.props);

  if (element.props.src) {
    return (
      <div style={style}>
        <img
          src={element.props.src}
          alt={element.props.alt}
          style={{ display: 'block', width: 'auto', maxWidth: '100%', ...dims }}
        />
      </div>
    );
  }

  return (
    <div class="image-placeholder" style={style}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
      <span>Select an image from the properties panel</span>
    </div>
  );
}

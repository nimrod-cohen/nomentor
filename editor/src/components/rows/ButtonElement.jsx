import { buildStyle } from '../../utils';
import { viewportMode, getSizeMap } from '../../state';
import { renderIconSvg } from '../../lucide-icons';

export function ButtonElement({ element }) {
  const { text, url, bgColor, color, borderRadius, fontSize, fullWidth, icon, iconPosition } = element.props;
  const viewport = viewportMode.value;
  const sizeMap = getSizeMap(viewport);

  const style = {
    display: fullWidth ? 'flex' : 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.4em',
    padding: '0.6em 1.5em',
    backgroundColor: bgColor || '#4a90d9',
    color: color || '#ffffff',
    borderRadius: (borderRadius || '6') + 'px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontFamily: 'inherit',
    lineHeight: '1.4',
    textAlign: 'center',
  };

  if (fontSize && sizeMap[fontSize]) style.fontSize = sizeMap[fontSize];
  if (fullWidth) style.width = '100%';

  const extraStyle = buildStyle(element.props);
  if (extraStyle.direction) style.direction = extraStyle.direction;
  if (extraStyle.padding) style.padding = extraStyle.padding;
  if (extraStyle.margin) style.margin = extraStyle.margin;
  if (extraStyle.border) style.border = extraStyle.border;
  if (extraStyle.borderRadius) style.borderRadius = extraStyle.borderRadius;
  if (element.props.customCss) {
    element.props.customCss.split(';').forEach(rule => {
      const [key, ...rest] = rule.split(':');
      if (!key || !rest.length) return;
      const prop = key.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      const val = rest.join(':').trim();
      if (prop && val) style[prop] = val;
    });
  }

  const pos = iconPosition || 'before';
  const iconHtml = icon ? renderIconSvg(icon, '1em') : '';
  const hasText = !!text;

  return (
    <a href={url || '#'} style={style} onClick={e => e.preventDefault()}>
      {icon && pos === 'before' && <span class="btn-icon" dangerouslySetInnerHTML={{ __html: iconHtml }} />}
      {hasText && <span>{text}</span>}
      {icon && pos === 'after' && <span class="btn-icon" dangerouslySetInnerHTML={{ __html: iconHtml }} />}
      {!hasText && !icon && 'Button'}
    </a>
  );
}

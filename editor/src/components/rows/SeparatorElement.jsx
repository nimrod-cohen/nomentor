import { buildStyle } from '../../utils';
import { resolveColor } from '../ColorSelector';

const ALIGN_MARGIN = { left: '0 auto 0 0', center: '0 auto', right: '0 0 0 auto' };

export function SeparatorElement({ element }) {
  const { lineColor, lineThickness, lineWidth, lineStyle, lineAlign } = element.props;
  const extraStyle = buildStyle(element.props);

  const color = resolveColor(lineColor) || '#ddd';
  const thickness = parseInt(lineThickness) || 1;
  const style = lineStyle || 'solid';
  const width = lineWidth || '100%';
  const align = lineAlign || 'center';

  const hrStyle = {
    border: 'none',
    display: 'block',
    width,
    margin: ALIGN_MARGIN[align],
    padding: 0,
    height: thickness + 'px',
  };

  if (style === 'wave') {
    hrStyle.height = Math.max(thickness * 2, 6) + 'px';
    hrStyle.backgroundColor = 'transparent';
    hrStyle.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='6' viewBox='0 0 20 6'%3E%3Cpath d='M0 3 Q5 0 10 3 Q15 6 20 3' stroke='${encodeURIComponent(color)}' stroke-width='${thickness}' fill='none'/%3E%3C/svg%3E")`;
    hrStyle.backgroundRepeat = 'repeat-x';
    hrStyle.backgroundSize = '20px 100%';
  } else if (style === 'solid') {
    hrStyle.backgroundColor = color;
  } else {
    // dashed/dotted — use border-top and let height be 0
    hrStyle.height = '0';
    hrStyle.borderTop = `${thickness}px ${style} ${color}`;
  }

  return (
    <div style={{ width: '100%', ...extraStyle }}>
      <hr style={hrStyle} />
    </div>
  );
}

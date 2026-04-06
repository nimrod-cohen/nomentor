import { buildStyle } from '../../utils';
import { resolveColor } from '../ColorSelector';

export function SeparatorElement({ element }) {
  const { lineColor, lineThickness, lineWidth, lineStyle } = element.props;
  const extraStyle = buildStyle(element.props);

  const color = resolveColor(lineColor) || '#ddd';
  const thickness = lineThickness || '1';
  const style = lineStyle || 'solid';
  const width = lineWidth || '100%';

  const hrStyle = {
    border: 'none',
    width,
    margin: '0 auto',
  };

  if (style === 'wave') {
    const h = Math.max(parseInt(thickness) * 2, 6);
    hrStyle.height = h + 'px';
    hrStyle.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='6' viewBox='0 0 20 6'%3E%3Cpath d='M0 3 Q5 0 10 3 Q15 6 20 3' stroke='${encodeURIComponent(color)}' stroke-width='${thickness}' fill='none'/%3E%3C/svg%3E")`;
    hrStyle.backgroundRepeat = 'repeat-x';
    hrStyle.backgroundSize = '20px 100%';
  } else {
    hrStyle.borderTop = `${thickness}px ${style} ${color}`;
  }

  return (
    <div style={extraStyle}>
      <hr style={hrStyle} />
    </div>
  );
}

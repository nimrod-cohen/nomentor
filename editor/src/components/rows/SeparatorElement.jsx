import { buildStyle } from '../../utils';
import { resolveColor } from '../ColorSelector';

export function SeparatorElement({ element }) {
  const { lineColor, lineWidth, lineStyle } = element.props;
  const extraStyle = buildStyle(element.props);

  const color = resolveColor(lineColor) || '#ddd';
  const width = lineWidth || '1';
  const style = lineStyle || 'solid';

  const hrStyle = {
    border: 'none',
    borderTop: style === 'wave'
      ? `${width}px solid ${color}`
      : `${width}px ${style} ${color}`,
    width: '100%',
    ...(style === 'wave' ? {
      borderTop: 'none',
      height: `${Math.max(parseInt(width) * 2, 6)}px`,
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='6' viewBox='0 0 20 6'%3E%3Cpath d='M0 3 Q5 0 10 3 Q15 6 20 3' stroke='${encodeURIComponent(color)}' stroke-width='${width}' fill='none'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat-x',
      backgroundSize: '20px 100%',
    } : {}),
  };

  return (
    <div style={extraStyle}>
      <hr style={hrStyle} />
    </div>
  );
}

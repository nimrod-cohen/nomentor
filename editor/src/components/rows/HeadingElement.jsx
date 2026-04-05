import { buildStyle } from '../../utils';
import { viewportMode, getHeadingSizeMap } from '../../state';

export function HeadingElement({ element }) {
  const Tag = element.props.level || 'h2';
  const style = buildStyle(element.props);
  const headingSizes = getHeadingSizeMap(viewportMode.value);
  if (headingSizes[Tag]) style.fontSize = headingSizes[Tag];

  return <Tag style={style}>{element.props.text}</Tag>;
}

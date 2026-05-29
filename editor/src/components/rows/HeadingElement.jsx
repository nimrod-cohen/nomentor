import { buildStyle } from '../../utils';
import { viewportMode, getHeadingSizeMap } from '../../state';

export function HeadingElement({ element }) {
  const Tag = element.props.level || 'h2';
  const style = buildStyle(element.props);
  const headingSizes = getHeadingSizeMap(viewportMode.value);
  if (headingSizes[Tag]) style.fontSize = headingSizes[Tag];

  // Render inline formatting (e.g. <u>, <b>) so the canvas matches the
  // server output, which allows safe inline tags in headings.
  return <Tag style={style} dangerouslySetInnerHTML={{ __html: element.props.text || '' }} />;
}

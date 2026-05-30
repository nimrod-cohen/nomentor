import { buildStyle, styleObjToCss } from '../../utils';
import { viewportMode, getHeadingSizeMap } from '../../state';

export function HeadingElement({ element }) {
  const Tag = element.props.level || 'h2';
  const style = buildStyle(element.props);
  const headingSizes = getHeadingSizeMap(viewportMode.value);
  if (headingSizes[Tag]) style.fontSize = headingSizes[Tag];

  // Emit a CSS rule (not inline style) so customCss — scoped to the same id —
  // can override the heading's own line-height/color/etc. via the cascade.
  // Mirrors the renderer's nomentor_add_css('#{html_id}', …) approach.
  const id = element.props.anchorId || element.id;
  const rule = styleObjToCss(style);

  return (
    <>
      {rule && <style>{`#${id} { ${rule} }`}</style>}
      <Tag id={id} dangerouslySetInnerHTML={{ __html: element.props.text || '' }} />
    </>
  );
}

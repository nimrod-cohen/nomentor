import { buildStyle } from '../../utils';
import { viewportMode, getSizeMap } from '../../state';
import { renderIconSvg } from '../../lucide-icons';
import { shadowToCSS } from '../BoxShadowEditor';

export function ListElement({ element }) {
  const { listType, items, icon, iconColor, fontSize, fontWeight, itemPadding, itemBgColor, itemRadius, itemGap } = element.props;
  const style = buildStyle(element.props);
  const sizeMap = getSizeMap(viewportMode.value);

  const wrapStyle = {
    ...style,
    listStyle: icon || listType === 'ul' ? 'none' : undefined,
    display: 'flex',
    flexDirection: 'column',
    gap: (itemGap || '4') + 'px',
    padding: icon ? '0' : undefined,
    margin: style.margin || '0',
  };

  if (fontSize && sizeMap[fontSize]) wrapStyle.fontSize = sizeMap[fontSize];
  if (fontWeight) wrapStyle.fontWeight = fontWeight;

  const liStyle = {
    padding: itemPadding || '8px 12px',
    borderRadius: (itemRadius || '0') + 'px',
  };
  if (itemBgColor) liStyle.backgroundColor = itemBgColor;
  if (element.props.itemShadow) liStyle.boxShadow = shadowToCSS(element.props.itemShadow);

  const Tag = listType === 'ol' ? 'ol' : 'ul';

  return (
    <Tag style={wrapStyle} class="list-element">
      {(items || []).map((item, i) => {
        const itemIcon = item.icon ?? icon;
        const perItemStyle = { ...liStyle };
        if (item.bgColor) perItemStyle.backgroundColor = item.bgColor;

        return (
          <li key={item.id || i} style={perItemStyle} class="list-item">
            {itemIcon && (
              <span class="list-item-icon" style={{ color: item.iconColor || iconColor || 'currentColor' }}
                dangerouslySetInnerHTML={{ __html: renderIconSvg(itemIcon, '1em', element.props.iconWeight || 2) }} />
            )}
            <span class="list-item-text">{item.text}</span>
          </li>
        );
      })}
    </Tag>
  );
}

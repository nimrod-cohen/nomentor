import { updateElementProps } from '../../state';

export function HeadingElement({ element }) {
  const Tag = element.props.level || 'h2';
  return (
    <Tag
      contentEditable
      suppressContentEditableWarning
      style={{ outline: 'none' }}
      onBlur={e => updateElementProps(element.id, { text: e.target.textContent })}
    >
      {element.props.text}
    </Tag>
  );
}

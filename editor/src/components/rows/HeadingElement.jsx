import { updateElementProps, commitChange } from '../../state';

export function HeadingElement({ element }) {
  const Tag = element.props.level || 'h2';
  return (
    <Tag
      contentEditable
      suppressContentEditableWarning
      style={{ outline: 'none' }}
      onBlur={e => { updateElementProps(element.id, { text: e.target.textContent }); commitChange(); }}
    >
      {element.props.text}
    </Tag>
  );
}

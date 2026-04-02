import { updateElementProps } from '../../state';

export function TextElement({ element }) {
  return (
    <p
      contentEditable
      suppressContentEditableWarning
      style={{ outline: 'none' }}
      onBlur={e => updateElementProps(element.id, { text: e.target.textContent })}
    >
      {element.props.text}
    </p>
  );
}

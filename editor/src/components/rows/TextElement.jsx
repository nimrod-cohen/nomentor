import { updateElementProps, commitChange } from '../../state';

export function TextElement({ element }) {
  return (
    <p
      contentEditable
      suppressContentEditableWarning
      style={{ outline: 'none' }}
      onBlur={e => { updateElementProps(element.id, { text: e.target.textContent }); commitChange(); }}
    >
      {element.props.text}
    </p>
  );
}

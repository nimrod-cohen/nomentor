import { useRef } from 'preact/hooks';
import { updateElementProps, commitChange } from '../../state';

export function TextElement({ element }) {
  const ref = useRef(null);

  function onBlur() {
    if (!ref.current) return;
    const html = ref.current.innerHTML;
    if (html !== element.props.text) {
      updateElementProps(element.id, { text: html });
      commitChange();
    }
  }

  return (
    <div
      ref={ref}
      contentEditable
      style={{ outline: 'none' }}
      onBlur={onBlur}
      dangerouslySetInnerHTML={{ __html: element.props.text }}
    />
  );
}

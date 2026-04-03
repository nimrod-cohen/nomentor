import { useRef } from 'preact/hooks';
import { updateElementProps, commitChange } from '../../state';

export function HeadingElement({ element }) {
  const ref = useRef(null);
  const Tag = element.props.level || 'h2';

  function onBlur() {
    if (!ref.current) return;
    const text = ref.current.textContent;
    if (text !== element.props.text) {
      updateElementProps(element.id, { text });
      commitChange('Edit heading');
    }
  }

  return (
    <Tag
      ref={ref}
      contentEditable
      style={{ outline: 'none' }}
      onBlur={onBlur}
      dangerouslySetInnerHTML={{ __html: element.props.text }}
    />
  );
}

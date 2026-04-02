export function ImageElement({ element }) {
  if (element.props.src) {
    return <img src={element.props.src} alt={element.props.alt} style={{ maxWidth: '100%' }} />;
  }
  return (
    <div style={{
      background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center',
      minHeight: '120px', borderRadius: '4px', color: '#999', fontSize: '13px'
    }}>
      Click to set image
    </div>
  );
}

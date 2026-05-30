import { buildStyle } from '../../utils';

/** Mirror of nomentor_video_embed_src() in renderer.php */
export function videoEmbedSrc(url) {
  url = (url || '').trim();
  if (!url) return '';
  let m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i);
  if (m) return 'https://www.youtube.com/embed/' + m[1];
  m = url.match(/vimeo\.com\/(?:video\/)?(\d+)(?:[/?]([A-Za-z0-9]+))?/i);
  if (m) return 'https://player.vimeo.com/video/' + m[1] + (m[2] ? '?h=' + m[2] : '');
  return url;
}

function aspectPct(ar) {
  const [w, h] = (ar || '16:9').split(':').map(parseFloat);
  return w > 0 ? (h / w) * 100 : 56.25;
}

export function VideoElement({ element }) {
  const { props } = element;
  const style = buildStyle(props);
  const mw = props.maxWidth ? { maxWidth: props.maxWidth, marginInline: 'auto' } : {};
  const radius = props.borderRadius ? { borderRadius: props.borderRadius + 'px', overflow: 'hidden' } : {};
  let embed = videoEmbedSrc(props.url);
  if (embed && props.hideControls) {
    embed += (embed.indexOf('?') !== -1 ? '&' : '?') + 'controls=0';
  }
  const box = { position: 'relative', width: '100%', height: 0, paddingBottom: aspectPct(props.aspectRatio) + '%', ...radius };

  const id = element.props.anchorId || element.id;

  if (!embed) {
    return (
      <div id={id} style={{ ...style, ...mw }}>
        <div class="image-placeholder" style={box}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
            <span>Paste a Vimeo or YouTube URL in the properties panel</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id={id} style={{ ...style, ...mw }}>
      <div style={box}>
        <iframe src={embed} allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowfullscreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0, pointerEvents: 'none' }} />
      </div>
    </div>
  );
}

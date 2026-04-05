import { useState, useEffect } from 'preact/hooks';
import { buildStyle } from '../../utils';
import { resolveColor } from '../ColorSelector';

function calcTimeLeft(targetDate, timezone) {
  if (!targetDate) return null;
  try {
    const now = new Date();
    const target = new Date(targetDate);
    const diff = target - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      expired: false,
    };
  } catch { return null; }
}

function pad(n) { return String(n).padStart(2, '0'); }

export function TimerElement({ element }) {
  const { targetDate, timezone, bgColor, color, labelDays, labelHours, labelMinutes, labelSeconds, expiredText, borderRadius } = element.props;
  const [time, setTime] = useState(() => calcTimeLeft(targetDate, timezone));
  const extraStyle = buildStyle(element.props);

  useEffect(() => {
    if (!targetDate) return;
    setTime(calcTimeLeft(targetDate, timezone));
    const id = setInterval(() => setTime(calcTimeLeft(targetDate, timezone)), 1000);
    return () => clearInterval(id);
  }, [targetDate, timezone]);

  if (!targetDate) {
    return (
      <div class="timer-placeholder" style={extraStyle}>
        Set a target date in the properties panel
      </div>
    );
  }

  if (time?.expired) {
    return <div class="timer-expired" style={{ color: resolveColor(color) || '#1a2744', ...extraStyle }}>{expiredText || 'Time is up!'}</div>;
  }

  const bw = parseInt(element.props.boxWidth) || 20;
  const boxStyle = {
    backgroundColor: resolveColor(bgColor) || '#eef2f7',
    color: resolveColor(color) || '#1a2744',
    borderRadius: (borderRadius || '12') + 'px',
    width: `calc(${bw}% - 9px)`,
    maxWidth: 'calc(25% - 9px)',
    minWidth: '60px',
  };

  const units = [
    { value: time?.days ?? 0, label: labelDays || 'Days' },
    { value: time?.hours ?? 0, label: labelHours || 'Hours' },
    { value: time?.minutes ?? 0, label: labelMinutes || 'Minutes' },
    { value: time?.seconds ?? 0, label: labelSeconds || 'Seconds' },
  ];

  const wrapStyle = { display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', ...extraStyle };

  return (
    <div class="timer-element" style={wrapStyle}>
      {units.map(u => (
        <div key={u.label} class="timer-box" style={boxStyle}>
          <span class="timer-number">{pad(u.value)}</span>
          <span class="timer-label">{u.label}</span>
        </div>
      ))}
    </div>
  );
}

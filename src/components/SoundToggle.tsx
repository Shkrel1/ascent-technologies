import { useState } from 'react';
import { crtAudio } from '../lib/audio';

export default function SoundToggle() {
  const [enabled, setEnabled] = useState(crtAudio.isEnabled());

  const handleToggle = () => {
    const newState = crtAudio.toggle();
    setEnabled(newState);
  };

  return (
    <button
      className={`sound-toggle${enabled ? ' sound-toggle--on' : ''}`}
      onClick={handleToggle}
      aria-label={`Sound ${enabled ? 'on' : 'off'}`}
    >
      [SND: {enabled ? 'ON' : 'OFF'}]
    </button>
  );
}

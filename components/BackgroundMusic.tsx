'use client';

import { useRef, useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handleToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!hasStarted) {
      audio.volume = 0.5;
      audio.play().catch((err) => {
        console.warn('Falha ao iniciar áudio:', err);
      });
      setHasStarted(true);
    }

    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src='/audio/fundo.mp3' loop />
      <button
        onClick={handleToggle}
        className="bg-white/80 rounded-full p-2 shadow hover:scale-110 transition"
        aria-label="Tocar ou mutar música"
      >
        {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
      </button>
    </div>
  );
}

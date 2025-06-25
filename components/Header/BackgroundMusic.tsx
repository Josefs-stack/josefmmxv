'use client';

import { useEffect, useRef, useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;
    audio.muted = false;

    const playAudio = async () => {
      try {
        await audio.play();
        setIsMuted(false);
      } catch (err) {
        audio.muted = true;
        setIsMuted(true);
        try {
          await audio.play();
        } catch (err) {
          console.warn('Autoplay completamente bloqueado:', err);
        }
      }
    };

    playAudio();
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!hasInteracted) {
      audio.play().catch(() => {});
      setHasInteracted(true);
    }

    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  return (
    <div className="z-50">
      <audio ref={audioRef} src="/audio/fundo.mp3" loop />
      <button
        onClick={toggleMute}
        className="text-neutral-50/50 rounded-full cursor-pointer mb-10 hover:scale-110 hover:text-white transition"
        aria-label="Alternar som"
      >
        {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
      </button>
    </div>
  );
}

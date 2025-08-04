'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.1;
    audio.muted = false;

    const playAudio = async () => {
      try {
        await audio.play();
        setIsMuted(false);
      } catch {
        audio.muted = true;
        setIsMuted(true);
        try {
          await audio.play();
        } catch (err) {
          console.warn('Autoplay completamente bloqueado:', err);
        }
      }
    };

    setTimeout(() => {
      playAudio();
    }, 3000);
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.play().catch(() => {});

    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 3 }}
      className="z-50"
    >
      <audio ref={audioRef} src="/audio/fundo.mp3" loop />
      <button
        onClick={toggleMute}
        className="text-green-500/50 rounded-full cursor-pointer mb-10 hover:scale-110 hover:text-green-500 transition"
        aria-label="Alternar som"
      >
        {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
      </button>
    </motion.div>
  );
}

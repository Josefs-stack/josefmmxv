'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import QR from '@/public/assets/QR.png';

export default function DownloadButton() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const outputRange = [-50, 50];

  const springConfig = { damping: 10, stiffness: 100, mass: 0.5 };

  const x = useSpring(useTransform(mouseX, [-1, 1], outputRange), springConfig);
  const y = useSpring(useTransform(mouseY, [-1, 1], outputRange), springConfig);

  return (
    <motion.a
      href="/meu-cv.pdf"
      download
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="relative sm:left-auto left-4 flex items-center justify-center sm:w-96 w-56 sm:h-96 h-56 rounded-full text-neutral-500 hover:text-white border-4 border-neutral-500 hover:border-neutral-50 overflow-hidden group cursor-pointer transition-all"
      style={{ x, y }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const xPos = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const yPos = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        mouseX.set(xPos);
        mouseY.set(yPos);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <div className="absolute -bottom-8 left-1/2 w-1 h-1 rounded-full group-hover:scale-[22000%] bg-neutral-50 transition-all duration-300" />

      <motion.svg
        className="absolute w-full h-full mix-blend-difference"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 8, 
        }}
      >
        <defs>
          <path
            id="circle"
            d="
              M 50, 50
              m -35, 0
              a 35,35 0 1,1 70,0
              a 35,35 0 1,1 -70,0
            "
          />
        </defs>
        <text
          fill="white"
          fontSize="6"
        >
          <textPath
            xlinkHref="#circle"
            startOffset="50%"
            textAnchor="middle"
          >
            DOWNLOAD - CV •• DOWNLOAD - CV •• DOWNLOAD - CV ••
          </textPath>
        </text>
      </motion.svg>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ x, y }}
        onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const xPos = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            const yPos = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
            mouseX.set(xPos);
            mouseY.set(yPos);
        }}
        onMouseLeave={() => {
            mouseX.set(0);
            mouseY.set(0);
        }}
        className="w-1/2 h-1/2 flex items-center justify-center border-4 border-neutral-500 group-hover:border-white rounded-full mix-blend-difference overflow-visible"
      >
        <Image
          src={QR}
          alt="QR Code para download do currículo"
          width={120}
          height={120}
          className="rounded shadow sm:w-40 w-28 sm:h-40 h-28"
        />
      </motion.div>
    </motion.a>
  );
}

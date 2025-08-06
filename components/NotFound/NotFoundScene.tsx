'use client';

import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, SpotLight, Text3D, Center } from '@react-three/drei';
import { Suspense, useRef, useState, useEffect } from 'react';

export default function NotFoundScene() {
  const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([0, 0, 30]);
  
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 600) {
        setCameraPosition([0, 0, 35]);
      } else if (width < 1200) {
        setCameraPosition([0, 0, 25]);
      } else {
        setCameraPosition([0, 0, 15]);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full h-5/8" style={{ height: '60vh' }}>
      <Canvas shadows camera={{ position: cameraPosition, fov: 35 }}>
        <ambientLight intensity={0.5} />
        <SpotLight
          intensity={1}
          angle={0.2}
          penumbra={1}
          position={[30, 30, 30]}
          castShadow
        />
        <AnimatedText />
        <Environment files="/adamsbridge.hdr" />
      </Canvas>
    </div>
  );
}

function AnimatedText() {
  const ref = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();

  const size = viewport.width < 6 ? 2.5 : 4;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = Math.sin(t * 1.0) * 0.3;
      ref.current.position.y = Math.sin(t * 0.5) * 0.1;
      ref.current.position.x = Math.sin(t * 1.0) * 0.3;
      ref.current.rotation.y = Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <Center position={[0, 0, 0]}>
      <Text3D
        ref={ref}
        font="/font/ZenDots_Regular.json"
        size={size}
        height={1}
        curveSegments={12}
        bevelEnabled
        bevelSize={0.08}
        bevelThickness={0.2}
      >
        404
        <meshStandardMaterial color="#05f509" metalness={0.8} roughness={0.3} />
      </Text3D>
    </Center>
  );
}

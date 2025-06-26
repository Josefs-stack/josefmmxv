'use client'
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, SpotLight } from "@react-three/drei";
import { Physics, useSphere } from "@react-three/cannon";
import { Outlines } from "@react-three/drei";
import { EffectComposer, N8AO, SMAA } from "@react-three/postprocessing";
import { Suspense } from "react";

const rfs = THREE.MathUtils.randFloatSpread;
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const baubleMaterial = new THREE.MeshStandardMaterial(
  { 
    color: "#000000",
    roughness: 0,
    envMapIntensity: 1 
  }
);

export const Ball = () => (
  <Suspense fallback={null}>
    <Canvas
      shadows
      gl={{ antialias: false }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 30, 20], fov: 35, near: 1, far: 80 }}
    >
      <ambientLight intensity={0.5} />
      <SpotLight intensity={1} angle={0.2} penumbra={1} position={[30, 30, 30]} castShadow shadow-mapSize={[512, 512]} />
      
      <Physics gravity={[0, 2, 0]} iterations={10}>
        <Pointer />
        <Clump />
      </Physics>

      <Environment files="/adamsbridge.hdr" />

      <EffectComposer enableNormalPass multisampling={0}>
        <N8AO
          halfRes
          color="white"
          aoRadius={3}
          intensity={4}
          aoSamples={6}
          denoiseSamples={4}
        />
        <SMAA />
      </EffectComposer>
    </Canvas>
  </Suspense>
);

function Clump({ mat = new THREE.Matrix4(), vec = new THREE.Vector3(), ...props }) {
  const [ref, api] = useSphere(() => ({
    args: [1],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), rfs(20), rfs(20)],
  }));

  useFrame(() => {
    if (ref.current) {
      const instancedMesh = ref.current as unknown as THREE.InstancedMesh;
      for (let i = 0; i < 40; i++) {
        instancedMesh.getMatrixAt(i, mat);
        api.at(i).applyForce(vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-40).toArray(), [0, 0, 0]);
      }
    }
  });

  return (
    <instancedMesh
      ref={ref}
      castShadow
      receiveShadow
      args={[sphereGeometry, baubleMaterial, 40]}
    >
      <Outlines thickness={4} />
    </instancedMesh>
  );
}

function Pointer() {
  const viewport = useThree((state) => state.viewport);
  const [, api] = useSphere(() => ({ type: "Kinematic", args: [3], position: [0, 0, 0] }));
  
  return useFrame((state) => api.position.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0));
}
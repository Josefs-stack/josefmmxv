'use client'
import * as THREE from "three";
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { shaderMaterial } from "@react-three/drei";
import { extend, applyProps } from "@react-three/fiber";
import { toCreasedNormals } from "three-stdlib";

const OutlinesMaterial = shaderMaterial(
  { color: new THREE.Color("black"), opacity: 1, thickness: 0.5 },

  `
   #include <common>
   #include <morphtarget_pars_vertex>
   #include <skinning_pars_vertex>
   uniform float thickness;
   void main() {
     #if defined (USE_SKINNING)
       #include <beginnormal_vertex>
       #include <morphnormal_vertex>
       #include <skinbase_vertex>
       #include <skinnormal_vertex>
       #include <defaultnormal_vertex>
     #endif
     #include <begin_vertex>
     #include <morphtarget_vertex>
     #include <skinning_vertex>
     #include <project_vertex>
     vec4 transformedNormal = vec4(normal, 0.0);
     vec4 transformedPosition = vec4(transformed, 1.0);
     #ifdef USE_INSTANCING
       transformedNormal = instanceMatrix * transformedNormal;
       transformedPosition = instanceMatrix * transformedPosition;
     #endif
     vec3 newPosition = transformedPosition.xyz + transformedNormal.xyz * thickness;
     gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0); 
   }`,
  `
   uniform vec3 color;
   uniform float opacity;
   void main(){
     gl_FragColor = vec4(color, opacity);
     #include <tonemapping_fragment>
     #include <${parseInt(THREE.REVISION.replace(/\D+/g, "")) >= 154 ? "colorspace_fragment" : "encodings_fragment"}>;
   }`
);

extend({ OutlinesMaterial });

export function Outlines(
  { 
    color = "black",
    opacity = 1,
    transparent = false,
    thickness = 0.5,
    angle = Math.PI, ...props 
  }) {
  const ref = useRef<THREE.Group>(null);
  const [material] = useState(() => new OutlinesMaterial({ side: THREE.BackSide }));

  useLayoutEffect(() => {
    const group = ref.current;
    if (!group) return;

    const parent = group.parent;

    if (parent && (parent as THREE.Mesh).isMesh) {
      const meshParent = parent as THREE.Mesh;
      const mesh = new THREE.Mesh(meshParent.geometry, material);
      group.add(mesh);
      mesh.geometry = angle ? toCreasedNormals(meshParent.geometry, angle) : meshParent.geometry;

      return () => {
        if (angle) mesh.geometry.dispose();
        group.remove(mesh);
      };
    }
  }, [angle, material]);

  useLayoutEffect(() => {
    const group = ref.current;
    if (!group) return;
    const mesh = group.children[0];
    if (mesh && (mesh as THREE.Mesh).material) {
      applyProps((mesh as THREE.Mesh).material, { transparent, thickness, color, opacity });
    }
  }, [transparent, thickness, color, opacity]);

  return <group ref={ref} {...props} />;
}
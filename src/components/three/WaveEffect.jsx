"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function WaveEffect({
  width = 20,
  height = 20,
  segments = 50,
  position = [0, -5, 0],
  color = "#FF0000",
}) {
  const meshRef = useRef();

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(width, height, segments, segments);
    return geo;
  }, [width, height, segments]);

  useFrame((state) => {
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position.array;
      const time = state.clock.elapsedTime;

      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];

        // Create wave effect
        const wave1 = Math.sin(x * 0.5 + time) * 0.3;
        const wave2 = Math.sin(y * 0.5 + time * 1.5) * 0.3;
        const wave3 = Math.sin((x + y) * 0.3 + time * 0.5) * 0.2;

        positions[i + 2] = wave1 + wave2 + wave3;
      }

      meshRef.current.geometry.attributes.position.needsUpdate = true;
      meshRef.current.geometry.computeVertexNormals();

      // Rotate slowly
      meshRef.current.rotation.z = time * 0.1;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={[-Math.PI / 2, 0, 0]}
      geometry={geometry}
    >
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.3}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

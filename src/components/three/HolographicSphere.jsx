"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function HolographicSphere({
  position,
  scale = 1,
  color = [0.1, 0.8, 1.0],
}) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={new THREE.Color(...color)}
        transparent
        opacity={0.6}
        distort={0.4}
        speed={2}
        roughness={0}
        metalness={0.5}
      />
    </Sphere>
  );
}

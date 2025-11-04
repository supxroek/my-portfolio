"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Html } from "@react-three/drei";
import * as THREE from "three";

export default function SkillOrb({ position, color, label, scale = 1 }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2;

      // Smooth scale animation on hover
      const targetScale = hovered ? scale * 1.3 : scale;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }
  });

  return (
    <group position={position}>
      <Sphere
        ref={meshRef}
        args={[1, 32, 32]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={0.5}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </Sphere>

      {hovered && (
        <Html center>
          <div className="bg-black bg-opacity-80 text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap">
            {label}
          </div>
        </Html>
      )}
    </group>
  );
}

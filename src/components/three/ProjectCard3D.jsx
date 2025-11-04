"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Text, Html } from "@react-three/drei";
import * as THREE from "three";

export default function ProjectCard3D({
  position,
  title,
  description,
  color = "#FF0000",
  onClick,
}) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;

      // Rotation on hover
      const targetRotation = hovered ? Math.PI * 0.1 : 0;
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotation,
        0.1
      );

      // Scale on hover
      const targetScale = hovered ? 1.1 : 1;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }
  });

  return (
    <group
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
    >
      <RoundedBox args={[3, 2, 0.2]} radius={0.1} smoothness={4}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.4 : 0.1}
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>

      {hovered && (
        <Html center distanceFactor={5} transform occlude>
          <div className="bg-black bg-opacity-90 text-white p-4 rounded-lg max-w-xs pointer-events-none">
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-sm text-gray-300">{description}</p>
          </div>
        </Html>
      )}
    </group>
  );
}

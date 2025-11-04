"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D, Center, Float } from "@react-three/drei";
import * as THREE from "three";

export default function AnimatedLogo({ text = "SP", position = [0, 0, 0] }) {
  const textRef = useRef();

  useFrame((state) => {
    if (textRef.current) {
      // Gentle floating animation
      textRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime) * 0.3;

      // Rainbow color effect
      const hue = (state.clock.elapsedTime * 0.1) % 1;
      textRef.current.material.color.setHSL(hue, 0.8, 0.6);
      textRef.current.material.emissive.setHSL(hue, 0.8, 0.3);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Center position={position}>
        <Text3D
          ref={textRef}
          font="/fonts/helvetiker_regular.typeface.json"
          size={1.5}
          height={0.5}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.1}
          bevelSize={0.05}
          bevelOffset={0}
          bevelSegments={5}
        >
          {text}
          <meshStandardMaterial
            color="#FF0000"
            emissive="#FF0000"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </Text3D>
      </Center>
    </Float>
  );
}

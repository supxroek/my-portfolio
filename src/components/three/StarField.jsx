"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarField() {
  const starsRef = useRef();

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      starsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={100}
      depth={50}
      count={3000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
}

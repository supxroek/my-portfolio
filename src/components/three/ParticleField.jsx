"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleField({ count = 1000, radius = 15 }) {
  const pointsRef = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * radius;
      const y = (Math.random() - 0.5) * radius;
      const z = (Math.random() - 0.5) * radius;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count, radius]);

  const colors = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const color = new THREE.Color();
      color.setHSL(Math.random(), 1.0, 0.5);
      temp.push(color.r, color.g, color.b);
    }
    return new Float32Array(temp);
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;

      // Wave effect
      const positions = pointsRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] +=
          Math.sin(state.clock.elapsedTime + positions[i]) * 0.01;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

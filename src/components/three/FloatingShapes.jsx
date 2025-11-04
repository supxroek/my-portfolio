"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sphere,
  Torus,
  Box,
} from "@react-three/drei";
import * as THREE from "three";

function AnimatedShape({ position, geometry, color, speed = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.01 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {geometry}
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingShapes() {
  return (
    <>
      {/* Sphere */}
      <AnimatedShape
        position={[-8, 2, -5]}
        geometry={<sphereGeometry args={[1, 32, 32]} />}
        color="#FF0000"
        speed={1}
      />

      {/* Torus */}
      <AnimatedShape
        position={[8, -2, -5]}
        geometry={<torusGeometry args={[1, 0.4, 16, 100]} />}
        color="#00FF88"
        speed={0.8}
      />

      {/* Box */}
      <AnimatedShape
        position={[6, 4, -8]}
        geometry={<boxGeometry args={[1.5, 1.5, 1.5]} />}
        color="#0088FF"
        speed={1.2}
      />

      {/* Small Spheres */}
      <AnimatedShape
        position={[-6, -3, -3]}
        geometry={<sphereGeometry args={[0.7, 32, 32]} />}
        color="#FF00FF"
        speed={1.5}
      />

      <AnimatedShape
        position={[4, -4, -6]}
        geometry={<sphereGeometry args={[0.5, 32, 32]} />}
        color="#FFAA00"
        speed={0.9}
      />
    </>
  );
}

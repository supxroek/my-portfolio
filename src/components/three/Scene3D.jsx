"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { Suspense } from "react";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";

export default function Scene3D({
  children,
  enableEffects = true,
  enableControls = true,
}) {
  return (
    <Canvas
      className="!fixed inset-0"
      style={{ zIndex: -10 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF0000" />
      <spotLight
        position={[0, 10, 0]}
        intensity={0.5}
        angle={0.3}
        penumbra={1}
      />

      {/* Environment */}
      <Environment preset="city" />

      {/* Scene Content */}
      <Suspense fallback={null}>{children}</Suspense>

      {/* Post Processing Effects */}
      {enableEffects && (
        <EffectComposer>
          <Bloom
            intensity={0.5}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
          />
          <ChromaticAberration offset={[0.001, 0.001]} />
        </EffectComposer>
      )}

      {/* Controls */}
      {enableControls && (
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 2.5}
          maxDistance={15}
          minDistance={5}
        />
      )}
    </Canvas>
  );
}

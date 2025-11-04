"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamic import to prevent SSR issues
const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });
const StarField = dynamic(() => import("./StarField"), { ssr: false });
const FloatingShapes = dynamic(() => import("./FloatingShapes"), {
  ssr: false,
});
const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Suspense fallback={<div className="fixed inset-0 bg-[#0f1115]" />}>
        <Scene3D enableEffects={true} enableControls={true}>
          <StarField />
          <ParticleField count={500} radius={20} />
          <FloatingShapes />
        </Scene3D>
      </Suspense>
    </div>
  );
}

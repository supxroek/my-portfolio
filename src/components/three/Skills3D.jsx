"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Scene3D = dynamic(() => import("@/components/three/Scene3D"), {
  ssr: false,
});
const SkillOrb = dynamic(() => import("@/components/three/SkillOrb"), {
  ssr: false,
});
const HolographicSphere = dynamic(
  () => import("@/components/three/HolographicSphere"),
  { ssr: false }
);

export default function Skills3D() {
  const skills = [
    { name: "React", position: [-3, 2, 0], color: "#61DAFB" },
    { name: "Next.js", position: [3, 2, 0], color: "#000000" },
    { name: "Three.js", position: [0, 3, 0], color: "#000000" },
    { name: "Tailwind", position: [-3, -1, 0], color: "#38B2AC" },
    { name: "Node.js", position: [3, -1, 0], color: "#339933" },
    { name: "TypeScript", position: [0, 0, 0], color: "#3178C6" },
  ];

  return (
    <div className="w-full h-[500px] relative">
      <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
        <Scene3D enableControls={true} enableEffects={true}>
          {/* Background holographic sphere */}
          <HolographicSphere
            position={[0, 0, -5]}
            scale={3}
            color={[1, 0, 0]}
          />

          {/* Skill orbs */}
          {skills.map((skill, index) => (
            <SkillOrb
              key={index}
              position={skill.position}
              color={skill.color}
              label={skill.name}
              scale={0.8}
            />
          ))}
        </Scene3D>
      </Suspense>
    </div>
  );
}

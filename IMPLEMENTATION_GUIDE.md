# 🚀 คู่มือการใช้งานและปรับแต่ง Portfolio

## ✨ Features ที่เพิ่มเข้ามา

### 1. 3D Background ทั้งเว็บ

- ✅ Star field แบบหมุนอัตโนมัติ
- ✅ Particle system พร้อม wave effect
- ✅ Floating geometric shapes
- ✅ Post-processing effects (Bloom, Chromatic Aberration)

### 2. UI/UX Improvements

- ✅ Glass morphism navbar
- ✅ Custom animated cursor
- ✅ Section dividers พร้อม particle effects
- ✅ Smooth scroll behavior
- ✅ Custom scrollbar design
- ✅ Responsive cursor effects

### 3. Interactive 3D Components

- ✅ Skill orbs (hover เพื่อดูรายละเอียด)
- ✅ Holographic spheres
- ✅ 3D project cards
- ✅ Wave effects

## 🎯 การใช้งานทันที

### ทดสอบเว็บ

```bash
npm run dev
```

เปิดเบราว์เซอร์ที่ `http://localhost:3000`

### สิ่งที่จะเห็น:

1. **พื้นหลัง 3D** - ดาวหมุนอัตโนมัติพร้อม particle effects
2. **Navbar แบบ Glass** - โปร่งแสงและทันสมัย
3. **Custom Cursor** - Cursor แดงที่ติดตามเมาส์
4. **Section Dividers** - ตัวแบ่งส่วนแบบ animated ระหว่าง sections
5. **Smooth Animations** - Framer Motion animations ทุกที่

## 🎨 การปรับแต่งเพิ่มเติม

### 1. เปลี่ยนสี Theme หลัก

**ไฟล์**: `src/components/three/FloatingShapes.jsx`

```jsx
// เปลี่ยนสีของ shapes
<AnimatedShape
  position={[-8, 2, -5]}
  geometry={<sphereGeometry args={[1, 32, 32]} />}
  color="#YOUR_COLOR" // เปลี่ยนที่นี่
  speed={1}
/>
```

**ไฟล์**: `src/app/globals.css`

```css
/* เปลี่ยนสี scrollbar */
::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #YOUR_COLOR1, #YOUR_COLOR2);
}
```

### 2. ปรับความเร็วและจำนวน Particles

**ไฟล์**: `src/components/three/Background3D.jsx`

```jsx
<ParticleField
  count={1000}    // เพิ่ม/ลด จำนวน particles
  radius={20}     // เพิ่ม/ลด พื้นที่กระจาย
/>

<Stars
  count={5000}    // เพิ่ม/ลด จำนวนดาว
  speed={1}       // ความเร็วการหมุน
/>
```

### 3. เพิ่ม Skills ใน 3D View

**ไฟล์**: สร้างใหม่หรือแก้ไข skills section

```jsx
import Skills3D from "@/components/three/Skills3D";

export default function SkillsSection() {
  return (
    <div>
      <h2>My Skills</h2>
      <Skills3D /> {/* เพิ่มตรงนี้ */}
    </div>
  );
}
```

### 4. เพิ่ม Project Cards แบบ 3D

**ไฟล์**: สร้าง scene ใหม่สำหรับ projects

```jsx
import Scene3D from "@/components/three/Scene3D";
import ProjectCard3D from "@/components/three/ProjectCard3D";

export default function Projects3D() {
  const projects = [
    {
      position: [-4, 0, 0],
      title: "Project 1",
      description: "Description...",
      color: "#FF0000",
    },
    // เพิ่มโปรเจกต์อื่นๆ
  ];

  return (
    <div className="h-[600px]">
      <Scene3D enableControls={true}>
        {projects.map((project, i) => (
          <ProjectCard3D key={i} {...project} />
        ))}
      </Scene3D>
    </div>
  );
}
```

### 5. ปรับแต่ง Cursor

**ไฟล์**: `src/components/animations/CustomCursor.jsx`

```jsx
// เปลี่ยนสี
className = "... bg-[#YOUR_COLOR] ...";
className = "... border-[#YOUR_COLOR] ...";

// เปลี่ยนขนาด
className = "... w-6 h-6 ..."; // ขนาดใหญ่ขึ้น
```

### 6. ปรับแต่ง Section Dividers

**ไฟล์**: `src/app/page.jsx`

```jsx
<SectionDivider gradient="from-YOUR_COLOR1 via-YOUR_COLOR2 to-YOUR_COLOR3" />
```

สีที่แนะนำ:

- `from-red-500 via-orange-500 to-yellow-500` - Warm
- `from-blue-500 via-purple-500 to-pink-500` - Cool
- `from-green-500 via-teal-500 to-cyan-500` - Fresh

### 7. เพิ่ม Interactive Hover Effects

**ไฟล์**: components ต่างๆ

```jsx
// เพิ่ม glow effect
className = "... hover:glow-hover ...";

// เพิ่ม scale animation
className = "... hover:scale-110 transition-transform ...";

// เพิ่ม glass effect
className = "... glass hover:glass-strong ...";
```

## 🔧 Advanced Customization

### สร้าง Custom 3D Shape

```jsx
// ไฟล์ใหม่: src/components/three/MyCustomShape.jsx
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

export default function MyCustomShape({ position }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1}>
      <mesh ref={meshRef} position={position}>
        {/* เปลี่ยน geometry ที่นี่ */}
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#FF0000" metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  );
}
```

### เพิ่ม Post-Processing Effects

**ไฟล์**: `src/components/three/Scene3D.jsx`

```jsx
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Vignette,      // เพิ่ม
  Noise,         // เพิ่ม
  DepthOfField   // เพิ่ม
} from "@react-three/postprocessing";

// ใน Scene3D component
<EffectComposer>
  <Bloom ... />
  <ChromaticAberration ... />
  <Vignette darkness={0.5} offset={0.5} />
  <Noise opacity={0.02} />
  <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} />
</EffectComposer>
```

### สร้าง Interactive 3D Scene แยก

```jsx
// สำหรับ section พิเศษ
import Scene3D from "@/components/three/Scene3D";
import { OrbitControls } from "@react-three/drei";

export default function InteractiveSection() {
  return (
    <div className="h-screen">
      <Scene3D enableControls={true}>
        {/* เพิ่ม 3D objects ที่นี่ */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/* Your 3D models */}
      </Scene3D>
    </div>
  );
}
```

## 📱 Mobile Optimization

### ปรับ Performance สำหรับมือถือ

**ไฟล์**: `src/components/three/Background3D.jsx`

```jsx
"use client";

import { useEffect, useState } from "react";

export default function Background3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <Scene3D enableEffects={!isMobile}>
      <StarField />
      <ParticleField
        count={isMobile ? 300 : 1000}
        radius={isMobile ? 10 : 20}
      />
      {!isMobile && <FloatingShapes />}
    </Scene3D>
  );
}
```

## 🎭 Animation Presets

### Quick Animation Templates

```jsx
// Fade In Up
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {content}
</motion.div>

// Scale In
<motion.div
  initial={{ scale: 0 }}
  whileInView={{ scale: 1 }}
  transition={{ duration: 0.5, type: "spring" }}
>
  {content}
</motion.div>

// Rotate In
<motion.div
  initial={{ rotate: -180, opacity: 0 }}
  whileInView={{ rotate: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  {content}
</motion.div>
```

## 🎪 Next Steps - แนะนำสิ่งที่ควรเพิ่มต่อ

1. **3D Models**: เพิ่ม GLB/GLTF models จาก [Sketchfab](https://sketchfab.com/)
2. **Physics**: เพิ่ม [@react-three/cannon](https://github.com/pmndrs/use-cannon) สำหรับ physics
3. **XR Support**: เพิ่ม [@react-three/xr](https://github.com/pmndrs/react-xr) สำหรับ VR/AR
4. **Sound**: เพิ่ม [Howler.js](https://howlerjs.com/) สำหรับ interactive sound
5. **Shader Effects**: สร้าง custom shaders เพิ่มเติม

## 🐛 Common Issues & Solutions

### Issue: หน้าจอกระตุก

**Solution**: ลด particle count และปิด post-processing

```jsx
<ParticleField count={300} />
<Scene3D enableEffects={false} />
```

### Issue: Cursor ไม่แสดงบน mobile

**Solution**: ซ่อน custom cursor บน mobile

```jsx
<div className="hidden md:block">
  <CustomCursor />
</div>
```

### Issue: 3D ไม่โหลด

**Solution**: ตรวจสอบ dynamic import และ Suspense

```jsx
const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

<Suspense fallback={<div>Loading...</div>}>
  <Scene3D />
</Suspense>;
```

---

**Happy Coding! 🚀**

# 🎨 3D Components Documentation

## Overview

ส่วนขยายของ Portfolio ที่เพิ่ม React Three Fiber เพื่อสร้างประสบการณ์ 3D ที่น่าตื่นตาตื่นใจ

## 🚀 ติดตั้ง Dependencies

```bash
npm install @react-three/fiber @react-three/drei @react-three/postprocessing three
npm install maath valtio zustand
```

## 📦 Components ที่สร้างขึ้น

### 1. **Background3D**

- พื้นหลัง 3D แบบเต็มหน้าจอ
- รวม StarField, ParticleField และ FloatingShapes
- ใช้ใน: `layout.jsx`

### 2. **StarField**

- ฟิลด์ดาวที่หมุนอัตโนมัติ
- รองรับสองเลเยอร์: ขาว-ดำ และสีสัน
- Customizable: `radius`, `count`, `depth`

### 3. **FloatingShapes**

- รูปทรงเรขาคณิต 3D ที่ลอยและหมุน
- รวม Sphere, Torus, Box
- Material effect: MeshDistortMaterial

### 4. **ParticleField**

- ระบบอนุภาคที่มี wave effect
- สีแบบสุ่ม (HSL)
- Animation: หมุนและเคลื่อนไหวแบบคลื่น

### 5. **SkillOrb**

- ลูกบอล 3D แทนทักษะ
- Interactive: hover เพื่อดูชื่อ
- Scale animation เมื่อ hover

### 6. **HolographicSphere**

- เอฟเฟกต์ holographic ด้วย custom shaders
- Fresnel effect + scanlines
- Shimmer animation

### 7. **WaveEffect**

- พื้นผิวคลื่น wireframe
- Multiple sine waves
- สามารถใช้เป็นพื้นหรือพื้นหลัง

### 8. **ProjectCard3D**

- การ์ดแสดงโปรเจกต์แบบ 3D
- Hover เพื่อดูรายละเอียด
- Animation: float, rotate, scale

### 9. **AnimatedLogo**

- ข้อความ 3D ที่มีสี rainbow
- Floating animation
- ต้องมี font file: `helvetiker_regular.typeface.json`

### 10. **Scene3D**

- Wrapper component หลักสำหรับ Canvas
- รวม lighting, environment, post-processing
- Props:
  - `enableEffects`: เปิด/ปิด Bloom และ ChromaticAberration
  - `enableControls`: เปิด/ปิด OrbitControls

### 11. **Skills3D**

- ส่วนแสดงทักษะแบบ 3D interactive
- รวม SkillOrb และ HolographicSphere
- สามารถใช้แทนหรือร่วมกับ Skills section เดิม

## 🎯 Animation Components

### 12. **SectionDivider**

- ตัวแบ่งส่วนแบบ animated
- Gradient animations + particles
- Customizable gradient colors

### 13. **CustomCursor**

- Custom cursor แบบ follow
- เปลี่ยนขนาดเมื่อ hover บน clickable elements
- ใช้ Framer Motion

## 💡 วิธีใช้งาน

### Basic Setup (ทำแล้ว)

```jsx
// layout.jsx
import Background3D from "@/components/three/Background3D";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Background3D />
        {children}
      </body>
    </html>
  );
}
```

### ใช้ Scene3D แยก

```jsx
import Scene3D from "@/components/three/Scene3D";
import StarField from "@/components/three/StarField";

export default function MyComponent() {
  return (
    <div className="h-screen">
      <Scene3D>
        <StarField />
        {/* เพิ่ม components อื่นๆ */}
      </Scene3D>
    </div>
  );
}
```

### ใช้ Individual Components

```jsx
import SkillOrb from "@/components/three/SkillOrb";

<SkillOrb position={[0, 0, 0]} color="#FF0000" label="React" scale={1} />;
```

## 🎨 Customization

### เปลี่ยนสี Theme

แก้ไขค่าสีใน components:

- `Background3D`: สีของ shapes
- `StarField`: saturation parameter
- `HolographicSphere`: color prop [r, g, b]

### ปรับ Performance

```jsx
// ลด particle count
<ParticleField count={500} radius={15} />

// ปิด effects
<Scene3D enableEffects={false} />

// ลด star count
<Stars count={2000} />
```

## 🔧 Tips & Best Practices

1. **SSR Issues**: ใช้ `dynamic` import กับ `ssr: false`

```jsx
const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });
```

2. **Performance**: ใช้ `Suspense` fallback

```jsx
<Suspense fallback={<LoadingComponent />}>
  <Scene3D>...</Scene3D>
</Suspense>
```

3. **Z-Index**: 3D background ควรมี `-z-10` หรือต่ำกว่า content

4. **Responsive**: ปรับขนาดตาม viewport

```jsx
const isMobile = window.innerWidth < 768;
<ParticleField count={isMobile ? 300 : 1000} />;
```

## 🎪 Advanced Features

### Custom Shaders

ดูตัวอย่างใน `HolographicSphere.jsx` สำหรับการสร้าง custom material

### Post-Processing

เพิ่ม effects เพิ่มเติมจาก `@react-three/postprocessing`:

- DepthOfField
- Vignette
- Noise
- Glitch

### Interactive Events

```jsx
<mesh
  onClick={(e) => console.log("clicked")}
  onPointerOver={(e) => console.log("hover")}
  onPointerOut={(e) => console.log("unhover")}
>
```

## 📚 Resources

- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- [Drei Components](https://github.com/pmndrs/drei)
- [Three.js Examples](https://threejs.org/examples/)
- [PMND Examples](https://docs.pmnd.rs/react-three-fiber/getting-started/examples)

## 🐛 Troubleshooting

### Font ไม่โหลด (AnimatedLogo)

ดาวน์โหลด font จาก [Three.js fonts](https://github.com/mrdoob/three.js/tree/dev/examples/fonts) และวางไว้ที่ `public/fonts/`

### Performance ช้า

1. ลด particle/star count
2. ปิด post-processing effects
3. ใช้ `powerPreference: "high-performance"`
4. ลดความซับซ้อนของ geometry (segments)

### SSR Errors

ตรวจสอบว่าใช้ `"use client"` และ dynamic import

---

**สร้างโดย**: Suparoek Manajit
**Version**: 1.0.0
**Last Updated**: November 2025

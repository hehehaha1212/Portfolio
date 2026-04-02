"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Loader } from "@react-three/drei";

import { UI } from "./UI";
import { Experience } from "./Experience";

export default function BookScene() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-screen"
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <UI />
      <Loader />

      <Canvas
        className={`${isHovered ? "pointer-events-auto" : "pointer-events-none"} w-full h-full`}
        camera={{
          position: [-0.5, 1, 4],
          fov: 45,
        }}
      >
        <Suspense fallback={null}>
          <Experience isActive={isHovered} />
        </Suspense>
      </Canvas>
    </div>
  );
}
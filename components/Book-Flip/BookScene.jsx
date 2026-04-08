"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { UI } from "./UI";
import { Experience } from "./Experience";

/*
  BookScene.jsx
  - Top-level canvas wrapper for the Book experience. Renders the `UI`
    overlay and sets up the `Canvas` with lighting and a suspended
    `Experience` (3D content).
*/
function App() {
  return (
    <div className="relative h-full w-full">
      <UI />
      <Canvas
        shadows
        onCreated={({ gl }) => gl.setClearColor("#F0EFEB", 1)}
        camera={{
          position: [0, 0.08, window.innerWidth > 800 ? 4.85 : 9.2],
          fov: 42,
        }}
      >
        <group position-y={0}>
          <ambientLight intensity={0.82} />
          <directionalLight position={[3.2, 4.4, 3.2]} intensity={1.22} />
          <directionalLight position={[-2.6, 1.8, -2.8]} intensity={0.56} />
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
      
    </div>
  );
}

export default App;

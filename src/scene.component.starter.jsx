import React from "react";
import { Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";

export default function SceneStarter() {
  return (
    <Canvas camera={{ position: [3, 5, 0], near: 0.01, far: 100, fov: 35 }}>
      <Perf />;
      <OrbitControls
        maxPolarAngle={Math.PI * 0.48}
        minAzimuthAngle={Math.PI * -0.75}
        maxAzimuthAngle={Math.PI * 0.5}
        minDistance={1}
        maxDistance={8}
      />
      <directionalLight position={[-3, 4, 2]} />
      <ambientLight intensity={0.1} />
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"#BADA55"} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation-x={Math.PI * -0.5}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color={"#7A936C"} />
      </mesh>
    </Canvas>
  );
}

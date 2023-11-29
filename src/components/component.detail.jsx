import {
  Box,
  Edges,
  GizmoViewport,
  Html,
  OrbitControls,
  Outlines,
  PivotControls,
  Preload,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Suspense, useState } from "react";
import { BoxGeometry, MeshNormalMaterial } from "three";
import { ModelDetail } from "./model.detail";

export default function ComponentDetail() {
  // const model = useGLTF("./wall.glb");
  // console.log(model.scene.children);
  // console.log(model.scene.animations);

  return (
    <Canvas camera={{ position: [-18, 1, 15], near: 0.01, far: 100, fov: 45 }}>
      <color args={["black"]} attach="background" />
      <ambientLight intensity={2} />
      <Perf />
      <GizmoViewport
        axisColors={["red", "green", "blue"]}
        labelColor="black"
        position={[-2, 0, 0]}
        scale={0.4}
      />

      <OrbitControls makeDefault />

      <Stage
        contactShadow={{ opacity: 0.5, blur: 5 }}
        environment="city"
        intensity={0.8}
      >
        {/* <primitive object={model.scene} /> */}

        <>
          <PivotControls
            anchor={[0, 0, 0]}
            lineWidth={1.2}
            scale={0.5}
            disableRotations
            disableAxes
            disableSliders
          ></PivotControls>
          <ModelDetail />
        </>
      </Stage>
    </Canvas>
  );
}

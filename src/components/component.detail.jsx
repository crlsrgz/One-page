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
    <Canvas
      camera={{
        position: [-4, 3, 3],
        near: 0.01,
        far: 100,
        fov: 35,
      }}
    >
      <color args={["black"]} attach="background" />
      <ambientLight intensity={2} />
      <Perf position="top-left" />
      <GizmoViewport
        axisColors={["red", "green", "blue"]}
        labelColor="black"
        position={[-2, 0, 0]}
        scale={0.4}
      />

      <OrbitControls makeDefault target={[0, 1, 0]} />
      <Stage
        contactShadow={{ opacity: 0.5, blur: 5 }}
        environment="city"
        intensity={0.8}
        adjustCamera={false}
      >
        {/* <primitive object={model.scene} /> */}

        <>
          <Suspense
          // fallback={
          //   <mesh>
          //     <boxGeometry />
          //     <meshBasicMaterial wireframe color={"red"} />
          //   </mesh>
          // }
          >
            <ModelDetail />
          </Suspense>
        </>
      </Stage>
    </Canvas>
  );
}

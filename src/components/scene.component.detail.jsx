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
  useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Suspense, useState } from "react";
import { BoxGeometry, MeshNormalMaterial } from "three";
import { ModelDetail } from "./scene-detail/model.detail";
import LoadPercent from "./component.loadPercent";

export default function SceneDetail() {
  // const model = useGLTF("./wall.glb");
  // console.log(model.scene.children);
  // console.log(model.scene.animations);
  return (
    <Suspense fallback={<LoadPercent />}>
      <Canvas
        camera={{
          position: [-4, -0.5, 3],
          near: 0.01,
          far: 100,
          fov: 35,
        }}
      >
        {/* <color args={["black"]} attach="background" /> */}
        <ambientLight intensity={2} />
        {/* <Perf position="top-left" /> */}
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
          position={[-2, 0, 0]}
          scale={0.4}
          hideAxisHeads
        />

        <OrbitControls
          makeDefault
          target={[0, 0.0, 0]}
          maxPolarAngle={Math.PI * 0.65}
          minPolarAngle={Math.PI * -0.85}
          maxAzimuthAngle={Math.PI * 0.5}
          minAzimuthAngle={Math.PI * -0.45}
          maxDistance={5}
          minDistance={2}
        />
        <Stage
          contactShadow={{ opacity: 0.5, blur: 5 }}
          environment="city"
          intensity={0.8}
          adjustCamera={false}
        >
          {/* <primitive object={model.scene} /> */}
          <>
            <ModelDetail />
          </>
        </Stage>
      </Canvas>
      <div className="absolute right-0 top-0 -z-30 flex h-full w-full items-center justify-center bg-clip-text pb-10 text-[24rem] text-zinc-800 ">
        <h2>DETAIL</h2>
      </div>
    </Suspense>
  );
}

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
      <div className="absolute left-12 top-28 z-30 flex h-full w-96 flex-col gap-4">
        <button className="w-48 cursor-pointer rounded-xl p-2 outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100">
          Roof tiles
        </button>
        <button className="w-48 cursor-pointer rounded-xl p-2 outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100">
          Tile Batten
        </button>
        <button className="w-48 cursor-pointer rounded-xl p-2 outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100">
          Counter Batten
        </button>
        <button className="w-48 cursor-pointer rounded-xl p-2 outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100">
          Breather Membrane
        </button>
        <button className="w-48 cursor-pointer rounded-xl p-2 outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100">
          Roof deck
        </button>
        <button className="w-48 cursor-pointer rounded-xl p-2 outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100">
          Rafter
        </button>
      </div>

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
      <div className="absolute right-0 top-0 -z-30 flex h-full w-full select-none items-center justify-center overflow-hidden bg-clip-text pb-10 text-[24rem] text-zinc-800">
        <h2 className=" bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-transparent">
          DETAIL
        </h2>
      </div>
    </Suspense>
  );
}

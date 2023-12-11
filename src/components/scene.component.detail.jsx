import {
  Box,
  CycleRaycast,
  Environment,
  GizmoViewport,
  Html,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { ModelDetail } from "./scene-detail/model.detail";
import LoadPercent from "./component.loadPercent";
import { ACESFilmicToneMapping } from "three";
import LightSetup from "./scene-detail/component.lights";
import CameraFunctionality from "./scene-detail/component.cameraDetail";

export default function SceneDetail() {
  const [explodeModel, setExplodeModel] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const [cameraPosition, setCameraPostion] = useState(true);

  return (
    <div className="relative h-full w-full">
      <Suspense fallback={<LoadPercent />}>
        <div
          id="sidebar-nav"
          className={`absolute top-2 z-30 flex h-full w-24 select-none flex-col items-center justify-start gap-4 rounded-md bg-zinc-900 bg-opacity-80 outline-2`}
        >
          <div className=" flex h-20 w-20 flex-row items-center justify-center bg-slate-500">
            <button
              className="h-16 w-16  bg-slate-300"
              onClick={() => {
                setExplodeModel(!explodeModel);
              }}
            >
              x
            </button>
            <div className="absolute left-24 top-0 h-12 w-24 bg-zinc-500 p-2">
              <div>--</div>
            </div>
          </div>
          <div className=" flex h-20 w-20 flex-row items-center justify-center bg-slate-500">
            <button
              className="h-16 w-16  bg-slate-300"
              onClick={() => {
                // location.reload();
                setCameraPostion(!cameraPosition);
              }}
            >
              x
            </button>
            <div className="absolute left-24 top-0 h-12 w-24 bg-zinc-500 p-2">
              <div>--</div>
            </div>
          </div>
        </div>

        <Canvas
          camera={{
            position: [-1, 6, 2],
            near: 0.01,
            far: 100,
            fov: 35,
          }}
          onCreated={() => {
            console.log("canvas ready");
          }}
          gl={{
            toneMapping: ACESFilmicToneMapping,
            // outputColorSpace: SRGBColorSpace,
          }}
          shadows={true}
        >
          <CameraFunctionality
            resetCamera={false}
            cameraChanged={cameraPosition}
          />
          <GizmoViewport
            axisColors={["red", "green", "blue"]}
            labelColor="black"
            position={[-2, 0, 0]}
            scale={0.4}
            hideAxisHeads
          />

          <LightSetup posX={-3} posY={5} posZ={4} />
          <Environment intensity={1} files={"env.hdr"} />

          {/* /* ═══ Models ═══ */}
          <ModelDetail explodedModel={explodeModel} />
        </Canvas>
        <div className="absolute right-0 top-0 -z-30 flex h-full w-full select-none items-center justify-center overflow-hidden bg-clip-text pb-10 text-[24rem] text-zinc-800">
          <h2 className=" bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-transparent">
            DETAIL
          </h2>
        </div>
      </Suspense>
    </div>
  );
}

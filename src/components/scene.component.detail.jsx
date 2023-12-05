import { GizmoViewport, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { ModelDetail } from "./scene-detail/model.detail";
import LoadPercent from "./component.loadPercent";
import { Icon } from "@iconify/react";

export default function SceneDetail() {
  // const model = useGLTF("./wall.glb");
  // console.log(model.scene.children);
  // console.log(model.scene.animations);

  const [sideMenu, setSideMenu] = useState(false);

  function switchSideMenu() {
    if (sideMenu) {
      setSideMenu(false);
    } else {
      setSideMenu(true);
    }
  }

  return (
    <Suspense fallback={<LoadPercent />}>
      <div
        className={`absolute ${
          sideMenu ? "left-[0px]" : " left-[-280px]"
        } top-28 z-30 flex h-[80%] w-auto select-none flex-row-reverse  gap-4 rounded-md bg-zinc-900 bg-opacity-80  ps-6 outline-2 transition-all`}
      >
        <div
          className={`h-full w-14 rounded-br-md rounded-tr-md bg-zinc-600 bg-opacity-50 hover:animate-pulse ${
            sideMenu ? "" : "animate-pulse-slow"
          }`}
        >
          <button
            className="mt-2 flex cursor-pointer flex-col items-center justify-center"
            onClick={switchSideMenu}
          >
            <Icon
              icon={`tdesign:chevron-left`}
              // width={64}
              // height={64}
              className={`h-12  w-12 p-0 transition-all hover:h-16 hover:w-16  ${
                sideMenu ? "rotate-0" : "rotate-180"
              }`}
            />
            <Icon
              icon={`${
                sideMenu ? "tdesign:chevron-left" : "tdesign:chevron-right"
              }`}
              // width={64}
              // height={64}
              className={`absolute inline-flex h-12 w-12 p-0 opacity-75 blur-sm transition-all hover:h-16 hover:w-16 ${
                sideMenu ? "" : "animate-ping-slow"
              }`}
            />
          </button>
        </div>
        <div className="mt-6 flex w-auto flex-col gap-4 overflow-auto p-4">
          <button className=" h-10 w-48 cursor-pointer rounded-md p-2 text-start outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100 focus:bg-zinc-300 focus:text-sm focus:text-zinc-800 focus:outline-4 ">
            Roof tiles
          </button>
          <button className=" h-10 w-48 cursor-pointer rounded-md p-2 text-start outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100 focus:bg-zinc-300 focus:text-sm focus:text-zinc-800 focus:outline-4 ">
            Tile Batten
          </button>
          <button className=" h-10 w-48 cursor-pointer rounded-md p-2 text-start outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100 focus:bg-zinc-300 focus:text-sm focus:text-zinc-800 focus:outline-4 ">
            Counter Batten
          </button>
          <button className=" h-10 w-48 cursor-pointer rounded-md p-2 text-start outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100 focus:bg-zinc-300 focus:text-sm focus:text-zinc-800 focus:outline-4 ">
            Breather Membrane
          </button>
          <button className=" h-10 w-48 cursor-pointer rounded-md p-2 text-start outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100 focus:bg-zinc-300 focus:text-sm focus:text-zinc-800 focus:outline-4 ">
            Roof deck
          </button>
          <button className=" h-10 w-48 cursor-pointer rounded-md p-2 text-start outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100 focus:bg-zinc-300 focus:text-sm focus:text-zinc-800 focus:outline-4 ">
            Rafter
          </button>
          <button className=" h-10 w-48 cursor-pointer rounded-md p-2 text-start outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100 focus:bg-zinc-300 focus:text-sm focus:text-zinc-800 focus:outline-4 ">
            Timber Post
          </button>
          <button className=" h-10 w-48 cursor-pointer rounded-md p-2 text-start outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100 focus:bg-zinc-300 focus:text-sm focus:text-zinc-800 focus:outline-4 ">
            Cellulose insulation
          </button>
          <button className=" h-10 w-48 cursor-pointer rounded-md p-2 text-start outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100 focus:bg-zinc-300 focus:text-sm focus:text-zinc-800 focus:outline-4 ">
            OSB Board
          </button>
          <button className=" h-10 w-48 cursor-pointer rounded-md p-2 text-start outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100 focus:bg-zinc-300 focus:text-sm focus:text-zinc-800 focus:outline-4 ">
            Wooden Framework
          </button>
          <button className=" h-10 w-48 cursor-pointer rounded-md p-2 text-start outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100 focus:bg-zinc-300 focus:text-sm focus:text-zinc-800 focus:outline-4 ">
            Wood-fibre Insulation
          </button>
          <button className=" h-10 w-48 cursor-pointer rounded-md p-2 text-start outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100 focus:bg-zinc-300 focus:text-sm focus:text-zinc-800 focus:outline-4 ">
            Drywall sheet
          </button>
          <button className=" h-10 w-48 cursor-pointer rounded-md p-2 text-start outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100 focus:bg-zinc-300 focus:text-sm focus:text-zinc-800 focus:outline-4 ">
            Roof deck
          </button>
          <button className=" h-10 w-48 cursor-pointer rounded-md p-2 text-start outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100 focus:bg-zinc-300 focus:text-sm focus:text-zinc-800 focus:outline-4 ">
            Rafter
          </button>
          <button className=" h-10 w-48 cursor-pointer rounded-md p-2 text-start outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100 focus:bg-zinc-300 focus:text-sm focus:text-zinc-800 focus:outline-4 ">
            Timber Post
          </button>
          <button className=" h-10 w-48 cursor-pointer rounded-md p-2 text-start outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100 focus:bg-zinc-300 focus:text-sm focus:text-zinc-800 focus:outline-4 ">
            Cellulose insulation
          </button>
          <button className=" h-10 w-48 cursor-pointer rounded-md p-2 text-start outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100 focus:bg-zinc-300 focus:text-sm focus:text-zinc-800 focus:outline-4 ">
            OSB Board
          </button>
          <button className=" h-10 w-48 cursor-pointer rounded-md p-2 text-start outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100 focus:bg-zinc-300 focus:text-sm focus:text-zinc-800 focus:outline-4 ">
            Wooden Framework
          </button>
          <button className=" h-10 w-48 cursor-pointer rounded-md p-2 text-start outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100 focus:bg-zinc-300 focus:text-sm focus:text-zinc-800 focus:outline-4 ">
            Wood-fibre Insulation
          </button>
          <button className=" h-10 w-48 cursor-pointer rounded-md p-2 text-start outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100 focus:bg-zinc-300 focus:text-sm focus:text-zinc-800 focus:outline-4 ">
            Drywall sheet
          </button>
        </div>
      </div>

      <Canvas
        camera={{
          position: [-4, -0.5, 3],
          near: 0.01,
          far: 100,
          fov: 35,
        }}
      >
        <ambientLight intensity={2} />
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
          contactShadow={{
            opacity: 0.5,
            blur: 5,
          }}
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

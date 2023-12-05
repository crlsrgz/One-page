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
          sideMenu ? "left-[24px]" : " left-[-230px]"
        } top-28 z-30 flex h-full w-auto flex-row-reverse gap-4 p-4 outline-2 outline-zinc-100 transition-all`}
      >
        <div className="">
          <button
            className=" flex cursor-pointer flex-col items-center justify-center"
            onClick={switchSideMenu}
          >
            <Icon
              icon={`tdesign:chevron-left`}
              // width={64}
              // height={64}
              className={`h-12 w-12  p-0 transition-all hover:h-16 hover:w-16  ${
                sideMenu ? "rotate-0" : "rotate-180"
              }`}
            />
          </button>
        </div>
        <div className="flex h-full w-auto flex-col gap-4">
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

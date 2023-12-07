import {
  Box,
  Environment,
  GizmoViewport,
  OrbitControls,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { ModelDetail } from "./scene-detail/model.detail";
import LoadPercent from "./component.loadPercent";
import { Icon } from "@iconify/react";
import ButtonSideMenu from "./scene-detail/component.buttonSide";
import {
  ACESFilmicToneMapping,
  CineonToneMapping,
  ReinhardToneMapping,
  SRGBColorSpace,
} from "three";
import LightSetup from "./scene-detail/component.lights";

export default function SceneDetail() {
  const model = useGLTF("./wall.glb");
  // console.log(model.scene.children);
  // console.log(model.scene.animations);

  const [sideMenu, setSideMenu] = useState(false);
  const [animationToPlay, setAnimationToPlay] = useState(null);

  function switchAnimation(animationName) {
    setAnimationToPlay(animationName);
  }

  function switchSideMenu() {
    if (sideMenu) {
      setSideMenu(false);
    } else {
      setSideMenu(true);
    }
  }

  return (
    <div className="relative h-full w-full">
      <Suspense fallback={<LoadPercent />}>
        <div
          id="sidebar-nav"
          className={` absolute ${
            sideMenu ? "left-[0px]" : "-left-72"
          } top-2 z-30 flex h-[95%] w-auto select-none flex-row-reverse  gap-4 rounded-md bg-zinc-900 bg-opacity-80  ps-6 outline-2 transition-all`}
        >
          <div
            className={`h-full w-14 rounded-br-md rounded-tr-md bg-zinc-600 bg-opacity-50 hover:animate-pulse `}
            onClick={switchSideMenu}
            onKeyPress={null}
            role="button"
            tabIndex="-2"
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
          <div className="mt-6 flex  w-64 flex-col gap-4 overflow-auto p-4">
            <ButtonSideMenu
              textContent={"Roof tiles"}
              handleClick={() => {
                setAnimationToPlay("002");
                console.log(animationToPlay);
              }}
            />
            <ButtonSideMenu
              textContent={"Tile Batten"}
              handleClick={() => {
                setAnimationToPlay("003");
                console.log(animationToPlay);
              }}
            />
            <ButtonSideMenu
              textContent={"Counter Batten"}
              handleClick={() => {
                setAnimationToPlay("001");
                console.log(animationToPlay);
              }}
            />
            <ButtonSideMenu textContent={"Breather Membrane"} />
            <ButtonSideMenu textContent={"Roof deck"} />
            <ButtonSideMenu textContent={"Rafter"} />
            <ButtonSideMenu textContent={"Timber Post"} />
            <ButtonSideMenu textContent={"Cellulose insulation"} />
            <ButtonSideMenu textContent={"OSB Board"} />
            <ButtonSideMenu textContent={"Wooden Framework"} />
            <ButtonSideMenu textContent={"Wood-fibre Insulation"} />
            <ButtonSideMenu textContent={"Drywall sheet"} />
            <ButtonSideMenu textContent={"Roof deck"} />
            <ButtonSideMenu textContent={"Rafter"} />
            <ButtonSideMenu textContent={"Timber Post"} />
            <ButtonSideMenu textContent={"Cellulose insulation"} />
            <ButtonSideMenu textContent={"OSB Board"} />
            <ButtonSideMenu textContent={"Wooden Framework"} />
            <ButtonSideMenu textContent={"Wood-fibre Insulation"} />
            <ButtonSideMenu textContent={"Drywall sheet"} />
          </div>
        </div>

        <Canvas
          camera={{
            position: [-4, 7, 5],
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
          {/* <ambientLight intensity={2} /> */}
          <GizmoViewport
            axisColors={["red", "green", "blue"]}
            labelColor="black"
            position={[-2, 0, 0]}
            scale={0.4}
            hideAxisHeads
          />

          <OrbitControls
            makeDefault
            target={[0, 1, 0]}
            maxPolarAngle={Math.PI * 0.65}
            minPolarAngle={Math.PI * -0.85}
            maxAzimuthAngle={Math.PI * 0.5}
            minAzimuthAngle={Math.PI * -0.45}
            maxDistance={10}
            minDistance={2}
          />

          <LightSetup />
          <Environment intensity={1} files={"env.hdr"} />

          {/* <Stage
            contactShadow={{
              opacity: 0.5,
              blur: 5,
              normalBias: 0.1,
            }}
            shadows={{
              normalBias: 0.05,
            }}
            intensity={1.0}
            environment={null}
            preset="rembrandt"
            adjustCamera={false}
          > */}
          <ModelDetail action={animationToPlay} />
          <mesh scale={4} rotation-x={Math.PI * -0.5} receiveShadow castShadow>
            <planeGeometry />
            <meshStandardMaterial color={"slategrey"} />
          </mesh>
          {/* </Stage> */}
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

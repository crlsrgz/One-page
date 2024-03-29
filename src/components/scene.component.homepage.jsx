import React, { Suspense, useState } from "react";
import {
  Environment,
  Lightformer,
  PresentationControls,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import SceneStarter from "./scene.component.starter";
import StandardModel from "./general/component.standardModel";
import { checkScreen } from "../globals/screen";
import { Icon } from "@iconify/react";
import { useControls } from "leva";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { Color, BackSide } from "three";

export default function SceneHomepage(props) {
  const [isMobile, _] = useState(checkScreen.width < 567 ? true : false);

  function EnvControls() {
    const hdrMap = useLoader(RGBELoader, "/noga.hdr?url");

    const skyColor = new Color(0.8, 0.83, 0.92);
    const intensity = 1.2;
    skyColor.multiplyScalar(intensity);

    return (
      <Environment background={false}>
        <color attach="background" args={[skyColor]} />
        <mesh rotation={[0, 0, 0]} scale={5}>
          <sphereGeometry />
          <meshBasicMaterial
            transparent
            opacity={0.4}
            map={hdrMap}
            side={BackSide}
            toneMapped={false}
          />
        </mesh>
      </Environment>
    );
  }

  return (
    <>
      <div className="t-0 fixed z-20 h-24 w-full bg-[#323333] "></div>
      <Canvas
        camera={{
          position: [6, 1, 0],
          near: 0.01,
          far: 100,
          fov: 35,
        }}
        shadows={true}
      >
        <Perf position="bottom-left" />

        <ScrollControls pages={4} damping={0.1} distance={0.5}>
          <EnvControls />

          <Scroll>
            <group position={[1, -1, 0]} scale={1}>
              <PresentationControls
                enabled={true}
                global={false}
                snap={true}
                rotation={[0, 2, 0]}
                polar={[0.0, 0.8]}
              >
                <StandardModel
                  url={"./detailHP.glb?url"}
                  position={[0, 0, 0]}
                />
              </PresentationControls>
            </group>
            <group
              position={isMobile ? [2, -4.8, 0.0] : [2, -4.8, 0.5]}
              scale={isMobile ? 1.5 : 1.8}
            >
              <PresentationControls
                enabled={true}
                global={false}
                snap={true}
                rotation={[0, 2, 0]}
                polar={[0, 0]}
              >
                <StandardModel
                  url={"./productHP.glb?url"}
                  position={[0, 0, 0]}
                />
              </PresentationControls>
            </group>
            <group position={[1, -8, -0.2]} scale={1.8}>
              <PresentationControls
                enabled={true}
                global={false}
                snap={true}
                rotation={[0, 4, 0]}
                polar={[0, 0]}
              >
                <StandardModel
                  url={"./buildingHP.glb?url"}
                  position={[0, 0, 0]}
                  castShadow
                  receiveShadow
                />
              </PresentationControls>
            </group>

            <SceneStarter
              isRotating={true}
              posX={0}
              posY={-11}
              posZ={0}
              meshPosition={[-1, -0.5, -0.21]}
              scale={0.95}
              color={"#252b2e"}
              offset={1.5}
            />
          </Scroll>

          <Scroll html style={{ width: "100%" }}>
            <div className="m-0 flex h-screen w-full flex-col items-start p-12  pt-48">
              <h1 className="font-yeseva text-4xl sm:text-6xl">
                Construction Detail
              </h1>
              <p className=" w-7/8 mt-4 sm:w-2/4 lg:w-1/3 ">
                Roof eve detail, displaying the diferent parts of the
                constructioin system. <br />
                <br />
                The Detail is part of a timber frame construction, isolation to
                keep the warmth and weather sealed in the outside.
              </p>
              <button className="scene mt-6 w-64 rounded-xl bg-zinc-300 p-4 text-2xl text-orange-700  ">
                <a
                  href="./detail"
                  className=" -mt-1 flex flex-row items-center justify-center gap-4"
                >
                  <>
                    {"Open scene"}{" "}
                    <Icon icon="ph:arrow-right" className="mt-2" />
                  </>
                </a>
              </button>
            </div>

            <div className="m-0 flex h-screen w-full flex-row items-start justify-end p-12 pt-24 ">
              <div className="m-0 mx-0 flex w-auto flex-col lg:w-1/3">
                <h1 className="font-yeseva text-4xl sm:text-6xl">Wood Stove</h1>
                <p className=" mt-4 w-auto  sm:text-lg">
                  Modern wood-Burning stove, this kind of heatting appliance is
                  used around Europe. <br />
                  <br />
                  It is reliable for heating and offers a romantic way of life
                  because it remind us the relationship between humnas and fire.
                </p>
                <button className="scene mt-6 w-64 rounded-xl bg-zinc-300 p-4 text-2xl text-orange-700  ">
                  <a
                    href="./product"
                    className=" -mt-1 flex flex-row items-center justify-center gap-4"
                  >
                    <>
                      {"Open scene"}{" "}
                      <Icon icon="ph:arrow-right" className="mt-2" />
                    </>
                  </a>
                </button>
              </div>
            </div>

            <div className="m-0 flex h-screen w-full flex-col items-start p-12 pt-48 ">
              <h1 className="font-yeseva text-4xl sm:text-6xl">
                Old Bavarian <br />
                Church
              </h1>
              <p className=" w-7/8 mt-4 sm:w-2/4 sm:text-lg lg:w-1/3">
                New Gothic or Gothic Revival building in a small church in a
                town with a small parish. <br /> <br />
                It is a mid-19th century stone building with a tiled roof and a
                copper-clad clock tower.
              </p>
              <button className="scene mt-6 w-64 rounded-xl bg-zinc-300 p-4 text-2xl text-orange-700  ">
                <a
                  href="./building"
                  className=" -mt-1 flex flex-row items-center justify-center gap-4"
                >
                  <>
                    {"Open scene"}{" "}
                    <Icon icon="ph:arrow-right" className="mt-2" />
                  </>
                </a>
              </button>
            </div>
            <div className="m-0 flex h-screen w-full flex-col items-start p-12 pt-48 ">
              <h1 className="font-yeseva text-4xl sm:text-6xl">Test Cube</h1>
              <p className=" w-7/8 mt-4 sm:w-2/4 sm:text-lg lg:w-1/3">
                This was the scene that started this project, it was a small
                journey to try react three fiber and its posibilities.
                <br />
                <br />
                It is just here as a reminder that a small idea can move the
                ball a long way.
              </p>
              <button className="scene mt-6 w-64 rounded-xl bg-zinc-300 p-4 text-2xl text-orange-700  ">
                <a
                  href="./cube"
                  className=" -mt-1 flex flex-row items-center justify-center gap-4"
                >
                  <>
                    {"Open scene"}{" "}
                    <Icon icon="ph:arrow-right" className="mt-2" />
                  </>
                </a>
              </button>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

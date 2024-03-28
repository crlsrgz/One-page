import React, { Suspense } from "react";
import {
  PresentationControls,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import SceneStarter from "./scene.component.starter";
import StandardModel from "./general/component.standardModel";

export default function SceneHomepage(props) {
  return (
    <Canvas
      camera={{
        position: [6, 1, 0],
        near: 0.01,
        far: 100,
        fov: 35,
      }}
    >
      {/* <Perf /> */}
      <ScrollControls pages={4} damping={0.1} distance={0.5}>
        <Scroll>
          <group position={[1, -1, 0]} scale={1}>
            <PresentationControls
              enabled={true}
              global={false}
              snap={true}
              rotation={[0, 2, 0]}
              polar={[0.0, 0.8]}
            >
              <StandardModel url={"./detailHP.glb?url"} position={[0, 0, 0]} />
            </PresentationControls>
          </group>
          <group position={[1, -6, -2]} scale={2}>
            <PresentationControls
              enabled={true}
              global={false}
              snap={true}
              rotation={[0, 2, 0]}
              polar={[0, 0]}
            >
              <StandardModel url={"./productHP.glb?url"} position={[0, 0, 0]} />
            </PresentationControls>
          </group>
          <SceneStarter
            isRotating={false}
            posX={0.2}
            posY={-8}
            posZ={-2}
            meshPosition={[7, 0, -2]}
            color={"red"}
            offset={1.5}
          />
          <SceneStarter
            isRotating={true}
            posX={0}
            posY={-11}
            posZ={0}
            meshPosition={[-2, 0, 0]}
            color={"#slategray"}
            offset={1.5}
            s
          />
        </Scroll>

        <Scroll html style={{ width: "100%" }}>
          <div className="m-0 flex h-screen w-full flex-col items-start p-12 pt-48 ">
            <h1 className="text-3xl sm:text-6xl ">Construction Detail</h1>
            <p className=" w-7/8 mt-4 sm:w-2/4 lg:w-1/3 ">
              Roof eve detail, displaying the diferent parts of the
              constructioin system. <br />
              <br />
              The Detail is part of a timber frame construction, isolation to
              keep the warmth and weather sealed in the outside.
            </p>
            <h2 className="sm:tesxt-4xl scene mt-6 text-2xl">Open scene</h2>
          </div>

          <div className="m-0 flex h-screen w-full flex-col items-start bg-slate-900 bg-opacity-60 p-12 pt-48 ">
            <h1 className="text-3xl sm:text-6xl ">Wood Stove</h1>
            <p className=" w-7/8 mt-4 sm:w-2/4 sm:text-lg lg:w-1/3">
              Modern wood-Burning stove, this kind of heatting appliance is used
              around Europe. <br />
              <br />
              It is reliable for heating and offers a romantic way of life
              because it remind us the relationship between humnas and fire.
            </p>
            <h2 className="sm:tesxt-4xl scene mt-6 text-2xl">Open scene</h2>
          </div>

          <div className="m-0 flex h-screen w-full flex-col items-start bg-slate-900 bg-opacity-60 p-12 pt-48 ">
            <h1 className="text-3xl sm:text-6xl ">
              Old Bavarian <br />
              Church
            </h1>
            <p className=" w-7/8 mt-4 sm:w-2/4 sm:text-lg lg:w-1/3">
              New Gothic or Gothic Revival building in a small church in a town
              with a small parish. <br /> <br />
              It is a mid-19th century stone building with a tiled roof and a
              copper-clad clock tower.
            </p>
            <h2 className="sm:tesxt-4xl scene mt-6 text-2xl">Open scene</h2>
          </div>
          <div className="m-0 flex h-screen w-full flex-col items-start bg-slate-900 bg-opacity-60 p-12 pt-48 ">
            <h1 className="text-3xl sm:text-6xl ">Test Cube</h1>
            <p className=" w-7/8 mt-4 sm:w-2/4 sm:text-lg lg:w-1/3">
              Believe it or not, this was the scene that started this project,
              it is just here as a reminder that a small idea can move the ball
              a long way.
            </p>
            <h2 className="sm:tesxt-4xl scene mt-6 text-2xl">Open scene</h2>
          </div>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

import React, { Suspense } from "react";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import SceneStarter from "./scene.component.starter";

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
          <SceneStarter
            isRotating={false}
            posX={0.1}
            posY={0}
            posZ={0}
            meshPosition={[2, 0, 0]}
            color={"#888888"}
            offset={4}
          />
          <SceneStarter
            isRotating={true}
            posX={0}
            posY={-3}
            posZ={0}
            meshPosition={[-2, 0, 0]}
            color={"#slategray"}
            offset={1.5}
          />
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
          />
        </Scroll>
        <Scroll html style={{ width: "100%" }}>
          <div className="m-0 flex h-screen w-full flex-col items-start p-24 ">
            <h1 className="text-6xl ">Center</h1>
            <p className=" w-3/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              similique?
            </p>
            <h2 className="text-4xl">Open</h2>
          </div>
          <div className="m-0 flex h-screen w-full flex-col items-start p-24 text-center  text-6xl">
            <h1 className="text-6xl ">Left</h1>
          </div>
          <div className="  flex h-screen w-full flex-col items-end  bg-orange-900  text-6xl">
            <h1 className=" m-24 bg-orange-400 text-6xl">Right</h1>
          </div>
          <div className="m-0 flex h-screen w-full flex-col items-start p-24 ">
            <h1 className="text-6xl ">End</h1>
            <p className=" w-3/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              similique?
            </p>
            <h2 className="text-4xl">Open</h2>
          </div>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

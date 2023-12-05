import React, { Suspense } from "react";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import SceneStarter from "./scene.component.starter";
import LoadPercent from "./component.loadPercent";

export default function SceneHomepage(props) {
  return (
    <Suspense fallback={<LoadPercent />}>
      <Canvas
        camera={{
          position: [6, 1, 0],
          near: 0.01,
          far: 100,
          fov: 35,
        }}
      >
        {/* <Perf /> */}
        <ScrollControls pages={3} damping={0.1}>
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
              meshPosition={[4, 0, 0]}
              color={"red"}
              offset={1.5}
            />
          </Scroll>
          <Scroll html style={{ width: "100%" }}>
            <div className="m-0 flex h-screen w-full flex-col items-center justify-center p-0 text-center text-6xl ">
              <h1 className="">Center</h1>
            </div>
            <div className="m-0 flex h-screen w-full flex-col items-center justify-center p-0 text-center  text-6xl">
              <h1 className="">Left</h1>
            </div>
            <div className="m-0 flex h-screen w-full flex-col items-center justify-center p-0 text-center  text-6xl">
              <h1 className="">Right</h1>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </Suspense>
  );
}

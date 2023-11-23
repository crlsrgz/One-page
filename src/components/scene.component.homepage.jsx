import React from "react";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import SceneStarter from "./scene.component.starter";

export default function SceneHomepage(props) {
  return (
    <Canvas camera={{ position: [6, 1, 0], near: 0.01, far: 100, fov: 35 }}>
        <Perf />
          <ScrollControls pages={2} damping={0.1}>
            <Scroll>
              <SceneStarter isRotating={false} position={[0, 0, 0]} meshPosition={[2, 0, 0]} color={"#BADA55"} />
              <SceneStarter isRotating={true} position={[0, -3, 0]} meshPosition={[-2, 0, 0]} color={"#slategray"} />
              <SceneStarter isRotating={false} position={[0, -6, 0]} meshPosition={[4, 0, 0 ]} color={"#slategray"} />
            </Scroll>
            <Scroll html style={{width:"100%"}}>
              <h1 className=" w-full text-center h-screen text-6xl" >all</h1>
              <h1 className=" w-full text-center h-screen text-6xl">alle</h1>
            </Scroll>
          </ScrollControls>



        </Canvas> 
  );
}


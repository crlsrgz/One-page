import React, { Suspense, useState } from "react";
// eslint-disable-next-line import/no-unresolved
import plusIcon from "./assets/img/math-plus-box-svgrepo-com.svg";
import { Scene } from "three";
import SceneStarter from "./scene.component.starter";
import SceneLandscape from "./scene.component.landscape";
import { Canvas, useThree } from "@react-three/fiber";
import { Clone, Html, Scroll, ScrollControls } from "@react-three/drei";
import { ScrollRestoration } from "react-router-dom";
import ComponentMainNav from "./components/navigation.component";
import { Perf } from "r3f-perf";

const App = () => {
  const screenHeight = window.screen.height;
  console.log(screenHeight);
  
  document.querySelector("body").style['overflow'] = "hidden";

  return (
    <main className="box-border flex flex-col p-6">   

      <div className="h-screen w-screen">
        <ComponentMainNav />
        <Canvas camera={{ position: [6, 1, 0], near: 0.01, far: 100, fov: 35 }}>
        <Perf />
          <ScrollControls pages={2} damping={0.1}>
            <Scroll>
              <SceneStarter position={[0, 0, 0]} meshPosition={[2, 0, 0]} color={"#BADA55"} />
              <SceneStarter position={[0, -3, 0]} meshPosition={[-2, 0, 0]} color={"#slategray"} />
              <SceneStarter position={[0, -6, 0]} meshPosition={[4, 0, 0 ]} color={"#slategray"} />
            </Scroll>
            <Scroll html style={{width:"100%"}}>
              <h1 className=" w-full text-center h-screen text-6xl" >all</h1>
              <h1 className=" w-full text-center h-screen text-6xl">alle</h1>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    </main>
  );
};

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(React.createElement(App));

export default App;

import React, { Suspense, useState } from "react";
// eslint-disable-next-line import/no-unresolved
import plusIcon from "./assets/img/math-plus-box-svgrepo-com.svg";
import { Scene } from "three";
import SceneStarter from "./components/scene.component.starter";
import SceneLandscape from "./components/scene.component.landscape";
import { Canvas, useThree } from "@react-three/fiber";
import { Clone, Html, Scroll, ScrollControls } from "@react-three/drei";
import { ScrollRestoration } from "react-router-dom";
import ComponentMainNav from "./components/navigation.component";
import { Perf } from "r3f-perf";
import SceneHomepage from "./components/scene.component.homepage";

const App = () => {
  const screenHeight = window.screen.height;
  console.log(screenHeight);
  
  document.querySelector("body").style['overflow'] = "hidden";

  return (
    <main className="box-border flex flex-col p-6">   

      <div className="canvas-element h-screen w-screen">
        <ComponentMainNav />
        <SceneHomepage />
        {/* <SceneLandscape /> */}
      </div>
    </main>
  );
};

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(React.createElement(App));

export default App;

import React, { Suspense } from "react";
import ComponentMainNav from "./components/navigation.component";
import SceneHomepage from "./components/scene.component.homepage";
import SceneDetail from "./components/scene.component.detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useProgress } from "@react-three/drei";
import SceneCube from "./components/scene.component.cube";
import SceneLandscape from "./components/scene.component.landscape";

const App = () => {
  const screenHeight = window.screen.height;
  console.log(screenHeight);

  //  document.querySelector("body").style["overflow"] = "hidden";

  return (
    <main
      className="box-border flex h-screen  w-screen flex-col"
      style={{ zIndex: "-1" }}
    >
      <div className="canvas-element flex h-full w-full select-none flex-col">
        <BrowserRouter>
          <header className="z-50 mt-4 flex h-24 flex-row items-baseline justify-start gap-4 px-12 pt-4 shadow-2xl shadow-zinc-900">
            <ComponentMainNav />
          </header>
          <div className="flex flex-grow ">
            <Routes>
              <Route path={"/landscape"} element={<SceneLandscape />} />
              {/* <Route path={"/landscape"} element={<SceneHomepage />} /> */}
              <Route path={"/"} element={<SceneHomepage />} />
              <Route path={"/detail"} element={<SceneDetail />} />
              <Route path={"/cube"} element={<SceneCube />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </main>
  );
};

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(React.createElement(App));

export default App;

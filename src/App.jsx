import React, { Suspense, useReducer, useRef, useState } from "react";
import ComponentMainNav from "./components/navigation.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/////////
import SceneHomepage from "./components/scene.component.homepage";
import SceneDetail from "./components/scene.component.detail";
import SceneProduct from "./components/scene.component.product";
import SceneCube from "./components/scene.component.cube";
import SceneLandscape from "./components/scene.component.landscape";
import SceneBuilding from "./components/scene.component.building";
import LoadPercent from "./components/component.loadPercent";
import SceneAbout from "./components/scene-about/component.scene.about";
const App = () => {
  //  document.querySelector("body").style["overflow"] = "hidden";
  return (
    <main
      className="box-border flex h-screen  w-screen flex-col"
      style={{ zIndex: "-1" }}
    >
      <Suspense fallback={<LoadPercent />}>
        <div className="canvas-element h-full w-full select-none ">
          <BrowserRouter basename="/dev/">
            <header className=" fixed z-50 flex h-24 w-full  flex-row  items-center justify-center gap-4 px-12 pb-2  pt-2 ">
              <ComponentMainNav />
            </header>
            <div className="flex h-full w-full flex-grow ">
              <Routes>
                <Route path={"/"} element={<SceneHomepage />} />
                <Route
                  path={"/3d-interactive-cube-scene"}
                  element={<SceneCube />}
                />
                <Route
                  path={"/interactive-eave-detail"}
                  element={<SceneDetail />}
                />
                <Route
                  path={"/wood-stove-product"}
                  element={<SceneProduct />}
                />
                <Route
                  path={"/3d-bavarian-church"}
                  element={<SceneBuilding />}
                />
                <Route path={"/about"} element={<SceneAbout />} />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </Suspense>
    </main>
  );
};

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(React.createElement(App));

export default App;

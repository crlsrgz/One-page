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
const App = () => {
  //  document.querySelector("body").style["overflow"] = "hidden";
  return (
    <main
      className="box-border flex h-screen  w-screen flex-col"
      style={{ zIndex: "-1" }}
    >
      <div className="canvas-element h-full w-full select-none ">
        <Suspense fallback={<LoadPercent />}>
          <BrowserRouter>
            <header className="h-18 fixed z-50 flex w-full  flex-row content-start justify-start gap-4 px-12 pb-2  pt-2 ">
              <ComponentMainNav />
            </header>
            <div className="flex h-full w-full flex-grow ">
              <Routes>
                <Route path={"/"} element={<SceneHomepage />} />
                <Route path={"/cube"} element={<SceneCube />} />
                <Route path={"/detail"} element={<SceneDetail />} />
                <Route path={"/product"} element={<SceneProduct />} />
                <Route path={"/building"} element={<SceneBuilding />} />
                <Route path={"/landscape"} element={<SceneLandscape />} />
              </Routes>
            </div>
          </BrowserRouter>
        </Suspense>
      </div>
    </main>
  );
};

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(React.createElement(App));

export default App;

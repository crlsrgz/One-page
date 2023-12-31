import React, { Suspense } from "react";
import ComponentMainNav from "./components/navigation.component";
import SceneHomepage from "./components/scene.component.homepage";
import SceneDetail from "./components/scene.component.detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SceneCube from "./components/scene.component.cube";
import SceneLandscape from "./components/scene.component.landscape";
import SceneBuilding from "./components/scene.component.building";

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
        <Suspense>
          <BrowserRouter>
            <header className="z-50 flex h-auto flex-row items-baseline justify-start gap-4 px-12 pb-4 pt-6 shadow-2xl  shadow-zinc-900">
              <ComponentMainNav />
            </header>
            <div className="flex flex-grow ">
              <Routes>
                <Route path={"/landscape"} element={<SceneLandscape />} />
                <Route path={"/"} element={<SceneHomepage />} />
                <Route path={"/detail"} element={<SceneDetail />} />
                <Route path={"/cube"} element={<SceneCube />} />
                <Route path={"/building"} element={<SceneBuilding />} />
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

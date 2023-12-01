import React from "react";
import ComponentMainNav from "./components/navigation.component";
import SceneHomepage from "./components/scene.component.homepage";
import ComponentDetail from "./components/component.detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const screenHeight = window.screen.height;
  console.log(screenHeight);

  //  document.querySelector("body").style["overflow"] = "hidden";

  return (
    <main
      className="box-border flex h-screen  w-screen flex-col"
      style={{ zIndex: "-1" }}
    >
      <div className="canvas-element flex h-full w-full flex-col ">
        <div className="info hideMe absolute top-28 h-2/4 w-96">hello</div>
        <BrowserRouter>
          <header className="mx-12 mt-4 flex h-24 flex-row items-baseline  justify-start gap-4">
            <ComponentMainNav />
          </header>
          <div className="flex flex-grow ">
            <Routes>
              {/* <Route path={'/Landscape'} element={<SceneLandscape/>}/> */}
              <Route path={"/"} element={<SceneHomepage />} />
              <Route path={"/detail"} element={<ComponentDetail />} />
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

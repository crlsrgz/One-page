import React from "react";
import ComponentMainNav from "./components/navigation.component";
// import SceneHomepage from "./components/scene.component.homepage";
import ComponentDetail from "./components/component.detail";

const App = () => {
  const screenHeight = window.screen.height;
  console.log(screenHeight);

  //  document.querySelector("body").style["overflow"] = "hidden";

  return (
    <main className="box-border flex flex-col" style={{ zIndex: "-1" }}>
      <div className="canvas-element h-screen w-screen">
        <div className="info hideMe absolute left-4 top-16 h-2/4 w-96 text-zinc-100">
          hello
        </div>
        <ComponentMainNav />
        {/* <SceneHomepage /> */}
        {/* <SceneLandscape /> */}
        <ComponentDetail />
      </div>
    </main>
  );
};

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(React.createElement(App));

export default App;

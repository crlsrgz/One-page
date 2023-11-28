import React from "react";
import ComponentMainNav from "./components/navigation.component";
import SceneHomepage from "./components/scene.component.homepage";
import ComponentDetail from "./components/component.detail";

const App = () => {
  const screenHeight = window.screen.height;
  console.log(screenHeight);

  //  document.querySelector("body").style["overflow"] = "hidden";

  return (
    <main className="box-border flex flex-col">
      <div className="canvas-element h-screen w-screen">
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

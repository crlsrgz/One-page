import React, { Suspense, useState } from "react";
// eslint-disable-next-line import/no-unresolved
import numberIcon from "/number19-svgrepo-com.png";
import plusIcon from "./assets/img/math-plus-box-svgrepo-com.svg";
import { Scene } from "three";
import SceneStarter from "./scene.component.starter";
import SceneLandscape from "./scene.component.landscape";

const App = () => {
  return (
    <main className="box-border flex flex-col p-6">
      <header className="flex flex-row gap-4">
        <h1 className="text-1xl font-yeseva">Scene</h1>
      </header>

      <div className="h-96 flex flex-grow bg-slate-500">
        <SceneLandscape />

       {/* <SceneStarter /> */}
      </div>
      <div className=" h-96 flex flex-grow bg-slate-500 h-96">
      AAA
      </div>
    </main>
  );
};

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(React.createElement(App));

export default App;

import React, { useState } from "react";
// eslint-disable-next-line import/no-unresolved
import numberIcon from "/number19-svgrepo-com.png";
import plusIcon from "./assets/img/math-plus-box-svgrepo-com.svg";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";

const App = () => {
  const [state, setState] = useState(0);
  function addToCount() {
    setState(state + 1);
  }
  function resetCount() {
    setState(0);
  }

  return (
    <main className="m-10 p-0">
      <header className="flex h-auto flex-row gap-4">
        <img src={numberIcon} alt="" width={"100px"} />
        <img src={plusIcon} alt="" width={"75px"} />

        <h1 className="font-yeseva text-8xl">Boilerplate</h1>
      </header>
      <h2 className=" m-2 font-urbanistMedium text-3xl">{`Number is ${state}`}</h2>
      <div className="flex flex-row gap-4">
        <button
          onClick={addToCount}
          className="rounded border-none bg-blue-600 px-6 py-2 text-white hover:opacity-50"
        >
          Click me
        </button>
        <button
          onClick={resetCount}
          className="rounded border-none bg-lime-600 px-6 py-2 text-white hover:opacity-50"
        >
          Reset
        </button>
      </div>
      <div className="canvas-element mt-10  h-80 w-2/4">
        <Canvas>
          <OrbitControls />
          <directionalLight position={[-3, 4, 2]} />
          <ambientLight intensity={0.1} />
          <color args={["slategray"]} attach="background" />
          <mesh>
            <Html occlude center position={[0, 2, 0]}>
              <h1 className="select-none text-center font-urbanistMedium text-4xl text-zinc-50">
                {state}
              </h1>
            </Html>
            <boxGeometry />
            <meshStandardMaterial color={"#BADA55"} />
          </mesh>
        </Canvas>
      </div>
    </main>
  );
};

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(React.createElement(App));

export default App;

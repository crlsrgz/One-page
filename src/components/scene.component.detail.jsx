import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import LoadPercent from "./component.loadPercent";
import { ACESFilmicToneMapping } from "three";

import Detail from "./scene-detail/component.detail";
import { Perf } from "r3f-perf";
import { ButtonSideDetail } from "./scene-detail/component.buttonSide";
import image from "../assets/img/math-plus-box-svgrepo-com.svg";
console.log(image);
export default function SceneDetail() {
  const [explodeModel, setExplodeModel] = useState(false);
  const [resetCamera, setResetCamera] = useState(false);

  return (
    <div className="relative h-full w-full">
      <Suspense fallback={<LoadPercent />}>
        <div
          id="sidebar-nav"
          className={`absolute top-2 z-30 flex h-full w-24 select-none flex-col items-center justify-start gap-4 rounded-md bg-zinc-900 bg-opacity-0 outline-2`}
        >
          <ButtonSideDetail
            handleClick={() => setExplodeModel(!explodeModel)}
            tooltipContent={"Exploded View"}
            textContent={
              <div>
                <img
                  className="h-1/2 w-1/2  translate-x-4  fill-zinc-100"
                  src="../assets/img/math-plus-box-svgrepo-com.svg"
                  alt=""
                />
              </div>
            }
          />
          <ButtonSideDetail
            handleClick={() => setResetCamera(!resetCamera)}
            tooltipContent={"Reset camera position"}
            textContent={<div>x</div>}
          />
          <ButtonSideDetail
            handleClick={() => {
              location.reload();
            }}
            tooltipContent={"Reload scene"}
            textContent={<div>x</div>}
          />
        </div>

        <Canvas
          camera={{
            position: [-3, 3, 4],
            near: 0.01,
            far: 100,
            fov: 35,
          }}
          onCreated={() => {
            console.log("canvas ready");
          }}
          gl={{
            toneMapping: ACESFilmicToneMapping,
          }}
          shadows={true}
        >
          <Perf position="bottom-right" />
          <Detail exploded={explodeModel} resetMe={resetCamera} />
        </Canvas>
        <div className="absolute right-0 top-0 -z-30 flex h-full w-full select-none items-center justify-center overflow-hidden bg-clip-text pb-10 text-[24rem] text-zinc-800">
          <h2 className=" bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-transparent">
            DETAIL
          </h2>
        </div>
      </Suspense>
    </div>
  );
}

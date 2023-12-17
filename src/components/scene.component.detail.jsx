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

  const [buttonExplodeClicked, setButtonExplodedClicked] = useState(false);

  return (
    <div className="relative h-full w-full">
      <Suspense fallback={<LoadPercent />}>
        <div
          id="sidebar-nav"
          className={`absolute top-2 z-30 flex h-full w-24 select-none flex-col items-center justify-start gap-4 rounded-md bg-none outline-2`}
        >
          <ButtonSideDetail
            handleClick={() => {
              setExplodeModel(!explodeModel),
                setButtonExplodedClicked(!buttonExplodeClicked);
            }}
            tooltipContent={"Exploded View"}
            textContent={
              <div className="relative w-full">
                <img
                  className="m-auto h-10 w-10"
                  src={
                    buttonExplodeClicked
                      ? `../assets/img/control-platform.svg`
                      : `../assets/img/control-platform-exploded.svg`
                  }
                  alt=""
                />
                <img
                  className="absolute left-0 top-0 m-auto h-10 w-10 translate-x-1/3   animate-pulse-slow blur-sm"
                  src={
                    buttonExplodeClicked
                      ? `../assets/img/control-platform.svg`
                      : `../assets/img/control-platform-exploded.svg`
                  }
                  alt=""
                />
              </div>
            }
          />
          <ButtonSideDetail
            handleClick={() => setResetCamera(!resetCamera)}
            tooltipContent={"Reset camera position"}
            textContent={
              <div>
                <img
                  className="h-1/2 w-1/2  translate-x-4 fill-zinc-100"
                  src="../assets/img/video-camera-reload.svg"
                  alt=""
                />
              </div>
            }
          />
          <ButtonSideDetail
            handleClick={() => {
              location.reload();
            }}
            tooltipContent={"Reload scene"}
            textContent={
              <div>
                <img
                  className="h-1/2 w-1/2  translate-x-4 fill-zinc-100"
                  src="../assets/img/rotate.svg"
                  alt=""
                />
              </div>
            }
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
        <div
          id="detail"
          className="fixed bottom-0 left-0 h-24 w-full bg-slate-800 md:hidden"
        >
          xx
        </div>
      </Suspense>
    </div>
  );
}

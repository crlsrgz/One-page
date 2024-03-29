import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { ACESFilmicToneMapping } from "three";

//: SVG Import
import svgModelJoined from "/img/control-platform.svg";
import svgModelExploded from "/img/control-platform-exploded.svg";
import svgCameraReset from "/img/video-camera-reload.svg";
import svgSceneReload from "/img/rotate.svg";

/*:: Components ::*/
import { SceneTitle } from "./general/component.SceneTitle";
import { ButtonSideDetail } from "./scene-detail/component.buttonSide";
/*:: General functions ::*/
import { checkScreen } from "../globals/screen";
/*:: Models ::*/
import Detail from "./scene-detail/component.detail";

const cameraPosition = checkScreen.width >= 567 ? [-3, 3, 4] : [-4, 3, 6];

export default function SceneDetail() {
  const [explodeModel, setExplodeModel] = useState(false);
  const [resetCamera, setResetCamera] = useState(false);
  const [buttonExplodeClicked, setButtonExplodedClicked] = useState(false);

  /* ::::::::: Page tittle ::::::::: */

  useEffect(() => {
    document.title =
      "Interactive Roof Eave Detail Wood construction - React Three Fiber | 3d.carlosfx.com";
  }, []);

  return (
    <div className="relative h-full w-full">
      <div
        id="sidebar-nav"
        className={`absolute top-24 z-30 flex h-full w-24 select-none flex-col items-center justify-start gap-4 rounded-md bg-none outline-2`}
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
                src={buttonExplodeClicked ? svgModelJoined : svgModelExploded}
                alt=""
              />
              <img
                className="absolute left-0 top-0 m-auto h-10 w-10 translate-x-1/3   animate-pulse-slow blur-sm"
                src={buttonExplodeClicked ? svgModelJoined : svgModelExploded}
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
                src={svgCameraReset}
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
                src={svgSceneReload}
                alt=""
              />
            </div>
          }
        />
      </div>

      <SceneTitle
        linesArray={["Roof", "Eave", "Detail"]}
        scenDescription={["Pitched Roof", "wide overhang"]}
      />
      <Canvas
        camera={{
          position: cameraPosition,
          near: 0.01,
          far: 100,
          fov: 35,
        }}
        onCreated={() => {
          //console.log("canvas ready");
        }}
        gl={{
          toneMapping: ACESFilmicToneMapping,
        }}
        shadows={true}
      >
        {/* <Perf position="top-right" /> */}

        <Detail explodedModel={explodeModel} resetMe={resetCamera} />
      </Canvas>
      <div
        id="detail-description-container"
        className="fixed bottom-0 left-0 hidden h-36  w-full px-6 transition-all sm:hidden"
      >
        <div
          id="detailTitle"
          className="h-auto w-full rounded-t-lg bg-zinc-900 bg-opacity-80 px-6 pt-2 text-xl sm:hidden"
        >
          {" "}
        </div>
        <div
          id="detailText"
          className="h-36 w-full bg-zinc-900 bg-opacity-80 px-6 pt-2 text-sm sm:hidden "
        >
          {" "}
        </div>
      </div>
    </div>
  );
}

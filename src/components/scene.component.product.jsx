import { Environment, SpotLight } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Perf } from "r3f-perf";
import gsap from "gsap";

/*:: Components ::*/
import InfoTags from "./scene-product/component.InfoTags";
import { SceneTitle } from "./general/component.SceneTitle";
import FakeFire from "./scene-product/component.fakeFire";
import StandardModel from "./general/component.standardModel";
import MultipleClones from "./general/componet.multipleClones";
import LightDirectional from "./scene-product/component.LightDirectional";
import CameraControl from "./scene-product/component.camera";
import { ModelProduct } from "./scene-product/model.product";

/*:: General functions ::*/
import { checkScreen } from "../globals/screen";

/*:: Components ::*/
/*:: General functions ::*/
/*:: Models ::*/

export default function SceneProduct() {
  /* 💡 reset camera function controls the props of the camera control component
      the inital render ref prevents the movement of the camera on load
      and it's updated inside the camera control component*/
  const [resetCameraPosition, setResetCameraPosition] = useState(false);
  const initalRender = useRef(false);

  /* 💡 set the camera position depending on the screen size */
  const cameraPosition = checkScreen.width >= 567 ? [2, 0.3, 3] : [2, 0.3, 3.5];

  const refSpotLights = useRef();
  const [spotLightsOn, setSpotLightsOn] = useState(true);

  function switchLights(refSpotLights) {
    if (spotLightsOn) {
      gsap.to(refSpotLights.current, {
        intensity: 0.05,
        delay: 0.5,
        duration: 1.0,
      });
      setSpotLightsOn(false);
    } else if (!spotLightsOn) {
      gsap.to(refSpotLights.current, {
        intensity: 0.3,
        delay: 0.5,
        duration: 0.5,
      });
      setSpotLightsOn(true);
    }
  }
  /* ::::::::: Page tittle ::::::::: */
  useEffect(() => {
    document.title =
      "Interactive Scene of a Wood Stove - React Three Fiber | 3d.carlosfx.com";
  }, []);

  return (
    <>
      <SceneTitle
        linesArray={["Wood", "Stove"]}
        scenDescription={["with Lateral", "Heat Storage"]}
      />
      <Canvas
        camera={{
          position: cameraPosition,
          near: 0.01,
          far: 100,
          fov: 45,
        }}
        // shadows={true}
        // gl={{
        //   toneMapping: ACESFilmicToneMapping,
        //   outputColorSpace: ACESFilmicToneMapping,
        // }}
        // linear
        // flat
      >
        <CameraControl
          resetCamera={resetCameraPosition}
          firstLoad={initalRender}
        />
        {/* <Perf position="bottom-left" /> */}
        {/* Orbit controls inside the Camera control component, to limit pan */}

        <ambientLight ref={refSpotLights} intensity={0.3} />

        {/* <LightDirectional
          color="#e3effa"
          position={[0, 1, 3]}
          targetPosition={[0, 1, 0]}
          intensity={0.05}
          helper={false}
        />
        <LightDirectional
          color="#e3effa"
          position={[2, 1, 3]}
          targetPosition={[2, 1, 0]}
          intensity={0.05}
          helper={false}
        />
        <LightDirectional
          color="#cfe2f3"
          position={[0, 1, -3]}
          targetPosition={[-3, 1, -2.3]}
          intensity={0.1}
          helper={false}
        /> */}
        <pointLight intensity={0.2} position={[1, 2, -2]} />
        <FakeFire turnedOn={!spotLightsOn} />

        <ModelProduct />

        <StandardModel
          url={"./productRoom.glb?url"}
          diffuseTextureUrl={"./emptyTexture.jpg"}
          normalTexureUrl={"./emptyTexture.jpg"}
          roughTextureUrl={"./emptyTexture.jpg"}
          wireframe
        />
        <StandardModel
          url={"./productBookShelf.glb?url"}
          diffuseTextureUrl={"./productTexture.jpg"}
          normalTexureUrl={"./productTexture_normal.jpg"}
          roughTextureUrl={"./productTexture_rough.jpg"}
        />
        <StandardModel
          url={"./productAccess.glb?url"}
          diffuseTextureUrl={"./productTexture.jpg"}
          normalTexureUrl={"./productTexture_normal.jpg"}
          roughTextureUrl={"./productTexture_rough.jpg"}
        />
        <StandardModel
          url={"./productSofa.glb?url"}
          diffuseTextureUrl={"./productTexture.jpg"}
          normalTexureUrl={"./productTexture_normal.jpg"}
          roughTextureUrl={"./productTexture_rough.jpg"}
        />

        <MultipleClones
          url={"./woodLogs.glb?url"}
          textureUrl={"./productTexture.jpg"}
        />

        <InfoTags
          idString="reset-camera"
          value="1"
          handleClick={() => setResetCameraPosition(!resetCameraPosition)}
          position={[0, 1, 0.3]}
          iconValue="ph:camera-rotate-light"
        />
        <InfoTags
          idString="lights-off"
          value="4"
          handleClick={() => {
            switchLights(refSpotLights);
          }}
          position={[0.45, 1, -0.5]}
          iconValue="ph:lightbulb-filament-light"
          iconSize={3}
        />
      </Canvas>
    </>
  );
}

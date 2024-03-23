import { checkScreen, delay } from "../globals/screen";
import {
  ContactShadows,
  Environment,
  GizmoViewport,
  SpotLight,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Perf } from "r3f-perf";
import CameraControl from "./scene-product/component.camera";
import InfoTags from "./scene-product/component.InfoTags";
import { ModelProduct } from "./scene-product/model.product";
import gsap from "gsap";
import LightDirectional from "./scene-product/component.LightDirectional";
import FakeFire from "./scene-product/component.fakeFire";
import { SceneTitle } from "./general/component.SceneTitle";
import StandardModel from "./general/component.standardModel";
import MultipleClones from "./general/componet.multipleClones";

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
    console.log(refSpotLights);
    if (spotLightsOn) {
      gsap.to(refSpotLights.current, {
        intensity: 0,
        delay: 0.5,
        duration: 1.5,
      });
      setSpotLightsOn(false);
    } else if (!spotLightsOn) {
      gsap.to(refSpotLights.current, {
        intensity: 2,
        delay: 0.5,
        duration: 1.5,
      });
      setSpotLightsOn(true);
    }
  }

  return (
    <>
      <SceneTitle linesArray={["Wood", "Stove"]} />
      <Canvas
        camera={{
          position: cameraPosition,
          near: 0.01,
          far: 100,
          fov: 45,
        }}
        shadows={true}
      >
        <CameraControl
          resetCamera={resetCameraPosition}
          firstLoad={initalRender}
        />
        <Perf position="bottom-left" />
        {/* Orbit controls inside the Camera control component, to limit pan */}
        {/* <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
          position={[-1, 0, 0]}
          scale={0.8}
          hideAxisHeads
        /> */}
        <ambientLight intensity={0.03} />
        <LightDirectional
          color="#e3effa"
          position={[0, 1, 3]}
          targetPosition={[0, 1, 0]}
          intensity={0.05}
          castShadow={true}
          helper={false}
        />
        <LightDirectional
          color="#e3effa"
          position={[2, 1, 3]}
          targetPosition={[2, 1, 0]}
          intensity={0.05}
          castShadow={true}
          helper={false}
        />
        <LightDirectional
          color="#cfe2f3"
          position={[0, 1, -3]}
          targetPosition={[-3, 1, -2.3]}
          intensity={0.1}
          castShadow={true}
          helper={false}
        />
        <SpotLight
          color={"#f9cb9c"}
          intensity={1}
          position={[-2.5, 2.38, 0]}
          target-position={[-2.8, 0, 0]}
          angle={Math.PI / 6}
          power={6}
          radiusBottom={1}
          radiusTop={0.05}
          penumbra={0.21}
          distance={3.5}
          attenuation={0.9}
          shadow-mapSize={[1024, 1024]}
          shadow-normalBias={0.12}
        />
        <SpotLight
          color={"#f9cb9c"}
          intensity={1}
          position={[-2.5, 2.38, 2]}
          target-position={[-2.8, 0, 2]}
          angle={Math.PI / 6}
          power={5}
          radiusBottom={1}
          radiusTop={0.05}
          penumbra={0.21}
          distance={3.5}
          attenuation={1}
          shadow-mapSize={[1024, 1024]}
          shadow-normalBias={0.12}
        />
        <SpotLight
          ref={refSpotLights}
          intensity={0.8}
          position={[0, 2.38, 2]}
          target-position={[0, 0, 0]}
          angle={Math.PI / 6}
          radiusTop={0.1}
          radiusBottom={1}
          distance={5}
          penumbra={0.21}
          attenuation={2}
          shadow-mapSize={[1024, 1024]}
          shadow-normalBias={0.12}
        />
        <FakeFire turnedOn={!spotLightsOn} />

        <ModelProduct />

        <StandardModel
          url={"/productRoom.glb?url"}
          textureUrl={"./productTexture.jpg"}
          castShadow
          receiveShadow
        />
        <StandardModel
          url={"/productBookShelf.glb?url"}
          textureUrl={"./productTexture.jpg"}
          castShadow
          receiveShadow
        />
        <MultipleClones url={"/woodLogs.glb?url"} />

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
          position={[1.4, 1, -0.5]}
          iconValue="ph:lightbulb-filament-light"
          iconSize={3}
        />
      </Canvas>
    </>
  );
}

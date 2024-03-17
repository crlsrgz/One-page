import { checkScreen, delay } from "../globals/screen";
import { Clone, GizmoViewport, SpotLight } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { Perf } from "r3f-perf";
import CameraControl from "./scene-product/component.camera";
import InfoTags from "./scene-product/component.InfoTags";
import { ModelProduct } from "./scene-product/model.product";
import gsap from "gsap";
import LightDirectional from "./scene-product/component.LightDirectional";
import FakeFire from "./scene-product/component.fakeFire";

export default function SceneProduct() {
  /* 💡 reset camera function controls the props of the camera control component
      the inital render ref prevents the movement of the camera on load
      and it's updated inside the camera control component*/
  const [resetCameraPosition, setResetCameraPosition] = useState(false);
  const [explode, setExplode] = useState(false);
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
  /* ::::::::: Page title  ::::::::: */
  const [displayPageTitle, setDisplayPageTitle] = useState("");
  const hidePageTitle = async () => {
    await delay(3000);
    setDisplayPageTitle("animate-mobile-menu-out");
    await delay(2000);
    setDisplayPageTitle("animate-mobile-menu-out hidden");
  };
  useEffect(() => {
    hidePageTitle();
  }, []);
  /* ::::::::: Page title END ::::::::: */
  return (
    <>
      <div
        id="page-title"
        className={`fixed bottom-0 right-0 z-40 p-6 font-urbanistMedium  text-8xl sm:text-12xl ${displayPageTitle}`}
      >
        <p>Wood</p>
        <p>Stove</p>
      </div>
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
        {/* Orbit controls inside the Camera control component, to limit pan */}
        {/* <Perf position="bottom-left" /> */}
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
          position={[-1, 0, 0]}
          scale={0.8}
          hideAxisHeads
        />

        <ambientLight intensity={0.1} />
        <LightDirectional />
        <SpotLight
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
          intensity={1}
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
        <FakeFire />
        <ModelProduct explode={explode} />

        <InfoTags
          value="1"
          handleClick={() => setResetCameraPosition(!resetCameraPosition)}
          position={[0, 1, 0.3]}
        />
        <InfoTags
          value="x"
          handleClick={() => setExplode(!explode)}
          position={[0.8, 0.45, 0.3]}
        />

        <InfoTags
          value="4"
          handleClick={() => {
            switchLights(refSpotLights);
          }}
          position={[-0.8, 0.45, 0.3]}
        />
      </Canvas>
    </>
  );
}

import checkScreen from "../globals/screen";
import { GizmoViewport, OrbitControls, SpotLight } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import LoadPercent from "./component.loadPercent";
import LightSetup from "./scene-detail/component.lights";
import { Perf } from "r3f-perf";
import CameraControl from "./scene-product/component.camera";
import InfoTags from "./scene-product/component.InfoTags";
import { ModelProduct } from "./scene-product/model.product";

export default function SceneProduct() {
  /* 💡 reset camera function controls the props of the camera control component
      the inital render ref prevents the movement of the camera on load
      and it's updated inside the camera control component*/
  const [resetCameraPosition, setResetCameraPosition] = useState(false);
  const [explode, setExplode] = useState(false);
  const initalRender = useRef(false);

  /* 💡 set the camera position depending on the screen size */
  const cameraPosition = checkScreen.width >= 567 ? [0, 0.3, 3] : [0, 0.3, 3];

  function testFunction() {
    console.log("testing functionality");
  }

  return (
    <>
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
        <Perf />
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
          position={[-1, 0, 0]}
          scale={0.8}
          hideAxisHeads
        />
        {/* <LightSetup position={[0, 4, 3]} /> */}
        <SpotLight
          intensity={3}
          position={[1, 3, 0]}
          target-position={[1, 0, 0]}
          angle={Math.PI / 6}
          power={6}
          radiusBottom={1}
          penumbra={0.21}
          distance={3.5}
          attenuation={0}
          shadow-mapSize={[1024, 1024]}
          shadow-normalBias={0.12}
        />

        <SpotLight
          intensity={3}
          position={[-1, 3, 0]}
          target-position={[-1, 0, 0]}
          angle={Math.PI / 6}
          radiusTop={0.1}
          radiusBottom={1}
          distance={3.5}
          penumbra={0.21}
          attenuation={2}
          shadow-mapSize={[1024, 1024]}
          shadow-normalBias={0.12}
        />
        <SpotLight
          intensity={2}
          position={[0, 3, 2]}
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
        <ModelProduct explode={explode} />
        {/* <mesh
          position={[0, 0.45, 0]}
          onClick={() => setResetCameraPosition(!resetCameraPosition)}
          castShadow
        >
          <boxGeometry args={[0.6, 0.9, 0.5]} />
          <meshStandardMaterial color={"gray"} />
        </mesh> */}
        <mesh
          scale={4}
          position={[0, -0.005, 0]}
          receiveShadow
          castShadow
          onClick={testFunction}
        >
          <boxGeometry args={[1, 0.01, 1]} />
          <meshStandardMaterial color={"slategrey"} />
        </mesh>
        <InfoTags
          value="1"
          handleClick={() => setResetCameraPosition(!resetCameraPosition)}
          position={[0, 1, 0.3]}
        />
        <InfoTags
          value="2"
          handleClick={() => setExplode(!explode)}
          position={[0.3, 0.45, 0.3]}
        />
      </Canvas>
    </>
  );
}

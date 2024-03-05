import { GizmoViewport, Html, OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import LoadPercent from "./component.loadPercent";
import LightSetup from "./scene-detail/component.lights";
import { Perf } from "r3f-perf";
import CameraControl from "./scene-product/component.camera";
import InfoTags from "./scene-product/component.InfoTags";

export default function SceneProduct() {
  /* 💡 reset camera function controls the props of the camera control component
      the inital render ref prevents the movement of the camera on load
      and it's updated inside the camera control component*/
  const [resetCameraPosition, setResetCameraPosition] = useState(false);
  const initalRender = useRef(false);

  /* 💡 set the camera position depending on the screen size */
  const checkScreenWidth = window.innerWidth;
  const cameraPosition = checkScreenWidth >= 567 ? [-3, 3, 4] : [-4, 3, 6];

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
        <Perf />
        <LightSetup />
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
          position={[-1, 0, 0]}
          scale={0.8}
          hideAxisHeads
        />

        <OrbitControls
          makeDefault
          target={[0, 0.0, 0]}
          maxPolarAngle={Math.PI * 0.65}
          minPolarAngle={Math.PI * -0.85}
          maxAzimuthAngle={Math.PI * 0.5}
          minAzimuthAngle={Math.PI * -0.45}
          maxDistance={10}
          minDistance={2}
        />

        <mesh
          position={[0, 0.45, 0]}
          onClick={() => setResetCameraPosition(!resetCameraPosition)}
        >
          <boxGeometry args={[0.6, 0.9, 0.5]} />
          <meshStandardMaterial color={"gray"} />
        </mesh>
        <mesh
          scale={4}
          position={[0, -0.05, 0]}
          receiveShadow
          castShadow
          onClick={testFunction}
        >
          <boxGeometry args={[1, 0.01, 1]} />
          <meshStandardMaterial color={"slategrey"} />
        </mesh>
        <InfoTags />
        <Html className="cursor-pointer" position={[5, 0, 5]}>
          <button onClick={() => console.log("html test")}>hhhhhh</button>
        </Html>
      </Canvas>
    </>
  );
}

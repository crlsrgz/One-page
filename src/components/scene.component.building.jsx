import { GizmoViewport, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { ACESFilmicToneMapping } from "three";
import { SceneTitle } from "./general/component.SceneTitle";
import { checkScreen } from "../globals/screen";

export default function SceneBuilding() {
  /* ═══ Model ═══ */
  const modelBuilding = useGLTF("anz.glb");
  const modelTrees = useGLTF("trees.glb");

  const cameraPosition =
    checkScreen.width >= 567 ? [-80, 90, -80] : [-80, 90, -80];
  /* ═══ Sidebar navigation States END ═══ */
  return (
    <div className="relative h-full w-full">
      <SceneTitle
        linesArray={["Bavarian", "Church"]}
        scenDescription={["Gothic revival", "from around 1850"]}
        color={"#007DE5 "}
      />
      <Canvas
        camera={{
          position: cameraPosition,
          near: 0.01,
          far: 300,
          fov: 45,
        }}
        shadows={true}
        gl={{ toneMapping: ACESFilmicToneMapping }}
      >
        <color args={["slategray"]} attach={"background"} />
        <fog args={["slategray", 120, 240]} attach={"fog"} />

        {/* <directionalLight
            position={[-12, 26, 12]}
            intensity={0.1}
            castShadow
            shadow-normalBias={0.18}
            shadow-mapSize={[2048, 2048]}
            shadow-camera-top={50}
            shadow-camera-right={50}
            shadow-camera-bottom={-50}
            shadow-camera-left={-50}
            shadow-camera-near={0}
            shadow-camera-far={50}
          /> */}
        <ambientLight intensity={0.5} />

        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
          position={[-1, 0, 0]}
          scale={0.4}
          hideAxisHeads
        />

        <OrbitControls
          makeDefault
          target={[0, 10, 0]}
          maxPolarAngle={Math.PI * 0.48}
          // minPolarAngle={Math.PI * 2}
          // maxAzimuthAngle={Math.PI * 0.5}
          // minAzimuthAngle={Math.PI * 0.05}
          maxDistance={100}
          minDistance={40}
          enableDamping={true}
        />

        <>
          <primitive object={modelBuilding.scene} />
          <primitive object={modelTrees.scene} />
          {/* <Html center position={[-1, 0.5, 0]}>
              {" "}
              <button
                className=" p-2 outline outline-zinc-100"
                onClick={() => {}}
              >
                Click!
              </button>
            </Html> */}
          <mesh rotation-x={Math.PI * -0.5} position={[0, -0.5, 0]}>
            <planeGeometry args={[500, 500]} />
            <meshBasicMaterial color={"darkgreen"} />
          </mesh>
        </>
      </Canvas>
    </div>
  );
}

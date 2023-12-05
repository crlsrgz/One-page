import { GizmoViewport, Html, OrbitControls, Stage } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import LoadPercent from "./component.loadPercent";
import { Icon } from "@iconify/react";
import { Euler, MathUtils, Quaternion, Vector3 } from "three";

function Cube(props) {
  const refCube = useRef();

  const targetPositionOne = new Vector3(0, 1.5, 0);
  const targetPositionTwo = new Vector3(0, 0, 0);

  const eulerRotation = new Euler(0, 1.5, 0);
  const quaternionRotation = new Quaternion();
  quaternionRotation.setFromEuler(eulerRotation);

  useFrame(({ clock }) => {
    // console.log(refCube.current.rotation);
    if (props.isActive) {
      refCube.current.position.lerp(targetPositionOne, 0.05);
      refCube.current.rotation.y = MathUtils.lerp(
        refCube.current.rotation.y,
        Math.PI * 0.25,
        0.025,
      );
    } else {
      refCube.current.position.lerp(targetPositionTwo, 0.2);
      refCube.current.rotation.y = MathUtils.lerp(
        refCube.current.rotation.y,
        Math.PI * -0.35,
        0.025,
      );
    }
  });
  return (
    <mesh ref={refCube} rotation-y={Math.PI * 1}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={"slategray"} />
    </mesh>
  );
}

export default function SceneCube() {
  const [move, setMove] = useState(false);
  return (
    <Suspense fallback={<LoadPercent />}>
      <Canvas
        camera={{
          position: [-5, 0.5, 3],
          near: 0.01,
          far: 100,
          fov: 45,
        }}
      >
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
          position={[-1, 0, 0]}
          scale={0.4}
          hideAxisHeads
        />

        <OrbitControls
          makeDefault
          target={[0, 0.0, 0]}
          maxPolarAngle={Math.PI * 0.65}
          minPolarAngle={Math.PI * -0.85}
          maxAzimuthAngle={Math.PI * 0.5}
          minAzimuthAngle={Math.PI * -0.45}
          maxDistance={5}
          minDistance={2}
        />
        <Stage
          contactShadow={{
            opacity: 0.5,
            blur: 5,
          }}
          environment="city"
          intensity={0.4}
          adjustCamera={false}
        >
          {/* <primitive object={model.scene} /> */}
          <>
            <Cube isActive={move} />
            <Html center position={[-1, 0.5, 0]}>
              {" "}
              <button
                className=" p-2 outline outline-zinc-100"
                onClick={() => {
                  setMove(!move);
                }}
              >
                Click!
              </button>
            </Html>
          </>
        </Stage>
      </Canvas>
      <div className="absolute right-0 top-0 -z-30 flex h-full w-full select-none items-center justify-center overflow-hidden bg-clip-text pb-10 text-[24rem] text-zinc-800">
        <h2 className=" bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-transparent">
          CUBE
        </h2>
      </div>
    </Suspense>
  );
}

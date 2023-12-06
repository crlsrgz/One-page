import { GizmoViewport, Html, OrbitControls, Stage } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import LoadPercent from "./component.loadPercent";
import { Icon } from "@iconify/react";
import { Euler, MathUtils, Quaternion, Vector3 } from "three";
import ButtonSideMenu from "./scene-detail/component.buttonSide";

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

  /* ═══ Sidebar navigation States ═══ */
  const [sideMenu, setSideMenu] = useState(false);

  function switchSideMenu() {
    if (sideMenu) {
      setSideMenu(false);
    } else {
      setSideMenu(true);
    }
  }

  /* ═══ Sidebar navigation States END ═══ */
  return (
    <div className="relative h-full w-full">
      <Suspense fallback={<LoadPercent />}>
        <div
          id="sidebar-nav"
          className={` absolute ${
            sideMenu ? "left-[0px]" : "-left-72"
          } top-2 z-30 flex h-[95%] w-auto select-none flex-row-reverse  gap-4 rounded-md bg-zinc-900 bg-opacity-80  ps-6 outline-2 transition-all`}
        >
          <div
            className={`h-full w-14 rounded-br-md rounded-tr-md bg-zinc-600 bg-opacity-50 hover:animate-pulse `}
            onClick={switchSideMenu}
            onKeyPress={null}
            role="button"
            tabIndex="-2"
          >
            <button
              className="mt-2 flex cursor-pointer flex-col items-center justify-center"
              onClick={switchSideMenu}
            >
              <Icon
                icon={`tdesign:chevron-left`}
                // width={64}
                // height={64}
                className={`h-12  w-12 p-0 transition-all hover:h-16 hover:w-16  ${
                  sideMenu ? "rotate-0" : "rotate-180"
                }`}
              />
              <Icon
                icon={`${
                  sideMenu ? "tdesign:chevron-left" : "tdesign:chevron-right"
                }`}
                // width={64}
                // height={64}
                className={`absolute inline-flex h-12 w-12 p-0 opacity-75 blur-sm transition-all hover:h-16 hover:w-16 ${
                  sideMenu ? "" : "animate-ping-slow"
                }`}
              />
            </button>
          </div>
          <div className="mt-6 flex w-auto flex-col gap-4 overflow-auto p-4">
            <ButtonSideMenu
              textContent={"Move Cube"}
              handleClick={() => {
                setMove(!move);
              }}
            />
          </div>
        </div>

        {/* ═══  ═══ */}
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
    </div>
  );
}

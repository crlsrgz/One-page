import { Environment, GizmoViewport, OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

/* ═══ Extras ═══ */
import gsap from "gsap";

/* ═══ Components ═══ */
import { ModelDetail } from "./model.detail";
import LightSetup from "./component.lights";

const checkScreenWidth = window.innerWidth;
const cameraPosition = checkScreenWidth >= 567 ? [-3, 3, 4] : [-4, 3, 6];

export default function Detail(props) {
  const { camera } = useThree();
  const refCont = useRef();

  useEffect(() => {
    gsap.to(camera.position, {
      x: cameraPosition[0],
      y: cameraPosition[1],
      z: cameraPosition[2],
      duration: 1.2,
      delay: 0.02,
      ease: "back.inOut",
    });

    gsap.to(camera.lookAt, {
      x: 0,
      y: 2.5,
      z: 0,
      duration: 1,
      delay: 0.01,
    });
    gsap.to(refCont.current.target, {
      x: 0,
      y: 2.5,
      z: 0,
      duration: 1,
      delay: 0.01,
    });
  }, [props.resetMe]);

  return (
    <>
      <OrbitControls
        ref={refCont}
        makeDefault
        target={[0, 2.5, 0]}
        maxPolarAngle={Math.PI * 0.65}
        minPolarAngle={Math.PI * -0.85}
        maxAzimuthAngle={Math.PI * 0.5}
        minAzimuthAngle={Math.PI * -0.45}
        maxDistance={10}
        minDistance={2}
        // enablePan={false}
      />
      <GizmoViewport
        axisColors={["red", "green", "blue"]}
        labelColor="black"
        position={[-2, 0, 0]}
        scale={0.4}
        hideAxisHeads
      />

      <LightSetup posX={-3} posY={5} posZ={4} />
      <Environment intensity={1} files={"env.hdr"} />

      {/* /* ═══ Models ═══ */}
      <ModelDetail explodedModel={props.explodedModel} />
    </>
  );
}

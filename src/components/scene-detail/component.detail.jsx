import { Environment, GizmoViewport, OrbitControls } from "@react-three/drei";
import { ModelDetail } from "./model.detail";
import LightSetup from "./component.lights";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";

export default function Detail(props) {
  const { camera } = useThree();

  // function setCameraPosition() {
  //   camera.position.set(-1, 6, 2);
  //   camera.lookAt(0, 2, 0);
  // }
  useEffect(() => {
    camera.position.set(-3, 3, 4);
  }, [props.resetMe]);
  return (
    <>
      <OrbitControls
        makeDefault
        target={[0, 2.5, 0]}
        maxPolarAngle={Math.PI * 0.65}
        minPolarAngle={Math.PI * -0.85}
        maxAzimuthAngle={Math.PI * 0.5}
        minAzimuthAngle={Math.PI * -0.45}
        maxDistance={10}
        minDistance={2}
        enablePan={false}
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
      <ModelDetail explodedModel={props.exploded} />
    </>
  );
}

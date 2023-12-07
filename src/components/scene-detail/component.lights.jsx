import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

export default function LightSetup({ posX = -3, posY = 2, posZ = -2 }) {
  const refTest = useRef();
  useHelper(refTest, DirectionalLightHelper, 1);

  const { posx, posy, posz } = useControls("directionalLight", {
    posx: { value: posX, min: -20, max: 20, step: 0.25 },
    posy: { value: posY, min: -1, max: 20, step: 0.25 },
    posz: { value: posZ, min: 0, max: 20, step: 0.25 },
  });

  return (
    <>
      <directionalLight
        ref={refTest}
        position={[posx, posy, posz]}
        intensity={1.0}
        castShadow
        shadow-normalBias={0.18}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-top={50}
        shadow-camera-right={50}
        shadow-camera-bottom={-50}
        shadow-camera-left={-50}
        shadow-camera-near={0}
        shadow-camera-far={50}
      />
      <ambientLight intensity={0.5} />
    </>
  );
}

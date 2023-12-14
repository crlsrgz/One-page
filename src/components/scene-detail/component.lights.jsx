import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

export default function LightSetup({ posX = -3, posY = 2, posZ = -2 }) {
  const refDirectLineOne = useRef();
  useHelper(refDirectLineOne, DirectionalLightHelper, 1);

  const { posx, posy, posz } = useControls("directionalLightOne", {
    posx: { value: posX, min: -20, max: 20, step: 0.25 },
    posy: { value: posY, min: -1, max: 20, step: 0.25 },
    posz: { value: posZ, min: 0, max: 20, step: 0.25 },
  });

  return (
    <>
      <directionalLight
        ref={refDirectLineOne}
        position={[posx, posy, posz]}
        intensity={1.0}
        castShadow
        shadow-normalBias={0.12}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-top={20}
        shadow-camera-right={20}
        shadow-camera-bottom={-20}
        shadow-camera-left={-20}
        shadow-camera-near={0}
        shadow-camera-far={20}
      />

      <directionalLight
        position={[2, 5, -5]}
        intensity={1.0}
        castShadow
        shadow-normalBias={0.12}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-top={20}
        shadow-camera-right={20}
        shadow-camera-bottom={-20}
        shadow-camera-left={-20}
        shadow-camera-near={0}
        shadow-camera-far={20}
      />
      <ambientLight intensity={0.1} />
    </>
  );
}

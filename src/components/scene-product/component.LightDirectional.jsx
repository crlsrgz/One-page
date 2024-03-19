import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { check } from "prettier";
import { useRef, useState } from "react";
import { DirectionalLightHelper, Object3D } from "three";
import { checkScreen } from "../../globals/screen";

export default function LightDirectional({
  position,
  targetPosition,
  intensity,
  castShadow = false,
}) {
  const refDirectLineOne = useRef();
  useHelper(refDirectLineOne, DirectionalLightHelper, 1);
  // const pos = { X: 0, Y: 1, Z: -1 };
  // const { posx, posy, posz, intensity } = useControls("directionalLightOne", {
  //   posx: { value: pos.X, min: -1, max: 10, step: 0.25 },
  //   posy: { value: pos.Y, min: -1, max: 2.35, step: 0.25 },
  //   posz: { value: pos.Z, min: 0, max: 10, step: 0.25 },
  //   intensity: { value: 0, min: 0, max: 10, step: 0.01 },
  // });

  const o = new Object3D();
  return (
    <>
      <directionalLight
        ref={refDirectLineOne}
        // position={[posx, posy, posz]}
        // intensity={intesity}
        position={position}
        intensity={intensity}
        target={o}
        castShadow={castShadow}
        shadow-normalBias={0.12}
        shadow-mapSize={[512, 512]}
        shadow-camera-top={1}
        shadow-camera-right={1}
        shadow-camera-bottom={1}
        shadow-camera-left={1}
        shadow-camera-near={0}
        shadow-camera-far={10}
      />
      <primitive object={o} position={targetPosition} />
    </>
  );
}

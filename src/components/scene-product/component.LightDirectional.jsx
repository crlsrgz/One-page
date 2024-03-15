import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { check } from "prettier";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

export default function LightDirectional() {
  const refDirectLineOne = useRef();
  useHelper(refDirectLineOne, DirectionalLightHelper, 1);
  const pos = { X: 0, Y: 1, Z: -1 };
  const { posx, posy, posz } = useControls("directionalLightOne", {
    posx: { value: pos.X, min: -1, max: 5, step: 0.25 },
    posy: { value: pos.Y, min: -1, max: 5, step: 0.25 },
    posz: { value: pos.Z, min: 0, max: 2.35, step: 0.25 },
  });

  return (
    <directionalLight
      ref={refDirectLineOne}
      position={[posx, posy, posz]}
      // position={[0, 1, 1]}
      intensity={0.2}
      castShadow
      shadow-normalBias={0.12}
      shadow-mapSize={[512, 512]}
      shadow-camera-top={20}
      shadow-camera-right={20}
      shadow-camera-bottom={-20}
      shadow-camera-left={-20}
      shadow-camera-near={0}
      shadow-camera-far={20}
    />
  );
}

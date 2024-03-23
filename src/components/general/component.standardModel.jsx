import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect } from "react";

export default function StandardModel({
  url,
  textureUrl,
  position,
  castShadow = false,
  receiveShadow = false,
}) {
  // const model = useGLTF(url) is destructure to get the material
  const { scene, materials } = useGLTF(url);
  const texture = useTexture(textureUrl);
  texture.flipY = false;

  scene.traverse((node) => {
    if (node.isMesh) {
      castShadow ? (node.castShadow = true) : (node.castShadow = false);
      receiveShadow ? (node.receiveShadow = true) : (node.castShadow = false);
    }
  });
  console.log(materials);
  useEffect(() => {
    if (materials && materials["GeneralTexture.000"]) {
      materials["GeneralTexture.000"].map = texture;
      materials["GeneralTexture.000"].needsUpdate = true;
    }
  }, [materials, texture]);
  return (
    <primitive object={scene} position={position ? position : [0, 0, 0]} />
  );
}

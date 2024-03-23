import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect } from "react";

let modelUrl = "";
export default function StandardModel({
  url,
  diffuseTextureUrl = null,
  normalTexureUrl = null,
  roughTextureUrl = null,
  position,
  castShadow = false,
  receiveShadow = false,
}) {
  modelUrl = url;
  // const model = useGLTF(url) is destructure to get the material
  const { scene, materials } = useGLTF(url);
  const texture = useTexture({
    diffuse: diffuseTextureUrl,
    normal: normalTexureUrl,
    roughness: roughTextureUrl,
  });

  texture.diffuse.flipY = false;
  texture.normal.flipY = false;
  texture.roughness.flipY = false;

  scene.traverse((node) => {
    if (node.isMesh) {
      castShadow ? (node.castShadow = true) : (node.castShadow = false);
      receiveShadow ? (node.receiveShadow = true) : (node.castShadow = false);
    }
  });
  useEffect(() => {
    if (materials && materials["GeneralTexture.000"]) {
      materials["GeneralTexture.000"].map = texture.diffuse;
      materials["GeneralTexture.000"].normalMap = texture.normal;
      materials["GeneralTexture.000"].roughness = texture.roughness;
      materials["GeneralTexture.000"].needsUpdate = true;
    }
  }, [materials, texture]);
  return (
    <primitive object={scene} position={position ? position : [0, 0, 0]} />
  );
}

useGLTF.preload(modelUrl);

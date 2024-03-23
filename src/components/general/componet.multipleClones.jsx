import { Clone, useGLTF, useTexture } from "@react-three/drei";
import { useEffect } from "react";

export default function MultipleClones({
  url,
  textureUrl,
  castShadow,
  receiveShadow,
}) {
  const { scene, materials } = useGLTF(url);
  const texture = useTexture(textureUrl);
  texture.flipY = false;

  scene.traverse((node) => {
    if (node.isMesh) {
      castShadow ? (node.castShadow = true) : (node.castShadow = false);
      receiveShadow ? (node.receiveShadow = true) : (node.castShadow = false);
    }
  });

  useEffect(() => {
    if (materials && materials["GeneralTexture.000"]) {
      materials["GeneralTexture.000"].map = texture;
      materials["GeneralTexture.000"].needsUpdate = true;
    }
  }, [materials, texture]);

  return (
    <>
      <Clone // in stove
        object={scene}
        position={[0, 0, 0]}
        rotation-y={Math.PI / 0.2}
      />
      <Clone
        object={scene}
        position={[1.26, -0.25, 0.14]}
        rotation-y={Math.PI / 0.2}
      />
      <Clone
        object={scene}
        position={[1.26, -0.25, -0.24]}
        rotation-y={Math.PI * 1.9}
      />
      <Clone
        object={scene}
        position={[1.26, -0.25, -0.1]}
        rotation-y={Math.PI * 2.15}
      />
    </>
  );
}

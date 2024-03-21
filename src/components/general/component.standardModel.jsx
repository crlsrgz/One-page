import { useGLTF } from "@react-three/drei";

export default function StandardModel({
  url,
  position,
  castShadow = false,
  receiveShadow = false,
}) {
  const model = useGLTF(url);
  model.scene.traverse((node) => {
    if (node.isMesh) {
      castShadow ? (node.castShadow = true) : (node.castShadow = false);
      receiveShadow ? (node.receiveShadow = true) : (node.castShadow = false);
    }
  });
  return (
    <primitive
      object={model.scene}
      position={position ? position : [0, 0, 0]}
    />
  );
}

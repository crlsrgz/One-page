import { Clone, useGLTF } from "@react-three/drei";

export default function MultipleClones({ url }) {
  const model = useGLTF(url);
  return (
    <>
      <Clone // in stove
        object={model.scene}
        position={[0, 0, 0]}
        rotation-y={Math.PI / 0.2}
      />
      <Clone
        object={model.scene}
        position={[1.26, -0.25, 0.14]}
        rotation-y={Math.PI / 0.2}
      />
      <Clone
        object={model.scene}
        position={[1.26, -0.25, -0.24]}
        rotation-y={Math.PI * 1.9}
      />
      <Clone
        object={model.scene}
        position={[1.26, -0.25, -0.1]}
        rotation-y={Math.PI * 2.15}
      />
    </>
  );
}

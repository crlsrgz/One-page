import {
  Edges,
  GizmoViewport,
  OrbitControls,
  Outlines,
  PivotControls,
  Preload,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import { BoxGeometry } from "three";

export default function ComponentDetail() {
  const model = useGLTF("./wall.glb");
  console.log(model.scene.children);
  return (
    <Canvas camera={{ position: [-18, 1, 15], near: 0.01, far: 100, fov: 45 }}>
      <color args={["black"]} attach="background" />

      <Perf />
      <GizmoViewport
        axisColors={["red", "green", "blue"]}
        labelColor="black"
        position={[-2, 0, 0]}
        scale={0.4}
      />
      <OrbitControls makeDefault />
      <Stage
        contactShadow={{ opacity: 0.5, blur: 5 }}
        environment="city"
        preset={"portrait"}
        intensity={0.8}
      >
        {model.scene.children.map((item, index) => {
          return (
            <>
              <PivotControls
                anchor={[0, 0, 0]}
                lineWidth={1.2}
                scale={0.5}
                disableRotations
              >
                <mesh
                  key={index}
                  geometry={item.geometry}
                  material={item.material}
                  position={item.position}
                  rotation={item.rotation}
                >
                  {/* <Edges geometry={item.geometry} /> */}
                </mesh>
              </PivotControls>
            </>
          );
        })}
      </Stage>
    </Canvas>
  );
}

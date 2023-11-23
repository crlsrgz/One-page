import React from "react";
import { Html, OrbitControls, PresentationControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";

export default function SceneStarter(props) {
  return (
    <group position={props.position} scale={0.5}>
      {/* <OrbitControls
        enabled={false}
        autoRotate={true}
        maxPolarAngle={Math.PI * 0.48}
        minAzimuthAngle={Math.PI * -0.75}
        maxAzimuthAngle={Math.PI * 0.5}
        minDistance={1}
        maxDistance={8}
      /> */}
      <PresentationControls global={false} snap={true}  rotation={[0, 35, 0]} polar={[0,0]}>

      <directionalLight position={[-3, 4, 2]} />

      <ambientLight intensity={0.1} />
      <mesh position={props.meshPosition}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={props.color} />
      </mesh>
      {/* <mesh position={[0, 0, 0]} rotation-x={Math.PI * -0.5}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color={"#7A936C"} />
      </mesh> */}
      </PresentationControls>
    </group>
  );
}

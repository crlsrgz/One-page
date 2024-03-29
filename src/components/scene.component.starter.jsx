import React, { useEffect, useRef, useState } from "react";
import {
  Html,
  OrbitControls,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Perf } from "r3f-perf";

export default function SceneStarter(props) {
  const myRef = useRef();

  useFrame((state, delta) => {
    if (props.isRotating) {
      myRef.current.rotation.y += Math.PI * delta * 0.33;
    }
    // console.log( myRef.current.rotation.y);
  });

  const { width } = useThree((state) => state.viewport);
  return (
    <group
      position={[props.offset * props.posX * width, props.posY, props.posZ]}
      scale={0.5}
    >
      <PresentationControls
        enabled={true}
        global={false}
        snap={true}
        rotation={[0, 35, 0]}
        polar={[0, 0]}
      >
        <directionalLight position={[-3, 4, 2]} />
        <ambientLight intensity={0.1} />

        <mesh position={props.meshPosition} ref={myRef}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={props.color} />
        </mesh>
      </PresentationControls>
    </group>
  );
}

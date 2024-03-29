import React, { useEffect, useRef, useState } from "react";
import { PresentationControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export default function SceneStarter(props) {
  const myRef = useRef();

  useFrame((state, delta) => {
    if (props.isRotating) {
      myRef.current.rotation.y += Math.PI * delta * 0.12;
    }
    // console.log( myRef.current.rotation.y);
  });

  const { width } = useThree((state) => state.viewport);
  return (
    <group
      position={[props.offset * props.posX * width, props.posY, props.posZ]}
      scale={props.scale}
    >
      <PresentationControls
        enabled={true}
        global={false}
        snap={true}
        rotation={[0, 35, 0]}
        polar={[0.1, 0.5]}
      >
        <directionalLight position={[-3, 4, 2]} />
        <ambientLight intensity={0.1} />

        <mesh position={props.meshPosition} ref={myRef} receiveShadow>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={props.color} />
        </mesh>
      </PresentationControls>
    </group>
  );
}

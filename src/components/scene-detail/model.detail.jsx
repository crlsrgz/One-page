import React, { useEffect, useRef, useState } from "react";
import {
  useGLTF,
  useAnimations,
  Html,
  Box,
  ScreenSpace,
  Billboard,
  Text,
  Line,
  Edges,
  PivotControls,
  RoundedBox,
  CycleRaycast,
} from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";

function ModelParts(props) {
  const [hover, setHover] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);
  const [alternatePosition, setAlternatePosition] = useState(props.position);

  const refModelPart = useRef();
  const externPositon = {
    x: props.position.x,
    y: props.position.y + Math.random() * 0.75 + 1,
    z: props.position.z,
  };
  useFrame(({ clock }) => {
    // console.log(refCube.current.rotation);
    setTimeout(() => {
      if (props.name.toLowerCase().includes("ziegel")) {
        refModelPart.current.position.lerp(externPositon, 0.05);
      }
      if (props.name.toLowerCase().includes("sparren")) {
        refModelPart.current.position.lerp(
          {
            x: props.position.x - 1,
            y: props.position.y + -1,
            z: props.position.z,
          },
          0.008,
        );
      } else {
        refModelPart.current.position.lerp(props.position, 0.2);
      }
    }, 1000);
  });

  function displayName(e) {
    e.stopPropagation();
    if (nameVisible) {
      setNameVisible(false);
    } else {
      setNameVisible(true);
      console.log(props.position);
      console.log(props.name);
      console.log(props.name.toLowerCase().includes("sparren"));

      if (props.name.toLowerCase().includes("ziegel")) {
        let { x, y, z } = props.position;
        y += 1;
        setAlternatePosition({ x, y, z });
      }
      if (props.name.toLowerCase().includes("sparren")) {
        let { x, y, z } = props.position;
        x += -1;
        y += -1;
        setAlternatePosition({ x, y, z });
      }
    }
  }
  function hideName(e) {
    e.stopPropagation();
    setNameVisible(false);
    setAlternatePosition(props.position);
  }

  return (
    <>
      <mesh
        ref={refModelPart}
        name={props.name}
        castShadow
        receiveShadow
        geometry={props.geometry}
        material={hover ? props.materialAlternative : props.material}
        position={props.position}
        onPointerOver={(e) => {
          e.stopPropagation(), setHover(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation(), setHover(false);
        }}
        onClick={displayName}
        onPointerMissed={hideName}
      >
        {/* <Edges color={"red"}></Edges> */}
        {/* {hover ? props.material : props.materialAlternative} */}
      </mesh>

      {nameVisible ? (
        <>
          <Html position={[0, 3.5, 0]} center distanceFactor={undefined}>
            <h3 className=" text-3xl text-zinc-50">{props.name}</h3>
            <div className="info hidden">Div</div>
          </Html>
        </>
      ) : null}
    </>
  );
}

export function ModelDetail(props) {
  const model = useGLTF("/wall.glb");
  const animations = useAnimations(model.animations, model.scene);
  /* ::::::::: Leva ::::::::: */
  // const { animationName } = useControls({
  //   animationName: {
  //     options: animations.names,
  //   },
  // });

  /* ::::::::: Animation functions and States ::::::::: */

  const materialHover = new MeshStandardMaterial({
    color: "#7a0e0e",
    roughness: 0.9,
  });
  /* ═══ Traverse model to cahnge parameters ═══ */

  model.scene.traverse(function (node) {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
      // console.log(node);
      // node.material = materialHover;
    }
  });

  // const [animationState, setAnimationState] = useState(true);

  // useEffect(() => {
  //   const action = animations.actions[props.action];
  //   action.repetitions = 1;
  //   action.clampWhenFinished = true;
  //   action //
  //     .reset() //
  //     .fadeIn(0.5) //
  //     .play();

  //   //Cleanup
  //   return () => {
  //     action.fadeOut(0.08);
  //     console.log("dispose animation");
  //   };
  //   //////////////////////////
  //   //////////////////////////
  //   // const action = animations.actions[animationName];
  //   // animations.actions["000"].repetitions = 2;
  //   // animations.actions["000"].play();
  //   // animations.mixer.addEventListener("finished", () => {
  //   //   animations.actions["001"].play();
  // }, [props.action, animationState]);

  return (
    <>
      {/* <mesh>
        <primitive object={model.scene} castShadow />
      </mesh> */}

      {model.scene.children.map((element, index) => {
        return (
          <ModelParts
            key={index}
            name={element.name}
            geometry={element.geometry}
            material={element.material}
            materialAlternative={materialHover}
            position={element.position}
          />
        );
      })}
    </>
  );
}

useGLTF.preload("/wall.glb");

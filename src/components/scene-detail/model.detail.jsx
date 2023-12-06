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
} from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import { useControls } from "leva";

function ModelParts(props) {
  const [hover, setHover] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);

  function displayName(e) {
    e.stopPropagation();
    if (nameVisible) {
      setNameVisible(false);
    } else {
      setNameVisible(true);
    }
    const div = document.querySelector(".info");
    div.classList.remove("hideMe");
    div.textContent = props.name;
  }
  function hideName(e) {
    e.stopPropagation();
    setNameVisible(false);

    const div = document.querySelector(".info");
    div.classList.add("hideMe");
  }

  return (
    <>
      <mesh
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
        <Edges color={"red"}></Edges>
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

  const listAnimations = Object.keys(animations.actions);
  // console.log(model.scene);
  // console.log(animations.names);
  // console.log(animations.actions);
  // console.log(listAnimations);

  // console.log(listAnimations[0]);

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

  const [animationState, setAnimationState] = useState(true);
  const [animationTry, setAnimationTry] = useState(
    props.action ? props.action : "001",
  );
  // function playAnimation() {
  //   if (animationState) {
  //     setAnimationState(!animationState);
  //     setAnimationTry(props.action);
  //   } else {
  //     setAnimationState(!animationState);
  //     setAnimationTry(props.action);
  //   }
  // }
  // document.querySelector("body").addEventListener("dblclick", playAnimation);

  useEffect(() => {
    // const action = animations.actions[animationName];
    const action = animations.actions[props.action ? props.action : "001"];
    console.log(listAnimations);

    action.repetitions = 1;
    action.clampWhenFinished = true;
    action //
      .reset() //
      .fadeIn(0.5) //
      .play();

    //Cleanup
    return () => {
      action.fadeOut(0.08);
      console.log("dispose");
    };
  }, [props.action, animationState]);

  return (
    <>
      <Edges color={"red"}>
        <primitive object={model.scene} />
      </Edges>
      {/* {model.scene.children.map((element, index) => {
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
      })} */}
    </>
  );
}

useGLTF.preload("/wall.glb");

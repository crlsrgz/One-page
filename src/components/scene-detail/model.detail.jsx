import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import explodedModelPositions from "./lerpPositions";
import gsap from "gsap";

function ModelParts(props) {
  const [hover, setHover] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);

  const refModelPart = useRef();

  const explodedModelPositionsKeys = Object.keys(explodedModelPositions);
  const explodedModelPositionsLength = explodedModelPositionsKeys.length;

  useEffect(() => {
    for (let i = 0; i < explodedModelPositionsLength; i++) {
      if (
        props.name.toLowerCase().includes(explodedModelPositionsKeys[i]) &&
        props.changePosition
      ) {
        gsap.to(refModelPart.current.position, {
          x:
            explodedModelPositions[explodedModelPositionsKeys[i]].position.x +
            props.position.x,
          y:
            explodedModelPositions[explodedModelPositionsKeys[i]].position.y +
            props.position.y,
          z:
            explodedModelPositions[explodedModelPositionsKeys[i]].position.z +
            props.position.z,
          duration: 1.5,
          delay: 0.5,
        });
      } else {
        gsap.to(refModelPart.current.position, {
          x: props.position.x,
          y: props.position.y,
          z: props.position.z,
          duration: 0.2,
          delay: 0.2,
        });
      }
    }
  }, [props.changePosition]);

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
        changePosition={props.changePosition}
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

  const materialHover = new MeshStandardMaterial({
    color: "#7a0e0e",
    roughness: 0.9,
  });
  /* ═══ Traverse model to changge parameters ═══ */

  model.scene.traverse(function (node) {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });

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
            explodedModel={props.explodedModel}
            changePosition={props.explodedModel}
          />
        );
      })}
    </>
  );
}

useGLTF.preload("/wall.glb");

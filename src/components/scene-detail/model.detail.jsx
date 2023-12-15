import React, { useEffect, useRef, useState } from "react";
import { useGLTF, Html, Edges } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import explodedModelPositions from "./lerpPositions";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";

function ModelParts(props) {
  const [hover, setHover] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);
  const [alternatePosition, setAlternatePosition] = useState(props.position);
  const [objectName, setObjectName] = useState(["-", "..."]);

  const { camera, pointer } = useThree();
  const refModelPart = useRef();
  const explodedModelPositionsKeys = Object.keys(explodedModelPositions);
  const explodedModelPositionsLength = explodedModelPositionsKeys.length;

  const checkScreenWidth = window.innerWidth;
  console.log(checkScreenWidth);

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
          ease: "sine.inOut",
        });
      } else {
        gsap.to(refModelPart.current.position, {
          x: props.position.x,
          y: props.position.y,
          z: props.position.z,
          duration: 0.5,
          delay: 0.05,
          ease: "ease",
        });
      }
    }
  }, [props.changePosition]);

  function displayName(e) {
    e.stopPropagation();
    console.log(pointer.x, pointer.y, camera.position.z);

    for (let i = 0; i < explodedModelPositionsLength; i++) {
      if (nameVisible) {
        setNameVisible(false);
      } else {
        if (
          props.name.toLowerCase().includes(explodedModelPositionsKeys[i]) &&
          explodedModelPositions[explodedModelPositionsKeys[i]].titlePosition
        ) {
          setAlternatePosition([
            explodedModelPositions[explodedModelPositionsKeys[i]]
              .titlePosition[0],
            explodedModelPositions[explodedModelPositionsKeys[i]]
              .titlePosition[1],
            explodedModelPositions[explodedModelPositionsKeys[i]]
              .titlePosition[2],
          ]);
          setObjectName([
            explodedModelPositions[explodedModelPositionsKeys[i]].name,
            explodedModelPositions[explodedModelPositionsKeys[i]].description,
          ]);
        }

        setNameVisible(true);
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
      <Html position={[0.6, 4, 0.8]} distanceFactor={undefined}>
        <div className=" flex flex-row items-baseline gap-2">
          <div className="h-4 w-4 bg-gray-100"></div>
          <h3 className=" text-lg text-zinc-50">0.6, 4, 0.8</h3>
        </div>
      </Html>
      <Html position={[0.6, 3, 0.8]} distanceFactor={undefined}>
        <div className=" flex flex-row items-baseline gap-2">
          <div className="h-4 w-4 bg-gray-100"></div>
          <h3 className=" text-lg text-zinc-50">0.6, 3, 0.8</h3>
        </div>
      </Html>
      <Html position={[0.6, 2, 0.8]} distanceFactor={undefined}>
        <div className=" flex flex-row items-baseline gap-2">
          <div className="h-4 w-4 bg-gray-100"></div>
          <h3 className=" text-lg text-zinc-50">0.6, 2, 0.8</h3>
        </div>
      </Html>

      {nameVisible && checkScreenWidth >= 567 ? (
        <>
          <Html position={alternatePosition} distanceFactor={undefined}>
            <div className=" flex flex-row items-baseline gap-2">
              <div className="h-4 w-4 bg-gray-100"></div>
              <h3 className=" text-3xl text-zinc-50">{objectName[0]}</h3>
            </div>
            <p className=" mx-6 text-xl text-zinc-50">{objectName[1]}</p>
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

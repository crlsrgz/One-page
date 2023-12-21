import React, { useEffect, useRef, useState } from "react";
import { useGLTF, Html, Edges } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import explodedModelPositions from "./lerpPositions";
import gsap from "gsap";
import detailModel from "/wall.glb?url";

function ModelParts(props) {
  const [hover, setHover] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);
  const [alternatePosition, setAlternatePosition] = useState(props.position);
  const [objectName, setObjectName] = useState(["-", "..."]);
  const refModelPart = useRef();

  const explodedModelPositionsKeys = Object.keys(explodedModelPositions);
  const explodedModelPositionsLength = explodedModelPositionsKeys.length;

  //: DOM
  const checkScreenWidth = window.innerWidth;
  const detailInfoBoxMobileContainer = document.getElementById(
    "detail-description-container",
  );
  const detailInfoBoxMobile = document.getElementById("detailTitle");
  const detailInfoBoxMobileText = document.getElementById("detailText");

  useEffect(() => {
    for (let i = 0; i < explodedModelPositionsLength; i++) {
      if (
        props.name
          .toLowerCase()
          .includes(explodedModelPositionsKeys[i].toLowerCase()) &&
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
          duration: 1.25,
          delay: 0.25,
          ease: "sine.inOut",
        });
      } else {
        gsap.to(refModelPart.current.position, {
          x: props.position.x,
          y: props.position.y,
          z: props.position.z,
          duration: 0.6,
          delay: 0.1,
          ease: "ease",
        });
      }
    }
  }, [props.changePosition]);

  function displayName(e) {
    // e.stopPropagation();
    // console.log(props.name);
    setNameVisible(false);

    for (let i = 0; i < explodedModelPositionsLength; i++) {
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

    detailInfoBoxMobileContainer.classList.remove("hidden");
    detailInfoBoxMobile.textContent = objectName[0];
    detailInfoBoxMobileText.textContent = objectName[1];
  }

  const [testFunc, setTestFunc] = useState(true);

  useEffect(() => {
    displayName();
  }, [testFunc]);

  function hideName(e) {
    e.stopPropagation();
    setNameVisible(false);
    setAlternatePosition(props.position);
    detailInfoBoxMobileContainer.classList.add("hidden");
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
        onClick={(e) => {
          e.stopPropagation(), setTestFunc(!testFunc);
        }}
        onPointerMissed={hideName}
      >
        {/* <Edges color={"black"}></Edges> */}

        {/* {hover ? props.material : props.materialAlternative} */}
      </mesh>

      {nameVisible && checkScreenWidth > 640 ? (
        <>
          <Html
            position={alternatePosition}
            distanceFactor={undefined}
            className="flex w-64 flex-col items-start gap-4"
          >
            <div
              className="flex h-auto w-full flex-row items-baseline gap-2 rounded-md
            bg-zinc-900 bg-opacity-80 px-4 pb-4 pt-2 shadow-xl shadow-zinc-900"
            >
              <div className="h-4 w-4 bg-gray-100"></div>
              <h3 className=" text-xl text-zinc-50">{objectName[0]}</h3>
            </div>
            {objectName[1] !== "" ? (
              <p className="h-auto w-full  rounded-md bg-zinc-900 bg-opacity-80 px-4 pb-4 pt-2 text-sm text-zinc-50  shadow-lg shadow-zinc-800">
                {objectName[1]}
              </p>
            ) : (
              ""
            )}
          </Html>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export function ModelDetail(props) {
  const model = useGLTF(detailModel);
  const materialHover = new MeshStandardMaterial({
    color: "#7a0e0e",
    roughness: 0.9,
  });
  /* ═══ Traverse model to changge parameters ═══ */

  model.scene.traverse(function (node) {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
      node.material.normalScale = { x: 1, y: -1 };
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

useGLTF.preload(detailModel);

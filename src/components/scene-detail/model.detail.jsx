import React, { useEffect, useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import explodedModelPositions from "./lerpPositions";
import gsap from "gsap";
// eslint-disable-next-line import/no-unresolved
import detailModel from "/wall.glb?url";

function ModelParts(props) {
  const [hover, setHover] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);
  const [alternatePosition, setAlternatePosition] = useState(props.position);
  const [objectName, setObjectName] = useState(["-", "..."]);
  const refModelPart = useRef();

  //: DOM
  const checkScreenWidth = window.innerWidth;
  const detailInfoBoxMobileContainer = document.getElementById(
    "detail-description-container",
  );
  const detailInfoBoxMobile = document.getElementById("detailTitle");
  const detailInfoBoxMobileText = document.getElementById("detailText");

  //: Explode Model
  //: props.explodedModel are affected by the button at the top level scene

  const explodedModelPositionsKeys = Object.keys(explodedModelPositions);
  const explodedModelPositionsLength = explodedModelPositionsKeys.length;

  useEffect(() => {
    for (let i = 0; i < explodedModelPositionsLength; i++) {
      if (
        props.name
          .toLowerCase()
          .includes(explodedModelPositionsKeys[i].toLowerCase()) &&
        props.explodedModel
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
          ease: "bounce",
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
  }, [props.explodedModel]);

  //: Display and Hide Info Boxes

  function displayName() {
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
    }

    detailInfoBoxMobileContainer.classList.remove("hidden");
    detailInfoBoxMobile.textContent = objectName[0];
    detailInfoBoxMobileText.textContent = objectName[1];
  }

  //: The switch is used to run the effect after clicking on the mesh,
  //: mostly to run update the infoBox for mobile

  const [switchToDisplayName, setSwitchToDisplayName] = useState(true);

  useEffect(() => {
    displayName();
    console.log(nameVisible, switchToDisplayName);
  }, [switchToDisplayName]);

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
        explodedModel={props.explodedModel}
        onPointerOver={(e) => {
          e.stopPropagation(), setHover(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation(), setHover(false);
        }}
        onClick={(e) => {
          e.stopPropagation(),
            setNameVisible(false),
            setNameVisible(true),
            setSwitchToDisplayName(!switchToDisplayName);
        }}
        onPointerMissed={hideName}
      >
        {/* <Edges color={"black"}></Edges> */}
      </mesh>

      {nameVisible && checkScreenWidth > 640 ? (
        <>
          <Html
            position={alternatePosition}
            distanceFactor={undefined}
            className="flex  w-72 flex-col items-start gap-4"
          >
            <div
              className="flex h-auto w-full flex-col items-baseline gap-4 rounded-md
              bg-zinc-900 bg-opacity-80 px-4 pb-6 pt-4 shadow-xl shadow-zinc-900"
            >
              <div className="flex flex-row items-baseline gap-2">
                <span className=" h-3 w-3 bg-zinc-100"></span>
                <h3 className="text-xl">
                  {objectName[0] ? objectName[0] : ""}
                </h3>
              </div>
              <p className="h-auto w-full break-before-auto whitespace-pre-line text-sm ">
                {objectName[1] ? objectName[1] : ""}
              </p>
            </div>
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
          />
        );
      })}
    </>
  );
}

/* 💡  Preload and performance */
// useGLTF.preload(detailModel);

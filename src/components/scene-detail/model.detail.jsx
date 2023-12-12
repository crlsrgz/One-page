import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";

function ModelParts(props) {
  const explodedModelPositions = {
    ziegel: {
      name: "ziegel",
      position: {
        x: 0,
        y: Math.random() * 0.05 + 0.35,
        z: 0,
      },
      alpha: 0.1,
    },
    konterlattung: {
      name: "konterlattung",
      position: {
        x: 0,
        y: 0.25,
        z: 0,
      },
      alpha: 0.01,
    },
    dachlattung: {
      name: "dachlattung",
      position: {
        x: 0,
        y: 0.2,
        z: 0,
      },
      alpha: 0.01,
    },
    dachbahn: {
      name: "bahn",
      position: {
        x: 0.5,
        y: 0.1,
        z: 0,
      },
      alpha: 0.01,
    },
    sparren: {
      name: "sparren",
      position: {
        x: -1,
        y: -1,
        z: 0,
      },
      alpha: 0.01,
    },
    verkleidung: {
      name: "verkleidung",
      position: {
        x: -1,
        y: -1,
        z: 0,
      },
      alpha: 0.01,
    },
  };
  const [hover, setHover] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);
  const [alternatePosition, setAlternatePosition] = useState(props.position);

  const refModelPart = useRef();

  useFrame(() => {
    // console.log(refCube.current.rotation);
    if (
      props.name.toLowerCase().includes(explodedModelPositions.sparren.name) &&
      props.explodedModel
    ) {
      refModelPart.current.position.lerp(
        {
          x: explodedModelPositions.sparren.position.x + props.position.x,
          y: explodedModelPositions.sparren.position.y + props.position.y,
          z: explodedModelPositions.sparren.position.z + props.position.z,
        },
        explodedModelPositions.sparren.alpha,
      );
    } else if (
      props.name.toLowerCase().includes(explodedModelPositions.ziegel.name) &&
      props.explodedModel
    ) {
      refModelPart.current.position.lerp(
        {
          x: explodedModelPositions.ziegel.position.x + props.position.x,
          y: explodedModelPositions.ziegel.position.y + props.position.y,
          z: explodedModelPositions.ziegel.position.z + props.position.z,
        },
        explodedModelPositions.ziegel.alpha,
      );
    } else if (
      props.name
        .toLowerCase()
        .includes(explodedModelPositions.verkleidung.name) &&
      props.explodedModel
    ) {
      refModelPart.current.position.lerp(
        {
          x: explodedModelPositions.verkleidung.position.x + props.position.x,
          y: explodedModelPositions.verkleidung.position.y + props.position.y,
          z: explodedModelPositions.verkleidung.position.z + props.position.z,
        },
        explodedModelPositions.verkleidung.alpha,
      );
    } else if (
      props.name
        .toLowerCase()
        .includes(explodedModelPositions.konterlattung.name) &&
      props.explodedModel
    ) {
      refModelPart.current.position.lerp(
        {
          x: explodedModelPositions.konterlattung.position.x + props.position.x,
          y: explodedModelPositions.konterlattung.position.y + props.position.y,
          z: explodedModelPositions.konterlattung.position.z + props.position.z,
        },
        explodedModelPositions.konterlattung.alpha,
      );
    } else if (
      props.name
        .toLowerCase()
        .includes(explodedModelPositions.dachlattung.name) &&
      props.explodedModel
    ) {
      refModelPart.current.position.lerp(
        {
          x: explodedModelPositions.dachlattung.position.x + props.position.x,
          y: explodedModelPositions.dachlattung.position.y + props.position.y,
          z: explodedModelPositions.dachlattung.position.z + props.position.z,
        },
        explodedModelPositions.dachlattung.alpha,
      );
    } else if (
      props.name.toLowerCase().includes(explodedModelPositions.dachbahn.name) &&
      props.explodedModel
    ) {
      refModelPart.current.position.lerp(
        {
          x: explodedModelPositions.dachbahn.position.x + props.position.x,
          y: explodedModelPositions.dachbahn.position.y + props.position.y,
          z: explodedModelPositions.dachbahn.position.z + props.position.z,
        },
        explodedModelPositions.dachbahn.alpha,
      );
    } else {
      refModelPart.current.position.lerp(props.position, 0.2);
    }
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

useGLTF.preload("/wall.glb");

import { useAnimations, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import importProductModel from "/product.glb?url";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { LoopOnce } from "three";
import InfoTags from "./component.InfoTags";
// import importProductModel from "/wall.glb?url";
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const yourFunction = async (model) => {
  await delay(2000);
  console.log("Waited 2s");
  model.scene.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });
};

export function ModelProduct({ explode }) {
  const productModel = useGLTF(importProductModel);
  const animations = useAnimations(productModel.animations, productModel.scene);

  // yourFunction(productModel);

  /* ::::::::: check the states to activate actions ::::::::: */
  const [openDoorAction, setOpenDoorAction] = useState(false);
  const [openDrawerAction, setOpenDrawerAction] = useState(false);
  // });
  const [isDoorOpen] = useState(false);
  const [isDrawerOpen] = useState(false);
  const actionsList = Object.keys(animations.actions);
  function playAnimation(
    effectValue,
    actions,
    forwardAction,
    backwardAction,
    // the following checks if state is false prevents first rerender
    state = false,
  ) {
    if (effectValue && !state) {
      actions[forwardAction].reset();
      //if clampWhenFinished is set to true
      //the animation will automatically be paused on its last frame.
      actions[forwardAction].clampWhenFinished = true;
      actions[forwardAction].timeScale = 1;
      // Sets the loop mode and the number of repetitions. This method can be chained.
      actions[forwardAction].setLoop(LoopOnce, 1);
      actions[forwardAction].play();
      // setIsDoorOpen(true);
    }
    if (state) {
      actions[backwardAction].reset();
      actions[backwardAction].clampWhenFinished = true;
      actions[backwardAction].timeScale = 1;
      actions[backwardAction].setLoop(LoopOnce, 1);
      actions[backwardAction].play();
      // setIsDoorOpen(false);
    }
  }
  useEffect(() => {
    playAnimation(
      openDoorAction,
      animations.actions,
      "openDoor",
      "closeDoor",
      isDoorOpen,
    );

    // empy animation cycle of all the animations, to prevent mixing
    return () => {
      actionsList.forEach((actionName, index) => {
        if (index < 2) {
          animations.actions[actionName].fadeOut(0.5);
        }
      });
    };
    // the following checks if exploded is false prevents first rerender
  }, [openDoorAction]);
  useEffect(() => {
    playAnimation(
      openDrawerAction,
      animations.actions,
      "openDraw",
      "closeDraw",
      isDrawerOpen,
    );

    // empy animation cycle of all the animations, to prevent mixing
    return () => {
      actionsList.forEach((actionName, index) => {
        if (index > 1) {
          animations.actions[actionName].fadeOut(0.5);
        }
      });
    };
    // the following checks if exploded is false prevents first rerender
  }, [openDrawerAction]);

  return (
    <>
      <primitive object={productModel.scene} />
      <InfoTags
        value="2"
        handleClick={() => setOpenDoorAction(!openDoorAction)}
        position={[0.3, 0.45, 0.3]}
      />
      <InfoTags
        value="3"
        handleClick={() => setOpenDrawerAction(!openDrawerAction)}
        position={[0.0, 0.2, 0.3]}
      />
    </>
  );
  // return (
  //   <>
  //     {productModel.scene.children.map((element, index) => {
  //       console.log(element);
  //       // element.castShadow = true;
  //       return (
  //         <mesh
  //           key={index}
  //           ref={refModelPart}
  //           geometry={element.geometry}
  //           material={element.material}
  //           position={element.position}
  //         ></mesh>
  //       );
  //     })}
  //   </>
  // );
}
useGLTF.preload(importProductModel);

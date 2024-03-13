import { useAnimations, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import importProductModel from "/product.glb?url";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { LoopOnce } from "three";
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

  // });
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function playAnimation(
    actions,
    forwardAction,
    backwardAction,
    state = false,
  ) {
    if (explode && !state) {
      actions[forwardAction].reset();
      //if clampWhenFinished is set to true
      //the animation will automatically be paused on its last frame.
      actions[forwardAction].clampWhenFinished = true;
      actions[forwardAction].timeScale = 1;
      // Sets the loop mode and the number of repetitions. This method can be chained.
      actions[forwardAction].setLoop(LoopOnce, 1);
      actions[forwardAction].play();
      setIsDoorOpen(true);
    }
    if (state) {
      actions[backwardAction].reset();
      actions[backwardAction].clampWhenFinished = true;
      actions[backwardAction].timeScale = 1;
      actions[backwardAction].setLoop(LoopOnce, 1);
      actions[backwardAction].play();
      setIsDoorOpen(false);
    }

    return () => {
      actions[forwardAction].fadeOut(0.5);
      actions[backwardAction].fadeOut(0.5);
    };
  }
  useEffect(() => {
    // the following checks if exploded is false prevents first rerender
    playAnimation(animations.actions, "openDoor", "closeDoor", isDoorOpen);
    playAnimation(animations.actions, "openDraw", "closeDraw", isDrawerOpen);

    // the following checks if exploded is false prevents first rerender
  }, [explode]);

  return <primitive object={productModel.scene} />;
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

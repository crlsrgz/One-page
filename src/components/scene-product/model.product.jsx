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
  const openDoor = animations.actions["openDoor"];
  const closeDoor = animations.actions["closeDoor"];
  const openDrawer = animations.actions["openDraw"];
  const closeDrawer = animations.actions["closeDraw"];
  console.log(animations);
  useEffect(() => {
    // the following checks if exploded is false prevents first rerender
    if (explode && !isDoorOpen) {
      openDoor.reset();
      //if clampWhenFinished is set to true
      //the animation will automatically be paused on its last frame.
      openDoor.clampWhenFinished = true;
      openDoor.timeScale = 1;
      // Sets the loop mode and the number of repetitions. This method can be chained.
      openDoor.setLoop(LoopOnce, 1);
      openDoor.play();
      setIsDoorOpen(true);
    }
    if (isDoorOpen) {
      closeDoor.reset();
      closeDoor.clampWhenFinished = true;
      closeDoor.timeScale = 1;
      closeDoor.setLoop(LoopOnce, 1);
      closeDoor.play();
      setIsDoorOpen(false);
    }
    if (explode && !isDrawerOpen) {
      openDrawer.reset();
      //if clampWhenFinished is set to true
      //the animation will automatically be paused on its last frame.
      openDrawer.clampWhenFinished = true;
      openDrawer.timeScale = 1;
      // Sets the loop mode and the number of repetitions. This method can be chained.
      openDrawer.setLoop(LoopOnce, 1);
      openDrawer.play();
      setIsDoorOpen(true);
    }
    if (isDrawerOpen) {
      closeDrawer.reset();
      closeDrawer.clampWhenFinished = true;
      closeDrawer.timeScale = 1;
      closeDrawer.setLoop(LoopOnce, 1);
      closeDrawer.play();
      setIsDrawerOpen(false);
    }

    return () => {
      // Prevent mixing of animations by addding fadeout
      openDoor.fadeOut(0.5);
      closeDoor.fadeOut(0.5);
      openDrawer.fadeOut(0.5);
      closeDrawer.fadeOut(0.5);

      console.log("dispose");
    };

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

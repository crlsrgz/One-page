import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { LoopOnce } from "three";

/*:: Components ::*/
import InfoTags from "./component.InfoTags";

/*:: General functions ::*/
import { delay } from "../../globals/screen";

/*:: Models ::*/
// eslint-disable-next-line import/no-unresolved
import importProductModel from "/product.glb?url";

const traverseProperties = async (model) => {
  await delay(2000);
  model.scene.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });
};

export function ModelProduct() {
  const productModel = useGLTF(importProductModel);
  const animations = useAnimations(productModel.animations, productModel.scene);

  traverseProperties(productModel);
  /* ::::::::: check the states to activate actions ::::::::: */
  const [openDoorAction, setOpenDoorAction] = useState(false);
  const [openDrawerAction, setOpenDrawerAction] = useState(false);
  // });
  const [isDoorOpen] = useState(false);
  const [isDrawerOpen] = useState(false);
  const actionsList = Object.keys(animations.actions);
  function playAnimation(
    effectValue, // the following checks if state is false prevents first rerender
    actions,
    forwardAction,
    backwardAction,
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
        idString="OpenDoor"
        value="O"
        handleClick={() => setOpenDoorAction(!openDoorAction)}
        position={[0.45, 0.45, 0.3]}
      />
      <InfoTags
        idString="OpenDrawer"
        value="O"
        handleClick={() => setOpenDrawerAction(!openDrawerAction)}
        position={[0.45, 0.1, 0.3]}
      />
    </>
  );
}
// useGLTF.preload(importProductModel);

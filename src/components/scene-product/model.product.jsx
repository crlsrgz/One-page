import { useAnimations, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import importProductModel from "/product.glb?url";
import { useEffect, useRef } from "react";
import gsap from "gsap";
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
  const refModelPart = useRef();
  console.log(productModel);

  // productModel.scene.castShadow = true;
  yourFunction(productModel);
  // productModel.scene.traverse((node) => {
  //   if (node.isMesh) {
  //     node.castShadow = true;
  //     node.receiveShadow = true;
  //   }
  // });

  useEffect(() => {
    const openDoor = animations.actions["bb"];
    // the following checks if exploded is false prevents first rerender
    if (explode) {
      openDoor.play();

      const duration = openDoor.getClip().duration;
      console.log(duration);
      setTimeout(() => {
        openDoor.halt();
      }, duration * 500);
      return () => {
        openDoor.reset().play();
        console.log("dispose");
      };
    }
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

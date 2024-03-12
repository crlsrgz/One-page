import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import importProductModel from "/product.glb?url";
// import importProductModel from "/wall.glb?url";

export function ModelProduct() {
  const productModel = useGLTF(importProductModel);
  // console.log("Model Product", productModel);
  // return (
  //   <group>
  //     {" "}
  //     <primitive ={productModel} />
  //   </group>
  // );
  // const gltf = useLoader(GLTFLoader, importProductModel);
  return <primitive object={productModel.scene} />;
  // return <mesh geometry={gltf}></mesh>;
}
useGLTF.preload(importProductModel);

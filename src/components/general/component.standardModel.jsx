import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { MeshStandardMaterial } from "three";

// let modelUrl = "";
export default function StandardModel({
  url,
  diffuseTextureUrl = null,
  normalTexureUrl = null,
  roughTextureUrl = null,
  position,
  castShadow = false,
  receiveShadow = false,
  wireframe = false,
}) {
  // modelUrl = url;
  // const model = useGLTF(url) is destructure to get the material
  const { scene, materials } = useGLTF(url);
  const texture = useTexture({
    diffuse: diffuseTextureUrl,
    normal: normalTexureUrl,
    roughness: roughTextureUrl,
  });

  texture.diffuse.flipY = false;
  texture.normal.flipY = false;
  texture.roughness.flipY = false;

  // scene.traverse((node) => {
  //   if (node.isMesh) {
  //     castShadow ? (node.castShadow = true) : (node.castShadow = false);
  //     receiveShadow ? (node.receiveShadow = true) : (node.castShadow = false);
  //   }
  // });
  const fragmentShader = `
 varying vec3 vNormal;
 void main() {
    float edgeFactor = length(vNormal);
    if (edgeFactor > 0.999) discard; 
    gl_FragColor = vec4(vec3(edgeFactor), 1.0);
 }
`;

  const vertexShader = `
 varying vec3 vNormal;
 void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
 }
`;

  const CustomWireframeMaterial = ({ color }) => {
    return (
      <shaderMaterial
        attach="material"
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{ color: { value: color } }}
      />
    );
  };

  const Model = () => {
    const mesh = useRef();

    return (
      <mesh ref={mesh}>
        <boxGeometry args={[1, 1, 1]} />
        <CustomWireframeMaterial color="orange" />
      </mesh>
    );
  };

  scene.traverse((node) => {
    if (node.isMesh && wireframe) {
      const newMaterial = new MeshStandardMaterial({
        color: "#4a8bad",
        roughness: 0.7,
        transparent: false,
        opacity: 0.5,
      });
      node.material = newMaterial;
    }
  });
  useEffect(() => {
    if (materials && materials["GeneralTexture.000"]) {
      materials["GeneralTexture.000"].map = texture.diffuse;
      materials["GeneralTexture.000"].normalMap = texture.normal;
      materials["GeneralTexture.000"].roughness = texture.roughness;
      materials["GeneralTexture.000"].needsUpdate = true;
    }
  }, [materials, texture]);
  return (
    <>
      <primitive object={scene} position={position ? position : [0, 0, 0]} />
      {/* <Model /> */}
    </>
  );
}

// useGLTF.preload(modelUrl);

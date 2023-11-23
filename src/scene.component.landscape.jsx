import React, { Suspense, useEffect, useRef, useState } from "react";
import { Billboard, Html, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";

const canvasElement = document.querySelector('canvas');

export default function SceneLandscape() {
  const modelLandscape = useGLTF("./model.glb");
  const refCanvas = useRef();
  const refOrbitControls = useRef();

  const [parametersFog, setParametersFog] = useState([1, 20]);
  const [enableOrbitControls, setEnableOrbitControls] =useState(true)

  function cameraChanged() {
   
    const cameraDistance = calculateCameraDistance(
      refOrbitControls.current.object.position,
      refOrbitControls.current.target,
    );
    if (cameraDistance < 3) {
      setParametersFog([2, 20]);
    } else if (cameraDistance < 5 && cameraDistance > 3) {
      setParametersFog([5, 20]);
    } else {
      setParametersFog([12, 30]);
    }
  }

  function disableScene(event){
    if(event.key === "Escape"){
      setEnableOrbitControls(false)
      document.querySelector('canvas').style['opacity'] = 0.1;
      console.log('disabled scene');
    } 
  }
  
  function enableScene(){
    if(!enableOrbitControls){
      setEnableOrbitControls(true)     
      document.querySelector('canvas').style['opacity'] = 1;
      console.log('enabled scene');
    }
  }

  window.addEventListener('keydown', disableScene)

  function calculateCameraDistance(
    cameraPositionVector = { x: 1, y: 1, z: 1 },
    targetPositionVector = { x: 0, y: 0, z: 0 },
  ) {
    const distance = Math.sqrt(
      Math.pow(cameraPositionVector.x - targetPositionVector.x, 2) +
        Math.pow(cameraPositionVector.y - targetPositionVector.y, 2) +
        Math.pow(cameraPositionVector.z - targetPositionVector.z, 2),
    );
    return distance;
  }
  
  return (
    <Canvas 
      ref={refCanvas}
      camera={{ position: [0, 5, 0], near: 0.01, far: 100, fov: 35 }}
      onClick={enableScene}
      
    >
      
      <Perf />
 
      
      <OrbitControls makeDefault enabled={enableOrbitControls}
        ref={refOrbitControls}
        maxPolarAngle={Math.PI * 0.48}
        minAzimuthAngle={Math.PI * -0.75}
        maxAzimuthAngle={Math.PI * 0.5}
        minDistance={1}
        maxDistance={8}
        onChange={cameraChanged}
      />
      <directionalLight position={[-3, 4, 2]} />
      <ambientLight intensity={0.1} />
      <fog
        args={["slategray", parametersFog[0], parametersFog[1]]}
        attach={"fog"}
      />
      <color args={["slategray"]} attach="background" />
      <Suspense>
        <group>
          <Html occlude center position={[0, 2, 0]}>
            <h1 className="select-none text-center font-urbanistMedium text-4xl text-zinc-50">
              Scene
            </h1>
          </Html>
          <primitive object={modelLandscape.scene} scale={3} />
        </group>
      </Suspense>
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"#BADA55"} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation-x={Math.PI * -0.5}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color={"#7A936C"} />
      </mesh>


    </Canvas>
  );
}

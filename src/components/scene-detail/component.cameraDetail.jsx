import { Html, OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const CameraFunctionality = (props) => {
  const { camera } = useThree();
  camera.position.set(-1, 6, 2);

  function setCameraPosition() {
    camera.position.set(-1, 6, 2);
    camera.lookAt(0, 2, 0);
  }

  useEffect(() => {
    setCameraPosition();
    console.log(props.cameraChanged);
  }, [props.cameraChanged]);

  return (
    <>
      <OrbitControls
        makeDefault
        target={[0, 2, 0]}
        maxPolarAngle={Math.PI * 0.65}
        minPolarAngle={Math.PI * -0.85}
        maxAzimuthAngle={Math.PI * 0.5}
        minAzimuthAngle={Math.PI * -0.45}
        maxDistance={10}
        minDistance={2}
        enablePan={false}
      />
    </>
  );
};

export default CameraFunctionality;

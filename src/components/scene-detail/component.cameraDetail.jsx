import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const CameraFunctionality = (props) => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(-3, 2, 5);
    // setCameraPosition();
  }, [props.cameraChanged]);

  return (
    <>
      <OrbitControls
        makeDefault
        target={[0, 2.5, 0]}
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

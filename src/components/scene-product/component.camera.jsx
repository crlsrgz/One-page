import checkScreen from "../../globals/screen";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { OrbitControls } from "@react-three/drei";

export default function CameraControl(props) {
  const { camera } = useThree();

  const cameraPosition = checkScreen.width >= 567 ? [0, 0.3, 3] : [0, 0.3, 3];

  const cameraLastPosition = useRef({
    x: camera.position.x,
    y: camera.position.y,
  });

  useEffect(() => {
    if (props.firstLoad.current) {
      gsap.to(camera.position, {
        x: cameraPosition[0],
        y: cameraPosition[1],
        z: cameraPosition[2],
        duration: 2,
        delay: 0.1,
      });
    }
    props.firstLoad.current = true;
  }, [props.resetCamera]);

  return (
    <OrbitControls
      makeDefault
      target={[0, 0.4, 0]}
      maxPolarAngle={Math.PI * 0.5}
      minPolarAngle={Math.PI * -0.85}
      maxAzimuthAngle={Math.PI * 0.5}
      minAzimuthAngle={Math.PI * -0.45}
      maxDistance={8}
      minDistance={2}
      enablePan={true}
      onChange={(e) => {
        const maxX = 1;
        const minX = -1;
        const maxY = 1;
        const minY = 0.2;
        const x = e?.target.target.x;
        const y = e?.target.target.y;

        if (x < minX || x > maxX) {
          e?.target.target.setX(x < minX ? minX : maxX);
          camera.position.setX(cameraLastPosition.current.x);
        }
        if (y < minY || y > maxY) {
          e?.target.target.setY(y < minY ? minY : maxY);
          camera.position.setY(cameraLastPosition.current.y);
        }
        cameraLastPosition.current.x = camera.position.x;
        cameraLastPosition.current.y = camera.position.y;
      }}
    />
  );
}

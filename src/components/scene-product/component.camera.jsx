import { checkScreen } from "../../globals/screen";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { OrbitControls } from "@react-three/drei";

export default function CameraControl(props) {
  const { camera } = useThree();
  const refControls = useRef();

  const cameraPosition = checkScreen.width >= 567 ? [2, 0.3, 3] : [2, 0.3, 3.5];

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
      gsap.to(camera.target, {
        x: 0,
        y: 0.5,
        z: 0,
        duration: 0,
        delay: 0.0,
      });
    }
    props.firstLoad.current = true;
  }, [props.resetCamera]);

  const limitPosition = 1;
  useEffect(() => {
    refControls.current.addEventListener("change", function () {
      if (this.target.y < limitPosition * -1) {
        this.target.y = limitPosition * -1;
        camera.position.y = limitPosition * -1;
      } else if (this.target.y > limitPosition) {
        this.target.y = limitPosition;
        camera.position.y = limitPosition;
      }
    });
  }, []);

  return (
    <OrbitControls
      makeDefault
      ref={refControls}
      target={checkScreen.width >= 567 ? [0, 0.5, 0] : [0, 0.8, 0]}
      enablePan={false}
      /* ═══ disabled dor dev ═══ */

      maxPolarAngle={Math.PI * 0.5}
      minPolarAngle={Math.PI * 0.35}
      maxAzimuthAngle={Math.PI * 0.45}
      minAzimuthAngle={Math.PI * -0.25}
      maxDistance={3.2}
      minDistance={1}
      // onChange={(e) => {
      //   const maxX = 0.5;
      //   const minX = -0.5;
      //   const maxY = 0.8;
      //   const minY = 0.2;
      //   const maxZ = 1;
      //   const minZ = -0.5;
      //   const x = e?.target.target.x;
      //   const y = e?.target.target.y;
      //   const z = e?.target.target.z;

      //   if (x < minX || x > maxX) {
      //     e?.target.target.setX(x < minX ? minX : maxX);
      //     camera.position.setX(cameraLastPosition.current.x);
      //   }
      //   if (y < minY || y > maxY) {
      //     e?.target.target.setY(y < minY ? minY : maxY);
      //     camera.position.setY(cameraLastPosition.current.y);
      //   }
      //   if (z < minZ || z > maxZ) {
      //     e?.target.target.setZ(z < minZ ? minZ : maxZ);
      //     camera.position.setZ(cameraLastPosition.current.z);
      //   }
      //   cameraLastPosition.current.x = camera.position.x;
      //   cameraLastPosition.current.y = camera.position.y;
      //   cameraLastPosition.current.z = camera.position.z;
      // }}
    />
  );
} //

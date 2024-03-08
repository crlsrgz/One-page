import checkScreen from "../../globals/screen";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";

export default function CameraControl(props) {
  const { camera } = useThree();
  const cameraPosition = checkScreen.width >= 567 ? [0, 0.3, 3] : [0, 0.3, 3];
  useEffect(() => {
    if (props.firstLoad.current) {
      console.log("hello");
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
}

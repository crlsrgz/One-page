import { GizmoViewport, Html, OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { Euler, Quaternion, Vector3 } from "three";
import {
  EffectComposer,
  Outline,
  Selection,
  Select,
} from "@react-three/postprocessing";
import gsap from "gsap";
import { Perf } from "r3f-perf";

export default function CameraControl(props) {
  const { camera } = useThree();
  useEffect(() => {
    if (props.firstLoad.current) {
      console.log("hello");
      gsap.to(camera.position, {
        x: 10,
        y: 10,
        z: 10,
        duration: 2,
        delay: 0.1,
      });
    }
    props.firstLoad.current = true;
  }, [props.resetCamera]);
}

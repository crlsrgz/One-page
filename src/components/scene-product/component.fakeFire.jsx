import { useEffect, useRef, useState } from "react";
import { delay, generateRandomFloat } from "../../globals/screen";
import { useFrame } from "@react-three/fiber";

export default function FakeFire() {
  const [randomIntensity, setRandomIntensity] = useState(0.3);
  async function randomValues() {
    await delay(1000);
    setRandomIntensity(generateRandomFloat(0.1, 0.4));
  }
  useEffect(() => {
    randomValues();
  }, [randomIntensity]);

  const fireRef = useRef();
  const fireRef2 = useRef();
  const fireRef3 = useRef();

  const random = generateRandomFloat(2, 4);
  useFrame((state, delta) => {
    // fireRef.current.rotation.y += delta * 0.3;
    const elapsedTime = state.clock.elapsedTime;
    fireRef.current.intensity = Math.abs(0.1 * Math.sin(elapsedTime * random));
    fireRef2.current.intensity = Math.abs(0.5 * Math.sin(elapsedTime * random));
    fireRef3.current.intensity = Math.abs(1 * Math.sin(elapsedTime / 3));
  });

  return (
    <>
      <pointLight
        color={"orange"}
        ref={fireRef}
        intensity={0.5}
        distance={2}
        castShadow={true}
        position={[0, 0.45, 0.47]}
        shadow-normalBias={0.12}
        shadow-mapSize={[512, 512]}
        shadow-camera-top={1}
        shadow-camera-right={1}
        shadow-camera-bottom={-1}
        shadow-camera-left={-1}
        shadow-camera-near={0.01}
        shadow-camera-far={2}
      />
      <pointLight
        color={"orange"}
        ref={fireRef2}
        intensity={0.5}
        distance={2}
        castShadow={true}
        position={[0, 0.45, 0.47]}
        shadow-normalBias={0.12}
        shadow-mapSize={[512, 512]}
        shadow-camera-top={1}
        shadow-camera-right={1}
        shadow-camera-bottom={-1}
        shadow-camera-left={-1}
        shadow-camera-near={0.01}
        shadow-camera-far={2}
      />
      <pointLight
        color={"orange"}
        ref={fireRef3}
        intensity={0.5}
        distance={2}
        castShadow={true}
        position={[0, 0.45, 0.47]}
        shadow-normalBias={0.12}
        shadow-mapSize={[512, 512]}
        shadow-camera-top={1}
        shadow-camera-right={1}
        shadow-camera-bottom={-1}
        shadow-camera-left={-1}
        shadow-camera-near={0.01}
        shadow-camera-far={2}
      />
    </>
  );
}

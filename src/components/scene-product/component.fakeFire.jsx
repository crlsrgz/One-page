import { useEffect, useState } from "react";
import { delay, generateRandomFloat } from "../../globals/screen";

export default function FakeFire() {
  const [randomIntensity, setRandomIntensity] = useState(0.3);
  async function randomValues() {
    await delay(1000);
    setRandomIntensity(generateRandomFloat(0.1, 0.4));
  }
  useEffect(() => {
    randomValues();
  }, [randomIntensity]);
  return (
    <>
      <pointLight
        color={"orange"}
        intensity={randomIntensity}
        distance={3}
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

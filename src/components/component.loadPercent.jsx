import { useProgress } from "@react-three/drei";

export default function LoadPercent() {
  const { progress } = useProgress();
  return (
    <div className="z-50 flex h-full w-full items-center justify-center">
      <div className=" flex items-center justify-center space-x-1 text-sm text-zinc-50">
        <svg
          fill="none"
          className="h-32 w-32 animate-spin"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
            fill="currentColor"
            fill-rule="evenodd"
          />
        </svg>

        <div className="text-6xl">{Math.floor(progress)} % </div>
      </div>
    </div>
    // <Html center> {progress} % </Html>
  );
}

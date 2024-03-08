import { Html } from "@react-three/drei";

export default function InfoTags({
  value = 0,
  handleClick,
  position = [0, 1, 0],
}) {
  return (
    <>
      <Html center position={position}>
        <button
          className={`relative box-border h-12 w-12 cursor-pointer rounded-md border-2 border-slate-50 bg-slate-50 bg-opacity-10 font-urbanistMedium text-xl hover:animate-pulse-slow hover:bg-opacity-70 hover:text-zinc-900`}
          onClick={handleClick}
        >
          <p className="absolute w-full -translate-y-1/2 text-center">
            {value}
          </p>
        </button>
      </Html>
    </>
  );
}

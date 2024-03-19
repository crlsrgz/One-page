import { Icon } from "@iconify/react";
import { Html } from "@react-three/drei";

export default function InfoTags({
  idString = "0",
  value = 0,
  iconValue = "",
  iconSize = 4,
  handleClick,
  position = [0, 1, 0],
}) {
  return (
    <>
      <Html center position={position}>
        <button
          id={idString}
          className={`relative box-border h-12 w-12 cursor-pointer rounded-md border-2 border-slate-50 bg-slate-50 bg-opacity-10 font-urbanistMedium text-xl hover:animate-pulse-slow hover:bg-opacity-70 hover:text-zinc-900`}
          onClick={handleClick}
        >
          <p className="absolute flex w-full -translate-y-1/2 justify-center text-center">
            {iconValue ? (
              //"" + iconSize cast to string
              <Icon icon={iconValue} className={`text-${"" + iconSize}xl`} />
            ) : (
              value
            )}
          </p>
        </button>
      </Html>
    </>
  );
}

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
      <Html center zIndexRange={10} position={position}>
        <button
          id={idString}
          className={`border-2x shadow-zinc-95 relative box-border h-16 w-16  cursor-pointer rounded-md bg-zinc-900 bg-opacity-70 font-urbanistMedium text-xl shadow-lg shadow-zinc-900  outline outline-1 outline-zinc-100 hover:animate-pulse hover:bg-zinc-950  active:shadow-zinc-800`}
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

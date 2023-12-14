import { useState } from "react";

export default function ButtonSideMenu({ textContent, handleClick = null }) {
  return (
    <button
      className=" h-10 w-48 cursor-pointer rounded-md p-2 text-start outline outline-1 outline-zinc-300 hover:outline-2 hover:outline-zinc-100 focus:bg-zinc-300 focus:text-sm focus:text-zinc-800 focus:outline-4 "
      onClick={handleClick}
    >
      {textContent}
    </button>
  );
}

export function ButtonSideDetail({ handleClick, textContent, tooltipContent }) {
  const [tooltip, setTooltip] = useState(false);

  return (
    <div className=" flex h-20 w-20 flex-row items-center justify-center">
      <button
        className="h-16 w-16 rounded-lg bg-slate-300"
        onClick={handleClick}
        onPointerOver={() => setTooltip(true)}
        onPointerLeave={() => setTooltip(false)}
      >
        {textContent}
      </button>
      <div
        className={`relative opacity-0 transition-opacity ${
          tooltip ? " opacity-100" : ""
        }`}
      >
        <div className="absolute -top-6 left-4 h-auto w-36 rounded-lg bg-zinc-500 px-4 py-2 ">
          {tooltipContent}
        </div>
      </div>
    </div>
  );
}

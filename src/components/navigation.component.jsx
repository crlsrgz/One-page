import { useEffect, useState } from "react";
import { Link, NavLink, Routes } from "react-router-dom";

export default function ComponentMainNav() {
  const [mobileNav, setMobileNav] = useState(false);
  function hideNavigation() {
    if (mobileNav) {
      setMobileNav(false);
    } else {
      setMobileNav(true);
    }
  }

  return (
    <>
      <h1 className="cursor-pointer font-yeseva text-6xl">
        <Link to={"/"}>Title</Link>
      </h1>{" "}
      <nav className="mx-12 hidden w-full flex-row items-center justify-start gap-8 text-xl sm:flex">
        <Link to={"/"} className="underline-offset-8 hover:underline">
          Home
        </Link>
        <Link to={"/detail"} className="underline-offset-8 hover:underline">
          Detail
        </Link>
        <Link to={"/"} className="underline-offset-8 hover:underline">
          Product
        </Link>
        <Link to={"/"} className="underline-offset-8 hover:underline">
          Landscape
        </Link>
      </nav>
      <nav className={`mx-4 w-full sm:hidden`}>
        <div className="flex w-full cursor-pointer flex-row items-baseline justify-end">
          <svg
            className="z-20 fill-current text-zinc-100"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 20 20"
            onClick={hideNavigation}
          >
            <title>Mobile Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </div>

        <div
          className={`${
            mobileNav
              ? "mt fixed left-0 top-0 z-10 h-screen w-screen cursor-pointer bg-neutral-800 p-4 pt-36 text-xl opacity-100 transition-all"
              : "mt top-50 fixed left-0 z-10 hidden h-screen w-screen cursor-pointer bg-neutral-800 p-4 pt-36 text-xl opacity-20 transition-all"
          }`}
        >
          <ul className="flex w-full flex-col items-center justify-start gap-2 ">
            <li className="h-24 w-full py-8  text-center underline-offset-8 transition-all hover:bg-neutral-600 hover:underline">
              <Link className="block h-24" to={"/"} onClick={hideNavigation}>
                Home
              </Link>
            </li>
            <li className="h-24 w-full py-8 text-center underline-offset-8 transition-all hover:bg-neutral-600 hover:underline">
              <Link
                className="block h-24"
                to={"/detail"}
                onClick={hideNavigation}
              >
                Detail
              </Link>
            </li>
            <li className="h-24 w-full py-8 text-center underline-offset-8 transition-all hover:bg-neutral-600 hover:underline">
              <Link className="block h-24" to={"/"} onClick={hideNavigation}>
                Product
              </Link>
            </li>
            <li className="h-24 w-full py-8 text-center underline-offset-8 transition-all hover:bg-neutral-600 hover:underline">
              <Link className="block h-24" to={"/"} onClick={hideNavigation}>
                Landscape
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";

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
      <h1 className="cursor-pointer select-none font-yeseva text-6xl">
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
      <nav className={`mx-4 w-full select-none sm:hidden`}>
        <div className={`flex w-full cursor-pointer `}>
          <svg
            className={` absolute right-8 top-12 z-20 fill-current text-zinc-100 ${
              mobileNav ? "hidden" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            onClick={hideNavigation}
          >
            <title>Mobile Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>

          <svg
            className={` absolute right-8 top-12 z-20 fill-current text-zinc-100 ${
              mobileNav ? "" : "hidden"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            onClick={hideNavigation}
          >
            <title>Mobile Menu</title>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"
            />
          </svg>
        </div>

        <div
          className={`${
            mobileNav
              ? "fixed left-0 top-0 z-10 h-screen w-screen cursor-pointer bg-neutral-800 p-4 pt-20 text-xl opacity-100 transition-all"
              : "pt-18 fixed left-0 top-24 z-10 hidden h-screen w-screen cursor-pointer bg-neutral-800 p-4 pt-20 text-xl opacity-20 transition-all"
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

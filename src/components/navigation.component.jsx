import { Icon } from "@iconify/react";
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
          <button onClick={hideNavigation}>
            <Icon
              icon="tdesign:menu-application"
              className={` absolute right-8 top-8 z-20 fill-current text-zinc-100 ${
                mobileNav ? "hidden" : ""
              }`}
              width={36}
              height={36}
            />
          </button>
          <button onClick={hideNavigation}>
            <Icon
              icon="tdesign:close"
              className={` absolute right-8 top-8 z-20 fill-current text-zinc-100 ${
                mobileNav ? "" : "hidden"
              }`}
              width={36}
              height={36}
            />
          </button>
        </div>

        <div
          className={`
          
          fixed left-0 top-0 z-10 h-screen w-screen cursor-pointer bg-neutral-800 p-4 pt-20 text-xl  transition-all
          ${
            mobileNav
              ? "animate-mobile-menu-in"
              : "animate-mobile-menu-out hidden"
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

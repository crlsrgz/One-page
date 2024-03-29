import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { delay } from "../globals/screen";

export default function ComponentMainNav() {
  const [menuVisibleMobile, setMenuVisibleMobile] = useState(false);
  function hideNavigation() {
    if (menuVisibleMobile) {
      setMenuVisibleMobile(false);
    } else {
      setMenuVisibleMobile(true);
    }
  }
  const [menuVisibleDesktop, setMenuVisibleDesktop] = useState("");
  const hideNavigationDesktop = async () => {
    setMenuVisibleDesktop("");
    await delay(5000);
    setMenuVisibleDesktop("animate-desktop-menu-out");
  };
  const showNavigationDesktop = async () => {
    setMenuVisibleDesktop("animate-desktop-menu-out");
    await delay(50);
    setMenuVisibleDesktop("animate-desktop-menu-in");
  };
  useEffect(() => {
    hideNavigationDesktop();
  }, []);
  return (
    <>
      <h1 className="cursor-pointer select-none font-yeseva text-6xl">
        <Link to={"/"}>Cubos</Link>
      </h1>{" "}
      <button
        onMouseLeave={hideNavigationDesktop}
        onMouseEnter={showNavigationDesktop}
        className={`w-full px-0 md:px-2 ${menuVisibleDesktop}`}
      >
        <nav className="mx-2 hidden h-full w-full flex-row justify-end gap-3 text-xl sm:flex md:mx-6 md:gap-6">
          <Link to={"/cube"} className="underline-offset-8 hover:underline">
            Cube
          </Link>
          <Link to={"/detail"} className="underline-offset-8 hover:underline">
            Detail
          </Link>
          <Link to={"/product"} className="underline-offset-8 hover:underline">
            Product
          </Link>
          <Link to={"/building"} className="underline-offset-8 hover:underline">
            Building
          </Link>
          <Link
            to={"/landscape"}
            className="underline-offset-8 hover:underline"
          >
            Landscape
          </Link>
        </nav>
      </button>
      <nav className={`mx-4 w-full select-none sm:hidden`}>
        <div className={`flex w-full cursor-pointer `}>
          <button onClick={hideNavigation}>
            <Icon
              icon="tdesign:menu-application"
              className={` absolute right-8 top-6 z-20 fill-current text-zinc-100 ${
                menuVisibleMobile ? "hidden" : ""
              }`}
              width={36}
              height={36}
            />
          </button>
          <button onClick={hideNavigation}>
            <Icon
              icon="tdesign:close"
              className={` absolute right-8 top-6 z-40 fill-current text-zinc-100 ${
                menuVisibleMobile ? "" : "hidden"
              }`}
              width={36}
              height={36}
            />
          </button>
        </div>

        <div
          className={`
          
          fixed left-0 top-0 z-30  h-screen w-screen cursor-pointer bg-neutral-800 p-4 pt-20 text-xl  transition-all
          ${
            menuVisibleMobile
              ? "animate-mobile-menu-in"
              : "animate-mobile-menu-out hidden"
          }`}
        >
          <ul className="flex w-full flex-col items-center justify-start gap-2 ">
            <li className="h-24 w-full py-8 text-center underline-offset-8 transition-all hover:bg-neutral-600 hover:underline">
              <Link
                className="block h-24"
                to={"/cube"}
                onClick={hideNavigation}
              >
                Cube
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
              <Link
                className="block h-24"
                to={"/product"}
                onClick={hideNavigation}
              >
                Product
              </Link>
            </li>
            <li className="h-24 w-full py-8 text-center underline-offset-8 transition-all hover:bg-neutral-600 hover:underline">
              <Link
                className="block h-24"
                to={"/building"}
                onClick={hideNavigation}
              >
                Building
              </Link>
            </li>
            <li className="h-24 w-full py-8 text-center underline-offset-8 transition-all hover:bg-neutral-600 hover:underline">
              <Link
                className="block h-24"
                to={"/landscape"}
                onClick={hideNavigation}
              >
                Landscape
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

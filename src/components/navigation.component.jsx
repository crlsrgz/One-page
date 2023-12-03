import { useState } from "react";
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
      <h1 className="font-yeseva text-6xl">
        <Link to={"/"}>Title</Link>
      </h1>{" "}
      <nav className=" mx-12 hidden w-full flex-row items-center justify-start gap-6 text-lg sm:flex ">
        <Link to={"/"}>Home</Link>
        <Link to={"/detail"}>Detail</Link>
        <Link to={"/"}>Product</Link>
        <Link to={"/"}>Landscape</Link>
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
          className={`mt fixed left-0 top-0 z-10 h-screen w-screen cursor-pointer bg-neutral-800 p-4 pt-36 text-xl ${
            mobileNav ? "" : "hidden"
          }`}
        >
          <ul className="flex w-full flex-col items-center justify-start gap-2 ">
            <li className="h-24 w-5/6 py-8  text-center hover:bg-neutral-600">
              <Link className="block h-24" to={"/"} onClick={hideNavigation}>
                Home
              </Link>
            </li>
            <li className="h-24 w-5/6 py-8 text-center hover:bg-neutral-600">
              <Link
                className="block h-24"
                to={"/detail"}
                onClick={hideNavigation}
              >
                Detail
              </Link>
            </li>
            <li className="h-24 w-5/6 py-8 text-center hover:bg-neutral-600">
              <Link className="block h-24" to={"/"} onClick={hideNavigation}>
                Product
              </Link>
            </li>
            <li className="h-24 w-5/6 py-8 text-center hover:bg-neutral-600">
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

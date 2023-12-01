import { Link, NavLink, Routes } from "react-router-dom";

export default function ComponentMainNav() {
  return (
    <>
      <h1 className="font-yeseva text-6xl">Title</h1>{" "}
      <nav className="mx-12 hidden flex-row items-center justify-start gap-6 sm:flex ">
        <Link to={"/"}>Home</Link>
        <Link to={"/detail"}>Detail</Link>
        <Link to={"/"}>Product</Link>
        <Link to={"/"}>Landscape</Link>
      </nav>
      <nav className="mx-12 flex flex-row items-center justify-start gap-6 sm:hidden ">
        <Link to={"/"}>Home</Link>
        <Link to={"/detail"}>Detail</Link>
        <Link to={"/"}>Product</Link>
        <Link to={"/"}>Landscape</Link>
      </nav>
    </>
  );
}

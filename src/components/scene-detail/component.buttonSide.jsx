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

import { useEffect, useState } from "react";
import { checkScreen, delay } from "../../globals/screen";
import { searchLongestWord } from "../../globals/generalFunctions.module";

export const SceneTitle = ({
  linesArray = ["AA"],
  opacityDelay = 5000,
  //animate-desktop-menu-out
  hideDelay = 2000,
  scenDescription = [" ", " "],
  color,
  positionY = false,
}) => {
  /* ::::::::: Page title  ::::::::: */
  const longestWord = searchLongestWord(linesArray).length;

  const [displayPageTitle, setDisplayPageTitle] = useState("");
  const hidePageTitle = async () => {
    await delay(opacityDelay);
    setDisplayPageTitle("animate-mobile-menu-out");
    await delay(hideDelay);
    setDisplayPageTitle("hidden");
  };

  useEffect(() => {
    hidePageTitle();
  }, []);
  /* ::::::::: Page title END ::::::::: */
  //Review the logic of the position of the title
  return (
    <>
      <div
        id="page-title"
        className={`fixed ${
          positionY ? "bottom-16" : "bottom-0"
        } right-0 z-40 p-8  `}
        style={{ color: color ? color : "" }}
      >
        <h1
          className={`font-urbanistMedium text-6xl sm:text-7xl  md:text-8xl lg:text-10xl ${displayPageTitle} drop-shadow-[0_5px_5px_rgba(0,0,0,1)]`}
        >
          {linesArray.map((line, index) => {
            return <p key={index}>{line}</p>;
          })}
        </h1>
        <h2
          className={` text-4xl ${displayPageTitle} drop-shadow-[0_2px_2px_rgba(0,0,0,1)]`}
        >
          {scenDescription.map((line, index) => {
            return <p key={index}>{line}</p>;
          })}
        </h2>
      </div>
    </>
  );
};

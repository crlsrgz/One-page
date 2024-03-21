import { useEffect, useState } from "react";
import { checkScreen, delay } from "../../globals/screen";
import { searchLongestWord } from "../../globals/generalFunctions.module";

export const SceneTitle = ({
  linesArray = ["AA"],
  opacityDelay = 5000,
  //animate-desktop-menu-out
  hideDelay = 2000,

  color,
}) => {
  /* ::::::::: Page title  ::::::::: */
  const longestWord = searchLongestWord(linesArray).length;
  const titleSizeVertical =
    checkScreen.height >= 500 ? "text-12xl" : "text-8xl";
  const titleSizeLongWords = longestWord >= 8 ? "text-6xl" : "text-8xl";

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
  return (
    <>
      <div
        id="page-title"
        className={`fixed bottom-0 right-0 z-10 p-8 font-urbanistMedium ${titleSizeLongWords} sm:${titleSizeVertical} ${displayPageTitle} `}
        // className={`fixed bottom-0 right-0 z-40 p-8 font-urbanistMedium text-5xl sm:text-12xl ${displayPageTitle}`}
        style={{ color: color ? color : "" }}
      >
        {linesArray.map((line, index) => {
          return <p key={index}>{line}</p>;
        })}
      </div>
    </>
  );
};

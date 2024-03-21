import { useEffect, useState } from "react";
import { checkScreen, delay } from "../../globals/screen";

export const SceneTitle = ({
  linesArray = ["AA"],
  opacityDelay = 3000,
  //animate-desktop-menu-out
  hideDelay = 2000,
}) => {
  /* ::::::::: Page title  ::::::::: */

  const searchLongestWord = (array) => {
    const arrayLength = linesArray.length;
    let indexOfLongestWord = -1;
    let wordLength = -1;
    for (let i = 0; i < arrayLength; i++) {
      if (array[i].length > wordLength) {
        wordLength = array[i].length;
        indexOfLongestWord = i;
      }
    }
    return array[indexOfLongestWord];
  };

  const longestWord = searchLongestWord(linesArray).length;
  console.log(longestWord);
  const titleSizeVertical =
    checkScreen.height >= 500 ? "text-12xl" : "text-8xl";
  const titleSizeLongWords =
    checkScreen.width > 400 && longestWord < 8 ? "text-8xl" : "text-6xl";

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
        className={`fixed bottom-0 right-0 z-40 p-8  font-urbanistMedium ${titleSizeLongWords} sm:${titleSizeVertical} ${displayPageTitle}`}
      >
        {linesArray.map((line, index) => {
          return <p key={index}>{line}</p>;
        })}
      </div>
    </>
  );
};

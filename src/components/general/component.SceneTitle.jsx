import { useEffect, useState } from "react";
import { checkScreen, delay } from "../../globals/screen";

export const SceneTitle = ({
  linesArray = ["AA"],
  opacityDelay = 3000,
  //animate-desktop-menu-out
  hideDelay = 2000,
}) => {
  /* ::::::::: Page title  ::::::::: */
  const titleSizeVertical =
    checkScreen.height >= 500 ? "text-12xl" : "text-8xl";
  console.log(checkScreen, titleSizeVertical);
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
        className={`fixed bottom-0 right-0 z-40 p-12  font-urbanistMedium text-8xl sm:${titleSizeVertical} ${displayPageTitle}`}
      >
        {linesArray.map((line, index) => {
          return <p key={index}>{line}</p>;
        })}
      </div>
    </>
  );
};

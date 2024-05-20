"use client";

import {useEffect, useState} from "react";
import {Button} from "./ui/button";
import {ArrowUpToLine} from "lucide-react";

export const ScrollToTop = () => {
  const [buttonState, setButtonState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 400 ? setButtonState(true) : setButtonState(false);
    });
  }, []);

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  return (
    <>
      {buttonState && (
        <Button
          onClick={goToTop}
          className="fixed bottom-4 right-4 opacity-70 shadow-md"
          size="icon"
        >
          <ArrowUpToLine className="h-4 w-4" />
        </Button>
      )}
    </>
  );
};

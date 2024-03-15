import { useEffect } from "react";

function useOverflowControl(btnClicked) {
  useEffect(() => {
    if (btnClicked) {
      document.body.style.overflow = "hidden";
    } else if (!btnClicked) {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [btnClicked]);
}

export default useOverflowControl;

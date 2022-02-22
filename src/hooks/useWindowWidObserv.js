import { useState } from "react";

export default function useWindowWidObserv() {
  const [windowWidth, setWindowWidth] = useState(0);

  const windowObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      setWindowWidth(entry.contentRect.width);
    });
  });

  const windowElem = document.querySelector("body");
  windowObserver.observe(windowElem);

  return windowWidth;
}

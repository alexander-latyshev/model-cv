import { useState, useEffect } from "react";

function getWindowDimensions() {
  const innerHeight = window?.innerHeight;
  const innerWidth = window?.innerWidth;

  return {
    width: innerWidth,
    heigth: innerHeight,
  } as Record<string, number>;
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

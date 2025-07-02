import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import landing3 from "../../assets/landing3.jpg";
import landing4 from "../../assets/landing4.jpg";
import "./background.css";

const IMAGES = [landing4, landing3,];
const FADE_MS = 1000;

export default function background({ herocount = 0 }) {
  const safeIndex = Math.min(Math.max(herocount, 0), IMAGES.length - 1);
  const [active, setActive] = useState(safeIndex);
  const timeoutRef = useRef(null);

 
  useEffect(() => {
    if (safeIndex === active) return;


    timeoutRef.current = setTimeout(() => setActive(safeIndex), FADE_MS);

    return () => clearTimeout(timeoutRef.current);
  }, [safeIndex, active]);

  return (
    <div
      className={clsx("bg", { "bg--fade": safeIndex !== active })}
      style={{ backgroundImage: `url(${IMAGES[safeIndex]})` }}
    />
  );
}

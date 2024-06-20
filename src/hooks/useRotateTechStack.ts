import { useEffect, useState } from "react";
import useDevice from "./useDevice";
import isMobileDevice from "../utils/isMobileDevice";

export default function useRotateTechStack(i: number) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const { device } = useDevice();

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, [device]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setHoveredIndex(i);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredIndex(null);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      if (hoveredIndex === null) {
        setHoveredIndex(i);
      } else {
        setHoveredIndex(null);
      }
    }
  };

  return { hoveredIndex, handleMouseEnter, handleMouseLeave, handleClick };
}

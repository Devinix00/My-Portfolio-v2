import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import useDevice from "./useDevice";

interface useSidebarAnimationProps {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export default function useSidebarAnimation({
  activeIndex,
  setActiveIndex,
}: useSidebarAnimationProps) {
  const { device } = useDevice();
  const ref = useRef<HTMLDivElement>(null);
  const mobileOrTablet = device !== "2xl";

  useEffect(() => {
    if (ref.current) {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActiveIndex(activeIndex);
          }
        },
        {
          threshold: mobileOrTablet ? 0.35585 : 0.6,
        }
      );

      intersectionObserver.observe(ref?.current);

      return () => {
        intersectionObserver.disconnect();
      };
    }
  }, [ref, activeIndex, setActiveIndex, device, mobileOrTablet]);

  return { ref };
}

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
  const thresholdMap: { [device: string]: number } = {
    sm: 0.35,
    md: 0.4,
    lg: 0.5,
    "2xl": 0.6,
  };

  const threshold = thresholdMap[device as Device];

  useEffect(() => {
    if (ref.current) {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActiveIndex(activeIndex);
          }
        },
        {
          threshold: threshold,
        }
      );

      intersectionObserver.observe(ref?.current);

      return () => {
        intersectionObserver.disconnect();
      };
    }
  }, [ref, activeIndex, setActiveIndex, device, threshold]);

  return { ref };
}

import clsx from "clsx";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SideNavigationProps {
  activeIndex: number;
}

function SideNavigation({ activeIndex }: SideNavigationProps) {
  const { smoothScroll } = useSmoothScroll();
  const [animationEnd, setAnimationEnd] = useState(false);

  const scrollTargetsMap: { [key: number]: string } = {
    0: "initial-screen",
    1: "about-me",
    2: "projects",
    3: "final-screen",
  };

  const handleButtonClick = (index: number) => {
    if (scrollTargetsMap[index]) {
      smoothScroll(scrollTargetsMap[index]);
    }
  };

  useEffect(() => {
    if (activeIndex === 0) {
      setTimeout(() => {
        setAnimationEnd(true);
      }, 4750);
    } else {
      setAnimationEnd(true);
    }
  }, [activeIndex]);

  return (
    <div className="fixed z-50 2xl:right-10 2xl:top-32 right-[14px] top-20 transform -translate-y-1/2 gap-4 flex flex-col">
      {Array(4)
        .fill(null)
        .map((_, i) => (
          <motion.button
            initial={{ opacity: 0, y: -50 }}
            animate={
              activeIndex === i
                ? { opacity: 1, y: 0, scale: 1.5 }
                : { opacity: 1, y: 0 }
            }
            transition={
              animationEnd
                ? { delay: 0, duration: 0.2 }
                : i === 0
                ? { delay: activeIndex === 0 ? 2.85 : 0, duration: 0.2 }
                : {
                    delay: activeIndex === 0 ? 0.275 * i + 2.85 : 0.4 * i,
                    duration: 0.2,
                  }
            }
            key={i}
            className={clsx(
              "w-3 h-3 flex bg-silver hover:scale-150 hover:bg-white items-center justify-center rounded-full",
              activeIndex === i && "scale-150 bg-white"
            )}
            onClick={() => handleButtonClick(i)}
          />
        ))}
    </div>
  );
}

export default SideNavigation;

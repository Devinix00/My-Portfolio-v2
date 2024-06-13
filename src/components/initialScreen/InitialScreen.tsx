import { FaArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import clsx from "clsx";
import useSidebarAnimation from "../../hooks/useSidebarAnimation";

interface InitialScreenProps {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export default function InitialScreen({
  activeIndex,
  setActiveIndex,
}: InitialScreenProps) {
  const [isHoveredIcon, setIsHoveredIcon] = useState(false);
  const { smoothScroll } = useSmoothScroll();
  const { ref } = useSidebarAnimation({ activeIndex: 0, setActiveIndex });
  const [animationEnd, setAnimationEnd] = useState(false);
  const [hideIcon, setHideIcon] = useState(false);

  const hancleClickDownIcon = () => {
    smoothScroll("tech-stacks");
    setIsHoveredIcon(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimationEnd(true);
    }, 2250);
  }, []);

  useEffect(() => {
    if (animationEnd) {
      if (activeIndex === 1) {
        setTimeout(() => {
          setHideIcon(true);
        }, 500);
      } else if (activeIndex === 0 && hideIcon) {
        setHideIcon(false);
      }
    }
  }, [activeIndex, animationEnd, hideIcon]);

  return (
    <div
      ref={ref}
      id="initial-screen"
      className="relative w-full min-h-[100vh] bg-white flex items-center justify-center"
    >
      <motion.div
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        animate={{ clipPath: "circle(150% at 50% 50%)" }}
        transition={{ delay: 0.1, duration: 2 }}
        className="absolute flex items-center top-0 left-0 w-full h-full bg-black"
      />
      /
      <section className="flex-col justify-between xl:flex-row items-center w-[calc(100%-80px)] md:w-[calc(100%-160px)] xl:w-[1200px] flex xl:top-auto absolute xl:relative xl:mx-auto top-1/2 -translate-y-1/2 xl:translate-y-0 gap-4 z-10 translate-x-0 rounded-xl">
        <motion.img
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          src="/images/my_photo.png"
          alt="나"
          className="min-w-[320px] w-[320px] h-[320px] min-h-[320px] lg:w-[480px] lg:h-[480px] md:min-w-[400px] md:min-h-[400px] xl:min-w-[540px] xl:min-h-[540px]"
        />
        <section className="mt-auto flex w-full flex-col gap-4">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.5 }}
            className="pb-2 text-center font-bold whitespace-nowrap xl:text-left border-b-2 xl:text-3xl text-xl w-full"
          >
            Front-End Developer 김범수
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.75, duration: 0.5 }}
            className="w-full text-md text-center xl:text-left"
          >
            안녕하세요! 저는 모던 프레임워크와 라이브러리를 활용한 웹 개발에
            열정을 가지고 있는 프론트엔드 개발자입니다. 주로 React와 Next.js를
            사용하며, Typescript와 SCSS, TailwindCSS를 통해 반응형 디자인을
            구현합니다. 클린 코드를 작성하는 것과 컴포넌트 및 커스텀 훅의
            재사용성을 높이는 것을 중요하게 생각합니다.
          </motion.p>
        </section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: activeIndex === 0 ? 1 : 0 }}
          transition={{
            delay: activeIndex === 0 ? (animationEnd ? 0 : 2.25) : 0,
            duration: 0.5,
          }}
          className="xl:absolute h-9 xl:left-1/2 xl:-translate-x-1/2 xl:bottom-0 xl:translate-y-[150%]"
        >
          {!hideIcon && (
            <FaArrowDown
              size={36}
              fill={isHoveredIcon ? "#1b1b1e" : "white"}
              onMouseEnter={() => setIsHoveredIcon(true)}
              onMouseLeave={() => setIsHoveredIcon(false)}
              onClick={hancleClickDownIcon}
              className={clsx(
                "cursor-pointer p-2 border-2 transition-all duration-300 rounded-full",
                isHoveredIcon && "bg-silver"
              )}
            />
          )}
        </motion.div>
      </section>
    </div>
  );
}

import Title from "../title/Title";
import Skills from "./Skills";
import Tools from "./Tools";
import MyInfo from "./MyInfo";
import useSidebarAnimation from "../../hooks/useSidebarAnimation";
import { Dispatch, SetStateAction, useRef } from "react";
import AboutMeTitle from "./AboutMeTitle";
import { motion, useInView } from "framer-motion";

interface AboutMeProps {
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

function AboutMe({ setActiveIndex }: AboutMeProps) {
  const { ref: containerRef } = useSidebarAnimation({
    activeIndex: 1,
    setActiveIndex,
  });

  const contentsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(contentsRef, {
    once: true,
    margin: "-100px 0px 0px 0px",
  });

  return (
    <div
      ref={containerRef}
      id="about-me"
      className="min-h-[100vh] 3xl:min-h-fit pt-20 mt-20"
    >
      <Title>About me</Title>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{
          type: "spring",
          duration: 2,
          delay: 0.25,
        }}
        ref={contentsRef}
        className="bg-gray w-full p-6 md:p-8 rounded-3xl"
      >
        <AboutMeTitle>My Informations</AboutMeTitle>
        <MyInfo />
        <Skills />
        <Tools />
      </motion.div>
    </div>
  );
}

export default AboutMe;

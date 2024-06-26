import React, { useEffect, useState } from "react";
import InitialScreen from "./components/initialScreen/InitialScreen";
import WhiteSpaceContainer from "./components/containers/WhiteSpaceContainer";
import { motion, useScroll, useSpring } from "framer-motion";
import SideNavigation from "./components/sideNavigation/SideNavigation";
import Projects from "./components/projects/Projects";
import FinalScreen from "./components/finalScreen/FinalScreen";
import { useModalStore } from "./stores/useModalStore";
import AboutMe from "./components/aboutMe/AboutMe";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const { isModalOpened } = useModalStore();

  useEffect(() => {
    if (isModalOpened) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isModalOpened]);

  return (
    <React.Fragment>
      <div className="text-silver bg-black">
        <motion.div
          className="z-50 origin-top-left sticky top-0 h-1 bg-red"
          style={{ scaleX }}
        />
        <SideNavigation activeIndex={activeIndex} />
        <InitialScreen
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <WhiteSpaceContainer>
          <AboutMe setActiveIndex={setActiveIndex} />
          <Projects setActiveIndex={setActiveIndex} />
          <FinalScreen setActiveIndex={setActiveIndex} />
        </WhiteSpaceContainer>
      </div>
    </React.Fragment>
  );
}

export default App;

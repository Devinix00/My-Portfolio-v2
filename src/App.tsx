import React, { useState } from "react";
import InitialScreen from "./components/initialScreen/InitialScreen";
import TechStacks from "./components/techStacks/TechStacks";
import WhiteSpaceContainer from "./components/containers/WhiteSpaceContainer";
import { motion, useScroll, useSpring } from "framer-motion";
import SideNavigation from "./components/sideNavigation/SideNavigation";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <React.Fragment>
      <div className="text-silver bg-black">
        <motion.div
          className="z-50 origin-top-left sticky top-0 h-1 bg-red"
          style={{ scaleX }}
        />
        <SideNavigation
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <InitialScreen setActiveIndex={setActiveIndex} />
        <WhiteSpaceContainer>
          <TechStacks setActiveIndex={setActiveIndex} />
        </WhiteSpaceContainer>
      </div>
    </React.Fragment>
  );
}

export default App;

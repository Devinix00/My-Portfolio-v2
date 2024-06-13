import { useInView } from "framer-motion";
import { techStacks } from "../../constants/techStacks";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import useSidebarAnimation from "../../hooks/useSidebarAnimation";
import Title from "../title/Title";
import IndividualTechStack from "./IndividualTechStack";

interface TechStacksProps {
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export default function TechStacks({ setActiveIndex }: TechStacksProps) {
  const [animationEnd, setAnimationEnd] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const { ref: divRef } = useSidebarAnimation({
    activeIndex: 1,
    setActiveIndex,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setAnimationEnd(true);
      }, 1500);
    }
  }, [inView]);

  return (
    <div
      ref={divRef}
      id="tech-stacks"
      className="min-h-[100vh] 3xl:min-h-fit pt-20"
    >
      <Title>Tech Stacks</Title>
      <div
        ref={ref}
        className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {techStacks.map((techStack, i) => (
          <IndividualTechStack {...{ techStack, inView, i, animationEnd }} />
        ))}
      </div>
    </div>
  );
}

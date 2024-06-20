import { Dispatch, SetStateAction, useRef, useState } from "react";
import useSidebarAnimation from "../../hooks/useSidebarAnimation";
import Title from "../title/Title";
import IndividualProject from "./individualProject/IndividualProject";
import { projects } from "../../constants/projects";
import { useInView } from "framer-motion";

interface ProjectsProps {
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export default function Projects({ setActiveIndex }: ProjectsProps) {
  const { ref: containerRef } = useSidebarAnimation({
    activeIndex: 2,
    setActiveIndex,
  });

  const contentsRef = useRef<HTMLDivElement>(null);
  const [animationEnd, setAnimationEnd] = useState(false);
  const inView = useInView(contentsRef, {
    once: true,
    margin: "-100px 0px 0px 0px",
  });

  return (
    <div
      ref={containerRef}
      id="projects"
      className="min-h-[100vh] 3xl:min-h-fit pt-20"
    >
      <Title>Projects</Title>

      <div ref={contentsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <IndividualProject {...{ project, i, inView, animationEnd }} />
        ))}
      </div>
    </div>
  );
}

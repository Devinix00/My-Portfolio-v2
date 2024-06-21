import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import useSidebarAnimation from "../../hooks/useSidebarAnimation";
import Title from "../title/Title";
import IndividualProject from "./IndividualProject";
import { projects } from "../../constants/projects";
import { AnimatePresence, useInView } from "framer-motion";
import ProjectModal from "./projectModal/ProjectModal";
import { useModalStore } from "../../stores/useModalStore";

interface ProjectsProps {
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export default function Projects({ setActiveIndex }: ProjectsProps) {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const { isModalOpened, setIsModalOpened } = useModalStore();
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

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setAnimationEnd(true);
      }, 800);
    }
  }, [inView]);

  return (
    <React.Fragment>
      <div
        ref={containerRef}
        id="projects"
        className="min-h-[100vh] 3xl:min-h-fit pt-20"
      >
        <Title>Projects</Title>

        <div
          ref={contentsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, i) => (
            <IndividualProject
              key={i}
              {...{
                project,
                i,
                inView,
                animationEnd,
                setIsModalOpened,
                setModalIndex,
              }}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {isModalOpened && (
          <ProjectModal
            modalIndex={modalIndex}
            setIsModalOpened={setIsModalOpened}
          />
        )}
      </AnimatePresence>
    </React.Fragment>
  );
}

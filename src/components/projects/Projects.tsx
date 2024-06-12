import { Dispatch, SetStateAction } from "react";
import useSidebarAnimation from "../../hooks/useSidebarAnimation";
import Title from "../title/Title";

interface ProjectsProps {
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export default function Projects({ setActiveIndex }: ProjectsProps) {
  const { ref } = useSidebarAnimation({
    activeIndex: 2,
    setActiveIndex,
  });

  return (
    <div ref={ref} id="projects" className="min-h-[100vh] mt-20">
      <Title>Projects</Title>
    </div>
  );
}

import { Dispatch, SetStateAction } from "react";
import useSidebarAnimation from "../../hooks/useSidebarAnimation";
import Title from "../title/Title";
import IndividualProject from "./individualProject/IndividualProject";
import { projects } from "../../constants/projects";

interface ProjectsProps {
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export default function Projects({ setActiveIndex }: ProjectsProps) {
  const { ref } = useSidebarAnimation({
    activeIndex: 2,
    setActiveIndex,
  });

  return (
    <div ref={ref} id="projects" className="min-h-[100vh] 3xl:min-h-fit pt-20">
      <Title>Projects</Title>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <IndividualProject project={project} />
        ))}
      </div>
    </div>
  );
}

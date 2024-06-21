import ProjectBanner from "./ProjectBanner";
import ProjectIntro from "./ProjectIntro";

interface ProjectOutlineProps {
  modalIndex: number | null;
}

export default function ProjectOutline({ modalIndex }: ProjectOutlineProps) {
  return (
    <div className="h-[2000px]">
      <ProjectBanner modalIndex={modalIndex} />

      <div className="px-6 mt-8 md:px-0 md:w-[736px] md:mx-auto">
        <ProjectIntro modalIndex={modalIndex} />
      </div>
    </div>
  );
}

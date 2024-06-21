import ProjectBanner from "./ProjectBanner";
import ProjectIntro from "./ProjectIntro";
import ProjectTechStacks from "./ProjectTechStacks";

interface ProjectOutlineProps {
  modalIndex: number | null;
}

export default function ProjectOutline({ modalIndex }: ProjectOutlineProps) {
  return (
    <div className="h-[2000px]">
      <ProjectBanner modalIndex={modalIndex} />

      <div className="px-6 mt-8 md:px-0 md:w-[736px] md:mx-auto">
        <ProjectIntro modalIndex={modalIndex} />
        <div className="flex flex-col gap-8 mt-8 text-gray">
          <ProjectTechStacks modalIndex={modalIndex} />
        </div>
      </div>
    </div>
  );
}

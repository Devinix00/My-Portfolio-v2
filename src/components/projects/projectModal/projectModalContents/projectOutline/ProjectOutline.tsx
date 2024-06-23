import ProjectBanner from "./ProjectBanner";
import ProjectIntro from "./ProjectIntro";
import ProjectMyContribution from "./ProjectMyContribution";
import ProjectTechStacks from "./ProjectTechStacks";

interface ProjectOutlineProps {
  modalIndex: number | null;
}

export default function ProjectOutline({ modalIndex }: ProjectOutlineProps) {
  return (
    <div className="h-[2000px]">
      <ProjectBanner modalIndex={modalIndex} />

      <div className="mt-8 px-6 md:px-0 md:w-[720px] md:mx-auto">
        <ProjectIntro modalIndex={modalIndex} />
        <div className="flex flex-col gap-8 mt-8 text-gray">
          <ProjectTechStacks modalIndex={modalIndex} />
          <ProjectMyContribution modalIndex={modalIndex} />
        </div>
      </div>
    </div>
  );
}

import ProjectBanner from "./ProjectBanner";

interface ProjectOutlineProps {
  modalIndex: number | null;
}

export default function ProjectOutline({ modalIndex }: ProjectOutlineProps) {
  return (
    <div className="h-[2000px]">
      <ProjectBanner modalIndex={modalIndex} />
    </div>
  );
}

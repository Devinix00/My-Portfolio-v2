import { projectDetails } from "../../../../../constants/projectDetails";
import ProjectModalTitle from "./ProjectModalTitle";

interface ProjectTechStacksProps {
  modalIndex: number | null;
}

export default function ProjectTechStacks({
  modalIndex,
}: ProjectTechStacksProps) {
  return (
    <div>
      <ProjectModalTitle type="techStack" />
      {modalIndex !== null && (
        <ul className="flex flex-col gap-2">
          {projectDetails[modalIndex].techStacks?.map((techStack, i) => (
            <li className="bg-silver_light w-full p-2 rounded-lg">
              {i + 1}. {techStack}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

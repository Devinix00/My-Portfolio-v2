import { FaTools } from "react-icons/fa";

interface ProjectModalTitleProps {
  type: "techStack" | "myContribution";
}

export default function ProjectModalTitle({ type }: ProjectModalTitleProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const projectModalTitleMap: { [key: string]: any } = {
    techStack: {
      icon: <FaTools />,
      content: "주요 기술 스택",
    },
  };

  const projectMotalTitle = projectModalTitleMap[type];

  return (
    <p className="text-2xl font-semibold mb-2">
      <div className="flex items-center gap-2">
        {projectMotalTitle.icon} {projectMotalTitle.content}
      </div>
    </p>
  );
}

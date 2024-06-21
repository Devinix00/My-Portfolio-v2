import { FaTools } from "react-icons/fa";

interface ProjectModalTitleProps {
  type: "techStacks";
}

export default function ProjectModalTitle({ type }: ProjectModalTitleProps) {
  const projectModalTitleMap = {
    techStacks: {
      icon: <FaTools />,
      content: "기술 스택",
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

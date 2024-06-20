import ProjectOutline from "./projectOutline/ProjectOutline";
import Troubleshooting from "./troubleshooting/Troubleshooting";

interface ProjectModalContentsProps {
  activeTabIndex: number;
  modalIndex: number | null;
}
export default function ProjectModalContents({
  activeTabIndex,
  modalIndex,
}: ProjectModalContentsProps) {
  return (
    <section>
      {activeTabIndex === 0 ? (
        <ProjectOutline modalIndex={modalIndex} />
      ) : (
        <Troubleshooting />
      )}
    </section>
  );
}

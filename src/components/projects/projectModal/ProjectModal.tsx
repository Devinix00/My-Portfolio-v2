import { motion } from "framer-motion";
import ProjectModalHeader from "./ProjectModalHeader";
import { useState } from "react";
import ProjectModalContents from "./projectModalContents/ProjectModalContents";

interface ProjectModalProps {
  modalIndex: number | null;
  setIsModalOpened: (modalState: boolean) => void;
}

export default function ProjectModal({
  modalIndex,
  setIsModalOpened,
}: ProjectModalProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ type: "tween" }}
      className="fixed z-50 overflow-y-auto bg-white hide-scrollbar inset-0 w-full"
    >
      <ProjectModalHeader
        {...{ activeTabIndex, setActiveTabIndex, modalIndex, setIsModalOpened }}
      />
      <ProjectModalContents {...{ activeTabIndex, modalIndex }} />
    </motion.div>
  );
}

import { IoIosCloseCircleOutline } from "react-icons/io";

interface ProjectModalHeaderProps {
  setIsModalOpened: (modalState: boolean) => void;
}

export default function ProjectModalHeader({
  setIsModalOpened,
}: ProjectModalHeaderProps) {
  return (
    <section className="h-20 bg-black flex justify-between items-center px-10">
      <section></section>
      <IoIosCloseCircleOutline
        onClick={() => setIsModalOpened(false)}
        className="w-16 h-16 cursor-pointer"
      />
    </section>
  );
}

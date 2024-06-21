import { IoIosCloseCircleOutline } from "react-icons/io";
import { projectDetails } from "../../../constants/projectDetails";
import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";

interface ProjectModalHeaderProps {
  activeTabIndex: number;
  setActiveTabIndex: Dispatch<SetStateAction<number>>;
  modalIndex: number | null;
  setIsModalOpened: (modalState: boolean) => void;
}

export default function ProjectModalHeader({
  activeTabIndex,
  setActiveTabIndex,
  modalIndex,
  setIsModalOpened,
}: ProjectModalHeaderProps) {
  return (
    <section className="sticky top-0 h-20 bg-black flex justify-between items-center px-6 md:px-10">
      <section className="flex gap-4 items-center">
        {modalIndex !== null && (
          <img
            src={projectDetails[modalIndex].logoSrc}
            alt={projectDetails[modalIndex].title}
            className="hidden md:block w-12 h-12 rounded-full"
          />
        )}

        <section className="flex relative gap-4">
          <button onClick={() => setActiveTabIndex(0)}>개요</button>
          <button onClick={() => setActiveTabIndex(1)}>트러블 슈팅</button>
          <div
            className={clsx(
              "w-4 h-[2.5px] duration-300 bg-orange absolute transition-transform -bottom-[5px] rounded-3xl",
              activeTabIndex === 0
                ? "translate-x-[6px]"
                : "translate-x-[71.5px]"
            )}
          />
        </section>
      </section>
      <IoIosCloseCircleOutline
        onClick={() => setIsModalOpened(false)}
        className="w-12 h-12 cursor-pointer"
      />
    </section>
  );
}

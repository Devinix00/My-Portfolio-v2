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
    <section className="sticky top-0 h-20 bg-black flex justify-between items-center px-4 md:px-10">
      <section className="flex gap-4 md:gap-8 items-center">
        <img
          src={projectDetails[modalIndex as number].logoSrc}
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <section className="flex relative gap-4 md:gap-8">
          <button onClick={() => setActiveTabIndex(0)}>개요</button>
          <button onClick={() => setActiveTabIndex(1)}>트러블 슈팅</button>
          <div
            className={clsx(
              "w-4 h-[2.5px] bg-orange absolute transition-transform -bottom-[5px] rounded-3xl",
              activeTabIndex === 0
                ? "translate-x-[6px]"
                : "translate-x-[71.5px] md:translate-x-[88px]"
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

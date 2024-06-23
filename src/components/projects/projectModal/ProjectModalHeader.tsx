import { IoIosCloseCircleOutline } from "react-icons/io";
import { projectDetails } from "../../../constants/projectDetails";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

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
  const [widths, setWidths] = useState<(number | undefined)[]>([]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const newWidths = tabRefs?.current.map((tab) => tab?.scrollWidth);
    setWidths(newWidths);
  }, []);

  return (
    <section className="sticky top-0 h-20 bg-black z-10 flex justify-between items-center px-6 md:px-10">
      <section className="flex gap-4 items-center">
        {modalIndex !== null && (
          <img
            src={projectDetails[modalIndex].logoSrc}
            alt={projectDetails[modalIndex].title}
            className="hidden md:block w-12 h-12 rounded-full"
          />
        )}

        <section className="flex relative gap-4">
          <button
            ref={(el) => (tabRefs.current[0] = el)}
            onClick={() => setActiveTabIndex(0)}
          >
            개요
          </button>
          <button
            ref={(el) => (tabRefs.current[1] = el)}
            onClick={() => setActiveTabIndex(1)}
          >
            트러블 슈팅
          </button>
          <div
            style={
              activeTabIndex === 0
                ? {
                    transform: `translateX(${(widths[0] as number) / 2 - 8}px)`,
                  }
                : {
                    transform: `translateX(${
                      (widths[0] as number) + (widths[1] as number) / 2 - 8 + 16
                    }px)`,
                  }
            }
            className="w-4 h-[2.5px] duration-300 bg-orange absolute transition-transform -bottom-[5px] rounded-3xl"
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

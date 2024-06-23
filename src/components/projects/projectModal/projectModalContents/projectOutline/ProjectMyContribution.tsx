import { MdPlayArrow } from "react-icons/md";
import { projectDetails } from "../../../../../constants/projectDetails";
import ProjectModalTitle from "./ProjectModalTitle";
import { useState } from "react";
import clsx from "clsx";

interface ProjectMyContributionProps {
  modalIndex: number | null;
}

export default function ProjectMyContribution({
  modalIndex,
}: ProjectMyContributionProps) {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const handleClickButton = (i: number) => {
    if (activeIndexes.includes(i)) {
      const filteredIndexes = activeIndexes.filter((el) => el !== i);
      setActiveIndexes(filteredIndexes);
    } else {
      setActiveIndexes((prev) => [...prev, i]);
    }
  };

  return (
    <div>
      <ProjectModalTitle type="myContribution" />
      {modalIndex !== null && (
        <ul className="flex flex-col gap-2">
          {projectDetails[modalIndex].myContributions?.map(
            (myContribution, i) => (
              <li key={i}>
                <div
                  onClick={() => handleClickButton(i)}
                  className={clsx(
                    "bg-silver_light flex items-center gap-2 hover:bg-silver_light_3 active:bg-silver_light_3 cursor-pointer transition-colors w-full p-2 rounded-lg",
                    activeIndexes.includes(i) && "bg-silver_light_3"
                  )}
                >
                  <MdPlayArrow
                    className={clsx(
                      "transition-transform",
                      activeIndexes.includes(i) && "rotate-90"
                    )}
                  />

                  {myContribution}
                </div>
                {activeIndexes.includes(i) && (
                  <div className="pl-5 py-5 flex gap-2">
                    <p className="text-sm">
                      {projectDetails[modalIndex].myContributionsDetail[i]}
                    </p>
                  </div>
                )}
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
}

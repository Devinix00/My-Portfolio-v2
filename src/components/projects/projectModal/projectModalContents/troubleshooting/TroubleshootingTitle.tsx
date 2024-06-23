import React from "react";
import { projectDetails } from "../../../../../constants/projectDetails";

interface TroubleshootingTitleProps {
  modalIndex: number | null;
}

export default function TroubleshootingTitle({
  modalIndex,
}: TroubleshootingTitleProps) {
  return (
    <div className="my-8 flex gap-4 items-center">
      {modalIndex !== null && (
        <React.Fragment>
          <img
            src={projectDetails[modalIndex].logoSrc}
            alt={projectDetails[modalIndex].title}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full"
          />
          <p className="text-2xl md:text-3xl font-semibold">
            {projectDetails[modalIndex].title}
          </p>
        </React.Fragment>
      )}
    </div>
  );
}

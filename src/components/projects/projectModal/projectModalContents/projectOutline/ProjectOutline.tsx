import { useState, useEffect } from "react";
import clsx from "clsx";
import { projectDetails } from "../../../../../constants/projectDetails";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useDevice from "../../../../../hooks/useDevice";

interface ProjectOutlineProps {
  modalIndex: number | null;
}

export default function ProjectOutline({ modalIndex }: ProjectOutlineProps) {
  const [shouldLoadImage, setShouldLoadImage] = useState(false);
  const { device } = useDevice();

  useEffect(() => {
    if (modalIndex !== null) {
      const timer = setTimeout(() => {
        setShouldLoadImage(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [modalIndex]);

  return (
    <div className="h-[2000px]">
      <div className="bg-black px-4 md:px-10">
        <div className="w-fit mx-auto pb-10">
          <p className="pb-4 text-[32px] text-center font-semibold">
            {modalIndex !== null && projectDetails[modalIndex].title}
          </p>
          <div
            className={clsx(
              "rounded-2xl overflow-hidden",
              modalIndex === 1
                ? shouldLoadImage && "w-[220px]"
                : "md:w-[688px] md:h-[390px]"
            )}
          >
            {modalIndex !== null &&
              (shouldLoadImage ? (
                <img
                  src={projectDetails[modalIndex].imgSrc}
                  alt={projectDetails[modalIndex].title}
                />
              ) : (
                <div className="w-full h-full">
                  {device === "sm" ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-16 w-16 border-4 border-orange border-t-transparent" />
                    </div>
                  ) : (
                    <SkeletonTheme
                      baseColor="#373737"
                      width="100%"
                      height="100%"
                      highlightColor="#444"
                    >
                      <Skeleton />
                    </SkeletonTheme>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

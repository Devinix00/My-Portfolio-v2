import { useEffect, useState } from "react";
import useDevice from "../../../../../hooks/useDevice";
import { projectDetails } from "../../../../../constants/projectDetails";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import clsx from "clsx";
import "react-loading-skeleton/dist/skeleton.css";

interface ProjectBannerProps {
  modalIndex: number | null;
}

export default function ProjectBanner({ modalIndex }: ProjectBannerProps) {
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

  if (modalIndex === null) return null;

  const project = projectDetails[modalIndex];
  const isPortrait = project.imageOrientation === "portrait";

  return (
    <div className="bg-black px-6 md:px-10">
      <div className="w-fit mx-auto pb-10">
        <p className="pb-4 text-[32px] text-center font-semibold">
          {project.title}
        </p>
        <div
          className={clsx(
            "rounded-2xl overflow-hidden",
            isPortrait
              ? shouldLoadImage && "w-[220px] h-[390.45px]"
              : "md:w-[688px] md:h-[390px]"
          )}
        >
          {shouldLoadImage ? (
            <img src={project.imgSrc} alt={project.title} />
          ) : (
            <div className="w-full h-full">
              {device === "sm" ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-orange border-t-transparent" />
                </div>
              ) : (
                <SkeletonTheme
                  baseColor="#373737"
                  width={isPortrait ? "220px" : "100%"}
                  height={isPortrait ? "390.45px" : "100%"}
                  highlightColor="#444"
                >
                  <Skeleton />
                </SkeletonTheme>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import { LuLink } from "react-icons/lu";
import { projectDetails } from "../../../../../constants/projectDetails";
import { FaGithub, FaGooglePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import React from "react";
import { FaAppStore } from "react-icons/fa";

interface ProjectIntroProps {
  modalIndex: number | null;
}

function ProjectIntro({ modalIndex }: ProjectIntroProps) {
  return (
    <div className="pb-8 border-b-[1px] border-slate-300 text-slate-400">
      {modalIndex !== null && (
        <React.Fragment>
          <div className="text-center">
            {projectDetails[modalIndex].description}
          </div>
          <section className="flex justify-center gap-6 mt-8">
            {modalIndex !== 2 && (
              <Link
                target="_BLANK"
                to={projectDetails[modalIndex].gitHub as string}
                className="flex flex-col items-center cursor-pointer"
              >
                <FaGithub fill="#1b1b1e" className="w-10 h-10" />
                <p>Github</p>
              </Link>
            )}
            {modalIndex !== 1 && (
              <Link
                target="_BLANK"
                to={projectDetails[modalIndex].siteUrl as string}
                className="flex flex-col items-center cursor-pointer"
              >
                <LuLink
                  stroke="#1b1b1e"
                  className="w-10 h-10 border-[1px] border-slate-400 p-2 rounded-full"
                />
                <p>배포 링크</p>
              </Link>
            )}
            {modalIndex === 1 && (
              <Link
                target="_BLANK"
                to={projectDetails[modalIndex].googlePlayStoreUrl as string}
                className="flex flex-col items-center cursor-pointer"
              >
                <FaGooglePlay className="w-10 h-10 border-[1px] border-slate-400 py-2 pl-1 rounded-full" />
                <p>플레이스토어</p>
              </Link>
            )}
            {modalIndex === 2 && (
              <>
                <Link
                  target="_BLANK"
                  to={projectDetails[modalIndex].googlePlayStoreUrl as string}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <FaGooglePlay className="w-10 h-10 border-[1px] border-slate-400 py-2 pl-1 rounded-full" />
                  <p>플레이스토어</p>
                </Link>
                <Link
                  target="_BLANK"
                  to={projectDetails[modalIndex].appStoreUrl as string}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <FaAppStore className="w-10 h-10 rounded-full" />
                  <p>앱스토어</p>
                </Link>
              </>
            )}
          </section>
        </React.Fragment>
      )}
    </div>
  );
}

export default ProjectIntro;

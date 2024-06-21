import { LuLink } from "react-icons/lu";
import { projectDetails } from "../../../../../constants/projectDetails";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import React from "react";

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
            <Link
              target="_BLANK"
              to={projectDetails[modalIndex].gitHub}
              className="flex flex-col items-center cursor-pointer"
            >
              <FaGithub fill="#1b1b1e" className="w-10 h-10" />
              <p>Github</p>
            </Link>
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
          </section>
        </React.Fragment>
      )}
    </div>
  );
}

export default ProjectIntro;

import { LuLink } from "react-icons/lu";
import { projectDetails } from "../../../../../constants/projectDetails";
import { FaGithub, FaGooglePlay, FaAppStore } from "react-icons/fa6";
import { Link } from "react-router-dom";
import React from "react";

interface ProjectIntroProps {
  modalIndex: number | null;
}

interface ProjectLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

function ProjectLink({ to, icon, label }: ProjectLinkProps) {
  return (
    <Link
      target="_BLANK"
      to={to}
      className="flex flex-col items-center cursor-pointer"
    >
      {icon}
      <p>{label}</p>
    </Link>
  );
}

function ProjectIntro({ modalIndex }: ProjectIntroProps) {
  if (modalIndex === null) return null;

  const project = projectDetails[modalIndex];

  const linkConfigs = [
    {
      url: project.gitHub,
      icon: <FaGithub fill="#1b1b1e" className="w-10 h-10" />,
      label: "Github",
    },
    {
      url: project.siteUrl,
      icon: (
        <LuLink
          stroke="#1b1b1e"
          className="w-10 h-10 border-[1px] border-slate-400 p-2 rounded-full"
        />
      ),
      label: "배포 링크",
    },
    {
      url: project.googlePlayStoreUrl,
      icon: (
        <FaGooglePlay className="w-10 h-10 border-[1px] border-slate-400 py-2 pl-1 rounded-full" />
      ),
      label: "플레이스토어",
    },
    {
      url: project.appStoreUrl,
      icon: <FaAppStore className="w-10 h-10 rounded-full" />,
      label: "앱스토어",
    },
  ];

  return (
    <div className="pb-8 border-b-[1px] border-slate-300 text-slate-400">
      <div className="text-center">{project.description}</div>
      <section className="flex justify-center gap-6 mt-8">
        {linkConfigs
          .filter((config) => config.url)
          .map((config, index) => (
            <ProjectLink
              key={index}
              to={config.url as string}
              icon={config.icon}
              label={config.label}
            />
          ))}
      </section>
    </div>
  );
}

export default ProjectIntro;

import React from "react";
import { aboutMe } from "../../constants/aboutMe";
import SkillsAndToolsTitle from "./SkillsAndToolsTitle";

export default function Skills() {
  return (
    <React.Fragment>
      <SkillsAndToolsTitle>Tech Stacks</SkillsAndToolsTitle>
      <div className="flex gap-6 mt-4 flex-wrap">
        {aboutMe[6].techStacks?.map((techStack, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-silver px-2 md:px-3 py-2 rounded-2xl"
          >
            <img
              src={techStack.imgSrc}
              alt={techStack.title}
              className="w-8 h-8 md:w-12 md:h-12"
            />
            <p className="text-gray md:text-lg font-medium">
              {techStack.title}
            </p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

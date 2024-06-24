import { aboutMe } from "../../constants/aboutMe";
import SkillsAndToolsTitle from "./SkillsAndToolsTitle";

export default function Tools() {
  return (
    <div className="mt-6 md:mt-12">
      <SkillsAndToolsTitle>Communication Tools</SkillsAndToolsTitle>
      <div className="flex gap-6 mt-4 flex-wrap">
        {aboutMe[7].tools?.map((tool, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-silver px-2 md:px-3 py-2 rounded-2xl"
          >
            <img
              src={tool.imgSrc}
              alt={tool.title}
              className="w-8 h-8 md:w-12 md:h-12"
            />
            <p className="text-gray md:text-lg font-medium">{tool.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

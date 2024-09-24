import { FC } from "react";
import SkillBar from "./skill_bar";
import { SkillLevel } from "@/lib/helpers";

interface SkillWrapperProps {
  level: SkillLevel;
  skill: string;
}

const SkillWrapper: FC<SkillWrapperProps> = ({ skill, level }) => {
  return (
    <div>
      <div className="hidden w-full flex-row items-center justify-between gap-x-16 py-4 xl:flex">
        <h4 className="w-1/6 text-xl font-semibold">{skill}</h4>
        <SkillBar className="w-5/6" level={level} />
        {/* <h4 className="w-1/6 ">{SkillLevel[level]}</h4> */}
      </div>
      <div className="flex w-full flex-row items-center justify-between py-4 xl:hidden">
        <h4 className="text-xl font-semibold">{skill}</h4>
        <h4 className="text-center">{SkillLevel[level]}</h4>
      </div>
    </div>
  );
};

export default SkillWrapper;

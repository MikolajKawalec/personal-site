import { FC } from 'react';
import SkillBar from './skill_bar';
import { SkillLevel } from '@/lib/helpers';

interface SkillWrapperProps {
  level: SkillLevel;
  skill: string;
}

const SkillWrapper: FC<SkillWrapperProps> = ({ skill, level }) => {
  return (
    <div className="flex flex-row justify-between w-full items-center py-4 gap-x-16">
      <h4 className="w-1/6 font-semibold text-xl">{skill}</h4>
      <SkillBar
        className="w-4/6"
        level={level}
      />
      <h4 className="w-1/6 ">{SkillLevel[level]}</h4>
    </div>
  );
};

export default SkillWrapper;

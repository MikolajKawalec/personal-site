import MinorSkillText from "../smaller_components/minor_skill_text";
import { useTranslation } from "react-i18next";
import { MINOR_SKILLS } from "@/lib/helpers";

const MinorSkillWrapper = () => {
  const { t } = useTranslation();
  const minorSkills = MINOR_SKILLS.map((skill) => t(`skills.minor.${skill}`));

  return (
    <div>
      <div className="hidden w-full grid-cols-3 xl:grid xl:grid-cols-7">
        {minorSkills.map((skill) => (
          <MinorSkillText key={skill}>{skill}</MinorSkillText>
        ))}
      </div>
      <div className="flex flex-col flex-wrap justify-between gap-x-2 xl:hidden">
        {minorSkills.map((skill) => (
          <MinorSkillText key={skill}>{skill}</MinorSkillText>
        ))}
      </div>
    </div>
  );
};

export default MinorSkillWrapper;

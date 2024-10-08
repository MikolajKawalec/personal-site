import { FC } from "react";
import { Badge } from "../ui/badge";

interface MinorSkillBadgeProps {
  skill: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
}

const MinorSkill: FC<MinorSkillBadgeProps> = ({ skill, variant }) => {
  return (
    <Badge className="rounded-full px-8 py-4" variant={variant}>
      {skill}
    </Badge>
  );
};

export default MinorSkill;

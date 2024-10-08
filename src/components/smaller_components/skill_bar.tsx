import { FC, useState, useEffect } from "react";
import { Progress } from "../ui/progress";
import { SkillLevel } from "@/lib/helpers";
import { cn } from "@/lib/utils";

// see dict above for values what is small medium, etc..
interface SkillBarProps extends React.HTMLAttributes<HTMLDivElement> {
  level: SkillLevel;
}

const SkillBar: FC<SkillBarProps> = ({ level, className }) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAmount(level), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress
      value={amount}
      label={SkillLevel[level]}
      className={cn("min-h-8 rounded-full border-2 bg-primary/20", className)}
    />
  );
};

export default SkillBar;

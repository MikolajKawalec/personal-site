import { FC, useState, useEffect } from 'react';
import { Progress } from '../ui/progress';
import { SkillLevel } from '@/lib/helpers';
import { cn } from '@/lib/utils';

// see dict above for values what is small medium, etc..
interface SkillBarProps extends React.HTMLAttributes<HTMLDivElement> {
  level: SkillLevel;
}

const SkillBar: FC<SkillBarProps> = ({ level, className }) => {
  //   const [amount, setAmount] = useState(0);

  //   useEffect(() => {
  //     const timer = setTimeout(() => setAmount(level), 500);
  //     return () => clearTimeout(timer);
  //   }, []);

  const amount = 30;

  return (
    <Progress
      value={amount}
      className={cn('border-2 rounded-full min-h-8 bg-primary/20', className)}
    />
  );
};

export default SkillBar;

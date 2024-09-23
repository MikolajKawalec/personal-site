import { cn } from '@/lib/utils';
import { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface MinorSkillTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const MinorSkillText: FC<MinorSkillTextProps> = ({ className, children }) => {
  return (
    <p
      className={cn('px-6 py-4 text-muted brightness-150 text-2xl', className)}
    >
      {children}
    </p>
  );
};

export default MinorSkillText;

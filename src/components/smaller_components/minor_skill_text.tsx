import { cn } from '@/lib/utils';
import { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface MinorSkillTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const MinorSkillText: FC<MinorSkillTextProps> = ({ className, children }) => {
  return (
    <div className="flex items-center justify-center h-full group">
      <p
        className={cn(
          'px-6 py-4 text-muted text-base xl:text-xl text-center group-hover:scale-110 group-hover:text-accent transition-all duration-300 ease-in-out',
          className
        )}
      >
        {children}
      </p>
    </div>
  );
};

export default MinorSkillText;

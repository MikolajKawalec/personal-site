import { cn } from "@/lib/utils";
import { FC } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface MinorSkillTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const MinorSkillText: FC<MinorSkillTextProps> = ({ className, children }) => {
  return (
    <div className="group flex h-full items-center justify-center">
      <p
        className={cn(
          "px-6 py-4 text-center text-base text-muted transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-accent xl:text-xl",
          className,
        )}
      >
        {children}
      </p>
    </div>
  );
};

export default MinorSkillText;

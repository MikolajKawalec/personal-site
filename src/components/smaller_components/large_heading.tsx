import { FC } from "react";
import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LargeHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const LargeHeading: FC<LargeHeadingProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-row items-center justify-center py-4">
      <h2
        className={cn("text-5xl font-bold xl:text-7xl", className)}
        {...props}
      >
        {children}
      </h2>
    </div>
  );
};

export default LargeHeading;

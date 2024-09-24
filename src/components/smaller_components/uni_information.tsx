import { cn } from "@/lib/utils";
import { FC } from "react";

interface UniInformationProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  studies: string;
  years: string;
}

const UniInformation: FC<UniInformationProps> = ({
  name,
  studies,
  years,
  className,
  ...props
}) => {
  return (
    <div className={cn("flex w-full flex-col gap-y-6", className)} {...props}>
      <h3 className="text-xl xl:text-5xl">{name}</h3>
      <h4 className="text-lg text-primary xl:text-3xl">{studies}</h4>
      <h4 className="text-base text-muted xl:text-xl">{years}</h4>
    </div>
  );
};

export default UniInformation;

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
      <h3 className="text-xl xl:text-3xl">{name}</h3>
      <h4 className="text-primary text-lg xl:text-xl">{studies}</h4>
      <h4 className="text-muted xl:text-md text-base">{years}</h4>
    </div>
  );
};

export default UniInformation;

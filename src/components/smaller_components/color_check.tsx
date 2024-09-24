import { cn } from "@/lib/utils";
import { FC } from "react";

interface ColorCheckProps extends React.HTMLAttributes<HTMLDivElement> {
  cssClass: string;
}

const ColorCheck: FC<ColorCheckProps> = ({ cssClass, className }) => {
  const completeCSS =
    "p-6 rounded-full border-4 " +
    "bg-" +
    cssClass +
    " " +
    "text-" +
    cssClass +
    "-foreground";
  console.log(completeCSS);
  return <div className={cn(completeCSS, className)}>{cssClass}</div>;
};

export default ColorCheck;

import { cn } from "@/lib/utils";
import { FC, ElementType } from "react";

const cssClass =
  "flex flex-row justify-center gap-x-6 w-full items-center group";
const textCSS =
  "group-hover:text-primary group-hover:scale-105 transition-transform duration-300 ease-in-out";
const iconSize = 48;
const iconCSS =
  "group-hover:text-primary group-hover:scale-125 transition-transform duration-300 ease-in-out";

interface ContactProps extends React.HTMLAttributes<HTMLDivElement> {
  linkTo?: string;
  text: string;
  Icon: ElementType;
}

const Contact: FC<ContactProps> = ({
  linkTo,
  text,
  Icon,
  className,
  ...props
}) => {
  if (linkTo !== undefined) {
    return (
      <div className={cn(cssClass, className)} {...props}>
        <a href={linkTo} className={cn(cssClass, className)}>
          <Icon size={iconSize} className={iconCSS} />
          <h6 className={textCSS}>{text}</h6>
        </a>
      </div>
    );
  }
  return (
    <div className={cn(cssClass, className)} {...props}>
      <Icon size={iconSize} className={iconCSS} />
      <h6 className={textCSS}>{text}</h6>
    </div>
  );
};

export default Contact;

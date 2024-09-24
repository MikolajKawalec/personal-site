import { ModeToggle } from "../mode-toggle";

const className =
  "hover:text-primary transition-colors duration-300 ease-in-out";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex h-16 flex-row items-center justify-between border-b-2 bg-background p-2">
      <ModeToggle />
      <div className="flex flex-row justify-between gap-x-6 text-xs xl:text-lg">
        <a className={className} href="#skills">
          skills
        </a>
        <a className={className} href="#education">
          education
        </a>
        <a className={className} href="#experience">
          experience
        </a>
        <a className={className} href="#contact">
          contact
        </a>
      </div>
    </div>
  );
};

export default Header;

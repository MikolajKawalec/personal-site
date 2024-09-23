import { ModeToggle } from '../mode-toggle';

const className =
  'hover:text-primary transition-colors duration-300 ease-in-out';

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center border-b-2    p-2">
      <ModeToggle />
      <div className="flex flex-row justify-between gap-x-6">
        <a
          className={className}
          href="#skills"
        >
          skills
        </a>
        <a
          className={className}
          href="#education"
        >
          education
        </a>
        <a
          className={className}
          href="#experience"
        >
          experience
        </a>
        <a
          className={className}
          href="#contact"
        >
          contact
        </a>
      </div>
    </div>
  );
};

export default Header;

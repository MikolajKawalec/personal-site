import { ModeToggle } from '../mode-toggle';

const Header = () => {
  return (
    <div className="absolute top-2 left-2 min-h-10 flex flex-row justify-between">
      <ModeToggle />
    </div>
  );
};

export default Header;

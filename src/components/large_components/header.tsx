import { ModeToggle } from '../mode-toggle';

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center border-b-2 px-4 py-2">
      <ModeToggle />
      <div className="flex flex-row justify-between gap-x-2">
        <h5>list item 1</h5>
        <h5>list item 2</h5>
      </div>
    </div>
  );
};

export default Header;

import { FC } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="flex flex-row justify-center border-t-2 py-6">
      Mikolaj Kawalec 2024
    </div>
  );
};

export default Footer;

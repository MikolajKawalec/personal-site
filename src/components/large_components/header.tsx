import LangToggle from "../lang-toggle";
import { ModeToggle } from "../mode-toggle";
import { useTranslation } from "react-i18next";

const className =
  "hover:text-primary transition-colors duration-300 ease-in-out";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-background sticky top-0 z-50 flex h-16 flex-row items-center justify-between border-b-2 p-2">
      <div className="flex flex-row justify-between gap-x-6 text-xs xl:text-lg">
        <LangToggle />
        <ModeToggle />
      </div>
      <div className="flex flex-row justify-between gap-x-6 text-xs xl:text-lg">
        <a className={className} href="#skills">
          {t("nav.skills")}
        </a>
        <a className={className} href="#education">
          {t("nav.education")}
        </a>
        <a className={className} href="#experience">
          {t("nav.experience")}
        </a>
        <a className={className} href="#contact">
          {t("nav.contact")}
        </a>
      </div>
    </div>
  );
};

export default Header;

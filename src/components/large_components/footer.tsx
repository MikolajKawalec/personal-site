import { FC } from "react";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row justify-center border-t-2 py-6">
      {t("footer.copyright", { year: new Date().getFullYear() })}
    </div>
  );
};

export default Footer;

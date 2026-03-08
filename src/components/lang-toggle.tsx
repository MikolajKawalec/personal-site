import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export default function LangToggle() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Get the current language code safely
  const currentLang = i18n.resolvedLanguage;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Slightly widened the button to accommodate the image aspect ratio */}
        <Button variant="outline" className="w-12 px-0">
          <img
            src={`https://flagcdn.com/w20/${currentLang === "pl" ? "pl" : "us"}.png`}
            alt={currentLang === "pl" ? "Polish Flag" : "US Flag"}
            className="h-auto w-5 rounded-[2px]"
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => changeLanguage("en")}
          className="flex cursor-pointer items-center gap-3"
        >
          <img
            src="https://flagcdn.com/w20/us.png"
            alt="US Flag"
            className="h-auto w-5 rounded-[2px] shadow-sm"
          />
          English
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => changeLanguage("pl")}
          className="flex cursor-pointer items-center gap-3"
        >
          <img
            src="https://flagcdn.com/w20/pl.png"
            alt="Polish Flag"
            className="h-auto w-5 rounded-[2px] shadow-sm"
          />
          Polski
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

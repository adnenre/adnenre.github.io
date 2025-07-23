import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";

type Language = "en" | "fr";
const languages: Record<Language, { name: string; flag: string }> = {
  en: { name: "English", flag: "US" },
  fr: { name: "French", flag: "FR" },
};
const LanguageSwitcher = () => {
  const { setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8 border-0">
          <Languages className="h-5 w-5 " />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {Object.entries(languages).map(([locale, { name, flag }]) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => setLanguage(locale)}
            className={"cursor-pointer"}
          >
            <img
              width="20px"
              height="20px"
              src={`https://flagsapi.com/${flag}/flat/64.png`}
            />
            <span className="mr-2">{name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;

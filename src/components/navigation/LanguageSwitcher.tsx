import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button variant="default" onClick={toggleLanguage}>
      {language.toUpperCase()}
    </Button>
  );
};

export default LanguageSwitcher;

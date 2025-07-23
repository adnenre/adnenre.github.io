import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button variant="secondary" onClick={toggleLanguage}>
      {language.toUpperCase()}
    </Button>
  );
};

export default LanguageSwitcher;

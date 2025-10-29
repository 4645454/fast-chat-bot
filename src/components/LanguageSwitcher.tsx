import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    document.body.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 rounded-xl transition-all duration-300 group border border-primary/20"
    >
      <Globe className="h-4 w-4 text-primary group-hover:rotate-180 transition-transform duration-500" />
      <span className="text-sm font-medium text-foreground">
        {language === 'ar' ? 'EN' : 'ع'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;

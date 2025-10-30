import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

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
      className="flex items-center gap-2 px-4 py-2 bg-card/50 hover:bg-card rounded-xl transition-all duration-300 group border border-primary/20 hover:glow-white hover:scale-105"
    >
      <Languages className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
      <span className="text-sm font-medium text-primary">
        {language === 'ar' ? 'EN' : 'عربي'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;

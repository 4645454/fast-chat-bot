import { Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();
  
  return (
    <footer className="bg-gradient-to-br from-foreground via-primary/90 to-accent/90 text-background py-12" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="relative">
              <Sparkles className="h-10 w-10 text-background animate-pulse" />
              <div className="absolute inset-0 bg-background/30 blur-xl rounded-full"></div>
            </div>
            <span className="text-3xl font-bold text-background">Fast Chat</span>
          </div>

          {/* Tagline */}
          <p className="text-center text-background/90 text-lg">
            {t('footer.tagline')}
          </p>

          {/* Copyright */}
          <div className="pt-6 border-t border-background/30 w-full text-center">
            <p className="text-background/70">
              © {new Date().getFullYear()} Fast Chat. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
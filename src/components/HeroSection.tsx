import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-chat.jpg";

const HeroSection = () => {
  const { t, language } = useLanguage();
  
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/20" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`text-center ${language === 'ar' ? 'md:text-right' : 'md:text-left'} space-y-6 animate-fade-in`}>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              {t('hero.title')}{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                {t('hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className={`flex gap-4 justify-center ${language === 'ar' ? 'md:justify-end' : 'md:justify-start'} pt-4`}>
              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-strong hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
              >
                <MessageCircle className={`${language === 'ar' ? 'ml-2' : 'mr-2'} h-5 w-5`} />
                {t('hero.cta')}
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-3xl blur-3xl"></div>
            <img
              src={heroImage}
              alt={t('hero.imageAlt')}
              className="relative rounded-3xl shadow-strong w-full h-auto border-4 border-primary/20"
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
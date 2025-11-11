import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-chat.jpg";

const HeroSection = () => {
  const { t, language } = useLanguage();
  
  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    element?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-section -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
              {t('hero.title')}
              <span className="block mt-2">
                {t('hero.titleHighlight')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="animate-bounce-in" style={{ animationDelay: '200ms' }}>
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="text-xl px-10 py-7 rounded-2xl bg-primary text-background hover:shadow-strong transition-all duration-300 hover:scale-105 group hover:glow-white-strong"
              >
                <span className="relative z-10">{t('hero.cta')}</span>
                <Sparkles className="mr-2 h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '300ms' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-strong hover:glow-white transition-all duration-500 border-2 border-primary/30 hover:border-primary animate-float">
              <img 
                src={heroImage} 
                alt={t('hero.imageAlt')}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
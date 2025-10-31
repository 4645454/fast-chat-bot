import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const PlatformsSection = () => {
  const { t, language } = useLanguage();
  
  const platforms = [
    { 
      name: "WhatsApp", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
      color: "hover:shadow-[0_0_40px_rgba(37,211,102,0.5)]"
    },
    { 
      name: "Instagram", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
      color: "hover:shadow-[0_0_40px_rgba(225,48,108,0.5)]"
    },
    { 
      name: "Facebook", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg",
      color: "hover:shadow-[0_0_40px_rgba(24,119,242,0.5)]"
    }
  ];

  return (
    <section id="platforms" className="py-20 bg-gradient-section" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-primary glow-white-soft mb-4">
            {t('platforms.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('platforms.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {platforms.map((platform, index) => {
            return (
              <Card
                key={index}
                className={`border border-primary/20 shadow-soft hover:shadow-strong hover:border-primary transition-all duration-300 bg-gradient-card hover:scale-105 animate-fade-in group ${platform.color}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-card border border-primary/20 mb-4 group-hover:scale-110 transition-all duration-300 overflow-hidden">
                    <img 
                      src={platform.logo} 
                      alt={platform.name}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {platform.name}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;

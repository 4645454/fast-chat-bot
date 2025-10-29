import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PlatformsSection = () => {
  const { t, language } = useLanguage();
  
  const platforms = [
    {
      name: language === 'ar' ? "واتساب" : "WhatsApp",
      icon: "💬",
      color: "from-green-500/20 via-green-400/20 to-green-600/20"
    },
    {
      name: language === 'ar' ? "إنستجرام" : "Instagram",
      icon: "📷",
      color: "from-pink-500/20 via-purple-400/20 to-purple-600/20"
    },
    {
      name: language === 'ar' ? "فيسبوك" : "Facebook",
      icon: "👍",
      color: "from-blue-500/20 via-blue-400/20 to-blue-600/20"
    }
  ];

  return (
    <section id="platforms" className="py-20 bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6">
            {t('platforms.title')}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('platforms.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {platforms.map((platform, index) => (
            <Card
              key={index}
              className={`border-2 border-primary/10 hover:border-primary/30 shadow-soft hover:shadow-strong transition-all duration-300 bg-gradient-to-br ${platform.color} backdrop-blur-sm animate-scale-in group`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="text-6xl mb-4 animate-bounce-in group-hover:scale-125 transition-transform duration-300" style={{ animationDelay: `${index * 200}ms` }}>
                  {platform.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {platform.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 px-8 py-4 rounded-2xl shadow-soft border-2 border-primary/20">
            <MessageCircle className="h-6 w-6 text-primary animate-pulse" />
            <p className="text-xl font-medium text-foreground">
              {t('platforms.subtitle')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
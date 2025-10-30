import { Card, CardContent } from "@/components/ui/card";
import { Zap, DollarSign, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BenefitsSection = () => {
  const { t, language } = useLanguage();
  
  const benefits = [
    {
      icon: Zap,
      title: t('benefits.speed.title'),
      description: t('benefits.speed.desc')
    },
    {
      icon: DollarSign,
      title: t('benefits.saving.title'),
      description: t('benefits.saving.desc')
    },
    {
      icon: TrendingUp,
      title: t('benefits.sales.title'),
      description: t('benefits.sales.desc')
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-section" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 glow-white">
            {t('benefits.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('benefits.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="border border-primary/20 shadow-soft hover:shadow-strong hover:border-primary hover:glow-white transition-all duration-300 bg-gradient-card animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-card border border-primary/30 text-primary mb-4 group-hover:scale-110 group-hover:glow-white transition-all duration-300">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
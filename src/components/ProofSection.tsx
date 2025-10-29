import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProofSection = () => {
  const { t, language } = useLanguage();
  
  const stats = [
    {
      icon: Users,
      number: "+100",
      label: t('proof.brands')
    },
    {
      icon: TrendingUp,
      number: "3x",
      label: t('proof.growth')
    },
    {
      icon: Clock,
      number: "24/7",
      label: t('proof.support')
    }
  ];

  return (
    <section id="proof" className="py-20 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6">
            {t('proof.title')}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('proof.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="border-2 border-accent/20 shadow-medium hover:shadow-strong hover:border-accent/50 transition-all duration-300 bg-gradient-to-br from-card via-accent/5 to-primary/5 animate-scale-in group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-10 w-10" />
                  </div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <p className="text-xl text-muted-foreground font-medium">
                    {stat.label}
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

export default ProofSection;
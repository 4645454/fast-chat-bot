import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check } from "lucide-react";

const PricingSection = () => {
  const { language, t } = useLanguage();
  const [selectedDuration, setSelectedDuration] = useState<string>("1day");

  const durationKeys = ["1day", "5days", "10days", "30days"] as const;
  
  const plansData = {
    "1day": [
      { key: "basic", price: "100 EGP", messages: 350, messagesPerPlatform: null, platforms: 1 },
      { key: "professional", price: "150 EGP", messages: 700, messagesPerPlatform: null, platforms: 1 },
      { key: "business", price: "200 EGP", messages: null, messagesPerPlatform: 400, platforms: 3 },
      { key: "enterprise", price: "250 EGP", messages: null, messagesPerPlatform: 750, platforms: 3 }
    ],
    "5days": [
      { key: "basic", price: "350 EGP", messages: 1000, messagesPerPlatform: null, platforms: 1 },
      { key: "professional", price: "450 EGP", messages: 1500, messagesPerPlatform: null, platforms: 1 },
      { key: "business", price: "550 EGP", messages: null, messagesPerPlatform: 1000, platforms: 3 },
      { key: "enterprise", price: "700 EGP", messages: null, messagesPerPlatform: 1500, platforms: 3 }
    ],
    "10days": [
      { key: "basic", price: "1000 EGP", messages: 2000, messagesPerPlatform: null, platforms: 1 },
      { key: "professional", price: "1200 EGP", messages: 3000, messagesPerPlatform: null, platforms: 1 },
      { key: "business", price: "1400 EGP", messages: null, messagesPerPlatform: 1000, platforms: 3 },
      { key: "enterprise", price: "1650 EGP", messages: null, messagesPerPlatform: 1800, platforms: 3 }
    ],
    "30days": [
      { key: "basic", price: "2500 EGP", messages: 5000, messagesPerPlatform: null, platforms: 1 },
      { key: "professional", price: "3500 EGP", messages: 8000, messagesPerPlatform: null, platforms: 1 },
      { key: "business", price: "4500 EGP", messages: null, messagesPerPlatform: 8000, platforms: 3 },
      { key: "enterprise", price: "6000 EGP", messages: null, messagesPerPlatform: 15000, platforms: 3 }
    ],
  };

  const getFeatures = (plan: typeof plansData[keyof typeof plansData][0]) => {
    const features = [
      t('pricing.feature.service'),
      t('pricing.feature.response'),
    ];
    
    if (plan.messages) {
      features.push(`${plan.messages} ${t('pricing.feature.messages')}`);
    } else if (plan.messagesPerPlatform) {
      features.push(`${plan.messagesPerPlatform} ${t('pricing.feature.messagesPerPlatform')}`);
    }
    
    features.push(plan.platforms === 1 ? t('pricing.feature.supports1Platform') : t('pricing.feature.supports3Platforms'));
    
    return features;
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-section" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Plan Duration Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {durationKeys.map((durationKey) => (
            <button
              key={durationKey}
              onClick={() => setSelectedDuration(durationKey)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-500 ${
                selectedDuration === durationKey
                  ? 'bg-primary text-white scale-110 shadow-lg'
                  : 'bg-transparent text-foreground hover:scale-105 border border-primary/20 hover:border-primary hover:bg-primary/5'
              }`}
            >
              {t(`pricing.duration.${durationKey}`)}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 max-w-7xl mx-auto">
          {plansData[selectedDuration as keyof typeof plansData].map((plan, index) => {
            const isHighlighted = index === 2;
            const features = getFeatures(plan);
            
            return (
              <Card
                key={index}
                className={`transition-all duration-500 bg-gradient-card animate-fade-in ${
                  isHighlighted
                    ? 'border-2 border-primary/50 shadow-medium hover:scale-105'
                    : 'border border-primary/20 hover:border-primary hover:shadow-strong hover:scale-105'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{t(`pricing.plan.${plan.key}`)}</h3>
                  <p className="text-4xl font-bold mb-4 text-foreground">
                    {plan.price}
                    <span className="text-muted-foreground text-lg font-medium">/{t(`pricing.duration.${selectedDuration}`)}</span>
                  </p>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

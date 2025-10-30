import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check } from "lucide-react";

const PricingSection = () => {
  const { t, language } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState<string>("1 Day");

  const plans = {
    "1 Day": [
      { name: "Basic", price: "100 EGP", features: ["24/7 Service", "Under 30 sec response", "350 Messages", "Supports 1 Platform (WhatsApp, Instagram, Facebook)"] },
      { name: "Professional", price: "150 EGP", features: ["24/7 Service", "Under 30 sec response", "700 Messages", "Supports 1 Platform (WhatsApp, Instagram, Facebook)"] },
      { name: "Business", price: "200 EGP", features: ["24/7 Service", "Under 30 sec response", "400 Messages per platform", "Supports 3 platforms (WhatsApp, Instagram, Facebook)"] },
      { name: "Enterprise", price: "250 EGP", features: ["24/7 Service", "Under 30 sec response", "750 Messages per platform", "Supports 3 platforms (WhatsApp, Instagram, Facebook)"] }
    ],
    "5 Days": [
      { name: "Basic", price: "350 EGP", features: ["24/7 Service", "Under 30 sec response", "1000 Messages", "Supports 1 Platform (WhatsApp, Instagram, Facebook)"] },
      { name: "Professional", price: "450 EGP", features: ["24/7 Service", "Under 30 sec response", "1500 Messages", "Supports 1 Platform (WhatsApp, Instagram, Facebook)"] },
      { name: "Business", price: "550 EGP", features: ["24/7 Service", "Under 30 sec response", "1000 Messages per platform", "Supports 3 platforms (WhatsApp, Instagram, Facebook)"] },
      { name: "Enterprise", price: "700 EGP", features: ["24/7 Service", "Under 30 sec response", "1500 Messages per platform", "Supports 3 platforms (WhatsApp, Instagram, Facebook)"] }
    ],
    "10 Days": [
      { name: "Basic", price: "1000 EGP", features: ["24/7 Service", "Under 30 sec response", "2000 Messages", "Supports 1 Platform (WhatsApp, Instagram, Facebook)"] },
      { name: "Professional", price: "1200 EGP", features: ["24/7 Service", "Under 30 sec response", "3000 Messages", "Supports 1 Platform (WhatsApp, Instagram, Facebook)"] },
      { name: "Business", price: "1400 EGP", features: ["24/7 Service", "Under 30 sec response", "1000 Messages per platform", "Supports 3 platforms (WhatsApp, Instagram, Facebook)"] },
      { name: "Enterprise", price: "1650 EGP", features: ["24/7 Service", "Under 30 sec response", "1800 Messages per platform", "Supports 3 platforms (WhatsApp, Instagram, Facebook)"] }
    ],
    "30 Days": [
      { name: "Basic", price: "2500 EGP", features: ["24/7 Service", "Under 30 sec response", "5000 Messages", "Supports 1 Platform (WhatsApp, Instagram, Facebook)"] },
      { name: "Professional", price: "3500 EGP", features: ["24/7 Service", "Under 30 sec response", "8000 Messages", "Supports 1 Platform (WhatsApp, Instagram, Facebook)"] },
      { name: "Business", price: "4500 EGP", features: ["24/7 Service", "Under 30 sec response", "8000 Messages per platform", "Supports 3 platforms (WhatsApp, Instagram, Facebook)"] },
      { name: "Enterprise", price: "6000 EGP", features: ["24/7 Service", "Under 30 sec response", "15000 Messages per platform", "Supports 3 platforms (WhatsApp, Instagram, Facebook)"] }
    ],
  };

  const planKeys = Object.keys(plans) as Array<keyof typeof plans>;

  return (
    <section id="pricing" className="py-20 bg-gradient-section" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 glow-white">
            {language === 'ar' ? 'الباقات والأسعار' : 'Plans & Pricing'}
          </h2>
          <p className="text-xl text-muted-foreground">
            {language === 'ar' ? 'اختر الباقة المناسبة لأهدافك' : 'Choose the plan that fits your goals'}
          </p>
        </div>

        {/* Plan Duration Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {planKeys.map((planKey) => (
            <button
              key={planKey}
              onClick={() => setSelectedPlan(planKey)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedPlan === planKey
                  ? 'bg-primary text-background scale-110 glow-white-strong'
                  : 'bg-card text-primary hover:scale-105 hover:glow-white border border-primary/20'
              }`}
            >
              {planKey}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 max-w-7xl mx-auto">
          {plans[selectedPlan as keyof typeof plans].map((plan, index) => {
            const isHighlighted = index === 2;
            return (
              <Card
                key={index}
                className={`transition-all duration-300 bg-gradient-card animate-fade-in ${
                  isHighlighted
                    ? 'border-2 border-primary shadow-strong scale-105 glow-white-strong'
                    : 'border border-primary/20 hover:border-primary hover:shadow-strong hover:glow-white'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{plan.name}</h3>
                  <p className="text-4xl font-bold mb-4 text-foreground">
                    {plan.price}
                    <span className="text-muted-foreground text-lg font-medium">/{selectedPlan}</span>
                  </p>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    {plan.features.map((feature, idx) => (
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

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, Send } from "lucide-react";
import { toast } from "sonner";

const PricingSection = () => {
  const { language } = useLanguage();
  const [selectedDuration, setSelectedDuration] = useState<string>("1 Day");
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: ""
  });

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

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName);
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.whatsapp) {
      toast.error(language === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill all required fields');
      return;
    }

    const message = `${language === 'ar' ? 'مرحباً' : 'Hello'}! 👋

${language === 'ar' ? 'الاسم' : 'Name'}: ${formData.name}
${language === 'ar' ? 'البريد الإلكتروني' : 'Email'}: ${formData.email}
${language === 'ar' ? 'واتساب' : 'WhatsApp'}: ${formData.whatsapp}

${language === 'ar' ? 'الباقة المختارة' : 'Selected Plan'}: ${selectedPackage} - ${selectedDuration}

${language === 'ar' ? 'أنا مهتم بخدمة Fast Chat للرد التلقائي على العملاء.' : 'I am interested in Fast Chat service for automatic customer replies.'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "201000000000";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    
    toast.success(language === 'ar' ? 'جارٍ فتح واتساب...' : 'Opening WhatsApp...');
    
    setFormData({ name: "", email: "", whatsapp: "" });
    setShowForm(false);
    setSelectedPackage("");
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-section" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-primary glow-white-soft mb-4">
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
              onClick={() => {
                setSelectedDuration(planKey);
                setSelectedPackage("");
                setShowForm(false);
              }}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-500 ${
                selectedDuration === planKey
                  ? 'bg-primary text-background scale-110 glow-white shadow-lg'
                  : 'bg-transparent text-primary hover:scale-105 hover:glow-white-subtle border border-primary/20 hover:border-primary'
              }`}
            >
              {planKey}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 max-w-7xl mx-auto mb-12">
          {plans[selectedDuration as keyof typeof plans].map((plan, index) => {
            const isSelected = selectedPackage === plan.name;
            const isHighlighted = index === 2;
            return (
              <Card
                key={index}
                onClick={() => handlePackageSelect(plan.name)}
                className={`cursor-pointer transition-all duration-500 bg-gradient-card animate-fade-in ${
                  isSelected
                    ? 'border-2 border-primary shadow-strong scale-105 glow-white-subtle'
                    : isHighlighted
                    ? 'border-2 border-primary/50 shadow-medium hover:scale-105'
                    : 'border border-primary/20 hover:border-primary hover:shadow-strong hover:scale-105'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{plan.name}</h3>
                  <p className="text-4xl font-bold mb-4 text-foreground">
                    {plan.price}
                    <span className="text-muted-foreground text-lg font-medium">/{selectedDuration}</span>
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

        {/* Contact Form */}
        {showForm && (
          <Card className="max-w-2xl mx-auto border border-primary/30 bg-gradient-card animate-fade-in glow-white-subtle">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center text-primary mb-6 glow-white">
                {language === 'ar' ? 'أكمل بياناتك' : 'Complete Your Information'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground text-lg">
                    {language === 'ar' ? 'الاسم' : 'Name'}
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={language === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
                    className="border border-primary/20 focus:border-primary transition-all duration-300 text-lg py-6 bg-card"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground text-lg">
                    {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                    className="border border-primary/20 focus:border-primary transition-all duration-300 text-lg py-6 bg-card"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-foreground text-lg">
                    {language === 'ar' ? 'واتساب' : 'WhatsApp'}
                  </Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder={language === 'ar' ? 'أدخل رقم واتساب' : 'Enter your WhatsApp number'}
                    className="border border-primary/20 focus:border-primary transition-all duration-300 text-lg py-6 bg-card"
                    required
                  />
                </div>

                <div className="bg-card/50 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-2">
                    {language === 'ar' ? 'الباقة المختارة:' : 'Selected Package:'}
                  </p>
                  <p className="text-lg font-bold text-primary">
                    {selectedPackage} - {selectedDuration}
                  </p>
                </div>

                <Button 
                  type="submit"
                  className="w-full text-xl py-6 rounded-xl bg-primary text-background hover:shadow-strong transition-all duration-300 hover:scale-105 group hover:glow-white"
                >
                  <span className="relative z-10">{language === 'ar' ? 'إرسال' : 'Send'}</span>
                  <Send className="mr-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default PricingSection;

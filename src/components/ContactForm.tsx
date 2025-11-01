import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactForm = () => {
  const { t, language } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [selectedPackage, setSelectedPackage] = useState<{ name: string; price: string } | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    brandName: "",
    whatsapp: "",
    reason: ""
  });

  const planDurations = ["1 Day", "5 Days", "10 Days", "30 Days"];
  
  const packages: Record<string, Array<{ name: string; price: string }>> = {
    "1 Day": [
      { name: "Basic", price: "100 EGP" },
      { name: "Professional", price: "150 EGP" },
      { name: "Business", price: "200 EGP" },
      { name: "Enterprise", price: "250 EGP" }
    ],
    "5 Days": [
      { name: "Basic", price: "350 EGP" },
      { name: "Professional", price: "450 EGP" },
      { name: "Business", price: "550 EGP" },
      { name: "Enterprise", price: "700 EGP" }
    ],
    "10 Days": [
      { name: "Basic", price: "1000 EGP" },
      { name: "Professional", price: "1200 EGP" },
      { name: "Business", price: "1400 EGP" },
      { name: "Enterprise", price: "1650 EGP" }
    ],
    "30 Days": [
      { name: "Basic", price: "2500 EGP" },
      { name: "Professional", price: "3500 EGP" },
      { name: "Business", price: "4500 EGP" },
      { name: "Enterprise", price: "6000 EGP" }
    ]
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.brandName || !formData.whatsapp) {
      toast.error(t('message.fillRequired'));
      return;
    }

    if (!selectedPackage) {
      toast.error(language === 'ar' ? 'يرجى اختيار باقة' : 'Please select a package');
      return;
    }

    // Prepare data for Google Apps Script
    const dataToSend = {
      name: formData.name,
      brand: formData.brandName,
      whatsapp: formData.whatsapp,
      plan: `${selectedPackage.name} - ${selectedPlan}`,
      price: selectedPackage.price,
      why: formData.reason || (language === 'ar' ? 'لم يتم ذكره' : 'Not mentioned')
    };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxeo6U7rI9kPFb6wfTVqS2XiZ_yUfdRj0yhnS6X_zhnZMx3-0uJdIR4GVI9GeZx8e1u8w/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
      });

      toast.success(language === 'ar' ? 'تم إرسال البيانات بنجاح!' : 'Data sent successfully!');
      
      // Reset form
      setFormData({
        name: "",
        brandName: "",
        whatsapp: "",
        reason: ""
      });
      setSelectedPlan("");
      setSelectedPackage(null);
    } catch (error) {
      toast.error(language === 'ar' ? 'حدث خطأ أثناء الإرسال' : 'Error sending data');
      console.error('Error:', error);
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-section" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="border border-primary/20 shadow-strong bg-gradient-card hover:glow-white transition-all duration-300 animate-fade-in">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground text-lg">{t('contact.name')}</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t('contact.namePlaceholder')}
                  className="border border-primary/20 focus:border-primary transition-all duration-300 text-lg py-6 bg-card"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="brandName" className="text-foreground text-lg">{t('contact.brandName')}</Label>
                <Input
                  id="brandName"
                  type="text"
                  value={formData.brandName}
                  onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                  placeholder={t('contact.brandPlaceholder')}
                  className="border border-primary/20 focus:border-primary transition-all duration-300 text-lg py-6 bg-card"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-foreground text-lg">{t('contact.whatsapp')}</Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder={t('contact.whatsappPlaceholder')}
                  className="border border-primary/20 focus:border-primary transition-all duration-300 text-lg py-6 bg-card"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason" className="text-foreground text-lg">{t('contact.reason')}</Label>
                <Textarea
                  id="reason"
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  placeholder={t('contact.reasonPlaceholder')}
                  className="border border-primary/20 focus:border-primary transition-all duration-300 min-h-32 text-lg bg-card"
                />
              </div>

              {/* Plan Selection */}
              <div className="space-y-4">
                <Label className="text-foreground text-lg">
                  {language === 'ar' ? 'اختر الخطة' : 'Select Plan'}
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {planDurations.map((plan) => (
                    <button
                      key={plan}
                      type="button"
                      onClick={() => {
                        setSelectedPlan(plan);
                        setSelectedPackage(null);
                      }}
                      className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        selectedPlan === plan
                          ? 'bg-primary text-background scale-105 glow-white shadow-lg'
                          : 'bg-card border border-primary/20 text-primary hover:scale-105 hover:border-primary'
                      }`}
                    >
                      {plan}
                    </button>
                  ))}
                </div>
              </div>

              {/* Package Selection */}
              {selectedPlan && (
                <div className="space-y-4 animate-fadeRise">
                  <Label className="text-foreground text-lg">
                    {language === 'ar' ? 'اختر الباقة' : 'Select Package'}
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {packages[selectedPlan].map((pkg) => (
                      <button
                        key={pkg.name}
                        type="button"
                        onClick={() => setSelectedPackage(pkg)}
                        className={`p-4 rounded-xl text-left transition-all duration-300 ${
                          selectedPackage?.name === pkg.name
                            ? 'bg-primary/20 border-2 border-primary scale-105 glow-white-subtle'
                            : 'bg-card border border-primary/20 hover:border-primary hover:scale-105'
                        }`}
                      >
                        <div className="font-bold text-lg text-primary">{pkg.name}</div>
                        <div className="text-2xl font-bold text-foreground mt-2">{pkg.price}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <Button 
                type="submit"
                className="w-full text-xl py-6 rounded-xl bg-primary text-background hover:shadow-strong transition-all duration-300 hover:scale-105 group hover:glow-white-strong"
              >
                <span className="relative z-10">{language === 'ar' ? "لنبدأ التواصل" : "Let's Connect"}</span>
                <Send className="mr-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
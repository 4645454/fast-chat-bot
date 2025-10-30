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
  const [formData, setFormData] = useState({
    name: "",
    brandName: "",
    whatsapp: "",
    reason: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.brandName || !formData.whatsapp) {
      toast.error(t('message.fillRequired'));
      return;
    }

    // Create WhatsApp message
    const message = `${language === 'ar' ? 'مرحباً' : 'Hello'}! 👋

${t('contact.name')}: ${formData.name}
${t('contact.brandName')}: ${formData.brandName}
${t('contact.whatsapp')}: ${formData.whatsapp}
${t('contact.reason')}: ${formData.reason || (language === 'ar' ? 'لم يتم ذكره' : 'Not mentioned')}

${language === 'ar' ? 'أنا مهتم بخدمة Fast Chat للرد التلقائي على العملاء.' : 'I am interested in Fast Chat service for automatic customer replies.'}`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "201000000000"; // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast.success(t('message.openingWhatsapp'));
    
    // Reset form
    setFormData({
      name: "",
      brandName: "",
      whatsapp: "",
      reason: ""
    });
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-section" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-primary glow-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </div>

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
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full text-xl py-6 rounded-xl bg-primary text-background hover:shadow-strong transition-all duration-300 hover:scale-105 group hover:glow-white-strong"
              >
                <span className="relative z-10">{t('contact.submit')}</span>
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
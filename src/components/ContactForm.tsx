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
    <section id="contact-form" className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/20" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-strong hover:shadow-glow bg-card backdrop-blur-sm transition-all duration-300">
            <CardHeader className="text-center space-y-4 pb-8">
              <CardTitle className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {t('contact.title')}
              </CardTitle>
              <p className="text-xl text-muted-foreground">
                {t('contact.subtitle')}
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg font-medium">
                    {t('contact.name')} *
                  </Label>
                  <Input
                    id="name"
                    placeholder={t('contact.namePlaceholder')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 text-lg border-primary/20 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brandName" className="text-lg font-medium">
                    {t('contact.brandName')} *
                  </Label>
                  <Input
                    id="brandName"
                    placeholder={t('contact.brandPlaceholder')}
                    value={formData.brandName}
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                    className="h-12 text-lg border-primary/20 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-lg font-medium">
                    {t('contact.whatsapp')} *
                  </Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder={t('contact.whatsappPlaceholder')}
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="h-12 text-lg border-primary/20 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason" className="text-lg font-medium">
                    {t('contact.reason')}
                  </Label>
                  <Textarea
                    id="reason"
                    placeholder={t('contact.reasonPlaceholder')}
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="min-h-[120px] text-lg resize-none border-primary/20 focus:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-strong hover:shadow-glow transition-all duration-300 text-xl py-6"
                >
                  <Send className={`${language === 'ar' ? 'ml-2' : 'mr-2'} h-5 w-5`} />
                  {t('contact.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
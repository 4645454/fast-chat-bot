import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
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
      toast.error("من فضلك املى كل الحقول المطلوبة");
      return;
    }

    // Create WhatsApp message
    const message = `مرحباً! 👋

الاسم: ${formData.name}
اسم البراند: ${formData.brandName}
رقم الواتساب: ${formData.whatsapp}
سبب الاهتمام: ${formData.reason || "لم يتم ذكره"}

أنا مهتم بخدمة Fast Chat للرد التلقائي على العملاء.`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "201000000000"; // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast.success("جاري فتح الواتساب...");
    
    // Reset form
    setFormData({
      name: "",
      brandName: "",
      whatsapp: "",
      reason: ""
    });
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-none shadow-strong bg-card">
            <CardHeader className="text-center space-y-4 pb-8">
              <CardTitle className="text-3xl md:text-5xl font-bold text-foreground">
                يلا نبدأ النهاردة!
              </CardTitle>
              <p className="text-xl text-muted-foreground">
                املى البيانات دي وهنتواصل معاك على طول
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg font-medium">
                    اسمك *
                  </Label>
                  <Input
                    id="name"
                    placeholder="أحمد محمد"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 text-lg"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brandName" className="text-lg font-medium">
                    اسم البراند *
                  </Label>
                  <Input
                    id="brandName"
                    placeholder="براند شوب"
                    value={formData.brandName}
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                    className="h-12 text-lg"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-lg font-medium">
                    رقم الواتساب *
                  </Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="01012345678"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="h-12 text-lg"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason" className="text-lg font-medium">
                    سبب اهتمامك بالخدمة
                  </Label>
                  <Textarea
                    id="reason"
                    placeholder="عايز أحسن خدمة العملاء وأزود المبيعات..."
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="min-h-[120px] text-lg resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-xl py-6"
                >
                  <Send className="ml-2 h-5 w-5" />
                  يلا نتواصل
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
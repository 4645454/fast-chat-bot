import { Card, CardContent } from "@/components/ui/card";
import { Zap, Clock, MessageSquare, BarChart2, KeyRound, ShieldCheck, Palette, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BenefitsSection = () => {
  const { language } = useLanguage();
  
  const benefits = [
    {
      icon: Zap,
      titleAr: "⚡ الرد في أقل من 30 ثانية",
      titleEn: "⚡ Response in Less Than 30 Seconds",
      descAr: "تفاعل فوري مع العملاء في أي وقت. السرعة عنصر أساسي لتجربة مستخدم ممتازة. بوتك يرد قبل ما العميل يزهق أو يمشي.",
      descEn: "Instant interaction with customers anytime. Speed is essential for an excellent user experience. Your bot responds before the customer gets bored or leaves."
    },
    {
      icon: Clock,
      titleAr: "🕐 متوفر 24 ساعة يوميًا",
      titleEn: "🕐 Available 24 Hours Daily",
      descAr: "خدمتك دايمًا شغالة حتى في الإجازات. لا انقطاع ولا انتظار — دعم دائم لكل العملاء. جاهز يرد في أي لحظة من اليوم.",
      descEn: "Your service is always running, even on holidays. No interruption or waiting — constant support for all customers. Ready to respond at any moment."
    },
    {
      icon: MessageSquare,
      titleAr: "🧠 بيتكلم بلغة البراند مش روبوت",
      titleEn: "🧠 Speaks Your Brand Language, Not a Robot",
      descAr: "بيرد بنفس أسلوب شركتك ولهجتها. بيخلي العميل يحس إنه بيتكلم مع إنسان حقيقي. تجربة طبيعية ومريحة.",
      descEn: "Responds in your company's style and tone. Makes customers feel like they're talking to a real person. Natural and comfortable experience."
    },
    {
      icon: BarChart2,
      titleAr: "💰 يوفر أكثر من 60% من تكلفة خدمة العملاء",
      titleEn: "💰 Saves Over 60% of Customer Service Costs",
      descAr: "قلل مصاريف خدمة العملاء بشكل ذكي. نفس الجودة بس بتكلفة أقل. ذكاء وفعالية في إدارة المحادثات.",
      descEn: "Reduce customer service expenses intelligently. Same quality but at lower cost. Smart and effective conversation management."
    },
    {
      icon: KeyRound,
      titleAr: "🔑 مش محتاج باسورد أو إيميل",
      titleEn: "🔑 No Password or Email Required",
      descAr: "تركيب سهل وآمن بدون أي بيانات حساسة. خطوتين وتبدأ الخدمة فورًا. أمان وسرعة في الإعداد.",
      descEn: "Easy and secure setup without any sensitive data. Two steps and the service starts immediately. Security and speed in setup."
    },
    {
      icon: ShieldCheck,
      titleAr: "🔐 البيانات مشفرة ومحمية",
      titleEn: "🔐 Data Encrypted and Protected",
      descAr: "حماية كاملة لمحادثات عملاءك. الثقة والأمان أولوية في كل تفاعل. خصوصية البراند محفوظة 100%.",
      descEn: "Complete protection for your customers' conversations. Trust and security are a priority in every interaction. Brand privacy is 100% preserved."
    },
    {
      icon: Palette,
      titleAr: "🎨 قابل للتخصيص بالكامل",
      titleEn: "🎨 Fully Customizable",
      descAr: "عدل الألوان، الشعار، والأزرار بحرية. خلي البوت يعكس هوية البراند الخاصة بيك. كل التفاصيل على ذوقك.",
      descEn: "Modify colors, logo, and buttons freely. Make the bot reflect your brand identity. All details to your taste."
    },
    {
      icon: Lightbulb,
      titleAr: "💡 يقدم اقتراحات بيع تلقائيًا",
      titleEn: "💡 Provides Automatic Sales Suggestions",
      descAr: "مش بس بيرد — كمان بيبيع! يقترح منتجات وخدمات تزيد أرباحك. ذكاء تجاري داخل المحادثة.",
      descEn: "Not just responses — it also sells! Suggests products and services that increase your profits. Commercial intelligence within the conversation."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-section" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-primary glow-white-soft mb-4">
            {language === 'ar' ? 'لماذا تختار Fast Chat؟' : 'Why Choose Fast Chat?'}
          </h2>
          <p className="text-xl text-muted-foreground">
            {language === 'ar' ? 'مميزات خدمة الشات بوت السريع' : 'Fast Chatbot Service Features'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="border border-primary/20 bg-gradient-card glow-white-subtle"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card/50 border border-primary/30 text-primary mb-2 glow-white-subtle">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    {language === 'ar' ? benefit.titleAr : benefit.titleEn}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {language === 'ar' ? benefit.descAr : benefit.descEn}
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
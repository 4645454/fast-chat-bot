import { Card, CardContent } from "@/components/ui/card";
import { Zap, DollarSign, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "سرعة الرد = رضا العميل",
    description: "رد تلقائي في أقل من 30 ثانية على كل الاستفسارات، عميلك مش هيستنى ولا ثانية زيادة"
  },
  {
    icon: DollarSign,
    title: "توفير 3 موظفين خدمة عملاء",
    description: "وفر آلاف الجنيهات شهرياً، Fast Chat بيشتغل 24/7 من غير إجازات ولا تأخير"
  },
  {
    icon: TrendingUp,
    title: "زيادة المبيعات 24/7",
    description: "مفيش عميل هيفوتك تاني، البوت بيرد حتى لو إنت نايم والمبيعات بتزيد على طول"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            ليه تختار Fast Chat؟
          </h2>
          <p className="text-xl text-muted-foreground">
            الحل الذكي اللي هيغير طريقة تعاملك مع عملائك
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-to-br from-card to-secondary/30 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                    <Icon className="h-8 w-8" />
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
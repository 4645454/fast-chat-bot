import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "+100",
    label: "براند واثق فينا"
  },
  {
    icon: TrendingUp,
    number: "3x",
    label: "زيادة في المبيعات"
  },
  {
    icon: Clock,
    number: "24/7",
    label: "خدمة مستمرة"
  }
];

const ProofSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            نتائج حقيقية من عملائنا
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            أكتر من 100 براند اعتمد على Fast Chat وزود مبيعاته في أول أسبوع
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-medium hover:shadow-strong transition-all duration-300 bg-card animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="text-5xl font-bold text-primary">
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
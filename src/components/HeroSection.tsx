import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-chat.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-right space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              خلي عملاءك يرد عليهم الشات{" "}
              <span className="text-primary">أسرع من البشر!</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Fast Chat هتخلي البراند بتاعك يرد في أقل من 30 ثانية على واتساب وإنستا
              وفيسبوك
            </p>
            <div className="flex gap-4 justify-center md:justify-end pt-4">
              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
              >
                <MessageCircle className="ml-2 h-5 w-5" />
                ابدأ دلوقتي
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <img
              src={heroImage}
              alt="Fast Chat - رد تلقائي ذكي"
              className="relative rounded-3xl shadow-strong w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
import { MessageCircle, Instagram, Facebook } from "lucide-react";

const platforms = [
  {
    icon: MessageCircle,
    name: "واتساب",
    color: "text-green-500"
  },
  {
    icon: Instagram,
    name: "إنستجرام",
    color: "text-pink-500"
  },
  {
    icon: Facebook,
    name: "فيسبوك",
    color: "text-blue-600"
  }
];

const PlatformsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            منصة واحدة، رد على الكل
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AI Agent واحد يرد على كل المنصات في نفس اللحظة!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-8 rounded-3xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 animate-bounce-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`mb-4 ${platform.color}`}>
                  <Icon className="h-20 w-20" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {platform.name}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            وقريب جداً منصات تانية كتير...
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
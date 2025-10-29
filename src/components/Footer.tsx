import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <MessageCircle className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">Fast Chat</span>
          </div>

          {/* Tagline */}
          <p className="text-center text-background/80 text-lg">
            خدمة مقدمة بواسطة AI in N8N
          </p>

          {/* Copyright */}
          <div className="pt-6 border-t border-background/20 w-full text-center">
            <p className="text-background/60">
              © {new Date().getFullYear()} Fast Chat. جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
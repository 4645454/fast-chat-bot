import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const menuItems = [
    { label: language === 'ar' ? 'الخدمات' : 'Services', id: 'benefits' },
    { label: language === 'ar' ? 'لماذا نحن' : 'Why Us', id: 'benefits' },
    { label: language === 'ar' ? 'المنصات' : 'Platforms', id: 'platforms' },
    { label: language === 'ar' ? 'اتصل الآن' : 'Call Now', id: 'contact-form' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-lg shadow-medium border-b border-primary/20' 
          : 'bg-black/90 backdrop-blur-sm'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-24 relative">
          
          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Sparkles className="h-7 w-7 text-primary animate-pulse" />
              <span className="text-3xl font-elegant font-bold text-white tracking-wide">
                Fast Chat
              </span>
            </div>
            
            <div className="flex items-center gap-1">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="group relative px-6 py-3 text-white font-elegant text-lg font-medium transition-all duration-300 hover:text-primary"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </button>
              ))}
            </div>
            
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <Sparkles className="h-7 w-7 text-primary animate-pulse" />
              <span className="text-2xl font-elegant font-bold text-white">
                Fast Chat
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white hover:text-primary transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-2 bg-black/95 backdrop-blur-sm rounded-2xl p-4 shadow-strong border border-primary/20">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="text-right px-4 py-3 text-white font-elegant text-lg font-medium hover:text-primary rounded-xl transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

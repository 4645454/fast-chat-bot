import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import PlatformsSection from "@/components/PlatformsSection";
import PricingSection from "@/components/PricingSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Intersection Observer for fade-in animations (triggers only once per element)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            // Stop observing after animation triggers once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll('section, .animate-fade-in');
    elementsToAnimate.forEach((element) => observer.observe(element));

    return () => {
      elementsToAnimate.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <HeroSection />
        <BenefitsSection />
        <PlatformsSection />
        <PricingSection />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
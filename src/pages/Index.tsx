import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProofSection from "@/components/ProofSection";
import PlatformsSection from "@/components/PlatformsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ProofSection />
      <PlatformsSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
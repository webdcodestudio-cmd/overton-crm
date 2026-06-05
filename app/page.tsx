import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrialCallout from "@/components/sections/TrialCallout";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
// import AIFeaturesSection from "@/components/sections/AIFeaturesSection";
// import MeaningfulAISection from "@/components/sections/MeaningfulAISection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import PricingSection from "@/components/sections/PricingSection";
// import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import AIFeaturesShowcase from "@/components/sections/AIFeaturesShowcase";

export default function Home() {
  return (
    <>
      <SchemaMarkup />

      <main>
        <Navbar />
        <HeroSection />
        <TrialCallout />
        <ProblemSection />
        <AIFeaturesShowcase />
        <SolutionsSection />
        {/* <AIFeaturesSection /> */}
        {/* <MeaningfulAISection /> */}
        <FeaturesSection />
        <IntegrationsSection />
        <PricingSection />
        {/* <TestimonialsSection /> */}
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}

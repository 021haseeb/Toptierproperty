import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import TrustIndicators from "@/components/trust-indicators";
import Services from "@/components/services";
import Projects from "@/components/projects";

import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustIndicators />
      <Services />
      <Projects />

      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <Chatbot />
    </main>
  );
}

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"
import { ServicesSection } from "@/components/services-section"
import { TechShowcaseSection } from "@/components/tech-showcase-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navigation />
      <HeroSection />
      <WhatWeDoSection />
      <ServicesSection />
      <TechShowcaseSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}

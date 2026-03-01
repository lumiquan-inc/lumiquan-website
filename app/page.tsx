import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TechnologySection } from "@/components/technology-section"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#141418]">
      <Navigation />
      <HeroSection />
      <TechnologySection />
    </main>
  )
}

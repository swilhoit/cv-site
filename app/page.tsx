import { PortfolioGallery } from "@/components/portfolio-gallery"
import { HeroSection } from "@/components/hero-section"

export default function HomePage() {
  return (
    <div className="md:flex md:h-[calc(100vh-5rem)] md:fixed md:w-full md:top-20">
      {/* Left side - Fixed content on desktop, normal flow on mobile */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 md:py-0">
        <HeroSection />
      </div>
      
      {/* Right side - Scrolling gallery, visible on mobile below hero */}
      <div className="w-full md:w-1/2 h-full overflow-y-auto md:border-l">
        <PortfolioGallery />
      </div>
    </div>
  )
}
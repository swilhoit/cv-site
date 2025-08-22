import { PortfolioGallery } from "@/components/portfolio-gallery"
import { HeroSection } from "@/components/hero-section"

export default function HomePage() {
  return (
    <div className="flex h-[calc(100vh-100px)]">
      {/* Left side - Fixed content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <HeroSection />
      </div>
      
      {/* Right side - Scrolling gallery */}
      <div className="hidden md:block md:w-1/2 h-full overflow-y-auto border-l">
        <PortfolioGallery />
      </div>
    </div>
  )
}
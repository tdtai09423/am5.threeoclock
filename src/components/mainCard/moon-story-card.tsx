import { CircularHeroSection } from "./components/circular-hero-section";
import { JourneyPhotos } from "./components/journey-photos";

export default function MoonStoryCard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden relative">
      {/* Decorative stars scattered throughout */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-amber-300 text-xs">✦</div>
        <div className="absolute top-40 right-20 text-amber-400 text-sm">✦</div>
        <div className="absolute top-60 left-1/4 text-amber-300 text-xs">✦</div>
        <div className="absolute bottom-40 right-10 text-amber-400 text-xs">
          ✦
        </div>
        <div className="absolute bottom-60 left-16 text-amber-300 text-sm">
          ✦
        </div>
        <div className="absolute top-1/3 right-1/3 text-amber-400 text-xs">
          ✦
        </div>
      </div>

      <CircularHeroSection />
      <JourneyPhotos />
    </main>
  );
}

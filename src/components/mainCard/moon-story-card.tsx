import { CircularHeroSection } from "./components/circular-hero-section";
import { JourneyPhotos } from "./components/journey-photos";

export default function MoonStoryCard() {
  return (
    <main className="min-h-screen overflow-hidden relative">
      {/* Decorative stars scattered throughout */}
      <CircularHeroSection />
      <JourneyPhotos />
    </main>
  );
}

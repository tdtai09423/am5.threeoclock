import MoonStoryCard from "@/components/mainCard/moon-story-card";
import CooperateWith from "@/components/cooperate-with";
import { PartnershipSection } from "@/components/partnership-section";
import Ingredient from "@/components/ingredient";
import { TeaCollection } from "@/components/tea-collection";
import InfoCard from "@/components/info-card";
import Footer from "@/components/footer";
import { SetCake } from "@/components/set-cake";
import { Workshop } from "@/components/workshop";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <MoonStoryCard />
      <PartnershipSection />
      <Ingredient />
      <TeaCollection />
      <SetCake />
      <CooperateWith />
      <Workshop />
      <InfoCard />
      <Footer />
    </main>
  );
}

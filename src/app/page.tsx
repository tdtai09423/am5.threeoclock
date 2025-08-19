import MoonStoryCard from "@/components/mainCard/moon-story-card";
import CooperateWith from "@/components/cooperate-with";
import { PartnershipSection } from "@/components/partnership-section";
import { CollectionGallery } from "@/components/collection-gallery";
import { KOLPartnership } from "@/components/kol-partnership";
import { TeaCollection } from "@/components/tea-collection";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <MoonStoryCard />
      <PartnershipSection />
      <CooperateWith />
      <TeaCollection />
      <KOLPartnership />
      <CollectionGallery />
      <Footer />
    </main>
  );
}

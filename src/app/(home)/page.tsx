import FirstVisualSection from "@/features/home/components/first-visual-section";
import PickupItemsSection from "@/features/home/components/pickup-items-section";
import AboutUsSection from "@/features/home/components/about-us-section";
import JournalSection from "@/features/home/components/journal-section";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 md:gap-20 xl:gap-24">
      <FirstVisualSection />
      <PickupItemsSection />
      <AboutUsSection />
      <JournalSection />
    </div>
  );
}

import FirstVisualSection from "@/features/home/components/first-visual-section";
import PickupItemsSection from "@/features/home/components/pickup-items-section";
import AboutUsSection from "@/features/home/components/about-us-section";
import JournalSection from "@/features/home/components/journal-section";
import AllItemsSection from "@/features/home/components/all-items-section";
import { HomeShellStack } from "@/features/home/components/home-shell-stack";

export default function HomePage() {
  return (
    <HomeShellStack>
      <FirstVisualSection />
      <PickupItemsSection />
      <AboutUsSection />
      <JournalSection />
      <AllItemsSection />
    </HomeShellStack>
  );
}

import FirstVisualSection from "@/features/home/components/first-visual-section";
import PickupItemsSection from "@/features/home/components/pickup-items-section";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      <FirstVisualSection />
      <PickupItemsSection />
    </div>
  );
}

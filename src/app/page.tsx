import Banner from "@/components/Banner";
import PromotionSlider from "@/components/PromotionSlider";

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden overflow-y-clip">
      <Banner />
      <PromotionSlider />
    </main>
  );
}

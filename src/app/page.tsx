import CoverSection from "@/components/UI/home/cover";
import MapRoadSection from "@/components/UI/home/map-road-section";
import CategorySection from "@/components/UI/home/category-section";
import PopularCompaniesSection from "@/components/UI/home/popular-companies-section";

export default function Home() {
  return (
    <>
      <CoverSection />
      <MapRoadSection />
      <CategorySection />
      <PopularCompaniesSection />
    </>
  );
}

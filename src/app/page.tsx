import CoverSection from "@/components/UI/home/cover";
import MapRoadSection from "@/components/UI/home/map-road-section";
import CategorySection from "@/components/UI/home/category-section";
import PopularCompaniesSection from "@/components/UI/home/popular-companies-section";
import JobOpportunities from "@/components/UI/home/job-opportunities";
import LatestNews from "@/components/UI/home/latest-news";

export default function Home() {
  return (
    <>
      <CoverSection />
      <MapRoadSection />
      <CategorySection />
      <PopularCompaniesSection />
      <JobOpportunities />
      <LatestNews />
    </>
  );
}

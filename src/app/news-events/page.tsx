import AccordionSection from "@/components/accordion-section";
import BreadcrumbsSection from "@/components/breadcrumb";
import ImportantNewsEventsSection from "@/components/UI/news-events-page/ important-news-section";

const page = () => {
  return (
    <>
      <BreadcrumbsSection disabledLink="اخبار و رویدادها" />
      <ImportantNewsEventsSection />
      <AccordionSection />
    </>
  );
};

export default page;

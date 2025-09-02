import Banner from "@/src/app/components/services/banner";
import { BannerData, BlgosData, LeadData } from "@/src/app/blogs/data/data";
import CtaForm from "@/src/app/home/ctaform";
import { CallActionData } from "@/src/app/home/data/data";
import SimpleTabs from "@/src/app/blogs/blogtabs";

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <SimpleTabs BlgosData={BlgosData} LeadData={LeadData} />
      <CtaForm data={CallActionData} />
    </>
  );
};

export default Page;

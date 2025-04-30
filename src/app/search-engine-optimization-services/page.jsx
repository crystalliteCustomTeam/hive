import BannerLp from "@/src/app/search-engine-optimization-services/bannerlp";
import BetterSec from "@/src/app/search-engine-optimization-services/bettersec";
import Pricing from "@/src/app/components/services/pricing";
import ServicesLP from "@/src/app/organic-seo-services/serviceslp";
import CTA from "@/src/app/search-engine-optimization-services/cta";
import WhyChooseLp from "@/src/app/search-engine-optimization-services/whychoose";
import ProcessLp from "@/src/app/landing/components/processlp";
import {
  CtaData01,
  LPServices,
  processlp,
  PriceData,
  WhyData,
} from "@/src/app/search-engine-optimization-services/data/data";

const Page = () => {
  return (
    <>
      <BannerLp />
      <BetterSec />
      <CTA data={CtaData01} />
      <Pricing data={PriceData} graybg={true} />
      <ServicesLP data={LPServices} bg={true} />
      <ProcessLp black={true} data={processlp} roundwhite={true} />
      <WhyChooseLp data={WhyData} />
    </>
  );
};

export default Page;

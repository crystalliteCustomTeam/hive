import Pricing from "@/src/app/components/services/pricing";
import CTA from "@/src/app/social-media-advertising-agency/cta";
import Bannerlp from "@/src/app/social-media-advertising-agency/banner";
import Clients from "@/src/app/social-media-advertising-agency/clients";
import Contactfromlp from "@/src/app/social-media-advertising-agency/contactfromlp";
import BetterSec from "@/src/app/social-media-advertising-agency/bettersec";
import Testimonials from "@/src/app/home/testimonials";
import ServicesLP from "@/src/app/local-seo-agency/serviceslp";
import WhyChooseLp from "@/src/app/search-engine-optimization-services/whychoose";
import {
  CtaData01,
  ServicesData,
  processlp,
  PriceData,
  ClientImages,
  TestimonialData,
  WhyData,
} from "@/src/app/social-media-advertising-agency/data/data";

const Page = () => {
  return (
    <>
      <Bannerlp />
      <Clients data={ClientImages} />
      <Contactfromlp />
      <BetterSec />
      <Testimonials data={TestimonialData} />
      <ServicesLP data={ServicesData} SMMLP={true} />
      <Pricing data={PriceData} SMMLP={true} tab={true} />
      <CTA data={CtaData01} />
      <WhyChooseLp data={WhyData} noround={true} />
    </>
  );
};

export default Page;

import Banner from "@/src/app/local-seo-agency/banner";
import AbtAwards from "@/src/app/about-us/abtawards";
import ServicesLP from "@/src/app/local-seo-agency/serviceslp";
import Pricing from "@/src/app/components/services/pricing";
import ProcessLP from "@/src/app/local-seo-agency/process";
import CTA from "@/src/app/local-seo-agency/cta";
import MainServices from "@/src/app/local-seo-agency/mainservices";
import Testimonials from "@/src/app/home/testimonials";
import ContactLp from "@/src/app/landing/components/contactlp";
import {
  ServicesData,
  PriceData,
  processlp,
  CtaData,
  dataService,
  TestimonialData,
  ContactData,
  AbtAwardsData,
} from "@/src/app/local-seo-agency/data/data";
import LogoSection from "@/src/app/local-seo-agency/logo";

const Page = () => {
  return (
    <>
      <Banner />
      <AbtAwards data={AbtAwardsData} />
      <ServicesLP data={ServicesData} />
      <Pricing data={PriceData} bg="yes" bluebg={true} />
      <ProcessLP data={processlp} roundwhite={true} />
      <CTA data={CtaData} />
      <MainServices data={dataService} />
      <Testimonials data={TestimonialData} />
      <LogoSection />
      <ContactLp data={ContactData} />
    </>
  );
};

export default Page;

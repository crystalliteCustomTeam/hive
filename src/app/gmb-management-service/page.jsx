import Banner from "@/src/app/gmb-management-service/banner";
import ServicesLP from "@/src/app/local-seo-agency/serviceslp";
import Pricing from "@/src/app/components/services/pricing";
import ProcessLP from "@/src/app/local-seo-agency/process";
import CTA from "@/src/app/local-seo-agency/cta";
import MainServices from "@/src/app/local-seo-agency/mainservices";
import Testimonials from "@/src/app/home/testimonials";
import FooterContact from "@/src/app/gmb-management-service/footercontact";
import {
  ServicesData,
  PriceData,
  processlp,
  CtaData,
  dataService,
  TestimonialData,
  ContactData,
} from "@/src/app/gmb-management-service/data/data";
import LogoSection from "@/src/app/local-seo-agency/logo";
import ContactSection from "@/src/app/gmb-management-service/contact";

const Page = () => {
  return (
    <>
      <Banner />
      <ContactSection />
      <ServicesLP data={ServicesData} />
      <Pricing data={PriceData} bg="yes" />
      <ProcessLP data={processlp} />
      <CTA data={CtaData} altetnet={true} bg={true} />
      <MainServices data={dataService} Container={true} />
      <Testimonials data={TestimonialData} />
      <FooterContact data={ContactData} />
    </>
  );
};

export default Page;

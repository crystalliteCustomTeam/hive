import Banner from "@/src/app/seo-agency-new-york/components/banner";
import CompanyInfo from "@/src/app/seo-agency-new-york/components/companyinfo";
import { ServicesData, ReportData, TestimonialData, CtaData, ContactData, BlgosData, FAQsData, PartnerData } from "@/src/app/seo-agency-new-york/data/data";
import ServicesLp from "@/src/app/seo-dallas-tx/serviceslp";
import Work from "@/src/app/home/work";
import { WorkData, IndustriesData, IndustryItem } from "@/src/app/home/data/data";
import AbtCta from "@/src/app/seo-agency-new-york/components/abtcta";
import ReportSec from "@/src/app/seo-dallas-tx/report";
import Testimonials from "@/src/app/home/testimonials";
import Contactfromlp from "@/src/app/seo-dallas-tx/contactfromlp";
import Industries from "@/src/app/home/Industries";
import Partners from "@/src/app/home/partners";
import ContactCta from "@/src/app/seo-dallas-tx/contactcta";
import Blogs from "@/src/app/home/blogs";
import Faqs from "@/src/app/home/faq";
import TabContent from "./components/tabcontent";




const page = () => {
  return (
    <>
      <Banner />
      <CompanyInfo />
      <ServicesLp data={ServicesData} mt={true} />
      <Work data={WorkData} />
      <AbtCta />
      <ReportSec data={ReportData} />
      <Testimonials data={TestimonialData} />
      <Contactfromlp location={true} data={CtaData} />
      <Industries
        data={IndustriesData}
        IndustryData={IndustryItem}
        location={true}
      />
      <TabContent />
      <Partners data={PartnerData} />
      <ContactCta data={ContactData} />
      <Blogs data={BlgosData} />
      <Faqs data={FAQsData} />
    </>
  );
};

export default page;

import Banner from "@/src/app/seo-dallas-tx/banner";
import CallBack from "@/src/app/seo-dallas-tx/callback";
import ServicesLp from "@/src/app/seo-dallas-tx/serviceslp";
import ProcessLP from "@/src/app/seo-dallas-tx/process";
import Pricing from "@/src/app/components/services/pricing";
import WhyChoose from "@/src/app/home/whychoose";
import ContactCta from "@/src/app/seo-dallas-tx/contactcta";
import {
  ServicesData,
  processlp,
  PriceData,
  ChooseUsData,
  FAQsData,
  ContactData,
  BannerData,
  CallbackData,
  ReportData,
  CtaData
} from "@/src/app/seo-houston-tx/data/data";
import Industries from "@/src/app/home/Industries";
import ReportSec from "@/src/app/seo-dallas-tx/report";
import Faqs from "@/src/app/home/faq";
import Contactfromlp from "@/src/app/seo-dallas-tx/contactfromlp";
import Work from "@/src/app/components/services/work";
import Testimonials from "@/src/app/home/testimonials";
import {
  IndustriesData,
  WorkData,
  IndustryItem,
  TestimonialData
} from "@/src/app/home/data/data";

const page = () => {
  return (
    <>
      <Banner  data={BannerData}/>
      <CallBack data={CallbackData}/>
      <ServicesLp data={ServicesData} />
      <ProcessLP data={processlp} roundwhite={true} />
      <Work data={WorkData} category="SEO" />
      <Pricing data={PriceData} SMMLP={true}  location={true} />
      <WhyChoose data={ChooseUsData} />
      <ContactCta  data={ContactData}/>
      <Industries
        data={IndustriesData}
        IndustryData={IndustryItem}
        location={true}
      />
      <ReportSec data={ReportData}/>
      <Testimonials data={TestimonialData} />
      <Contactfromlp location={true} data={CtaData}/>
      
    </>
  );
};

export default page;

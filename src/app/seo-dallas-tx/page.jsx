import Banner from "@/src/app/seo-dallas-tx/banner";
import CallBack from "@/src/app/seo-dallas-tx/callback";
import ServicesLp from "@/src/app/seo-dallas-tx/serviceslp";
import ProcessLP from "@/src/app/seo-dallas-tx/process";
import Pricing from '@/src/app/components/services/pricing'
import WhyChoose from "@/src/app/home/whychoose";
import ContactCta from "@/src/app/seo-dallas-tx/contactcta";
import { ServicesData,processlp,PriceData,ChooseUsData,FAQsData } from "@/src/app/seo-dallas-tx/data/data";
import { IndustriesData, IndustryItem } from "@/src/app/home/data/data";
import Industries from "@/src/app/home/Industries";
import ReportSec from "@/src/app/seo-dallas-tx/report";
import Faqs from "@/src/app/home/faq";
import Contactfromlp from "@/src/app/seo-dallas-tx/contactfromlp";


const page = () => {
  return (
    <>
      <Banner />
      <CallBack />
      <ServicesLp data={ServicesData} />
      <ProcessLP data={processlp} roundwhite={true} />
      <Pricing data={PriceData} SMMLP={true} tab={true} location={true}/>
      <WhyChoose data={ChooseUsData} />
      <ContactCta />
      <Industries data={IndustriesData} IndustryData={IndustryItem} location={true}/>
      <ReportSec />
      <Contactfromlp location={true}/>
      <Faqs data={FAQsData} />
    </>
  );
};

export default page;

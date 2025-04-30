import BannerLp from "@/src/app/organic-seo-services/bannerlp";
import ServicesLp from "@/src/app/landing/components/serviceslp";
import ContentSection from "@/src/app/landing/components/contentsec";
import Pricing from "@/src/app/components/services/pricing";
import AwardsLp from "@/src/app/landing/components/awardslp";
import ServicesLP from "@/src/app/organic-seo-services/serviceslp";
import LocationLP from "@/src/app/organic-seo-services/location";
import Industries from "@/src/app/home/Industries";
import WhyChooseLp from "@/src/app/best-seo-agency/whychooselp";
import ProcessLp from "@/src/app/landing/components/processlp";
import ContactLp from "@/src/app/landing/components/contactlp";
import {
  ServicesData,
  WhyChooseData,
  ContactData,
  LPServices,
  processlp,
  AwardsPoints,
  ContentData,
  PriceData,
  IndustriesData,
} from "@/src/app/organic-seo-services/data/data";
import { IndustryItem } from "@/src/app/home/data/data";

const Page = () => {
  return (
    <>
      <BannerLp />
      <ServicesLp data={ServicesData} heigthSmall={true} round={true} />
      <ContentSection data={ContentData} round={true} bg={true} />
      <Pricing data={PriceData} bg="yes" />
      <AwardsLp data={AwardsPoints} />
      <ServicesLP data={LPServices} />
      <LocationLP />
      <Industries data={IndustriesData} IndustryData={IndustryItem} />
      <ProcessLp black={true} data={processlp} round={true} />
      <WhyChooseLp data={WhyChooseData} />
      <ContactLp data={ContactData} />
    </>
  );
};

export default Page;

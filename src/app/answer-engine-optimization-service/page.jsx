import Banner from "@/src/app/components/organic-shopping-services/banner";
import { BannerData, StateCounter, GeoJourneyData, Content1Data, ServicesData, PriceData, processlp, TestimonialData, GeoJourneyData1, CallActionData } from "@/src/app/answer-engine-optimization-service/data/data";
import StateCount from "@/src/app/components/innerservices/statecount"
import GeoJourney from "@/src/app/components/organic-shopping-services/geojourney";
import ContentSec from "@/src/app/components/organic-shopping-services/contentsec"
import Services from "@/src/app/components/organic-shopping-services/services";
import Pricing from "@/src/app/components/services/pricing";
import ProcessLp from "@/src/app/landing/components/processlp";
import CaseStudyLp from "@/src/app/best-seo-agency/casestudy";
import Testimonials from "@/src/app/home/testimonials";
import FollowUs from "@/src/app/home/followus";
import CtaForm from "@/src/app/home/ctaform";
import Blogs from "@/src/app/home/blogs";


import {
  BlgosData,
  FollowsData,
  WorkData,
} from "@/src/app/home/data/data";

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <StateCount data={StateCounter} />
      <GeoJourney data={GeoJourneyData} />
      <ContentSec data={Content1Data} marginTop={true} alternet={true} />
      <ContentSec data={Content1Data} nobg={true} />
      <Services data={ServicesData} />
      <Pricing bg="yes" data={PriceData} />
      <ProcessLp black={true} data={processlp} round={true} />
      <CaseStudyLp nosub={true} btntxt="Read More" />
      <GeoJourney data={GeoJourneyData1} />
      <Testimonials data={TestimonialData} />
      <CtaForm data={CallActionData} />
      <FollowUs data={FollowsData} />
      <Blogs data={BlgosData} />
    </>
  );
};

export default Page;

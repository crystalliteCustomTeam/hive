import Banner from "@/src/app/components/organic-shopping-services/banner";
import { BannerData, StateCounter, GeoJourneyData, Content1Data, PriceData, processlp, GeoJourneyData1, TestimonialData, CallActionData, InnerServicesData } from "@/src/app/search-generative-engine-optimization-service/data/data";
import StateCount from "@/src/app/components/innerservices/statecount"
import GeoJourney from "@/src/app/components/organic-shopping-services/geojourney";
import ThreeBox from "@/src/app/components/organic-shopping-services/threebox";
import MaxReach from "@/src/app/components/organic-shopping-services/maxreach";
import ContentSec from "@/src/app/components/organic-shopping-services/contentsec"
import Difference from "@/src/app/components/organic-shopping-services/difference";
import Pricing from "@/src/app/components/services/pricing";
import ProcessLp from "@/src/app/landing/components/processlp";
import CaseStudyLp from "@/src/app/best-seo-agency/casestudy";
import Testimonials from "@/src/app/home/testimonials";
import FollowUs from "@/src/app/home/followus";
import CtaForm from "@/src/app/home/ctaform";
import Blogs from "@/src/app/home/blogs";
import ServicesBoxes from "@/src/app/components/organic-shopping-services/servicesboxes";
import {
  BlgosData,
  FollowsData,
} from "@/src/app/home/data/data";

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <StateCount data={StateCounter} />
      <GeoJourney data={GeoJourneyData} />
      <ThreeBox />
      <MaxReach noTitle={true} />
      <ContentSec data={Content1Data} marginTop={true} />
      <Difference />
      <Pricing bg="yes" data={PriceData} />
      <ServicesBoxes data={InnerServicesData} />
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

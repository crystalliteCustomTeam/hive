import Banner from "@/src/app/components/organic-shopping-services/banner";
import GeoJourney from "@/src/app/components/organic-shopping-services/geojourney";
import { GeoJourneyData, Content1Data, Content2Data, ServicesData, processlp, GeoJourneyData1, TestimonialData, CallActionData } from "@/src/app/google-organic-shopping-seo-service/data/data";
import MaxReach from "@/src/app/components/organic-shopping-services/maxreach";
import ContentSec from "@/src/app/components/organic-shopping-services/contentsec";
import ContentBox from "@/src/app/components/organic-shopping-services/contentbox";
import Services from "@/src/app/components/organic-shopping-services/services";
import CustomPrice from "@/src/app/components/organic-shopping-services/customprice";
import ProcessLp from "@/src/app/landing/components/processlp";
import Work from "@/src/app/components/services/work";
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
      <Banner />
      <GeoJourney data={GeoJourneyData} />
      <MaxReach />
      <ContentSec data={Content1Data} />
      <ContentBox data={Content2Data} />
      <Services data={ServicesData} />
      <CustomPrice />
      <ProcessLp black={true} data={processlp} round={true} />
      <Work data={WorkData} category="SEO" />
      <GeoJourney data={GeoJourneyData1} />
      <Testimonials data={TestimonialData} />
      <CtaForm data={CallActionData} />
      <FollowUs data={FollowsData} />
      <Blogs data={BlgosData} />
    </>
  );
};

export default Page;

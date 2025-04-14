import Banner from "@/src/app/seo-dallas-tx/banner";
import ServicesMain from "@/src/app/components/services/servicesmain";
import DashboardPrice from "@/src/app/seo-reporting-dashboard/pricing";
import Testimonials from "@/src/app/home/testimonials";
import TalkLp from "@/src/app/landing/components/talk";
import CaseStudyLp from "@/src/app/landing/seo/casestudy";
import StateCountLP from "@/src/app/landing/components/statecountlp";
import {
  BannerData,
  ServicesData,
  TestimonialData,
  StateCounter,
  talkData,
} from "@/src/app/seo-reporting-dashboard/data/data";

const page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <ServicesMain data={ServicesData} center={true} />
      <DashboardPrice />
      <Testimonials data={TestimonialData} />
      <CaseStudyLp nosub={true} btntxt="Read More" />
      <StateCountLP data={StateCounter} seoprice={true} />
      <TalkLp data={talkData} />
    </>
  );
};

export default page;

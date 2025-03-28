import Banner from "@/src/app/fashion-ecommerce-seo-case-study/banner";
import Overview from "@/src/app/dentist-seo-case-study/overview";
import Challenges from "@/src/app/fashion-ecommerce-seo-case-study/challenges";
import Features from "@/src/app/fashion-ecommerce-seo-case-study/features";
import Conclusion from "@/src/app/fashion-ecommerce-seo-case-study/conclusion";
import Dominate from "@/src/app/dentist-seo-case-study/dominate";
import {
  BannerData,
  OverViewData,
  ChallengesData,
  OverViewData01,
  FeaturesData01,
  FeaturesData,
  DominateData,
  ConclusionData,
} from "@/src/app/travel-seo-case-study/data/data";

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <Overview data={OverViewData} />
      <Challenges data={ChallengesData} bottomBorder={true} />
      <Features data={FeaturesData} />
      <Overview data={OverViewData01} />
      <Features data={FeaturesData01} />
      <Dominate data={DominateData} />
      <Conclusion data={ConclusionData} />
    </>
  );
};

export default Page;

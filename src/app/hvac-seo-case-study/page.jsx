import Banner from "@/src/app/fashion-ecommerce-seo-case-study/banner";
import Overview from "@/src/app/dentist-seo-case-study/overview";
import Challenges from "@/src/app/fashion-ecommerce-seo-case-study/challenges";
import Features from "@/src/app/fashion-ecommerce-seo-case-study/features";
import Conclusion from "@/src/app/fashion-ecommerce-seo-case-study/conclusion";
import Technical from "@/src/app/dentist-seo-case-study/technical";
import {
  BannerData,
  OverViewData,
  ChallengesData,
  TechnicalData,
  FeaturesData,
  ConclusionData,
} from "@/src/app/hvac-seo-case-study/data/data";

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <Overview data={OverViewData} />
      <Challenges data={ChallengesData} bottomBorder={false}/>
      <Features data={FeaturesData} />
      <Technical data={TechnicalData} alternet={true}/>
      <Conclusion data={ConclusionData} />
    </>
  );
};

export default Page;

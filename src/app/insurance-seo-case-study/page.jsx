import Banner from "@/src/app/fashion-ecommerce-seo-case-study/banner";
import Overview from "@/src/app/dentist-seo-case-study/overview";
import Strategy from "@/src/app/fashion-ecommerce-seo-case-study/strategy";
import Challenges from "@/src/app/fashion-ecommerce-seo-case-study/challenges";
import Technical from "@/src/app/dentist-seo-case-study/technical";
import Features from "@/src/app/fashion-ecommerce-seo-case-study/features";
import Dominate from "@/src/app/dentist-seo-case-study/dominate";
import Conclusion from "@/src/app/fashion-ecommerce-seo-case-study/conclusion";
import {
  BannerData,
  OverViewData,
  StrategyData,
  ChallengesData,
  TechnicalData,
  StrategyData01,
  FeaturesData,
  ConclusionData,
} from "@/src/app/insurance-seo-case-study/data/data";

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <Overview data={OverViewData} />
      <Strategy data={StrategyData} />
      <Challenges data={ChallengesData} />
      <Technical data={TechnicalData} />
      <Features data={FeaturesData} />
      <Strategy data={StrategyData01} Overlay={true} />
      <Conclusion data={ConclusionData} />
    </>
  );
};

export default Page;

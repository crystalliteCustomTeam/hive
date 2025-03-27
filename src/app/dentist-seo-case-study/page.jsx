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
  OverViewData01,
  FeaturesData01,
  OverViewData02,
  DominateData,
  ConclusionData
} from "@/src/app/dentist-seo-case-study/data/data";

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <Overview data={OverViewData} />
      <Strategy data={StrategyData} Overlay={false} />
      <Challenges data={ChallengesData} />
      <Technical data={TechnicalData} />
      <Strategy data={StrategyData01} Overlay={true} />
      <Features data={FeaturesData} />
      <Overview data={OverViewData01} NoBordre={true} />
      <Features data={FeaturesData01} />
      <Overview data={OverViewData02} NoBordre={true} />
      <Dominate data={DominateData} />
      <Conclusion data={ConclusionData} />
    </>
  );
};

export default Page;

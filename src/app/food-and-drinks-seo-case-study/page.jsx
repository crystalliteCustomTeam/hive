import Banner from "@/src/app/fashion-ecommerce-seo-case-study/banner";
import Overview from "@/src/app/dentist-seo-case-study/overview";
import Challenges from "@/src/app/fashion-ecommerce-seo-case-study/challenges";
import Features from "@/src/app/fashion-ecommerce-seo-case-study/features";
import Conclusion from "@/src/app/fashion-ecommerce-seo-case-study/conclusion";
import Technical from "@/src/app/dentist-seo-case-study/technical";
import Strategy from "@/src/app/fashion-ecommerce-seo-case-study/strategy";
import OverView from "@/src/app/fashion-ecommerce-seo-case-study/overview";
import Dominate from "@/src/app/dentist-seo-case-study/dominate";
import {
  BannerData,
  OverViewData,
  ChallengesData,
  OverViewData01,
  StrategyData,
  ProcessData,
  TechnicalData,
  FeaturesData,
  DominateData,
  ConclusionData,
} from "@/src/app/food-and-drinks-seo-case-study/data/data";

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <Overview data={OverViewData} />
      <Challenges data={ChallengesData}/>
      <Overview data={OverViewData01} />
      <Strategy data={StrategyData} bgBlack={true} />
      <OverView data={ProcessData} NoImg={true}/>
      <Features data={FeaturesData} />
      <Technical data={TechnicalData}/>
      <Dominate data={DominateData} />
      <Conclusion data={ConclusionData} />
    </>
  );
};

export default Page;

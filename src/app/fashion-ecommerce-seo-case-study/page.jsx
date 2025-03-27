import Banner from "@/src/app/fashion-ecommerce-seo-case-study/banner";
import {
  BannerData,
  OverViewData,
  ChallengesData,
  StrategyData,
  ProcessData,
  FeaturesData,
  BuildingData,
  ResultsData,
  ConclusionData,
} from "@/src/app/fashion-ecommerce-seo-case-study/data/data";
import OverView from "@/src/app/fashion-ecommerce-seo-case-study/overview";
import Challenges from "@/src/app/fashion-ecommerce-seo-case-study/challenges";
import Strategy from "@/src/app/fashion-ecommerce-seo-case-study/strategy";
import Features from "@/src/app/fashion-ecommerce-seo-case-study/features";
import Results from "@/src/app/fashion-ecommerce-seo-case-study/result";
import Conclusion from "@/src/app/fashion-ecommerce-seo-case-study/conclusion";

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <OverView data={OverViewData} />
      <Challenges data={ChallengesData} />
      <Strategy data={StrategyData} Overlay={true}/>
      <OverView data={ProcessData} />
      <Features data={FeaturesData} />
      <Challenges data={BuildingData} />
      <Results data={ResultsData} />
      <Conclusion data={ConclusionData}/>
    </>
  );
};

export default Page;

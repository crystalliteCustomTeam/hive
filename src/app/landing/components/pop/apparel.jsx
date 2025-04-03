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

const Apparel = () => {
  return (
    <>
      <Banner data={BannerData} PopupStyle={true}/>
      <OverView data={OverViewData} PopupStyle={true}/>
      <Challenges data={ChallengesData} PopupStyle={true}/>
      <Strategy data={StrategyData} Overlay={true} PopupStyle={true}/>
      <OverView data={ProcessData} PopupStyle={true}/>
      <Features data={FeaturesData} PopupStyle={true}/>
      <Challenges data={BuildingData} PopupStyle={true}/>
      <Results data={ResultsData} PopupStyle={true}/>
      <Conclusion data={ConclusionData} PopupStyle={true}/>
    </>
  );
};

export default Apparel;

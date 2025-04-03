import Banner from "@/src/app/fashion-ecommerce-seo-case-study/banner";
import Overview from "@/src/app/dentist-seo-case-study/overview";
import Strategy from "@/src/app/fashion-ecommerce-seo-case-study/strategy";
import Challenges from "@/src/app/fashion-ecommerce-seo-case-study/challenges";
import Technical from "@/src/app/dentist-seo-case-study/technical";
import Features from "@/src/app/fashion-ecommerce-seo-case-study/features";
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
  TechnicalData1
} from "@/src/app/insurance-seo-case-study/data/data";

const Insurance = () => {
  return (
    <>
      <Banner data={BannerData}  PopupStyle={true}/>
      <Overview data={OverViewData} PopupStyle={true}/>
      <Strategy data={StrategyData} bgBlack={true} PopupStyle={true}/>
      <Challenges data={ChallengesData} PopupStyle={true}/>
      <Technical data={TechnicalData} PopupStyle={true}/>
      <Technical data={TechnicalData1} alternet={true} PopupStyle={true}/>
      <Features data={FeaturesData} PopupStyle={true}/>
      <Strategy data={StrategyData01} Normal={true} PopupStyle={true}/>
      <Conclusion data={ConclusionData} PopupStyle={true}/>
    </>
  );
};

export default Insurance;
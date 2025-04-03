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

const Dentist = () => {
  return (
    <>
      <Banner data={BannerData} PopupStyle={true}/>
      <Overview data={OverViewData} PopupStyle={true}/>
      <Strategy data={StrategyData} Overlay={false} PopupStyle={true}/>
      <Challenges data={ChallengesData} PopupStyle={true}/>
      <Technical data={TechnicalData} PopupStyle={true}/>
      <Strategy data={StrategyData01} Normal={true} PopupStyle={true}/>
      <Features data={FeaturesData} PopupStyle={true}/>
      <Overview data={OverViewData01} NoBordre={true} PopupStyle={true}/>
      <Features data={FeaturesData01} PopupStyle={true}/>
      <Overview data={OverViewData02} NoBordre={true} PopupStyle={true} />
      <Dominate data={DominateData} PopupStyle={true} />
      <Conclusion data={ConclusionData} PopupStyle={true}/>
    </>
  );
};

export default Dentist;

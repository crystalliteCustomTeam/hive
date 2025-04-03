import Banner from "@/src/app/fashion-ecommerce-seo-case-study/banner";
import Overview from "@/src/app/dentist-seo-case-study/overview";
import OverView from "@/src/app/fashion-ecommerce-seo-case-study/overview";
import Features from "@/src/app/fashion-ecommerce-seo-case-study/features";
import Conclusion from "@/src/app/fashion-ecommerce-seo-case-study/conclusion";
import Technical from "@/src/app/dentist-seo-case-study/technical";
import Strategy from "@/src/app/fashion-ecommerce-seo-case-study/strategy";
import Challenges from "@/src/app/fashion-ecommerce-seo-case-study/challenges";
import {
  BannerData,
  OverViewData,
  StrategyData,
  ProcessData,
  TechnicalData,
  FeaturesData,
  ChallengesData,
  OverViewData01,
  ConclusionData,
} from "@/src/app/interior-design-seo-case-study/data/data";

const Home = () => {
  return (
    <>
      <Banner data={BannerData} PopupStyle={true}/>
      <Overview data={OverViewData} PopupStyle={true}/>
      <Strategy data={StrategyData} bgBlack={true} PopupStyle={true}/>
      <OverView data={ProcessData} NoImg={true} PopupStyle={true}/>
      <Features data={FeaturesData} PopupStyle={true}/>
      <Challenges data={ChallengesData} PopupStyle={true}/>
      <Technical data={TechnicalData} alternet={true} PopupStyle={true}/>
      <Overview data={OverViewData01} PopupStyle={true}/>
      <Conclusion data={ConclusionData} PopupStyle={true}/>
    </>
  );
};

export default Home;


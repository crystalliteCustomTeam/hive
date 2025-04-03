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

const HVAC = () => {
  return (
    <>
      <Banner data={BannerData} PopupStyle={true} />
      <Overview data={OverViewData} PopupStyle={true}/>
      <Challenges data={ChallengesData} bottomBorder={true} PopupStyle={true}/>
      <Features data={FeaturesData} PopupStyle={true}/>
      <Technical data={TechnicalData} alternet={true} PopupStyle={true}/>
      <Conclusion data={ConclusionData} PopupStyle={true}/>
    </>
  );
};

export default HVAC;

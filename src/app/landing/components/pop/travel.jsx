import Banner from "@/src/app/fashion-ecommerce-seo-case-study/banner";
import Overview from "@/src/app/dentist-seo-case-study/overview";
import Challenges from "@/src/app/fashion-ecommerce-seo-case-study/challenges";
import Features from "@/src/app/fashion-ecommerce-seo-case-study/features";
import Conclusion from "@/src/app/fashion-ecommerce-seo-case-study/conclusion";
import Dominate from "@/src/app/dentist-seo-case-study/dominate";
import {
  BannerData,
  OverViewData,
  ChallengesData,
  OverViewData01,
  FeaturesData01,
  FeaturesData,
  DominateData,
  ConclusionData,
} from "@/src/app/travel-seo-case-study/data/data";

const Travel = () => {
  return (
    <>
      <Banner data={BannerData} PopupStyle={true}/>
      <Overview data={OverViewData} PopupStyle={true}/>
      <Challenges data={ChallengesData} bottomBorder={true} PopupStyle={true}/>
      <Features data={FeaturesData} PopupStyle={true}/>
      <Overview data={OverViewData01} PopupStyle={true}/>
      <Features data={FeaturesData01} PopupStyle={true}/>
      <Dominate data={DominateData} PopupStyle={true}/>
      <Conclusion data={ConclusionData} PopupStyle={true}/>
    </>
  );
};

export default Travel;

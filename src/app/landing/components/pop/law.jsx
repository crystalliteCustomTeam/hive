
import Banner from "@/src/app/fashion-ecommerce-seo-case-study/banner";
import Overview from "@/src/app/dentist-seo-case-study/overview";
import Challenges from "@/src/app/fashion-ecommerce-seo-case-study/challenges";
import Features from "@/src/app/fashion-ecommerce-seo-case-study/features";
import Conclusion from "@/src/app/fashion-ecommerce-seo-case-study/conclusion";
import Strategy from "@/src/app/fashion-ecommerce-seo-case-study/strategy";
import Dominate from "@/src/app/dentist-seo-case-study/dominate";
import {
  BannerData,
  OverViewData,
  StrategyData,
  ChallengesData,
  FeaturesData,
  ChallengesData01,
  FeaturesData01,
  ChallengesData02,
  FeaturesData02,
  ChallengesData03,
  FeaturesData03,
  DominateData,
  ConclusionData,
} from "@/src/app/law-firm-seo-case-study/data/data";

const Law = () => {
  return (
    <>
      <Banner data={BannerData} PopupStyle={true} />
      <Overview data={OverViewData} PopupStyle={true} />
      <Strategy data={StrategyData} bgBlack={true} PopupStyle={true} />
      <Challenges data={ChallengesData} bottomBorder={true} PopupStyle={true} />
      <Features data={FeaturesData} PopupStyle={true} />
      <Challenges
        data={ChallengesData01}
        bottomBorder={true}
        PopupStyle={true}
      />
      <Features data={FeaturesData01} PopupStyle={true} />
      <Challenges
        data={ChallengesData02}
        bottomBorder={true}
        PopupStyle={true}
      />
      <Features data={FeaturesData02} PopupStyle={true} />
      <Challenges
        data={ChallengesData03}
        bottomBorder={true}
        PopupStyle={true}
      />
      <Features data={FeaturesData03} PopupStyle={true} />
      <Dominate data={DominateData} PopupStyle={true} />
      <Conclusion data={ConclusionData} PopupStyle={true} />
    </>
  );
};

export default Law;

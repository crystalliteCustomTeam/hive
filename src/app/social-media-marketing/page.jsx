import StateCountLP from "@/src/app/landing/components/statecountlp";
import BannerLp from "@/src/app/landing/components/bannerlp";
import ProcessLp from "@/src/app/landing/components/processlp";
import CtaLp from "@/src/app/landing/components/ctalp";
import ServicesLp from "@/src/app/landing/components/serviceslp";
import CreativeLp from "@/src/app/landing/components/creativelp";
import AwardsLp from "@/src/app/landing/components/awardslp";
import PlateFromLp from "@/src/app/landing/components/platefromlp";
import TalkLp from "@/src/app/landing/components/talk";
import MarketTrend from "@/src/app/landing/components/markettrend";
import Pricing from "@/src/app/components/services/pricing";
import ContactLp from "@/src/app/landing/components/contactlp";
import {
  StateCounter,
  CtaData,
  ContactData,
  ServicesData,
  AwardsPoints,
  processlp,
  LatestWork,
  talkData,
  PriceData,
} from "@/src/app/social-media-marketing/data/data";

const Page = () => {
  return (
    <>
      <BannerLp />
      <StateCountLP data={StateCounter} />
      <ProcessLp data={processlp} />
      <CtaLp data={CtaData} />
      <ServicesLp
        data={ServicesData}
        heigthSmall={true}
        mainbtn="Schedule a Free Consultation"
      />
      <CreativeLp data={LatestWork} />
      <TalkLp data={talkData} />
      <PlateFromLp />
      <Pricing data={PriceData} tab={true} />
      <AwardsLp data={AwardsPoints} />
      <MarketTrend />
      <ContactLp useImg={true} data={ContactData} />
    </>
  );
};

export default Page;

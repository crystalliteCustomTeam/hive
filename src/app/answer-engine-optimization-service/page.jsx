import Banner from "@/src/app/components/organic-shopping-services/banner";
import { BannerData, StateCounter, GeoJourneyData, Content1Data } from "@/src/app/answer-engine-optimization-service/data/data";
import StateCount from "@/src/app/components/innerservices/statecount"
import GeoJourney from "@/src/app/components/organic-shopping-services/geojourney";
import ContentSec from "@/src/app/components/organic-shopping-services/contentsec"


const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <StateCount data={StateCounter} />
      <GeoJourney data={GeoJourneyData} />
      <ContentSec data={Content1Data} marginTop={true} />
    </>
  );
};

export default Page;

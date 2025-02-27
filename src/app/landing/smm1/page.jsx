import BannerLp from "@/src/app/landing/smm1/bannerlp"
import Clients from "@/src/app/home/clients"
import ServicesLp from "@/src/app/landing/components/serviceslp"
import AwardsLp from "@/src/app/landing/components/awardslp"
import Pricing from '@/src/app/components/services/pricing'
import WhyChooseLp from "@/src/app/landing/seo/whychooselp"
import StateCountLP from "@/src/app/landing/components/statecountlp"
import CtaLp from "@/src/app/landing/components/ctalp"
import { ServicesData, StateCounter, WhyChooseData, CtaData, AwardsPoints, ClientImages, PriceData } from "@/src/app/landing/smm1/data/data"
import ContentBox from "@/src/app/landing/smm1/contentbox"

const Page = () => {
    return (
        <>
            <BannerLp />
            <Clients data={ClientImages} landingPage={true} />
            <ContentBox />
            <ServicesLp data={ServicesData} heigthSmall={true} />
            <AwardsLp data={AwardsPoints} />
            <Pricing data={PriceData} bg="yes" tab={true} />
            <StateCountLP data={StateCounter} nostate={true} />
            <WhyChooseLp data={WhyChooseData} />
            <CtaLp data={CtaData} bgBlur={true} />

        </>
    )
}

export default Page
import BannerLp from "@/src/app/landing/content/bannerlp"
import WhyChooseLp from "@/src/app/landing/seo/whychooselp"
import CtaLp from "@/src/app/landing/components/ctalp"
import ServicesLp from "@/src/app/landing/content/serviceslp"
import MarketPoints from "@/src/app/landing/content/marketpoints"
import PorcessLp from "@/src/app/landing/content/porcesslp"
import Pricing from '@/src/app/components/services/pricing'
import AwardsLp from "@/src/app/landing/components/awardslp"
import ContactLp from "@/src/app/landing/components/contactlp"
import Work from '@/src/app/components/services/work';
import { PriceData } from "@/src/app/seo-service/data/data"
import { WhyChooseData, CtaData, ServiceslpData, MarketPointsData, PorcessLpData, ContactData, AwardsPoints } from "@/src/app/landing/content/data/data"
import { WorkData } from '@/src/app/home/data/data';
import CtaSimple from "@/src/app/landing/content/ctaSimple"

const Page = () => {
    return (
        <>
            <BannerLp />
            <WhyChooseLp data={WhyChooseData} />
            <CtaLp data={CtaData} BgDrak={true} />
            <ServicesLp data={ServiceslpData} />
            <MarketPoints data={MarketPointsData} />
            <PorcessLp data={PorcessLpData} />
            <CtaSimple />
            <Pricing data={PriceData} tab={true} bg="yes" />
            <Work data={WorkData} category="Content Marketing" />
            <AwardsLp data={AwardsPoints} />
            <ContactLp data={ContactData} />
        </>
    )
}

export default Page
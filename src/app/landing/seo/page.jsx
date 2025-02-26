import StateCountLP from "@/src/app/landing/components/statecountlp"
import BannerLp from "@/src/app/landing/seo/bannerlp"
import CtaLp from "@/src/app/landing/components/ctalp"
import WhyChooseLp from "@/src/app/landing/seo/whychooselp"
import ProcessLp from "@/src/app/landing/components/processlp"
import CaseStudyLp from "@/src/app/landing/seo/casestudy"
import ServicesMain from '@/src/app/components/services/servicesmain'
import Pricing from '@/src/app/components/services/pricing'
import AwardsLp from "@/src/app/landing/components/awardslp"
import ContactLp from "@/src/app/landing/components/contactlp"
import { StateCounter, CtaData, WhyChooseData, ServicesData, ContactData, processlp, AwardsPoints, PriceData, talkData } from "@/src/app/landing/seo/data/data"
import TalkLp from "@/src/app/landing/components/talk"



const Page = () => {
    return (
        <>
            <BannerLp />
            <StateCountLP data={StateCounter} height={true} coloum="yes" price={true} />
            <WhyChooseLp data={WhyChooseData} />
            <CtaLp data={CtaData} />
            <ProcessLp black={true} data={processlp} />
            <ServicesMain data={ServicesData} greenbg={true} center={true} />
            <CaseStudyLp nosub={true} />
            <Pricing data={PriceData} />
            <TalkLp data={talkData} />
            <AwardsLp data={AwardsPoints} />
            <ContactLp data={ContactData} />
        </>
    )
}

export default Page
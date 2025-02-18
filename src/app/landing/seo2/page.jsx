import BannerLp from "@/src/app/landing/seo2/bannerlp"
import BetterSec from "@/src/app/landing/seo2/bettersec"
import Pricing from '@/src/app/components/services/pricing'
import ServicesLP from "@/src/app/landing/seo1/serviceslp"
import CTA from '@/src/app/landing/seo2/cta'
import WhyChooseLp from "@/src/app/landing/seo2/whychoose"
import ProcessLp from "@/src/app/landing/components/processlp"
import { CtaData01, LPServices, processlp, PriceData, WhyData } from "@/src/app/landing/seo2/data/data"

const Page = () => {
    return (
        <>
            <BannerLp />
            <BetterSec />
            <CTA data={CtaData01} />
            <Pricing data={PriceData} bg="yes" />
            <ServicesLP data={LPServices} bg={true} />
            <ProcessLp black={true} data={processlp} />
            <WhyChooseLp data={WhyData} />

        </>
    )
}

export default Page
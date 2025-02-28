import Pricing from '@/src/app/components/services/pricing'
import CTA from '@/src/app/landing/smm3/cta'
import Bannerlp from "@/src/app/landing/smm3/banner"
import Clients from "@/src/app/landing/smm3/clients"
import Contactfromlp from "@/src/app/landing/smm3/contactfromlp"
import BetterSec from "@/src/app/landing/smm3/bettersec"
import Testimonials from "@/src/app/home/testimonials";
import ServicesLP from "@/src/app/landing/seo3/serviceslp";
import WhyChooseLp from "@/src/app/landing/seo2/whychoose"
import { CtaData01, ServicesData, processlp, PriceData, ClientImages, TestimonialData, WhyData } from "@/src/app/landing/smm3/data/data"

const Page = () => {
    return (
        <>
            <Bannerlp />
            <Clients data={ClientImages} />
            <Contactfromlp />
            <BetterSec />
            <Testimonials data={TestimonialData} />
            <ServicesLP data={ServicesData} SMMLP={true} />
            <Pricing data={PriceData} SMMLP={true} tab={true} />
            <CTA data={CtaData01} />
            <WhyChooseLp data={WhyData} noround={true} />
        </>
    )
}

export default Page
import Banner from "@/src/app/landing/seo3/banner"
import AbtAwards from '@/src/app/about-us/abtawards';
import { AbtAwardsData } from '@/src/app/about-us/data/data'
import ServicesLP from "@/src/app/landing/seo3/serviceslp";
import Pricing from '@/src/app/components/services/pricing'
import ProcessLP from "@/src/app/landing/seo3/process";
import CTA from '@/src/app/landing/seo3/cta'
import MainServices from "@/src/app/landing/seo3/mainservices";
import Testimonials from "@/src/app/home/testimonials";
import ContactLp from "@/src/app/landing/components/contactlp"
import { ServicesData, PriceData, processlp, CtaData, dataService, TestimonialData, ContactData } from "@/src/app/landing/seo3/data/data";
import LogoSection from "@/src/app/landing/seo3/logo";


const Page = () => {
    return (
        <>
            <Banner />
            <AbtAwards data={AbtAwardsData} />
            <ServicesLP data={ServicesData} />
            <Pricing data={PriceData} bg="yes" />
            <ProcessLP data={processlp} />
            <CTA data={CtaData} />
            <MainServices data={dataService} />
            <Testimonials data={TestimonialData} />
            <LogoSection />
            <ContactLp data={ContactData} />
        </>
    )
}

export default Page
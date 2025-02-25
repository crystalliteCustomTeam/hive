import Banner from "@/src/app/landing/gmb/banner"
import ServicesLP from "@/src/app/landing/seo3/serviceslp";
import Pricing from '@/src/app/components/services/pricing'
import ProcessLP from "@/src/app/landing/seo3/process";
import CTA from '@/src/app/landing/seo3/cta'
import MainServices from "@/src/app/landing/seo3/mainservices";
import Testimonials from "@/src/app/home/testimonials";
import FooterContact from "@/src/app/landing/gmb/footercontact"
import { ServicesData, PriceData, processlp, CtaData, dataService, TestimonialData, ContactData } from "@/src/app/landing/gmb/data/data";
import LogoSection from "@/src/app/landing/seo3/logo";
import ContactSection from "@/src/app/landing/gmb/contact";


const Page = () => {
    return (
        <>
            <Banner />
            <ContactSection />
            <ServicesLP data={ServicesData} />
            <Pricing data={PriceData} bg="yes" />
            <ProcessLP data={processlp} />
            <CTA data={CtaData} altetnet={true} bg={true} />
            <MainServices data={dataService} Container={true} />
            <Testimonials data={TestimonialData} />
            <FooterContact data={ContactData} />
        </>
    )
}

export default Page
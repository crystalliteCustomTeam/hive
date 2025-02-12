import BannerLp from "@/src/app/landing/seo1/bannerlp"
import ServicesLp from "@/src/app/landing/components/serviceslp"
import ContentSection from "@/src/app/landing/components/contentsec"
import Pricing from '@/src/app/components/services/pricing'
import PackageDetails from "@/src/app/landing/seo1/package"
import AwardsLp from "@/src/app/landing/components/awardslp"
import ServicesLP from "@/src/app/landing/seo1/serviceslp"
import LocationLP from "@/src/app/landing/seo1/location"
import Industries from "@/src/app/home/Industries";
import WhyChooseLp from "@/src/app/landing/seo/whychooselp"
import ProcessLp from "@/src/app/landing/components/processlp"
import Partners from "@/src/app/home/partners"
import ContactLp from "@/src/app/landing/components/contactlp"
import { ServicesData, WhyChooseData, FAQsData, ContactData, LPServices, processlp, AwardsPoints, ContentData, PriceData, IndustriesData } from "@/src/app/landing/seo1/data/data"
import { IndustryItem, PartnerData } from "@/src/app/home/data/data";



const Page = () => {
    return (
        <>
            <BannerLp />
            <ServicesLp data={ServicesData} heigthSmall={true} />
            <ContentSection data={ContentData} />
            <Pricing data={PriceData} bg="yes" />
            <AwardsLp data={AwardsPoints} />
            <ServicesLP data={LPServices} />
            <LocationLP />
            <Industries data={IndustriesData} IndustryData={IndustryItem} />
            <ProcessLp black={true} data={processlp} />
            <WhyChooseLp data={WhyChooseData} />
            <ContactLp data={ContactData} />
        </>
    )
}

export default Page
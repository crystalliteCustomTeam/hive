import Banner from '@/src/app/components/services/banner'
import WhyChoose from "@/src/app/home/whychoose";
import ServicesMain from '@/src/app/components/services/servicesmain'
import CTA from "@/src/app/home/cta";
import Work from '@/src/app/components/services/work';
import Pricing from '@/src/app/components/services/pricing';
import Industries from '@/src/app/home/Industries';
import Awards from '@/src/app/home/awards';
import Partners from '@/src/app/home/partners';
import Testimonials from '@/src/app/home/testimonials';
import CtaForm from '@/src/app/home/ctaform';
import FollowUs from '@/src/app/home/followus';
import Blogs from '@/src/app/home/blogs';
import Faqs from '@/src/app/home/faq';
import Process from '@/src/app/components/services/process';
import { AwardsData, FollowsData, PartnerData, BlgosData, IndustryItem, WorkData } from '@/src/app/home/data/data';
import { FAQsData, PriceData, ProcessData, ServicesData, CtaData, CallActionData, ChooseUsData, BannerData, TestimonialData, IndustriesData } from '@/src/app/paid-marketing-services/data/data';


const Page = () => {
    return (
        <>
            <Banner data={BannerData} bgtxt="" />
            <Process data={ProcessData} />
            <WhyChoose data={ChooseUsData} />
            <ServicesMain data={ServicesData} />
            <CTA data={CtaData} />
            <Work data={WorkData} category="Paid Marketing" />
            {/* <Pricing bg="yes" data={PriceData} /> */}
            <Industries data={IndustriesData} IndustryData={IndustryItem} />
            <Partners data={PartnerData} />
            <Testimonials data={TestimonialData} />
            <Awards data={AwardsData} />
            <CtaForm data={CallActionData} />
            <FollowUs data={FollowsData} />
            <Blogs data={BlgosData} />
            <Faqs data={FAQsData} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `
      {
        "@context": "https://schema.org/", 
        "@type": "Product", 
        "name": "Hire Paid Marketing Services Company To Grow Your Revenue",
        "image": "https://www.infinitidigital.us/infinitidigital.png",
        "url": "https://www.infinitidigital.us/paid-marketing-services",
        "description": "Drive targeted traffic and qualified leads with Infiniti Digital paid marketing services. Broadcast your services across multiple mediums and channels.",
        "brand": {
          "@type": "Brand",
          "name": "Infiniti Digital"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "ratingCount": "1044"
        }
      }
    `,
                }}
            />


        </>
    )
}

export default Page
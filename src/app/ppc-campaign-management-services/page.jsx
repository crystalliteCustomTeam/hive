import Banner from '@/src/app/components/innerservices/banner'
import StateCount from '@/src/app/components/innerservices/statecount'
import Process from '@/src/app/components/services/process'
import ContentSection from '@/src/app/components/innerservices/content'
import NewsLetter from '@/src/app/components/innerservices/newsletter'
import InnerServices from '@/src/app/components/innerservices/innerservices'
import Pricing from '@/src/app/components/services/pricing'
import Partners from '@/src/app/home/partners'
import Testimonials from '@/src/app/home/testimonials'
import CtaForm from '@/src/app/home/ctaform'
import FollowUs from '@/src/app/home/followus'
import Blogs from '@/src/app/home/blogs'
import Faqs from '@/src/app/home/faq'
import PlateFroms from '@/src/app/home/plateform'
import Industries from '@/src/app/home/Industries'
import { BannerData, StateCounter, ProcessData, ContentData, NewsLetterData, PriceData, FAQsData, CallActionData, TestimonialData, InnerServicesData } from '@/src/app/ppc-campaign-management-services/data/data'
import { FollowsData, PartnerData, BlgosData, PlatformsData, IndustriesData, IndustryItem } from '@/src/app/home/data/data'

const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <InnerServices data={InnerServicesData} />
            <ContentSection data={ContentData} bggray="yes" />
            <NewsLetter data={NewsLetterData} />
            <StateCount data={StateCounter} coloum="yes" />
            <Process data={ProcessData} />
            <PlateFroms data={PlatformsData} />
            <Industries data={IndustriesData} IndustryData={IndustryItem} />
            {/* <Pricing bg="yes" data={PriceData} /> */}
            <Partners data={PartnerData} />
            <Testimonials data={TestimonialData} />
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
        "name": "Maximize ROI with Expert PPC Management Services",
        "image": "https://www.infinitidigital.us/infinitidigital.png",
        "url": "https://www.infinitidigital.us/ppc-campaign-management-services",
        "description": "Want your business to grow at an exponential rate? Hire our PPC Management Agency and advertise your business across Google search network.",
        "brand": {
          "@type": "Brand",
          "name": "Infiniti Digital"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "ratingCount": "1103"
        }
      }
    `,
                }}
            />


        </>
    )
}

export default Page
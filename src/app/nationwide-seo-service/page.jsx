import Banner from '@/src/app/components/innerservices/banner'
import NewsLetter from '@/src/app/components/innerservices/newsletter'
import Process from '@/src/app/components/services/process'
import Work from '@/src/app/components/services/work'
import Pricing from '@/src/app/components/services/pricing'
import Partners from '@/src/app/home/partners'
import Industries from '@/src/app/home/Industries'
import Testimonials from '@/src/app/home/testimonials'
import CtaForm from '@/src/app/home/ctaform'
import FollowUs from '@/src/app/home/followus'
import Blogs from '@/src/app/home/blogs'
import Faqs from '@/src/app/home/faq'
import { FollowsData, IndustryItem, PartnerData, CallActionData, WorkData, BlgosData } from '@/src/app/home/data/data'
import ContentSection from '@/src/app/components/innerservices/content'
import ContentAlternet from '@/src/app/components/innerservices/contentalternet'
import { BannerData, ServicesData, NewsLetterData, ContentData, ContentData1, ProcessData, TestimonialData, IndustriesData, FAQsData } from '@/src/app/nationwide-seo-service/data/data'
import ServicesMain from '@/src/app/components/services/servicesmain'
import { PriceData } from '@/src/app/seo-service/data/data'


const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <ServicesMain data={ServicesData} />
            <ContentSection data={ContentData} />
            <ContentAlternet data={ContentData1} alternat="yes" />
            <Process data={ProcessData} />
            <NewsLetter data={NewsLetterData} />
            <Work data={WorkData} category="Seo" />
            <Pricing bg="yes" data={PriceData} />
            <Partners data={PartnerData} />
            <Industries data={IndustriesData} IndustryData={IndustryItem} />
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
                "name": "Nationwide SEO Services That Deliver Top Rankings",
                "image": "https://www.infinitidigital.us/infinitidigital.png",
                "url": "https://www.infinitidigital.us/nationwide-seo-service",
                "description": "Our SEO experts can help your business by establishing authority on a national scale and reach more clients through organic search.",
                "brand": {
                  "@type": "Brand",
                  "name": "Infiniti Digital"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.5",
                  "ratingCount": "829"
                }
              }
            `,
                }}
            />
        </>
    )
}

export default Page
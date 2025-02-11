import Banner from '@/src/app/components/innerservices/banner'
import StateCount from '@/src/app/components/innerservices/statecount'
import Process from '@/src/app/components/services/process'
import NewsLetter from '@/src/app/components/innerservices/newsletter'
import WebProjects from '@/src/app/components/innerservices/webprojects'
import Pricing from '@/src/app/components/services/pricing'
import Partners from '@/src/app/home/partners'
import Testimonials from '@/src/app/home/testimonials'
import CtaForm from '@/src/app/home/ctaform'
import FollowUs from '@/src/app/home/followus'
import Blogs from '@/src/app/home/blogs'
import Faqs from '@/src/app/home/faq'
import { BannerData, StateCounter, ProcessData, ContentData, NewsLetterData, WebProjectData, PriceData, FAQsData } from '@/src/app/website-development-services/data/data'
import { FollowsData, TestimonialData, PartnerData, CallActionData, BlgosData, } from '@/src/app/home/data/data'
import { WebProjectItem } from '@/src/app/web-development-company/data/data'
import SimpleContent from '@/src/app/components/innerservices/simplecontent'


const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <StateCount data={StateCounter} />
            <Process data={ProcessData} />
            <SimpleContent data={ContentData} alternat="yes" software={true} />
            <NewsLetter data={NewsLetterData} />
            <WebProjects data={WebProjectData} dataItem={WebProjectItem} />
            <Pricing bg="yes" data={PriceData} />
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
                "name": "Website Development Services - Inifiniti Digital",
                "image": "https://www.infinitidigital.us/infinitidigital.png",
                "url": "https://www.infinitidigital.us/website-development-services",
                "description": "Custom Website Development Services that delivers project success no matter what. With 1500+ projects delivered we develop websites that make an impact",
                "brand": {
                  "@type": "Brand",
                  "name": "Infiniti Digital"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.2",
                  "ratingCount": "656"
                }
              }
            `,
                }}
            />

        </>
    )
}

export default Page
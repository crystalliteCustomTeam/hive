import Banner from '@/src/app/components/innerservices/banner'
import StateCount from '@/src/app/components/innerservices/statecount'
import ServicesMain from '@/src/app/components/services/servicesmain'
import Process from '@/src/app/components/services/process'
import ContentSection from '@/src/app/components/innerservices/content'

import NewsLetter from '@/src/app/components/innerservices/newsletter'
import Work from '@/src/app/components/services/work'
import Partners from '@/src/app/home/partners'
import Testimonials from '@/src/app/home/testimonials'
import CtaForm from '@/src/app/home/ctaform'
import FollowUs from '@/src/app/home/followus'
import Blogs from '@/src/app/home/blogs'
import Faqs from '@/src/app/home/faq'
import { BannerData, StateCounter, ProcessData, TestimonialData, CallActionData, ContentData, ContentData1, ContentData2, ContentData3, NewsLetterData, ServicesData, FAQsData } from '@/src/app/custom-software-development-services/data/data'
import { FollowsData, PartnerData, BlgosData, WorkData } from '@/src/app/home/data/data'
import SimpleContent from '@/src/app/components/innerservices/simplecontent'

const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <StateCount data={StateCounter} />
            <ServicesMain data={ServicesData} />
            <NewsLetter data={NewsLetterData} />
            <ContentSection data={ContentData2} simple="yes" bgBlack="yes" software="yes" />
            <Process data={ProcessData} />
            <SimpleContent data={ContentData} software="yes" />
            <SimpleContent data={ContentData1} alternat="yes" software="yes" />
            <SimpleContent data={ContentData3} software="yes" />
            <Work data={WorkData} category="App Development" />
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
                "name": "Custom Software Development Services - Build Custom Softwares",
                "image": "https://www.infinitidigital.us/infinitidigital.png",
                "url": "https://www.infinitidigital.us/custom-software-development-services",
                "description": "Custom software development services from Infiniti Digital that helps you develop custom software solutions with a team of 200+ software developers.",
                "brand": {
                  "@type": "Brand",
                  "name": "Infiniti Digital"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.7",
                  "ratingCount": "1109"
                }
              }
            `,
                }}
            />
        </>
    )
}

export default Page
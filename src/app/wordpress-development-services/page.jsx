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
import { BannerData, StateCounter, ProcessData, ContentData, NewsLetterData, WebProjectData, PriceData, TestimonialData, FAQsData } from '@/src/app/wordpress-development-services/data/data'
import { FollowsData, PartnerData, CallActionData, BlgosData } from '@/src/app/home/data/data'
import { WebProjectItem } from '@/src/app/web-development-company/data/data'
import SimpleContent from '@/src/app/components/innerservices/simplecontent'


const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <StateCount data={StateCounter} />
            <Process data={ProcessData} />
            <SimpleContent data={ContentData} alternat="yes" software={true} />
            <NewsLetter data={NewsLetterData} bgBlack="yes" />
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
                "name": "Infiniti Digital: Best Wordpress Development Services",
                "image": "https://www.infinitidigital.us/infinitidigital.png",
                "url": "https://www.infinitidigital.us/wordpress-development-services",
                "description": "Short of ideas to develop a wordpress website? View our wide range of custom wordpress development services including wordpress CMS development.",
                "brand": {
                  "@type": "Brand",
                  "name": "Infiniti Digital"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.2",
                  "ratingCount": "728"
                }
              }
            `,
                }}
            />

        </>
    )
}

export default Page
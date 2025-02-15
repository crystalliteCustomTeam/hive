import Banner from '@/src/app/components/innerservices/banner'
import ContentSection from '@/src/app/components/innerservices/content'
import NewsLetter from '@/src/app/components/innerservices/newsletter'
import PlateFroms from "@/src/app/home/plateform";
import Testimonials from "@/src/app/home/testimonials";
import CtaForm from "@/src/app/home/ctaform";
import FollowUs from "@/src/app/home/followus";
import Blogs from "@/src/app/home/blogs";
import Faqs from "@/src/app/home/faq";
import ServicesMain from '@/src/app/components/services/servicesmain'
import Pricing from '@/src/app/components/services/pricing'
import { PlatformsData, CallActionData, FollowsData, BlgosData } from '@/src/app/home/data/data'
import { BannerData, ContentData, TestimonialData, NewsLetterData, ContentData1, ServicesData, FAQsData } from '@/src/app/email-marketing-agency/data/data'
import { PriceData } from '@/src/app/social-media-marketing-services/data/data'

const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <ContentSection data={ContentData} bggray="yes" />
            <NewsLetter data={NewsLetterData} />
            <ServicesMain data={ServicesData} />
            <Pricing data={PriceData} tab={true} />
            <ContentSection data={ContentData1} bggray="yes" />
            <PlateFroms data={PlatformsData} />
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
        "name": "Top Email Marketing Agency With ROI-Driven Campaigns",
        "image": "https://www.infinitidigital.us/infinitidigital.png",
        "url": "https://www.infinitidigital.us/email-marketing-agency",
        "description": "Email marketing campaign services that drives revenue growth and boosts lead generation. Get your free proposal today!",
        "brand": {
          "@type": "Brand",
          "name": "Infiniti Digital"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.4",
          "ratingCount": "1067"
        }
      }
    `,
                }}
            />

        </>
    )
}

export default Page
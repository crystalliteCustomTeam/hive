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
import { PlatformsData, FollowsData, BlgosData } from '@/src/app/home/data/data'
import { BannerData, ContentData, TestimonialData, NewsLetterData, CallActionData, ContentData1, ServicesData, FAQsData } from '@/src/app/youtube-optimization-service/data/data'
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
        "name": "YouTube Optimization Services For 10x Channel Growth",
        "image": "https://www.infinitidigital.us/infinitidigital.png",
        "url": "https://www.infinitidigital.us/youtube-optimization-service",
        "description": "Grow your YouTube career and increase video visibility with Infiniti Digital. We optimize your channel and rank your videos higher in youtube search.",
        "brand": {
          "@type": "Brand",
          "name": "Infiniti Digital"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "820"
        }
      }
    `,
                }}
            />

        </>
    )
}

export default Page
import Banner from '@/src/app/components/innerservices/banner'
import ContentSection from '@/src/app/components/innerservices/content'
import NewsLetter from '@/src/app/components/innerservices/newsletter'
import TableContent from '@/src/app/components/innerservices/tablecontent'
import TwoBox from '@/src/app/components/innerservices/twobox'
import InnerServices from '@/src/app/components/innerservices/innerservices'
import PlateFroms from "@/src/app/home/plateform";
import Testimonials from "@/src/app/home/testimonials";
import CtaForm from "@/src/app/home/ctaform";
import FollowUs from "@/src/app/home/followus";
import Blogs from "@/src/app/home/blogs";
import Faqs from "@/src/app/home/faq";
import Pricing from '@/src/app/components/services/pricing'
import { BannerData, ContentData, NewsLetterData, TableContetData, TwoBoxData, InnerServicesData, ContentData1, TestimonialData, CallActionData, FAQsData } from '@/src/app/social-media-advertising-services/data/data'
import { FollowsData, BlgosData, PlatformsData } from "@/src/app/home/data/data"
import { PriceData } from '@/src/app/social-media-marketing-services/data/data'
const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <ContentSection data={ContentData} bggray="yes" />
            <NewsLetter data={NewsLetterData} />
            <TableContent data={TableContetData} />
            <TwoBox data={TwoBoxData} />
            <Pricing data={PriceData} tab={true} />
            <InnerServices data={InnerServicesData} />
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
        "name": "Social Media Advertising Services [Revenue Boost by 25%]",
        "image": "https://www.infinitidigital.us/infinitidigital.png",
        "url": "https://www.infinitidigital.us/social-media-advertising-services",
        "description": "Drive revenue with our expert meta ads services, plus social media ads for Twitter and Linkedin. Contact us for customized quote today!",
        "brand": {
          "@type": "Brand",
          "name": "Infiniti Digital"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.3",
          "ratingCount": "1091"
        }
      }
    `,
                }}
            />

        </>
    )
}

export default Page
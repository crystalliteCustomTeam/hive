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
import { BannerData, ContentData, NewsLetterData, TableContetData, TwoBoxData, InnerServicesData, ContentData1, FAQsData, TestimonialData } from '@/src/app/influencer-marketing-service/data/data'
import { PlatformsData, CallActionData, FollowsData, BlgosData } from '@/src/app/home/data/data'
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
        "name": "Infiniti Digital: The Best Influencer Marketing Agency",
        "image": "https://www.infinitidigital.us/infinitidigital.png",
        "url": "https://www.infinitidigital.us/influencer-marketing-service",
        "description": "We are a global influencer marketing agency for the world's most popular brands. Hire us to connect with top influencers in your niche.",
        "brand": {
          "@type": "Brand",
          "name": "Infiniti Digital"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "701"
        }
      }
    `,
        }}
      />

    </>
  )
}

export default Page
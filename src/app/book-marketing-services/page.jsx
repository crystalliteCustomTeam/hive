import Banner from '@/src/app/components/innerservices/banner'
import NewsLetter from '@/src/app/components/innerservices/newsletter'
import Process from '@/src/app/components/services/process'
import Pricing from '@/src/app/components/services/pricing'
import CTA from '@/src/app/components/services/cta'
import Partners from '@/src/app/home/partners'
import Industries from '@/src/app/home/Industries'
import Testimonials from '@/src/app/home/testimonials'
import CtaForm from '@/src/app/home/ctaform'
import FollowUs from '@/src/app/home/followus'
import Blogs from '@/src/app/home/blogs'
import Faqs from '@/src/app/home/faq'
import { FollowsData, IndustryItem, PartnerData, BlgosData } from '@/src/app/home/data/data'
import ContentSection from '@/src/app/components/innerservices/content'
import BookTabs from '@/src/app/components/innerservices/booktabs'
import { BannerData, ServicesData, NewsLetterData, ContentData, ProcessData, BookTabsData, PriceData, CtaPinkData, TestimonialData, IndustriesData, CallActionData, FAQsData } from '@/src/app/book-marketing-services/data/data'
import ServicesMain from '@/src/app/components/services/servicesmain'
import { BookTabsItem } from '@/src/app/content-marketing-services/data/data'

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <ServicesMain data={ServicesData} />
      <NewsLetter data={NewsLetterData} />
      <Process data={ProcessData} />
      <ContentSection data={ContentData} />
      <BookTabs data={BookTabsData} dataItem={BookTabsItem} />
      {/* <Pricing bg="yes" data={PriceData} /> */}
      <CTA data={CtaPinkData} />
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
        "name": "Sell More Books with Expert Book Marketing Services",
        "image": "https://www.infinitidigital.us/infinitidigital.png",
        "url": "https://www.infinitidigital.us/book-marketing-services",
        "description": "Hire book marketing services to help interested readers find out about your book more easily. Start spreading the news about your book today!",
        "brand": {
          "@type": "Brand",
          "name": "Infiniti Digital"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.3",
          "ratingCount": "772"
        }
      }
    `,
        }}
      />


    </>
  )
}

export default Page
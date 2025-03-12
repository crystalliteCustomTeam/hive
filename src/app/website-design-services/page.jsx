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
import { BannerData, StateCounter, ProcessData, ContentData, NewsLetterData, WebProjectData, TestimonialData, PriceData, FAQsData } from '@/src/app/website-design-services/data/data'
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
          __html: JSON.stringify([
            {
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "Want The Best Website Design Services? - Hire Us",
              "image": "https://www.infinitidigital.us/infinitidigital.png",
              "url": "https://www.infinitidigital.us/website-design-services",
              "description": "Infiniti Digital is the best Website Design Services Agency. Build custom websites that drive sales, revenue and leads through human centric UX.",
              "brand": {
                "@type": "Brand",
                "name": "Infiniti Digital"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "1826",
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Infiniti Digital",
              "image": "https://www.infinitidigital.us/infinitidigital.png",
              "@id": "",
              "url": "https://www.infinitidigital.us/website-design-services",
              "telephone": "855-666-6682",
              "priceRange": "$350 to $750",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "9402 Synott Rd Apt 114",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "postalCode": "77083",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.677372631618237,
                "longitude": -95.6151225190571
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/infinitidigitalus/",
                "https://www.instagram.com/infinitidigitalus/",
                "https://x.com/Infinitidigitl",
                "https://www.pinterest.com/infinitidigitalus/",
                "https://www.youtube.com/@InfinitiDigitalus",
                "https://www.linkedin.com/company/infiniti-digitalus"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Infiniti Digital",
              "alternateName": "InfinitiDigital",
              "url": "https://www.infinitidigital.us/website-design-services",
              "logo": "https://www.infinitidigital.us/infinitidigital.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "855-666-6682",
                "contactType": "sales",
                "contactOption": "TollFree",
                "areaServed": "US",
                "availableLanguage": "en"
              },
              "sameAs": [
                "https://www.facebook.com/infinitidigitalus/",
                "https://www.instagram.com/infinitidigitalus/",
                "https://x.com/Infinitidigitl",
                "https://www.pinterest.com/infinitidigitalus/",
                "https://www.youtube.com/@InfinitiDigitalus",
                "https://www.linkedin.com/company/infiniti-digitalus"
              ]
            }
          ])
        }}
      />


    </>
  )
}

export default Page
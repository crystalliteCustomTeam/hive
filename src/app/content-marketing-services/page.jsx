import Banner from '@/src/app/components/services/banner'
import WhyChoose from "@/src/app/home/whychoose";
import ServicesMain from '@/src/app/components/services/servicesmain'
import CTA from "@/src/app/home/cta";
import Work from '@/src/app/components/services/work';
import Pricing from '@/src/app/components/services/pricing';
import Industries from '@/src/app/home/Industries';
import Awards from '@/src/app/home/awards';
import Partners from '@/src/app/home/partners';
import Testimonials from '@/src/app/home/testimonials';
import CtaForm from '@/src/app/home/ctaform';
import FollowUs from '@/src/app/home/followus';
import Blogs from '@/src/app/home/blogs';
import Faqs from '@/src/app/home/faq';
import Process from '@/src/app/components/services/process';
import { AwardsData, FollowsData, PartnerData, WorkData, BlgosData, IndustryItem } from '@/src/app/home/data/data';
import { FAQsData, PriceData, ProcessData, ServicesData, CtaData, CallActionData, ChooseUsData, BannerData, IndustriesData, TestimonialData, } from '@/src/app/content-marketing-services/data/data';


const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <WhyChoose data={ChooseUsData} />
      <ServicesMain data={ServicesData} />
      <CTA data={CtaData} />
      <Work data={WorkData} category="Content Marketing" />
      {/* <Pricing bg="yes" data={PriceData} /> */}
      <Process data={ProcessData} />
      <Industries data={IndustriesData} IndustryData={IndustryItem} />
      <Partners data={PartnerData} />
      <Testimonials data={TestimonialData} />
      <Awards data={AwardsData} />
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
              "name": "We're Here To Help With Best Content Marketing Services",
              "image": "https://www.infinitidigital.us/infinitidigital.png",
              "url": "https://www.infinitidigital.us/content-marketing-services",
              "description": "With our content marketing services, you get everything from SEO strategy & content creation to content management. You'll work with us for Infinity.",
              "brand": {
                "@type": "Brand",
                "name": "Infiniti Digital"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1000"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Infiniti Digital",
              "image": "https://www.infinitidigital.us/infinitidigital.png",
              "@id": "",
              "url": "https://www.infinitidigital.us/content-marketing-services",
              "telephone": "1655-487-632",
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
              "url": "https://www.infinitidigital.us/content-marketing-services",
              "logo": "https://www.infinitidigital.us/infinitidigital.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "1655-487-632",
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
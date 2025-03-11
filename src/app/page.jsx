import Banner from "@/src/app/home/banner";
import About from "@/src/app/home/about";
import Service from "@/src/app/home/service";
import CTA from "@/src/app/home/cta";
import Work from "@/src/app/home/work";
import Partners from "@/src/app/home/partners";
import Industries from "@/src/app/home/Industries";
import WhyChoose from "@/src/app/home/whychoose";
import PlateFroms from "@/src/app/home/plateform";
import Awards from "@/src/app/home/awards";
import CTA1 from "@/src/app/home/cta1";
import Testimonials from "@/src/app/home/testimonials";
import CtaForm from "@/src/app/home/ctaform";
import FollowUs from "@/src/app/home/followus";
import Blogs from "@/src/app/home/blogs";
import Faqs from "@/src/app/home/faq";
import { AboutData, AwardsData, BannerData, BlgosData, CallActionData, ChooseUsData, CtaData, CtaData01, FAQsData, FollowsData, IndustriesData, IndustryItem, PartnerData, PlatformsData, ServicesData, TestimonialData, WorkData } from "@/src/app/home/data/data";


export default function Home() {
  return (
    <>
      <Banner data={BannerData} />
      <About data={AboutData} />
      <Service data={ServicesData} />
      <CTA data={CtaData} />
      <Work data={WorkData} />
      <Partners data={PartnerData} />
      <Industries data={IndustriesData} IndustryData={IndustryItem} />
      <WhyChoose data={ChooseUsData} />
      <PlateFroms data={PlatformsData} />
      <Awards data={AwardsData} />
      <CTA1 data={CtaData01} />
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
              "name": "Infiniti Digital",
              "image": "https://www.infinitidigital.us/infinitidigital.png",
              "url": "https://www.infinitidigital.us/",
              "description": "Attract, Impress, and make more revenue with full-service digital marketing agency. We provide SEO, PPC, Social Media, Web Development and more!",
              "brand": {
                "@type": "Brand",
                "name": "Infiniti Digital"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "1826"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Infiniti Digital",
              "alternateName": "InfinitiDigital",
              "url": "https://www.infinitidigital.us/",
              "logo": "https://www.infinitidigital.us/infinitidigital.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-655-487-632",
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
            },
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Infiniti Digital",
              "image": "https://www.infinitidigital.us/infinitidigital.png",
              "@id": "",
              "url": "https://www.infinitidigital.us/",
              "telephone": "+1-655-487-632",
              "priceRange": "399 to 699",
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
            }
          ])
        }}
      />

    </>
  );
}

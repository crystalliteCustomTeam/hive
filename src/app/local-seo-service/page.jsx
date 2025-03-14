import Banner from "@/src/app/components/innerservices/banner";
import NewsLetter from "@/src/app/components/innerservices/newsletter";
import Process from "@/src/app/components/services/process";
import Work from "@/src/app/components/services/work";
import Pricing from "@/src/app/components/services/pricing";
import Partners from "@/src/app/home/partners";
import Industries from "@/src/app/home/Industries";
import Testimonials from "@/src/app/home/testimonials";
import CtaForm from "@/src/app/home/ctaform";
import FollowUs from "@/src/app/home/followus";
import Blogs from "@/src/app/home/blogs";
import Faqs from "@/src/app/home/faq";
import {
  FollowsData,
  IndustryItem,
  PartnerData,
  CallActionData,
  WorkData,
  BlgosData,
} from "@/src/app/home/data/data";
import ContentSection from "@/src/app/components/innerservices/content";
import ContentAlternet from "@/src/app/components/innerservices/contentalternet";
import {
  BannerData,
  ServicesData,
  NewsLetterData,
  ContentData,
  ContentData1,
  ProcessData,
  TestimonialData,
  IndustriesData,
  FAQsData,
  PriceData
} from "@/src/app/local-seo-service/data/data";
import ServicesMain from "@/src/app/components/services/servicesmain";

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <ServicesMain data={ServicesData} />
      <ContentSection data={ContentData} />
      <ContentAlternet data={ContentData1} alternat="yes" />
      <Process data={ProcessData} />
      <NewsLetter data={NewsLetterData} />
      <Work data={WorkData} category="Seo" />
      <Pricing bg="yes" data={PriceData} />
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
          __html: JSON.stringify([
            {
              "@context": "https://schema.org/",
              "@type": "Product",
              name: "Make More Revenue with the Best Local SEO Services",
              image: "https://www.infinitidigital.us/infinitidigital.png",
              url: "https://www.infinitidigital.us/local-seo-service",
              description:
                "Increase your local search rankings, attract more customers, and drive lasting growth with our affordable Local SEO Services. We outsmart the competition!",
              brand: {
                "@type": "Brand",
                name: "Infiniti Digital",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "1826",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Infiniti Digital",
              alternateName: "InfinitiDigital",
              url: "https://www.infinitidigital.us/local-seo-service",
              logo: "https://www.infinitidigital.us/infinitidigital.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "855-666-6682",
                contactType: "sales",
                contactOption: "TollFree",
                areaServed: "US",
                availableLanguage: "en",
              },
              sameAs: [
                "https://www.facebook.com/infinitidigitalus/",
                "https://www.instagram.com/infinitidigitalus/",
                "https://x.com/Infinitidigitl",
                "https://www.pinterest.com/infinitidigitalus/",
                "https://www.youtube.com/@InfinitiDigitalus",
                "https://www.linkedin.com/company/infiniti-digitalus",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Infiniti Digital",
              image: "https://www.infinitidigital.us/infinitidigital.png",
              "@id": "",
              url: "https://www.infinitidigital.us/local-seo-service",
              telephone: "855-666-6682",
              priceRange: "$399 to $1850",
              address: {
                "@type": "PostalAddress",
                streetAddress: "9518 Mykawa Road",
                addressLocality: "Houston",
                addressRegion: "TX",
                postalCode: "77048",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 29.642761,
                longitude: -95.311412,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: [
                "https://www.facebook.com/infinitidigitalus/",
                "https://www.instagram.com/infinitidigitalus/",
                "https://x.com/Infinitidigitl",
                "https://www.pinterest.com/infinitidigitalus/",
                "https://www.youtube.com/@InfinitiDigitalus",
                "https://www.linkedin.com/company/infiniti-digitalus",
              ],
            },
          ]),
        }}
      />
    </>
  );
};

export default Page;

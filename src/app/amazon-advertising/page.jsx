import Banner from "@/src/app/components/innerservices/banner";
import StateCount from "@/src/app/components/innerservices/statecount";
import Process from "@/src/app/components/services/process";
import ContentSection from "@/src/app/components/innerservices/content";
import NewsLetter from "@/src/app/components/innerservices/newsletter";
import InnerServices from "@/src/app/components/innerservices/innerservices";
import Pricing from "@/src/app/components/services/pricing";
import Partners from "@/src/app/home/partners";
import Testimonials from "@/src/app/home/testimonials";
import CtaForm from "@/src/app/home/ctaform";
import FollowUs from "@/src/app/home/followus";
import Blogs from "@/src/app/home/blogs";
import Faqs from "@/src/app/home/faq";
import PlateFroms from "@/src/app/home/plateform";
import Industries from "@/src/app/home/Industries";
import {
  BannerData,
  StateCounter,
  ProcessData,
  ContentData,
  NewsLetterData,
  PriceData,
  InnerServicesData,
} from "@/src/app/amazon-advertising/data/data";
import {
  FollowsData,
  TestimonialData,
  PartnerData,
  CallActionData,
  BlgosData,
  PlatformsData,
  FAQsData,
  IndustriesData,
  IndustryItem,
} from "@/src/app/home/data/data";

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <InnerServices data={InnerServicesData} />
      <ContentSection data={ContentData} />
      <NewsLetter data={NewsLetterData} bgBlack="yes" />
      <StateCount data={StateCounter} coloum="yes" />
      <Process data={ProcessData} />
      <PlateFroms data={PlatformsData} />
      <Industries data={IndustriesData} IndustryData={IndustryItem} />
      {/* <Pricing bg="yes" data={PriceData} /> */}
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
              name: "Amazon Advertising Services - We Manage Your AMZ Ads",
              image: "https://www.infinitidigital.us/infinitidigital.png",
              url: "https://www.infinitidigital.us/amazon-advertising",
              description:
                "Our top priority as Amazon Product Ads Management Company is generating awareness for your brand, driving new purchases and generating repeat customers.",
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
              url: "https://www.infinitidigital.us/amazon-advertising",
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
              url: "https://www.infinitidigital.us/amazon-advertising",
              telephone: "855-666-6682",
              priceRange: "$350 to $750",
              address: {
                "@type": "PostalAddress",
                streetAddress: "9402 Synott Rd Apt 114",
                addressLocality: "Houston",
                addressRegion: "TX",
                postalCode: "77083",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 29.677372631618237,
                longitude: -95.6151225190571,
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

import Banner from "@/src/app/components/innerservices/banner";
import ContentSection from "@/src/app/components/innerservices/content";
import NewsLetter from "@/src/app/components/innerservices/newsletter";
import TwoBox from "@/src/app/components/innerservices/twobox";
import PlateFroms from "@/src/app/home/plateform";
import Testimonials from "@/src/app/home/testimonials";
import CtaForm from "@/src/app/home/ctaform";
import FollowUs from "@/src/app/home/followus";
import Blogs from "@/src/app/home/blogs";
import Faqs from "@/src/app/home/faq";
import Pricing from "@/src/app/components/services/pricing";
import ServicesMain from "@/src/app/components/services/servicesmain";
import {
  PlatformsData,
  CallActionData,
  FollowsData,
  BlgosData,
} from "@/src/app/home/data/data";
import {
  BannerData,
  ContentData,
  NewsLetterData,
  TwoBoxData,
  ServicesData,
  TestimonialData,
  FAQsData,
} from "@/src/app/social-media-management-service/data/data";
import { PriceData } from "@/src/app/social-media-marketing-services/data/data";

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <ContentSection data={ContentData} bggray="yes" />
      <NewsLetter data={NewsLetterData} />
      <ServicesMain data={ServicesData} />
      <TwoBox data={TwoBoxData} />
      <Pricing data={PriceData} tab={true} />
      <PlateFroms data={PlatformsData} />
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
              name: "Social Media Management Services for Brand Success",
              image: "https://www.infinitidigital.us/infinitidigital.png",
              url: "https://www.infinitidigital.us/social-media-management-service",
              description:
                "We are one of the top social media management agency helping you to select the right social platforms that fit your buyer persona.",
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
              "@type": "ProfessionalService",
              name: "Infiniti Digital",
              image: "https://www.infinitidigital.us/infinitidigital.png",
              "@id": "",
              url: "https://www.infinitidigital.us/social-media-management-service",
              telephone: "1655-487-632",
              priceRange: "$1250 to $2250",
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
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Infiniti Digital",
              alternateName: "InfinitiDigital",
              url: "https://www.infinitidigital.us/social-media-management-service",
              logo: "https://www.infinitidigital.us/infinitidigital.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "1655-487-632",
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
          ]),
        }}
      />
    </>
  );
};

export default Page;

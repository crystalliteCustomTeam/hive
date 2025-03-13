import Awards from "@/src/app/home/awards";
import Blogs from "@/src/app/home/blogs";
import CtaForm from "@/src/app/home/ctaform";
import Faqs from "@/src/app/home/faq";
import FollowUs from "@/src/app/home/followus";
import Industries from "@/src/app/home/Industries";
import Work from "@/src/app/components/services/work";
import PlateFroms from "@/src/app/home/plateform";
import Testimonials from "@/src/app/home/testimonials";
import Banner from "@/src/app/components/services/banner";
import ContentSection from "@/src/app/components/services/contentsection";
import CTA from "@/src/app/components/services/cta";
import CtaServices from "@/src/app/components/services/ctaservices";
import LatestWork from "@/src/app/components/services/latestwork";
import Opportunities from "@/src/app/components/services/opportunities";
import Pricing from "@/src/app/components/services/pricing";
import Solution from "@/src/app/components/services/solution";
import TestimonialServices from "@/src/app/components/services/testimonialservice";
import {
  BannerData,
  CallActionData,
  ContentData,
  CtaData,
  CtaPinkData,
  FAQsData,
  LastestWorkData,
  OpportunitiesData,
  PriceData,
  SolData,
  CreativesData,
  TestimonialData,
} from "@/src/app/social-media-marketing-services/data/data";
import {
  AwardsData,
  IndustriesData,
  PlatformsData,
  FollowsData,
  BlgosData,
  IndustryItem,
  WorkData,
} from "@/src/app/home/data/data";

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <Solution data={SolData} />
      <CtaServices data={CtaData} />
      <Opportunities data={OpportunitiesData} />
      <Pricing data={PriceData} tab={true} />
      <CTA data={CtaPinkData} />
      <Work data={WorkData} category="Social Media Marketing" />
      <Industries data={IndustriesData} IndustryData={IndustryItem} />
      <ContentSection data={ContentData} />
      <LatestWork data={LastestWorkData} />
      <Awards data={AwardsData} />
      <PlateFroms data={PlatformsData} />
      <Testimonials data={TestimonialData} />
      <TestimonialServices data={CreativesData} />
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
              name: "Social Media Marketing Services to Go Viral",
              image: "https://www.infinitidigital.us/infinitidigital.png",
              url: "https://www.infinitidigital.us/social-media-marketing-services",
              description:
                "Hire social media marketing services for high-quality content, daily activity, engagement-monitoring and increased followers. Free consultation +855-666-6682",
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
              url: "https://www.infinitidigital.us/social-media-marketing-services",
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
              url: "https://www.infinitidigital.us/social-media-marketing-services",
              telephone: "855-666-6682",
              priceRange: "$1250 to $2250",
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

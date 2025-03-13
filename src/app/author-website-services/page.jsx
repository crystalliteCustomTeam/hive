import Banner from "@/src/app/components/innerservices/banner";
import StateCount from "@/src/app/components/innerservices/statecount";
import Process from "@/src/app/components/services/process";
import SimpleContent from "@/src/app/components/innerservices/simplecontent";
import NewsLetter from "@/src/app/components/innerservices/newsletter";
import WebProjects from "@/src/app/components/innerservices/webprojects";
import Pricing from "@/src/app/components/services/pricing";
import Partners from "@/src/app/home/partners";
import Testimonials from "@/src/app/home/testimonials";
import CtaForm from "@/src/app/home/ctaform";
import FollowUs from "@/src/app/home/followus";
import Blogs from "@/src/app/home/blogs";
import Faqs from "@/src/app/home/faq";
import {
  BannerData,
  StateCounter,
  ProcessData,
  ContentData,
  NewsLetterData,
  WebProjectData,
  PriceData,
} from "@/src/app/author-website-services/data/data";
import {
  FollowsData,
  TestimonialData,
  PartnerData,
  CallActionData,
  BlgosData,
  FAQsData,
} from "@/src/app/home/data/data";
import { WebProjectItem } from "@/src/app/web-development-company/data/data";
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
              name: "Author Website Development Services - Infiniti Digital",
              image: "https://www.infinitidigital.us/infinitidigital.png",
              url: "https://www.infinitidigital.us/author-website-services",
              description:
                "Develop your digital book with our professional author website design & development services. Contact us and get a quote today!",
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
              url: "https://www.infinitidigital.us/author-website-services",
              telephone: "855-666-6682",
              priceRange: "$350 to $750",
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
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Infiniti Digital",
              alternateName: "InfinitiDigital",
              url: "https://www.infinitidigital.us/author-website-services",
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
          ]),
        }}
      />
    </>
  );
};

export default Page;

import Banner from "@/src/app/components/innerservices/banner";
import StateCount from "@/src/app/components/innerservices/statecount";
import ServicesMain from "@/src/app/components/services/servicesmain";
import Process from "@/src/app/components/services/process";
import ContentSection from "@/src/app/components/innerservices/content";
import NewsLetter from "@/src/app/components/innerservices/newsletter";
import Work from "@/src/app/components/services/work";
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
  ContentData1,
  ContentData2,
  ContentData3,
  TestimonialData,
  NewsLetterData,
  ServicesData,
  FAQsData,
} from "@/src/app/ios-app-development-company/data/data";
import {
  FollowsData,
  PartnerData,
  CallActionData,
  BlgosData,
  WorkData,
} from "@/src/app/home/data/data";
import SimpleContent from "@/src/app/components/innerservices/simplecontent";

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <StateCount data={StateCounter} />
      <ServicesMain data={ServicesData} />
      <NewsLetter data={NewsLetterData} />
      <ContentSection
        data={ContentData2}
        simple="yes"
        height={true}
        bgBlack="yes"
      />
      <Process data={ProcessData} />
      <SimpleContent data={ContentData} />
      <SimpleContent data={ContentData1} alternat="yes" />
      <SimpleContent data={ContentData3} />
      <Work data={WorkData} category="App Development" />
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
              name: "iOS App Development Company - IPhone App Development",
              image: "https://www.infinitidigital.us/infinitidigital.png",
              url: "https://www.infinitidigital.us/ios-app-development-company",
              description:
                "Infiniti Digital is a top iOS app development company creating high-quality, innovative, and timely apps that meet the exceptional standards of Apple devices.",
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
              url: "https://www.infinitidigital.us/ios-app-development-company",
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
              url: "https://www.infinitidigital.us/ios-app-development-company",
              telephone: "855-666-6682",
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

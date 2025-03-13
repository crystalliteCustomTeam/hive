import Banner from "@/src/app/components/innerservices/banner";
import NewsLetter from "@/src/app/components/innerservices/newsletter";
import Process from "@/src/app/components/services/process";
import Pricing from "@/src/app/components/services/pricing";
import CTA from "@/src/app/components/services/cta";
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
  BlgosData,
} from "@/src/app/home/data/data";
import ContentSection from "@/src/app/components/innerservices/content";
import BookTabs from "@/src/app/components/innerservices/booktabs";
import {
  BannerData,
  ServicesData,
  NewsLetterData,
  ContentData,
  ProcessData,
  BookTabsData,
  PriceData,
  TestimonialData,
  CtaPinkData,
  CallActionData,
  IndustriesData,
  FAQsData,
} from "@/src/app/book-video-trailer/data/data";
import ServicesMain from "@/src/app/components/services/servicesmain";
import { BookTabsItem } from "@/src/app/content-marketing-services/data/data";

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <ServicesMain data={ServicesData} />
      <ContentSection data={ContentData} />
      <Process data={ProcessData} />
      <NewsLetter data={NewsLetterData} bgBlack="yes" />
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
          __html: JSON.stringify([
            {
              "@context": "https://schema.org/",
              "@type": "Product",
              name: "Create A Visual Masterpiece With Video Book Trailer Services",
              image: "https://www.infinitidigital.us/infinitidigital.png",
              url: "https://www.infinitidigital.us/book-video-trailer",
              description:
                "Cinematic book trailer video production services. Reach more readers on social media with our engaging and professional book video trailer production.",
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
              url: "https://www.infinitidigital.us/book-video-trailer",
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
              url: "https://www.infinitidigital.us/book-video-trailer",
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

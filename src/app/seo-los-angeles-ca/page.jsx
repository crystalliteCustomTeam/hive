import Banner from "@/src/app/seo-dallas-tx/banner";
import CallBack from "@/src/app/seo-dallas-tx/callback";
import ServicesLp from "@/src/app/seo-dallas-tx/serviceslp";
import ProcessLP from "@/src/app/seo-dallas-tx/process";
import Pricing from "@/src/app/components/services/pricing";
import WhyChoose from "@/src/app/home/whychoose";
import ContactCta from "@/src/app/seo-dallas-tx/contactcta";
import {
  ServicesData,
  processlp,
  PriceData,
  ChooseUsData,
  ContactData,
  BannerData,
  CallbackData,
  ReportData,
  CtaData,
} from "@/src/app/seo-los-angeles-ca/data/data";
import Industries from "@/src/app/home/Industries";
import ReportSec from "@/src/app/seo-dallas-tx/report";
import Contactfromlp from "@/src/app/seo-dallas-tx/contactfromlp";
import Work from "@/src/app/components/services/work";
import Testimonials from "@/src/app/home/testimonials";
import {
  IndustriesData,
  WorkData,
  IndustryItem,
  TestimonialData,
} from "@/src/app/home/data/data";

const page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <CallBack data={CallbackData} />
      <ServicesLp data={ServicesData} />
      <ProcessLP data={processlp} roundwhite={true} />
      <Work data={WorkData} category="SEO" />
      <Pricing data={PriceData} SMMLP={true} location={true} />
      <WhyChoose data={ChooseUsData} />
      <ContactCta data={ContactData} />
      <Industries
        data={IndustriesData}
        IndustryData={IndustryItem}
        location={true}
      />
      <ReportSec data={ReportData} />
      <Testimonials data={TestimonialData} />
      <Contactfromlp location={true} data={CtaData} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Los Angeles SEO",
              image: "https://www.infinitidigital.us/infinitidigital.png",
              "@id": "",
              url: "https://www.infinitidigital.us/seo-los-angeles-ca",
              telephone: "855-666-6682",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Los Angeles",
                addressLocality: "Los Angeles",
                addressRegion: "CA",
                postalCode: "90001",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 34.053691,
                longitude: -118.242766,
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
              "@context": "https://schema.org/",
              "@type": "Product",
              name: "Los Angeles SEO That Drives Revenue, Not Excuses",
              image: "https://www.infinitidigital.us/infinitidigital.png",
              url: "https://www.infinitidigital.us/seo-los-angeles-ca",
              description:
                "Erase your competition and multiply your ROI. Don’t let your conversions dry up! let’s bring in the cash with SEO in LA.",
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
          ]),
        }}
      />
    </>
  );
};

export default page;

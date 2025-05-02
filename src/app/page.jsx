"use client";
import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/src/app/home/banner"));
const About = dynamic(() => import("@/src/app/home/about"));
const Service = dynamic(() => import("@/src/app/home/service"));
const CTA = dynamic(() => import("@/src/app/home/cta"));
const Work = dynamic(() => import("@/src/app/home/work"));
const Partners = dynamic(() => import("@/src/app/home/partners"));
const Industries = dynamic(() => import("@/src/app/home/Industries"));
const WhyChoose = dynamic(() => import("@/src/app/home/whychoose"));
const PlateFroms = dynamic(() => import("@/src/app/home/plateform"));
const Awards = dynamic(() => import("@/src/app/home/awards"));
const CTA1 = dynamic(() => import("@/src/app/home/cta1"));
const Testimonials = dynamic(() => import("@/src/app/home/testimonials"), {
  ssr: false,
});
const CtaForm = dynamic(() => import("@/src/app/home/ctaform"), { ssr: false });
const FollowUs = dynamic(() => import("@/src/app/home/followus"), {
  ssr: false,
});
const Blogs = dynamic(() => import("@/src/app/home/blogs"));
const Faqs = dynamic(() => import("@/src/app/home/faq"));

import {
  AboutData,
  AwardsData,
  BannerData,
  BlgosData,
  CallActionData,
  ChooseUsData,
  CtaData,
  CtaData01,
  FAQsData,
  FollowsData,
  IndustriesData,
  IndustryItem,
  PartnerData,
  PlatformsData,
  ServicesData,
  TestimonialData,
  WorkData,
} from "@/src/app/home/data/data";

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
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Infiniti Digital",
              "image": "https://www.infinitidigital.us/infinitidigital.png",
              "@id": "",
              "url": "https://www.infinitidigital.us/",
              "telephone": "855-666-6682",
              "priceRange": "399 to 699",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "9518 Mykawa Road",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "postalCode": "77048",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.642761,
                "longitude": -95.311412
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
                "telephone": "855-666-6682",
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
            // 🔽 SiteNavigationElement items
            {
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": "Homepage",
              "url": "https://www.infinitidigital.us/"
            },
            {
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": "Search Engine Optimization Services",
              "url": "https://www.infinitidigital.us/search-engine-optimization-services"
            },
            {
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": "Best SEO Agency",
              "url": "https://www.infinitidigital.us/best-seo-agency"
            },
            {
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": "Organic SEO Services",
              "url": "https://www.infinitidigital.us/organic-seo-services"
            },
            {
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": "Local SEO Agency",
              "url": "https://www.infinitidigital.us/local-seo-agency"
            },
            {
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": "PPC Management Services",
              "url": "https://www.infinitidigital.us/ppc-management-services"
            },
            {
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": "Social Media Marketing",
              "url": "https://www.infinitidigital.us/social-media-marketing"
            },
            {
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": "SEO Content Writing Services",
              "url": "https://www.infinitidigital.us/seo-content-writing-services"
            },
            {
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": "Social Media Marketing Agency",
              "url": "https://www.infinitidigital.us/social-media-marketing-agency"
            },
            {
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": "GMB Management Service",
              "url": "https://www.infinitidigital.us/gmb-management-service"
            },
            {
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": "Social Media Advertising Agency",
              "url": "https://www.infinitidigital.us/social-media-advertising-agency"
            }
          ])
        }}
      />

    </>
  );
}

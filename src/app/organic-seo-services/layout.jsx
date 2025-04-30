import FooterLp from "@/src/app/landing/layout/footerlp";
import HeaderSimpleLp from "@/src/app/landing/layout/headersimple";

//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Grow Organic Revenue With Organic SEO Services",
  description:
    "Tired of hiding in digital shadows? Our organic SEO Services shine the spotlight on your business, turning search engines into your personal sales team. Ready for liftoff?",
  //===== OG Tags =====
  openGraph: {
    title: "Grow Organic Revenue With Organic SEO Services",
    description:
      "Tired of hiding in digital shadows? Our organic SEO Services shine the spotlight on your business, turning search engines into your personal sales team. Ready for liftoff?",
    url: "/organic-seo-services",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/organic-seo-services" },
};

export default function RootLayout({ children }) {
  return (
    <>
      <HeaderSimpleLp />
      {children}
      <FooterLp />
    </>
  );
}

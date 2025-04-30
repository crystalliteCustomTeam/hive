import FooterLp from "@/src/app/landing/layout/footerlp";
import HeaderSimpleLp from "@/src/app/landing/layout/headersimple";

//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Professional Search Engine Optimization Services",
  description:
    "Search engine optimization that drive tons of leads and organic revenue. Our modern SEO strategies are designed to improve online visibility & grab organic leads.",

  //===== OG Tags =====
  openGraph: {
    title: "Professional Search Engine Optimization Services",
    description:
      "Search engine optimization that drive tons of leads and organic revenue. Our modern SEO strategies are designed to improve online visibility & grab organic leads.",
    url: "/search-engine-optimization-services",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/search-engine-optimization-services" },
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

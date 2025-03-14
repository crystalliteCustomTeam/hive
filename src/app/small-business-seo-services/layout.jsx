//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Affordable SEO for Small Businesses That Drive Growth",
  description:
    "Our Small Business SEO Services Will Rank Your Website On The Top. View Plans & Pricing & Let's Discuss Your Needs.",
  //===== OG Tags =====
  openGraph: {
    title: "Affordable SEO for Small Businesses That Drive Growth",
    description:
      "Our Small Business SEO Services Will Rank Your Website On The Top. View Plans & Pricing & Let's Discuss Your Needs.",
    url: "/small-business-seo-services",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/small-business-seo-services" },
  //===== GEO Tags =====
  other: {
    "DC.title": "Small Business SEO Company, Small Business SEO Services, SEO For Small Businesses",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    ICBM: "39.78373, -100.445882",
  },
};

export default function RootLayout({ children }) {
  return children;
}

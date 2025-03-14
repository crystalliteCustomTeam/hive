//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Enterprise SEO Services That Drive Corporate Growth and Success",
  description:
    "Our Enterprise SEO Agency helps brands to increase search visibility, brand awareness, and attain high ticket clients. Contact us now to get a quote!",
  //===== OG Tags =====
  openGraph: {
    title: "Enterprise SEO Services That Drive Corporate Growth and Success",
    description:
      "Our Enterprise SEO Agency helps brands to increase search visibility, brand awareness, and attain high ticket clients. Contact us now to get a quote!",
    url: "/enterprise-seo-service",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/enterprise-seo-service" },
  //===== GEO Tags =====
  other: {
    "DC.title":
      "Enterprise SEO Agency, Enterprise SEO Solutions, Best Enterprise SEO Services",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    ICBM: "39.78373, -100.445882",
  },
};

export default function RootLayout({ children }) {
  return children;
}

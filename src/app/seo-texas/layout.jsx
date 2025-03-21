//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "SEO Service in Texas - SEO Texas",
  description:
    "Get better rankings on Google with our Texas SEO Company. As SEO experts in Texas we improve search rankings, traffic, and drive in more revenue.",
  //===== OG Tags =====
  openGraph: {
    title: "SEO Service in Texas - SEO Texas",
    description:
      "Get better rankings on Google with our Texas SEO Company. As SEO experts in Texas we improve search rankings, traffic, and drive in more revenue.",
    url: "/seo-texas",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/seo-texas" },
  other: {
    "DC.title": "SEO Texas - Texas SEO",
    "geo.region": "US-TX",
    "geo.position": "31.263891;-98.545612",
    "ICBM": "31.263891, -98.545612"
  }
 };

export default function RootLayout({ children }) {
  return children;
}

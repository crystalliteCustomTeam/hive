//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Best SEO Agency in New York City - SEO Services in NYC",
  description:
    "The Best SEO agency in New York City. We provide expert SEO services to help your NYC business dominate the local and national search results.",
  //===== OG Tags =====
  openGraph: {
    title: "Best SEO Agency in New York City - SEO Services in NYC",
    description:
      "The Best SEO agency in New York City. We provide expert SEO services to help your NYC business dominate the local and national search results.",
    url: "/seo-agency-new-york",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/seo-agency-new-york" },
  robots: {
    index: false,
    follow: false,
  },

};

export default function RootLayout({ children }) {
  return children;
}

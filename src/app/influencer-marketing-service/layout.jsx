//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Infiniti Digital: The Best Influencer Marketing Agency",
  description:
    "We are a global influencer marketing agency for the world's most popular brands. Hire us to connect with top influencers in your niche.",
  //===== OG Tags =====
  openGraph: {
    title: "Infiniti Digital: The Best Influencer Marketing Agency",
    description:
      "We are a global influencer marketing agency for the world's most popular brands. Hire us to connect with top influencers in your niche.",
    url: "/influencer-marketing-service",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/influencer-marketing-service" },
  //===== GEO Tags =====
  other: {
    "DC.title":
      "Influencer Marketing Services, Influencer Marketing Agency, B2B Influencer Marketing Agency",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    ICBM: "39.78373, -100.445882",
  },
};

export default function RootLayout({ children }) {
  return children;
}

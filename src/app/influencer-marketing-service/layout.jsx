
//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Infiniti Digital: The Best Influencer Marketing Agency",
  description: "We are a global influencer marketing agency for the world's most popular brands. Hire us to connect with top influencers in your niche.",
  //===== OG Tags =====
  openGraph: {
    title: "Infiniti Digital: The Best Influencer Marketing Agency",
    description: "We are a global influencer marketing agency for the world's most popular brands. Hire us to connect with top influencers in your niche.",
    url: '/influencer-marketing-service',
    siteName: "Inifniti Digital",
    locale: 'en_US',
    type: 'website',
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/influencer-marketing-service' },
  //===== GEO Tags =====
  other: {
    // First Region (Houston, TX) - Influencer Marketing
    "DC.title.houston": "Influencer Marketing Services, Influencer Marketing Agency, B2B Influencer Marketing Agency",
    "geo.region.houston": "US-TX",
    "geo.placename.houston": "Houston",
    "geo.position.houston": "29.677315;-95.615108",
    "ICBM.houston": "29.677315, -95.615108",

    // Second Region (Generic US Location) - Influencer Marketing
    "DC.title.generic": "influencer marketing service",
    "geo.region.generic": "US",
    "geo.position.generic": "39.78373;-100.445882",
    "ICBM.generic": "39.78373, -100.445882"
  }

}


export default function RootLayout({ children }) {
  return (children)
}

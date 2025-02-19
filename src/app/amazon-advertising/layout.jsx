
//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Amazon Advertising Services - We Manage Your AMZ Ads",
  description: "Our top priority as Amazon Product Ads Management Company is generating awareness for your brand, driving new purchases and generating repeat customers.",
  //===== OG Tags =====
  openGraph: {
    title: "Amazon Advertising Services - We Manage Your AMZ Ads",
    description: "Our top priority as Amazon Product Ads Management Company is generating awareness for your brand, driving new purchases and generating repeat customers.",
    url: '/amazon-advertising',
    siteName: "Inifniti Digital",
    locale: 'en_US',
    type: 'website',
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/amazon-advertising' },
  //===== GEO Tags =====
  other: {
    // First Region (Houston, TX) - Amazon Ads Management
    "DC.title.houston": "Amazon Product Ads Management, Amazon Ads Management Services, Amazon Pay Per Click Services",
    "geo.region.houston": "US-TX",
    "geo.placename.houston": "Houston",
    "geo.position.houston": "29.677315;-95.615108",
    "ICBM.houston": "29.677315, -95.615108",

    // Second Region (Generic US Location) - Amazon Advertising
    "DC.title.generic": "amazon advertising",
    "geo.region.generic": "US",
    "geo.position.generic": "39.78373;-100.445882",
    "ICBM.generic": "39.78373, -100.445882"
  }

}


export default function RootLayout({ children }) {
  return (children)
}

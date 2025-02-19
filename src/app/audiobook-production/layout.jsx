
//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Premium Audiobook Production Services - Infiniti Digital",
  description: "Infiniti Digital offers a complete audiobook recording & production service. We edit, and publish your audiobook across multiple platforms. Earn upto 75% royalties.",
  //===== OG Tags =====
  openGraph: {
    title: "Premium Audiobook Production Services - Infiniti Digital",
    description: "Infiniti Digital offers a complete audiobook recording & production service. We edit, and publish your audiobook across multiple platforms. Earn upto 75% royalties.",
    url: '/audiobook-production',
    siteName: "Inifniti Digital",
    locale: 'en_US',
    type: 'website',
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/audiobook-production' },
  other: {
    // Generic US - Audiobook Production
    "DC.title.generic": "audiobook production",
    "geo.region.generic": "US",
    "geo.position.generic": "39.78373;-100.445882",
    "ICBM.generic": "39.78373, -100.445882",

    // Houston, TX - Audiobook Services
    "DC.title.houston": "Best Audiobook Services, Audiobook Publishing Services, Audiobook Recording Services",
    "geo.region.houston": "US-TX",
    "geo.placename.houston": "Houston",
    "geo.position.houston": "29.677315;-95.615108",
    "ICBM.houston": "29.677315, -95.615108"
  }

}


export default function RootLayout({ children }) {
  return (children)
}

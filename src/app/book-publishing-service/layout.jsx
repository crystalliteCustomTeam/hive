
//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Publish Your Masterpiece with Our Book Publishing Service ",
  description: "Turn your manuscripts from a file on your computer to your story, voice, and dream. Publish your book with our book publishing service and share it with the world",
  //===== OG Tags =====
  openGraph: {
    title: "Publish Your Masterpiece with Our Book Publishing Service ",
    description: "Turn your manuscripts from a file on your computer to your story, voice, and dream. Publish your book with our book publishing service and share it with the world",
    url: '/book-editing-services',
    siteName: "Inifniti Digital",
    locale: 'en_US',
    type: 'website',
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/book-editing-services' },
  other: {
    // Generic US - Book Publishing Service
    "DC.title.generic": "book publishing service",
    "geo.region.generic": "US",
    "geo.position.generic": "39.78373;-100.445882",
    "ICBM.generic": "39.78373, -100.445882",

    // Houston, TX - Amazon Book Publishing Services
    "DC.title.houston": "Amazon Book Publishing Services, E-Book Publishing Services, Online Book Publishing Services",
    "geo.region.houston": "US-TX",
    "geo.placename.houston": "Houston",
    "geo.position.houston": "29.677315;-95.615108",
    "ICBM.houston": "29.677315, -95.615108"
  }

}


export default function RootLayout({ children }) {
  return (children)
}

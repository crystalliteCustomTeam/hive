
//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Contact Us - Get Your Quote Today!",
  description: "Need to contact Infiniti Digital? Give us a call or fill out our form to talk to a digital marketing expert today!",
  //===== OG Tags =====
  openGraph: {
    title: "Contact Us - Get Your Quote Today!",
    description: "Need to contact Infiniti Digital? Give us a call or fill out our form to talk to a digital marketing expert today!",
    url: '/contact-us',
    siteName: "Inifniti Digital",
    locale: 'en_US',
    type: 'website',
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/contact-us' },
  other: {
    // Generic US - Contact Infiniti Digital
    "DC.title.generic": "Contact Infiniti Digital",
    "geo.region.generic": "US",
    "geo.position.generic": "39.78373;-100.445882",
    "ICBM.generic": "39.78373, -100.445882",

    // Houston, TX - Contact Infiniti Digital
    "DC.title.houston": "Contact Infiniti Digital",
    "geo.region.houston": "US-TX",
    "geo.placename.houston": "Houston",
    "geo.position.houston": "29.677315;-95.615108",
    "ICBM.houston": "29.677315, -95.615108"
  }

}


export default function RootLayout({ children }) {
  return (children)
}

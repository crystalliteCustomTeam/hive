//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Infiniti Digital",
  description: "",
  //===== OG Tags =====
  openGraph: {
    title: " Infiniti Digital",
    description: "",
    url: '/',
    siteName: "Inifniti Digital",
    locale: 'en_US',
    type: 'website',
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/' },
    //===== No-Index =====
    robots: {
      index: false,
      follow: false,
    },
}


export default function RootLayout({ children }) {
  return (children)
}

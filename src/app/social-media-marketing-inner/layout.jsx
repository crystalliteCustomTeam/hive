
//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "",
  description: "",
  //===== OG Tags =====
  openGraph: {
    title: "",
    description: "",
    url: '/social-media-ads',
    siteName: "Inifniti Digital",
    locale: 'en_US',
    type: 'website',
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/social-media-ads' },
    //===== No-Index =====
    robots: {
      index: false,
      follow: false,
    },
}


export default function RootLayout({ children }) {
  return (children)
}

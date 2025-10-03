
//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Digital Marketing E-books | Infiniti Digital Marketing Agency",
  description: "Download our free digital marketing e-books for expert insights on SEO, social media, and more. Get proven strategies to grow your business today!",
  //===== OG Tags =====
  openGraph: {
    title: "Digital Marketing E-books | Infiniti Digital Marketing Agency",
    description: "Download our free digital marketing e-books for expert insights on SEO, social media, and more. Get proven strategies to grow your business today!",
    url: '/e-books',
    siteName: "Inifniti Digital",
    locale: 'en_US',
    type: 'website',
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/e-books' },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
  },
}


export default function RootLayout({ children }) {
  return (children)
}

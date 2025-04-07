
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Author Page",
    description: "",
    //===== OG Tags =====
    openGraph: {
      title: "Author Page",
      description: "",
      url: '/blogs',
      siteName: "Inifniti Digital",
      locale: 'en_US',
      type: 'website',
      images: "https://www.infinitidigital.us/infinitidigital.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/blogs' },

      //===== No-Index =====
  robots: {
    index: false,
    follow: false,
  },
  }
  
  
  export default function RootLayout({ children }) {
    return (children)
  }
  
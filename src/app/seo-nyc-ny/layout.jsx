
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "seo-nyc-ny",
    description: "",
    //===== OG Tags =====
    openGraph: {
        title: "seo-nyc-ny",
        description: "",
        url: '/seo-nyc-ny',
        siteName: "Inifniti Digital",
        locale: 'en_US',
     type: 'website',
    images: "https://www.infinitidigital.us/infinitidigital.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/seo-nyc-ny' },

      //===== No-Index =====
  robots: {
    index: false,
    follow: false,
  },
}


export default function RootLayout({ children }) {
    return (children)
}

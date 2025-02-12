import FooterLp from "../layout/footerlp"
import HeaderLp from "../layout/headerlp"

//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "",
  description: "",
  //===== OG Tags =====
  openGraph: {
    title: "",
    description: "",
    url: '/landing/seo1',
    siteName: "Inifniti Digital",
    locale: 'en_US',
    type: 'website',
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/landing/seo1' },

  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
  }
}


export default function RootLayout({ children }) {
  return (
    <>
      <HeaderLp />
      {children}
      <FooterLp />
    </>
  )
}

import FooterLp from "../layout/footerlp"
import HeaderSimpleLp from "../layout/headersimple"

//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "",
  description: "",
  //===== OG Tags =====
  openGraph: {
    title: "",
    description: "",
    url: '/landing/seo2',
    siteName: "Inifniti Digital",
    locale: 'en_US',
    type: 'website',
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/landing/seo2' },

  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
  }
}


export default function RootLayout({ children }) {
  return (
    <>
      <HeaderSimpleLp />
      {children}
      <FooterLp />
    </>
  )
}

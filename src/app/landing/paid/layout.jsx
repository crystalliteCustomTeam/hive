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
    url: '/landing/paid',
    siteName: "Inifniti Digital",
    locale: 'en_US',
    type: 'website',
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/landing/paid' },
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

import FooterLp from "@/src/app/landing/layout/footerlp"
import HeaderSimpleLp from "@/src/app/landing/layout/headersimple"

//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "SEO Content Writing Services - Best SEO Writers",
  description: "We write conversion focused content that makes sure to engage and convert readers. Our SEO content writers deliver content that search engines prefer.",
  //===== OG Tags =====
  openGraph: {
    title: "SEO Content Writing Services - Best SEO Writers",
    description: "We write conversion focused content that makes sure to engage and convert readers. Our SEO content writers deliver content that search engines prefer.",
    url: '/seo-content-writing-services',
    siteName: "Inifniti Digital",
    locale: 'en_US',
    type: 'website',
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/seo-content-writing-services' },
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

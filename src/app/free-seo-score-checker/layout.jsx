
//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Insightful Blogs on Digital Marketing, & Mobile Apps",
  description: "Read our blogs as we provide insights on digital marketing strategies, wordpress deveopment tips, SEO, PPC, mobile apps & more!",
  //===== OG Tags =====
  openGraph: {
    title: "Insightful Blogs on Digital Marketing, & Mobile Apps",
    description: "Read our blogs as we provide insights on digital marketing strategies, wordpress deveopment tips, SEO, PPC, mobile apps & more!",
    url: '/single-blog',
    siteName: "Inifniti Digital",
    locale: 'en_US',
    type: 'website',
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/single-blog' },
    //===== No-Index =====
    robots: {
      index: false,
      follow: false,
    },
}


export default function RootLayout({ children }) {
  return (children)
}

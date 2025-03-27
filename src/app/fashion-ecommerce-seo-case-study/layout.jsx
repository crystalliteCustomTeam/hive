//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Fashion Ecommerce SEO Case Study - $490K Organic Sales",
  description: "Read this case study and get to know how we scaled up a fashion ecommerce business to achieve $490K of organic revenue in just 6 months.",
  //===== OG Tags =====
  openGraph: {
    title: "Fashion Ecommerce SEO Case Study - $490K Organic Sales",
    description: "Read this case study and get to know how we scaled up a fashion ecommerce business to achieve $490K of organic revenue in just 6 months.",
    url: "/fashion-ecommerce-seo-case-study",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/fashion-ecommerce-seo-case-study" },
    //===== No-Index =====
    robots: {
      index: false,
      follow: false,
    },
};

export default function RootLayout({ children }) {
  return children;
}

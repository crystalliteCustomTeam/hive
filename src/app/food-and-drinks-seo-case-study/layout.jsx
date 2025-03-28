//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Food And Drinks SEO Case Study - Infiniti Digital",
  description:
    "See how our winning SEO strategies helped a food and beverage business get 41% more users and 28.3% growth in revenue. Read this case study now!",
  //===== OG Tags =====
  openGraph: {
    title: "Food And Drinks SEO Case Study - Infiniti Digital",
    description:
      "See how our winning SEO strategies helped a food and beverage business get 41% more users and 28.3% growth in revenue. Read this case study now!",
    url: "/food-and-drinks-seo-case-study",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/food-and-drinks-seo-case-study" },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return children;
}

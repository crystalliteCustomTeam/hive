//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Best Book Writing Services in USA - Premium Book Writing",
  description:
    "Work one-on-one with the best book writers. Our ebook writing & children book writing services will write your book according to your expectation",
  //===== OG Tags =====
  openGraph: {
    title: "Best Book Writing Services in USA - Premium Book Writing",
    description:
      "Work one-on-one with the best book writers. Our ebook writing & children book writing services will write your book according to your expectation",
    url: "/book-writing-service",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/book-writing-service" },
  other: {
    // Generic US - Book Writing Service
    "DC.title":
      "Premium Book Writing Services, Ebook Writing Services, Children Book Writing Services",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    ICBM: "39.78373, -100.445882",
  },
};

export default function RootLayout({ children }) {
  return children;
}

//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Sell More Books with Expert Book Marketing Services",
  description:
    "Hire book marketing services to help interested readers find out about your book more easily. Start spreading the news about your book today!",
  //===== OG Tags =====
  openGraph: {
    title: "Sell More Books with Expert Book Marketing Services",
    description:
      "Hire book marketing services to help interested readers find out about your book more easily. Start spreading the news about your book today!",
    url: "/book-marketing-services",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/book-marketing-services" },
  other: {
    "DC.title":
      "Affordable Book Marketing Services, Amazon Book Marketing Services, Online Book Marketing Services",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    ICBM: "39.78373, -100.445882",
  },
};

export default function RootLayout({ children }) {
  return children;
}

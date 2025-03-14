//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Author Website Development Services - Infiniti Digital",
  description:
    "Develop your digital book with our professional author website design & development services. Contact us and get a quote today!",
  //===== OG Tags =====
  openGraph: {
    title: "Author Website Development Services - Infiniti Digital",
    description:
      "Develop your digital book with our professional author website design & development services. Contact us and get a quote today!",
    url: "/author-website-services",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/author-website-services" },
  other: {
    "DC.title":
      "Author Website Development Services, Author Website Design Services",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    ICBM: "39.78373, -100.445882",
  },
};

export default function RootLayout({ children }) {
  return children;
}

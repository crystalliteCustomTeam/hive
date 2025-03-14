//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Website Development Services - Inifiniti Digital",
  description:
    "Custom Website Development Services that delivers project success no matter what. With 1500+ projects delivered we develop websites that make an impact",
  //===== OG Tags =====
  openGraph: {
    title: "Website Development Services - Inifiniti Digital",
    description:
      "Custom Website Development Services that delivers project success no matter what. With 1500+ projects delivered we develop websites that make an impact",
    url: "/website-development-services",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/website-development-services" },
  other: {
    // Generic US - Website Development Services
    "DC.title":
      "Custom Website Development Services, Small Business Website Development Services, Responsive Website Development",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    ICBM: "39.78373, -100.445882",
  },
};

export default function RootLayout({ children }) {
  return children;
}

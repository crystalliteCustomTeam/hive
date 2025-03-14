//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Website Redesign Services - Infiniti Digital",
  description:
    "Tired of seeing your old and rusty website design? Give your website a fresh new look with our affordable website redesign services.",
  //===== OG Tags =====
  openGraph: {
    title: "Website Redesign Services - Infiniti Digital",
    description:
      "Tired of seeing your old and rusty website design? Give your website a fresh new look with our affordable website redesign services.",
    url: "/website-redesign-services",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/website-redesign-services" },
  other: {
    // Generic US - Website Redesign Services
    "DC.title":
      "Website Redesign Services, Wordpress Website Redesign Services, Affordable Website Redesign",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    ICBM: "39.78373, -100.445882",
  },
};

export default function RootLayout({ children }) {
  return children;
}

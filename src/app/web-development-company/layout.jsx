//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Web Development Company - Infiniti Digital",
  description:
    "Get more traffic and acquire more customers with #1 web development company in USA. contact now, and lets talk design!",
  //===== OG Tags =====
  openGraph: {
    title: "Web Development Company - Infiniti Digital",
    description:
      "Get more traffic and acquire more customers with #1 web development company in USA. contact now, and lets talk design!",
    url: "/web-development-company",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/web-development-company" },
  other: {
    "DC.title": "web development company",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    ICBM: "39.78373, -100.445882",
  },
};

export default function RootLayout({ children }) {
  return children;
}

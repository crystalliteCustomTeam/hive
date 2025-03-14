//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "We're Here To Help With Best Content Marketing Services ",
  description:
    "With our content marketing services, you get everything from SEO strategy & content creation to content management. You'll work with us for Infinity.",
  //===== OG Tags =====
  openGraph: {
    title: "We're Here To Help With Best Content Marketing Services ",
    description:
      "With our content marketing services, you get everything from SEO strategy & content creation to content management. You'll work with us for Infinity.",
    url: "/content-marketing-services",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/content-marketing-services" },
  other: {
    "DC.title": "Content Marketing Services",
    "DC.title": "content marketing services",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    ICBM: "39.78373, -100.445882",
  },
};

export default function RootLayout({ children }) {
  return children;
}

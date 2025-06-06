//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Social Media Management Services for Brand Success",
  description:
    "We are one of the top social media management agency helping you to select the right social platforms that fit your buyer persona. ",
  //===== OG Tags =====
  openGraph: {
    title: "Social Media Management Services for Brand Success",
    description:
      "We are one of the top social media management agency helping you to select the right social platforms that fit your buyer persona. ",
    url: "/social-media-management-service",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/social-media-management-service" },
  //===== GEO Tags =====
  other: {
    "DC.title":
      "Social Media Management Agency, Social Media Management Services, Meta Ads Management",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    ICBM: "39.78373, -100.445882",
  },
};

export default function RootLayout({ children }) {
  return children;
}

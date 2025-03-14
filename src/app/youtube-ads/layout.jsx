//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "YouTube Advertising Agency - YouTube Ads Done Right",
  description:
    "Build awareness and drive the right traffic to your site with help from our YouTube Advertising Services. Launch effective ad campaigns for great ROI and results.",
  //===== OG Tags =====
  openGraph: {
    title: "YouTube Advertising Agency - YouTube Ads Done Right",
    description:
      "Build awareness and drive the right traffic to your site with help from our YouTube Advertising Services. Launch effective ad campaigns for great ROI and results.",
    url: "/youtube-ads",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/youtube-ads" },
  //===== GEO Tags =====
  other: {
    // First Region (Houston, TX) - YouTube Ads
    "DC.title":
      "YouTube Advertising Services, YouTube Advertising Agency, YouTube Advertising Company",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    ICBM: "39.78373, -100.445882",
  },
};

export default function RootLayout({ children }) {
  return children;
}

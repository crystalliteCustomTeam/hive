//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Mobile App Development Company - Award-Winning App Developers",
  description:
    "Mobile app development company specializing in the development of iPhone, Android and Web applications. Contact us and get free quote now!",
  //===== OG Tags =====
  openGraph: {
    title: "Mobile App Development Company - Award-Winning App Developers",
    description:
      "Mobile app development company specializing in the development of iPhone, Android and Web applications. Contact us and get free quote now!",
    url: "/mobile-app-development-company",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/mobile-app-development-company" },
  other: {
    "DC.title": "Mobile App Development Company",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    ICBM: "39.78373, -100.445882",
  },
};

export default function RootLayout({ children }) {
  return children;
}

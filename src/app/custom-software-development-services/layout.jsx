//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Custom Software Development Services - Build Custom Softwares",
  description:
    "Custom software development services from Infiniti Digital that helps you develop custom software solutions with a team of 200+ software developers.",
  //===== OG Tags =====
  openGraph: {
    title: "Custom Software Development Services - Build Custom Softwares",
    description:
      "Custom software development services from Infiniti Digital that helps you develop custom software solutions with a team of 200+ software developers.",
    url: "/custom-software-development-services",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/custom-software-development-services" },
  other: {
    "DC.title":
      "Software Development Services Company, AI Software Development Services",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    ICBM: "39.78373, -100.445882",
  },
};

export default function RootLayout({ children }) {
  return children;
}

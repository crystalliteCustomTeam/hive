//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: " HVAC SEO Case Study - 44.8% Increase In Bookings",
  description:
    "This SEO case study is a proof of how we scaled our HVAC client to get 12K new users & 44.8% more bookings through effective SEO. Read and make a decision.",
  //===== OG Tags =====
  openGraph: {
    title: " HVAC SEO Case Study - 44.8% Increase In Bookings",
    description:
      "This SEO case study is a proof of how we scaled our HVAC client to get 12K new users & 44.8% more bookings through effective SEO. Read and make a decision.",
    url: "/hvac-seo-case-study",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/hvac-seo-case-study" },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return children;
}

//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Travel SEO Case Study - 304.6% Increase in Tour Bookings",
  description:
    "Our travel SEO expertise increased the safari tour bookings by 304.6% in just 8 months for our client. Read this case study and see how we did it!",
  //===== OG Tags =====
  openGraph: {
    title: "Travel SEO Case Study - 304.6% Increase in Tour Bookings",
    description:
      "Our travel SEO expertise increased the safari tour bookings by 304.6% in just 8 months for our client. Read this case study and see how we did it!",
    url: "/travel-seo-case-study",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/travel-seo-case-study" },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return children;
}

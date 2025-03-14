//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Children Book Illustration Services - Infiniti Digital",
  description:
    "Give your children's book a fresh new look with engaging artwork that keeps the readers engaged. Hire the professional children's book illustration services",
  //===== OG Tags =====
  openGraph: {
    title: "Children Book Illustration Services - Infiniti Digital",
    description:
      "Give your children's book a fresh new look with engaging artwork that keeps the readers engaged. Hire the professional children's book illustration services",
    url: "/children-book-illustration",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/children-book-illustration" },
  other: {
    "DC.title":
      "Children Book Illustration Services, Children's Book Illustration, Book Cover Illustration",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    ICBM: "39.78373, -100.445882",
  },
};

export default function RootLayout({ children }) {
  return children;
}

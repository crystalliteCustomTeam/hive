//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Grace Moore, Social Media Manager at Infiniti Digital",
  description:
    "Grace Moore is a Social Media Manager who leads strategy, & engagement across all social platforms. She also writes about best practices in social media to help others.",
  //===== OG Tags =====
  openGraph: {
    title: "Grace Moore, Social Media Manager at Infiniti Digital",
    description:
      "Grace Moore is a Social Media Manager who leads strategy, & engagement across all social platforms. She also writes about best practices in social media to help others.",
    url: "/grace-moore",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/grace-moore" },
};

export default function RootLayout({ children }) {
  return children;
}

import FooterLp from "../landing/layout/footerlp";
import HeaderSimpleLp from "../landing/layout/headersimple";

//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Best Social Media Marketing Services - Infiniti Digital",
  description:
    "Make sure your brand gets the reach it deserves on social media platforms with expert social media marketing. Grow your ROI by 40%.",
  //===== OG Tags =====
  openGraph: {
    title: "Best Social Media Marketing Services - Infiniti Digital",
    description:
      "Make sure your brand gets the reach it deserves on social media platforms with expert social media marketing. Grow your ROI by 40%.",
    url: "/social-media-marketing",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/social-media-marketing" },
};

export default function RootLayout({ children }) {
  return (
    <>
      <HeaderSimpleLp />
      {children}
      <FooterLp />
    </>
  );
}

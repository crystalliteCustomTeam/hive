import FooterLp from "@/src/app/landing/layout/footerlp";
import HeaderSimpleLp from "@/src/app/landing/layout/headersimple";

//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Social Media Marketing Agency With Strategy That Converts",
  description:
    "While others chase trends, our social media marketing agency chases results. We turn scrollers into shoppers and followers into fierce brand advocates.",
  //===== OG Tags =====
  openGraph: {
    title: "Social Media Marketing Agency With Strategy That Converts",
    description:
      "While others chase trends, our social media marketing agency chases results. We turn scrollers into shoppers and followers into fierce brand advocates.",
    url: "/social-media-marketing-agency",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/social-media-marketing-agency" },
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

import FooterLp from "@/src/app/landing/layout/footerlp";
import HeaderSimpleLp from "@/src/app/landing/layout/headersimple";

//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Social Media Advertising Agency - Ads That Fuel Growth",
  description:
    "Our best social media advertising agency creates, manages & runs social media ads that builds a connection with your audience. Connect & grow your brand's identity!",
  //===== OG Tags =====
  openGraph: {
    title: "Social Media Advertising Agency - Ads That Fuel Growth",
    description:
      "Our best social media advertising agency creates, manages & runs social media ads that builds a connection with your audience. Connect & grow your brand's identity!",
    url: "/social-media-advertising-agency",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/social-media-advertising-agency" },
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

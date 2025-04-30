import FooterLp from "../landing/layout/footerlp";
import HeaderSimpleLp from "../landing/layout/headersimple";

//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "GMB Management Service That Turns Searchers Into Foot Traffic",
  description:
    "Your GMB profile is your mini website. Our GMB management service ensures it's your best performer, turning local searches into walking customers.",
  //===== OG Tags =====
  openGraph: {
    title: "GMB Management Service That Turns Searchers Into Foot Traffic",
    description:
      "Your GMB profile is your mini website. Our GMB management service ensures it's your best performer, turning local searches into walking customers.",
    url: "/gmb-management-service",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/gmb-management-service" },
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

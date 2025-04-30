import FooterLp from "../landing/layout/footerlp";
import HeaderSimpleLp from "../landing/layout/headersimple";

//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Strategic PPC Management Services - From Click to Convert",
  description:
    "Take the guesswork out of paid advertising with our PPC management services. We'll handle the bidding, and optimization while you enjoy leads and sales",
  //===== OG Tags =====
  openGraph: {
    title: "Strategic PPC Management Services - From Click to Convert",
    description:
      "Take the guesswork out of paid advertising with our PPC management services. We'll handle the bidding, and optimization while you enjoy leads and sales",
    url: "/ppc-management-services",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/ppc-management-services" },
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

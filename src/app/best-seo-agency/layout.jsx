import FooterLp from "@/src/app/landing/layout/footerlp";
import HeaderSimpleLp from "@/src/app/landing/layout/headersimple";

//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "The Right SEO Agency That Drives Converting Traffic",
  description:
    "Set your eyes on the prize (more revenue) as your website grows and outrank your competitors with the best SEO agency. See our packages and hire the top SEO agency!",
  //===== OG Tags =====
  openGraph: {
    title: "The Right SEO Agency That Drives Converting Traffic",
    description:
      "Set your eyes on the prize (more revenue) as your website grows and outrank your competitors with the best SEO agency. See our packages and hire the top SEO agency!",
    url: "/best-seo-agency",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/best-seo-agency" },
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

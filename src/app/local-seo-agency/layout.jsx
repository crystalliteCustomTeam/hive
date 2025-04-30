import FooterLp from "@/src/app/landing/layout/footerlp";
import HeaderSimpleLp from "@/src/app/landing/layout/headersimple";

//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Local SEO Agency That Turns Your Business Into A Brand",
  description:
    "Let the best local SEO agency turn your website into a sales magnet. Connect with us and create a never ending chain of calls, enquiries and bookings in your area.",
  //===== OG Tags =====
  openGraph: {
    title: "Local SEO Agency That Turns Your Business Into A Brand",
    description:
      "Let the best local SEO agency turn your website into a sales magnet. Connect with us and create a never ending chain of calls, enquiries and bookings in your area.",
    url: "/local-seo-agency",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/local-seo-agency" },
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

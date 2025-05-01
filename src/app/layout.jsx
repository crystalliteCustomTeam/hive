import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/src/app/globals.scss";
import Scripts from "@/src/app/Scripts";
import ConditionalLayout from "@/src/app/conditionallayout";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.infinitidigital.us/"),
  title: "#1 Full-Service Digital Marketing Agency - Infiniti Digital",
  description:
    "Attract, Impress, and make more revenue with full-service digital marketing agency. We provide SEO, PPC, Social Media, Web Development and more! ",
  //===== OG Tags =====
  openGraph: {
    title: "#1 Full-Service Digital Marketing Agency - Infiniti Digital",
    description:
      "Attract, Impress, and make more revenue with full-service digital marketing agency. We provide SEO, PPC, Social Media, Web Development and more! ",
    url: "/",
    siteName: "Inifniti Digital",
    locale: "en_US",
    type: "website",
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/" },

  //===== Google Varification =====
  verification: {
    other: {
      "google-site-verification": [
        "IxKMq1ApRJHoKxrGMlzB8edlDEONyQpej3So1ejiHG4",
      ],
      "ahrefs-site-verification": [
        "3e88a33bc527db0b7fbce39f142ceb3db84a5303ee13096a1bb8899b360c6638",
      ],
    },
  },

  //===== No-Index =====
  robots: {
    index: true,
    follow: true,
  },
  //===== GEO Tags =====
  other: {
    "DC.title": "full-service digital marketing agency",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    ICBM: "39.78373, -100.445882",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="48x48"
        />
      </Head>
      <body className={poppins.className}>
        <Scripts />
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}

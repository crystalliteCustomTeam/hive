import { Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/src/app/globals.scss";
import Scripts from "@/src/app/Scripts";
import ConditionalLayout from "@/src/app/conditionallayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
});


export const metadata = {
  metadataBase: new URL("https://www.infinitidigital.us/"),
  title: "#1 Full-Service Digital Marketing Agency - Infiniti Digital",
  description: "Attract, Impress, and make more revenue with full-service digital marketing agency. We provide SEO, PPC, Social Media, Web Development and more! ",
  //===== OG Tags =====
  openGraph: {
    title: "#1 Full-Service Digital Marketing Agency - Infiniti Digital",
    description: "Attract, Impress, and make more revenue with full-service digital marketing agency. We provide SEO, PPC, Social Media, Web Development and more! ",
    url: '/',
    siteName: "Inifniti Digital",
    locale: 'en_US',
    type: 'website',
    images: "https://www.infinitidigital.us/infinitidigital.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/' },

  //===== Google Varification =====
  verification: {
    other: {
      "google-site-verification": ['IxKMq1ApRJHoKxrGMlzB8edlDEONyQpej3So1ejiHG4'],
    },
  },

  //===== No-Index =====
  robots: {
    index: true,
    follow: true,
  },
  //===== GEO Tags =====
  other: {
    // First Region (Houston, TX)
    "DC.title.houston": "full-service digital marketing agency",
    "geo.region.houston": "US-TX",
    "geo.placename.houston": "Houston",
    "geo.position.houston": "29.677315;-95.615108",
    "ICBM.houston": "29.677315, -95.6151082",

    // Second Region (Generic US Location)
    "DC.title.generic": "full-service digital marketing agency",
    "geo.region.generic": "US",
    "geo.position.generic": "39.78373;-100.445882",
    "ICBM.generic": "39.78373, -100.445882",
  }
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Scripts />
        <ConditionalLayout >
          {children}
        </ConditionalLayout >
      </body>
    </html>
  );
}

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
  //===== Additional Meta Tags =====
  metaTags: [
    {
      name: "DC.title",
      content: "full-service digital marketing agency",
    },
    {
      name: "geo.region",
      content: "US-TX",
    },
    {
      name: "geo.placename",
      content: "Houston",
    },
    {
      name: "geo.position",
      content: "29.677315;-95.615108",
    },
    {
      name: "ICBM",
      content: "29.677315, -95.615108",
    },
    // Added Second Set of Geo and DC Meta Tags
    {
      name: "DC.title",
      content: "full-service digital marketing agency",
    },
    {
      name: "geo.region",
      content: "US",
    },
    {
      name: "geo.position",
      content: "39.78373;-100.445882",
    },
    {
      name: "ICBM",
      content: "39.78373, -100.445882",
    },
  ],
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

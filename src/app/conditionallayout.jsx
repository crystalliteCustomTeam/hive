"use client";
import Header from "@/src/app/layout/header";
import Footer from "@/src/app/layout/footer";
import { usePathname } from "next/navigation";

const ConditionalLayout = ({ children }) => {
  const pathname = usePathname();
  const conditionalVariable =
    pathname !== "/social-media-marketing" &&
    pathname !== "/best-seo-agency" &&
    pathname !== "/ppc-management-services" &&
    pathname !== "/seo-content-writing-services" &&
    pathname !== "/organic-seo-services" &&
    pathname !== "/social-media-marketing-agency" &&
    pathname !== "/search-engine-optimization-services" &&
    pathname !== "/local-seo-agency" &&
    pathname !== "/gmb-management-service" &&
    pathname !== "/social-media-advertising-agency";
  return (
    <>
      {conditionalVariable && <Header />}
      {children}
      {conditionalVariable && <Footer />}
    </>
  );
};

export default ConditionalLayout;

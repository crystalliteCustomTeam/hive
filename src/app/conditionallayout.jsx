"use client";
import { useEffect, useState } from "react";
import Header from "@/src/app/layout/header";
import Footer from "@/src/app/layout/footer";
import { usePathname } from "next/navigation";
import PopUpSMM from "./components/popupsmm";

const ConditionalLayout = ({ children }) => {
  const pathname = usePathname();
  const [showPopup, setShowPopup] = useState(false);

  // ✅ pages where popup should show
  const popupPages = [
    "/social-media-marketing-services",
    "/social-media-advertising-services",
    "/social-media-management-service",
    "/influencer-marketing-service",
    "/youtube-optimization-service",
    "/youtube-monetization-service",
    "/email-marketing-agency",
  ];

  // ✅ check if current page is a popup page
  const isPopupPage = popupPages.includes(pathname);

  // ✅ auto open popup on scroll >= 500px only if page matches
  useEffect(() => {
    if (!isPopupPage) return;

    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setShowPopup(true);
        window.removeEventListener("scroll", handleScroll); // open once
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPopupPage]);

  // ✅ show header/footer only if NOT popup page
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
      {isPopupPage && (
        <PopUpSMM
          show={showPopup}
          onHide={() => setShowPopup(false)}
          noservices={true}
        />
      )}
      {conditionalVariable && <Header />}
      {children}
      {conditionalVariable && <Footer />}
    </>
  );
};

export default ConditionalLayout;

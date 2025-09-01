"use client";
import { useEffect, useState } from "react";
import Header from "@/src/app/layout/header";
import Footer from "@/src/app/layout/footer";
import { usePathname } from "next/navigation";
import PopUpSMM from "./components/popupsmm";

const ConditionalLayout = ({ children }) => {
  const pathname = usePathname();
  const [showPopup, setShowPopup] = useState(false);

  const popupPages = [
    "/social-media-marketing-services",
    "/social-media-advertising-services",
    "/social-media-management-service",
    "/influencer-marketing-service",
    "/youtube-optimization-service",
    "/youtube-monetization-service",
    "/email-marketing-agency",
    "/social-media-advertising-agency",
    "/social-media-marketing-agency",
    "/social-media-marketing",
  ];

  const isPopupPage = popupPages.includes(pathname);

  useEffect(() => {
    if (!isPopupPage) {
      setShowPopup(false);
      return;
    }

    let firstTriggered = false;
    let secondTriggered = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // First popup at fixed scroll
      if (!firstTriggered && scrollY >= 1300) {
        setShowPopup(true);
        firstTriggered = true;
      }

      // Second popup near end of Pricing section
      if (!secondTriggered) {
        const pricingSection = document.getElementById("PricingId");
        if (pricingSection) {
          const rect = pricingSection.getBoundingClientRect();
          const sectionBottom = rect.bottom + window.scrollY; // distance from top of page

          // Trigger popup when user is 100px before section end
          if (scrollY + window.innerHeight >= sectionBottom + 1100) {
            setShowPopup(true);
            secondTriggered = true;
          }
        }
      }
    };

    setShowPopup(false);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, isPopupPage]);

  const excludedPages = [
    "/social-media-marketing",
    "/best-seo-agency",
    "/ppc-management-services",
    "/seo-content-writing-services",
    "/organic-seo-services",
    "/social-media-marketing-agency",
    "/search-engine-optimization-services",
    "/local-seo-agency",
    "/gmb-management-service",
    "/social-media-advertising-agency",
  ];

  const conditionalVariable = !excludedPages.includes(pathname);

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

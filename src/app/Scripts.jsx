"use client";
import { useEffect } from "react";

const Scripts = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      //======== LiveChat ========//
      window.__lc = window.__lc || {};
      window.__lc.license = 19005450;
      window.__lc.integration_name = "manual_onboarding";
      window.__lc.product_name = "livechat";

      const livechat = document.createElement("script");
      livechat.async = true;
      livechat.src = "https://cdn.livechatinc.com/tracking.js";
      document.body.appendChild(livechat);

      // Google Tag Manager (for <head>)
      const gtmScript = document.createElement("script");
      gtmScript.async = true;
      gtmScript.src = "https://www.googletagmanager.com/gtm.js?id=GTM-TFXZ8VTJ";
      document.head.appendChild(gtmScript);

      // Google Tag Manager for noscript (for <body>)
      const noscriptDiv = document.createElement("noscript");
      noscriptDiv.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TFXZ8VTJ"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.insertBefore(noscriptDiv, document.body.firstChild);

      // Google Analytics Tag
      const analyticsScript = document.createElement("script");
      analyticsScript.src =
        "https://www.googletagmanager.com/gtag/js?id=G-KCPM5K053W";
      analyticsScript.async = true;
      analyticsScript.defer = true;
      document.head.appendChild(analyticsScript);

      // Define gtag globally
      window.dataLayer = window.dataLayer || [];
      window.gtag =
        window.gtag ||
        function () {
          window.dataLayer.push(arguments);
        };

      // Initialize gtag for Google Analytics
      analyticsScript.onload = () => {
        gtag("js", new Date());
        gtag("config", "G-KCPM5K053W");
      };

      // ✅ New Google Ads Tag (AW-17515825294)
      const adsScript2 = document.createElement("script");
      adsScript2.async = true;
      adsScript2.src =
        "https://www.googletagmanager.com/gtag/js?id=AW-17515825294";
      document.head.appendChild(adsScript2);

      adsScript2.onload = () => {
        gtag("config", "AW-17515825294");
      };
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default Scripts;

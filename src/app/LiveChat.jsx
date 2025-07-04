"use client";
import { useEffect } from "react";

const LiveChat = () => {
    useEffect(() => {
        if (!document.getElementById("livechat-script")) {
            window.__lc = window.__lc || {};
            window.__lc.license = 19005450;
            window.__lc.integration_name = "manual_onboarding";
            window.__lc.product_name = "livechat";

            const livechat = document.createElement("script");
            livechat.id = "livechat-script";
            livechat.async = true;
            livechat.src = "https://cdn.livechatinc.com/tracking.js";
            document.head.appendChild(livechat);
        }
    }, []);

    return null;
};

export default LiveChat;

"use client";
import Header from "@/src/app/layout/header";
import Footer from "@/src/app/layout/footer";
import { usePathname } from "next/navigation";

const ConditionalLayout = ({ children }) => {
    const pathname = usePathname();
    const conditionalVariable = pathname !== "/landing/smm" && pathname !== "/landing/seo" && pathname !== "/landing/paid" && pathname !== "/seo-content-writing-services" && pathname !== "/landing/seo1" && pathname !== "/landing/smm1" && pathname !== "/landing/seo2" && pathname !== "/landing/seo3" && pathname !== "/landing/gmb" && pathname !== "/landing/smm3";
    return (
        <>
            {conditionalVariable && <Header />}
            {children}
            {conditionalVariable && <Footer />}
        </>
    );
};

export default ConditionalLayout;

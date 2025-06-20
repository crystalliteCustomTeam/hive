"use client";
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/layout/footer.module.scss"
import Image from "next/image"
import Link from "next/link"
import PaymentImg from "media/home/paymentImg.webp"
import { FooterLogo } from "@/src/app/app-constants"
import { usePathname } from "next/navigation";
import Location from "@/src/app/layout/location"


export const subMenuItems = [
    { label: "Social Media Marketing", path: "/social-media-marketing-services" },
    { label: "Social Media Advertising", path: "/social-media-advertising-services" },
    { label: "Social Media Management", path: "/social-media-management-service" },
    { label: "Influencer Marketing", path: "/influencer-marketing-service" },
    { label: "YouTube Optimization", path: "/youtube-optimization-service" },
    { label: "YouTube Monetization", path: "/youtube-monetization-service" },
    { label: "Email Marketing", path: "/email-marketing-agency" },
    { label: "Google Ads (PPC)", path: "/ppc-campaign-management-services" },
    { label: "Amazon Ads", path: "/amazon-advertising" },
    { label: "Facebook Ads", path: "/facebook-ads-service" },

];
const QuickLinks = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "About Us",
        url: "/about-us"
    },
    {
        name: "Blogs",
        url: "/blogs"
    },
    {
        name: "Contact Us",
        url: "/contact-us"
    }, {
        name: "Refund Policy",
        url: "/refund-policy"
    },
]

const Footer = () => {

    const [isLocation, setIsLocation] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        setIsLocation(
            pathname === "/" ||
            pathname === "/seo-service" ||
            pathname === "/local-seo-service" ||
            pathname === "/white-label-seo-service" ||
            pathname === "/nationwide-seo-service" ||
            pathname === "/small-business-seo-services" ||
            pathname === "/enterprise-seo-service" ||
            pathname === "/seo-agency" ||
            pathname === "/seo-dallas-tx" ||
            pathname === "/seo-houston-tx" ||
            pathname === "/seo-nyc-ny" ||
            pathname === "/seo-chicago-il" ||
            pathname === "/seo-los-angeles-ca" ||
            pathname === "/seo-denver-co" ||
            pathname === "/search-engine-optimization-services" ||
            pathname === "/best-seo-agency" ||
            pathname === "/organic-seo-services" ||
            pathname === "/local-seo-agency"
        );
    }, [pathname]);

    return (
        <>
            {isLocation ? (
                <Location />
            ) : ""
            }

            <section className={styles.FooterSection}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className={styles.footerMenuSec}>
                                <div className={`${styles.menuItem} ${styles.FooterLogo}`}>
                                    <FooterLogo />
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.mainlinks}>
                                        <h6>Quick Links</h6>
                                        <ul>
                                            {QuickLinks.map((item, index) => (
                                                <li key={index}>
                                                    <Link href={item.url} aria-label={`Visit our ${item.label}`}>{item.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>


                                <div className={styles.menuItem}>
                                    <div className={styles.mainlinks}>
                                        <h6>Services Links</h6>
                                        <ul className={styles.serviceslinks}>
                                            {subMenuItems.map((item, index) => (
                                                <li key={index}>
                                                    <Link href={item.path} aria-label={`Services our ${item.label}`}>{item.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>


                                <div className={styles.menuItem}>
                                    <div className={`${styles.footerContent} ${styles.mainlinks}`}>
                                        <h6>Contact Info</h6>
                                        <div className={styles.contactInfo} target="_blank">
                                            {pathname === "/seo-dallas-tx" ? (
                                                <a
                                                    href="tel:2142962442"
                                                    aria-label={`Our Phone Number`}
                                                >
                                                    <span>Phone:</span> 214-296-2442
                                                </a>
                                            ) : (
                                                <a
                                                    href="tel:855-666-6682"
                                                    aria-label={`Our Phone Number`}
                                                >
                                                    <span>Phone:</span> 855-666-6682
                                                </a>
                                            )
                                            }
                                        </div>
                                        <div className={styles.contactInfo}>
                                            <a href="mailto:support@infinitidigital.us" target="_blank" aria-label={`Our Email Address`}>
                                                <span>Email:</span> support@infinitidigital.us
                                            </a>
                                            <br />
                                            <a href="mailto:inquiries@infinitidigital.us" target="_blank" aria-label={`Our Email Address`}>
                                                <span>Email:</span> inquiries@infinitidigital.us
                                            </a>
                                        </div>
                                        <div className={styles.contactAddress}>
                                            <div> {pathname === "/seo-dallas-tx" ? (
                                                <a href="#" target="_blank" aria-label={`Our Google Map`}>
                                                    <span>Address:</span> 1314 W Mockingbird Ln, Dallas, TX 75247
                                                </a>
                                            ) : (
                                                <a href="https://maps.app.goo.gl/5AjacC98s96BCjzd8" target="_blank" aria-label={`Our Google Map`}>
                                                    <span>Address:</span> 9518 Mykawa Road Houston, TX 77048
                                                </a>
                                            )}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
            <section className={styles.copyRightSection}>
                <Container className="h-100">
                    <Row className={`${styles.borderStyle} h-100`} >
                        <Col sm={6} md={6} className="my-auto">
                            <div className={styles.CopyRightBox}>
                                <div className={styles.txtCopyRight}>© Copyright 2025 - Infiniti Digital </div>
                                <div className={styles.CopyRightLinks}>
                                    <ul>
                                        <li><Link href="/terms-and-conditions">Terms of Use</Link></li>
                                        <li><Link href="/privacy-policy#"> Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>

                        </Col>
                        <Col sm={6} md={6} className="my-auto text-center text-md-end">
                            <Image src={PaymentImg.src} alt="Payment Image" width={550} height={40} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Footer
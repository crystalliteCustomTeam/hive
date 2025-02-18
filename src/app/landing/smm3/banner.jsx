

'use client';
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/smm3/bannerlp.module.scss"
import bgBanner from "media/landing/smm3/bannerImage.webp"
import LogoImg from "media/landing/smm1/bannerLogo.webp"
import Link from "next/link"
import Image from "next/image";

const Bannerlp = () => {
    // Chat Code
    const openChat = () => {
        if (window.LC_API) {
            window.LC_API.open_chat_window();
        } else {
            console.error('LiveChat API is not loaded');
        }
    };
    return (
        <section className={styles.bannerLpSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} lg={6} className="my-auto">
                        <div className={styles.bannerContentSec}>
                            <div className={`${styles.colorBlack} subtitle`}>Business Owned By You, But Driven By Our</div>
                            <h1>Social Media Marketing!</h1>
                            <p>Jumpto1 Social Media Marketing means more traffic, more calls and more sales!</p>
                            <div className={styles.btnFlex}>
                                <Link href="#PricingId" className={styles.btnStyle}>Our Affordable SEO Packages</Link>
                                <div className={styles.chatStyle} onClick={openChat}>Live Chat</div>
                            </div>
                            <div className={styles.numberStyle}>
                                <div className={styles.numberItem}>
                                    <div className={styles.points}>
                                        1500+
                                        <span>Client Working With Us Globally</span>
                                    </div>
                                </div>
                                <div className={styles.numberItem}>
                                    <div className={styles.points}>
                                        1.2MIL+
                                        <span>Qualified Leads Delivered</span>
                                    </div>
                                </div>
                                <div className={styles.numberItem}>
                                    <div className={styles.points}>
                                        94%
                                        <span>Client retention rate</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.banenrLogo}>
                                <Image src={LogoImg.src} alt="Banner Logos" width={539} height={27} />
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={6} className="my-auto">
                        <div className={styles.bannerImage}>
                            <Image src={bgBanner.src} alt="Banner Image" width={968} height={986} />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Bannerlp
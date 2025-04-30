

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
                            <div className={`${styles.colorBlack} subtitle`}>Low ROAS? Bad Ads? Let’s Fix That With Our</div>
                            <h1>Social Media Advertising Agency
                            </h1>
                            <p>Bad Meta ads burn cash; we fix poor targeting, bad creatives, and weak funnels</p>
                            <div className={styles.btnFlex}>
                                <Link href="#PricingId" className={styles.btnStyle}>Let’s Connect</Link>
                                <div className={styles.chatStyle} onClick={openChat}>Live Chat</div>
                            </div>
                            <div className={styles.numberStyle}>
                                <div className={styles.numberItem}>
                                    <div className={styles.points}>
                                        1500+
                                        <span>Campaigns launched</span>
                                    </div>
                                </div>
                                <div className={styles.numberItem}>
                                    <div className={styles.points}>
                                        $10M+
                                        <span>in Revenue</span>
                                    </div>
                                </div>
                                <div className={styles.numberItem}>
                                    <div className={styles.points}>
                                        100+
                                        <span>Brands Scaled to 7 Figures</span>
                                    </div>
                                </div>
                                <div className={styles.numberItem}>
                                    <div className={styles.points}>
                                        5X
                                        <span>Higher ROI</span>
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


'use client';
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/seo2/bannerlp.module.scss"
import bgBanner from "media/landing/seo1/bgBanner.webp"
import ContactFrom from "@/src/app/components/contactfrom"
import { ClientIcon, QualifiedIcon, RetentionIcon } from "@/src/app/app-constants"
import Link from "next/link"

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
        <section className={styles.bannerLpSection} style={{ backgroundImage: `url(${bgBanner.src})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} lg={7} className="my-auto">
                        <div className={styles.bannerContentSec}>
                            <div className="subtitle">Professional Search Engine Optimization Services</div>
                            <h1>That Turn Google Searches into More Traffic, More Leads & More Sales</h1>
                            <p>When was the last time you searched for a product or service? Probably today. Your customers are doing the same; but if you’re not ranking, you’re losing sales. That’s where Infiniti Digital comes in. Our Professional Search Engine Optimization Services help you rank higher, attract buyers, and boost revenue. No fluff, just SEO that delivers real, measurable results.</p>
                            <div className={styles.btnFlex}>
                                <Link href="https://calendly.com/infinitidigital/free-seo-consultation" className={styles.btnStyle}>Get A Free Consultation</Link>
                                <div className={styles.chatStyle} onClick={openChat}>Live Chat</div>
                            </div>
                            <div className={styles.numberStyle}>
                                <div className={styles.numberItem}>
                                    <div className={styles.numberIcons}>
                                        <div className={styles.svgIcon}>
                                            <ClientIcon />
                                        </div>
                                        <div className={styles.points}>
                                            1500+
                                        </div>
                                    </div>
                                    <div className={styles.numberTitle}>
                                        Clients working with us globally
                                    </div>
                                </div>
                                <div className={styles.numberItem}>
                                    <div className={styles.numberIcons}>
                                        <div className={styles.svgIcon}>
                                            <QualifiedIcon />
                                        </div>
                                        <div className={styles.points}>
                                            1.2MIL+
                                        </div>
                                    </div>
                                    <div className={styles.numberTitle}>
                                        Qualified leads generated
                                    </div>
                                </div>
                                <div className={styles.numberItem}>
                                    <div className={styles.numberIcons}>
                                        <div className={styles.svgIcon}>
                                            <RetentionIcon />
                                        </div>
                                        <div className={styles.points}>
                                            94%
                                        </div>
                                    </div>
                                    <div className={styles.numberTitle}>
                                        Client retention rate
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={5} className="my-auto">
                        <div className={styles.bannerContactFrom}>
                            <h2>Don’t Be Shy, Say Hi!</h2>
                            <ContactFrom bg="no" />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Bannerlp
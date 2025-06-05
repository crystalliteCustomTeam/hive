
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/content/customprice.module.scss"
import { CustomPrice01, CustomPrice02, CustomPrice03 } from "@/src/app/app-constants"
import ContactFrom from "@/src/app/components/contactfrom"

const CustomPrice = () => {
    return (
        <section className={`${styles.customPriceSection} pt-100`}>
            <Container>
                <Row>
                    <Col md={10} lg={8} className="m-auto text-center">
                        <h2>Get A Custom Organic Shopping Quote In 24 Hours</h2>
                        <p>You’ll get a fully customized Google Organic Shopping strategy built around your unique products, market, and growth potential.
                        </p>
                    </Col>
                </Row>
                <Row className="d-flex align-items-stretch">
                    <Col md={12} lg={6}>
                        <div className={styles.customPriceBox}>
                            <div className={styles.customBoxbg}>
                                <div className={styles.customHeader}>
                                    <div className={styles.customTitle}>
                                        <h5>Full-Service<br />
                                            Management</h5>
                                        <p>Custom pricing based on scope and scale.</p>
                                    </div>
                                    <div className={styles.customPrice}>
                                        <div className={styles.startAt}>Starting at</div>
                                        <div className={styles.Price}>$1150</div>
                                    </div>
                                </div>
                                <div className={styles.customMainBtn}>
                                    Core Pricing Metrics
                                </div>
                                <div className={styles.listPrice}>
                                    <div className={styles.listItem}>
                                        <div className={styles.listIcon}>
                                            <div className={styles.listIconSvg}>
                                                <CustomPrice01 />
                                            </div>
                                        </div>
                                        <div className={styles.listTxt}>
                                            <h6>Catalog Size and SKUs</h6>
                                            <p>The total number of products and variations that need to be optimized and maintained.</p>
                                        </div>
                                    </div>
                                    <div className={styles.listItem}>
                                        <div className={styles.listIcon}>
                                            <div className={styles.listIconSvg}>
                                                <CustomPrice02 />
                                            </div>
                                        </div>
                                        <div className={styles.listTxt}>
                                            <h6>Platform Complexity & Market Coverage</h6>
                                            <p>The number of markets, currencies, and platform integrations required for full optimization.</p>
                                        </div>
                                    </div>
                                    <div className={styles.listItem}>
                                        <div className={styles.listIcon}>
                                            <div className={styles.listIconSvg}>
                                                <CustomPrice03 />
                                            </div>
                                        </div>
                                        <div className={styles.listTxt}>
                                            <h6>SEO & Content</h6>
                                            <p>Content is part of SEO, but extra content boosts growth faster.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className={styles.customPriceBox}>
                            <div className={styles.customBoxbg}>
                                <div className={styles.customForm}>
                                    <h3>Want to Grow? Let us Know!</h3>
                                    <p>We’ll review your store and deliver your tailored optimization proposal.</p>
                                    <ContactFrom />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CustomPrice
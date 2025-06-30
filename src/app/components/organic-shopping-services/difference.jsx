import styles from "@/styles/components/organic-shopping-services/difference.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Difference = () => {
    return (
        <section className={`${styles.differenceSec}`}>
            <Container className={styles.differenceContainer}>
                <Row>
                    <Col md={12} className="text-center mb-5 mb-lg-4 mb-md-2">
                        <h2>GEO vs SEO Difference</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className={styles.differenceBox}>
                            <h3>GEO</h3>
                            <div className={styles.differenceItem}>
                                <p>Appears in AI-generated answers like Google’s AI Overviews and ChatGPT responses</p>
                            </div>
                            <div className={styles.differenceItem}>
                                <p>Focuses on semantic relevance, structured data, and AI trust signals</p>
                            </div>
                            <div className={styles.differenceItem}>
                                <p>Puts your brand directly in front of users, inside instant AI summaries</p>
                            </div>

                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.differenceBox}>
                            <h3>SEO</h3>
                            <div className={styles.differenceItem}>
                                <p>Appears in traditional Google search results (organic rankings)</p>
                            </div>
                            <div className={styles.differenceItem}>
                                <p>Focuses on keywords, backlinks, and technical SEO</p>
                            </div>
                            <div className={styles.differenceItem}>
                                <p>Depends on users clicking through results</p>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Difference
import styles from "@/styles/components/organic-shopping-services/difference.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Difference = () => {
    return (
        <section className={`${styles.differenceSec}`}>
            <Container className={styles.differenceContainer}>
                <Row>
                    <Col md={12} className="text-center mb-5 mb-lg-4 mb-md-2">
                        <h2>AEO vs SEO Difference</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className={styles.differenceBox}>
                            <h3>AEO</h3>
                            <div className={styles.differenceItem}>
                                <h4>Lorem ipsum dolor sit consectetur.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </div>
                            <div className={styles.differenceItem}>
                                <h4>Lorem ipsum dolor sit consectetur.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </div>
                            <div className={styles.differenceItem}>
                                <h4>Lorem ipsum dolor sit consectetur.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </div>

                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.differenceBox}>
                            <h3>SEO</h3>
                            <div className={styles.differenceItem}>
                                <h4>Lorem ipsum dolor sit consectetur.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </div>
                            <div className={styles.differenceItem}>
                                <h4>Lorem ipsum dolor sit consectetur.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </div>
                            <div className={styles.differenceItem}>
                                <h4>Lorem ipsum dolor sit consectetur.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Difference
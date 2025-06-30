import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/components/organic-shopping-services/maxreach.module.scss";
import bannerImage from "media/organic-shopping-services/organic-shopping/maxReachImage.webp";


const MaxReach = ({ noTitle }) => {
    return (
        <section className={`${styles.maxReachSec} ${noTitle ? "" : "p-100"}`}>
            <Container>
                {noTitle ? null : (
                    <Row>
                        <Col md={12} lg={8}>
                            <h2>What Is Google Organic Shopping?</h2>
                            <p>Google Organic Shopping allows ecommerce businesses to display their products across Google Shopping, Search, Images, and Lens, without paying for ads. Once your product data feed is optimized and submitted through Google Merchant Center, Google’s organic algorithms index and surface your listings when users search for relevant products.</p>
                        </Col>
                    </Row>
                )}

                <Row className="mt-md-2 mt-lg-3 mt-lg-4">
                    <Col md={5} lg={4}>
                        <div className={styles.maxReachGreen}>
                            <h4>Local Service Overviews</h4>
                            <p>Showcase your business in location-based AI results where users are looking for the “best near me” providers.</p>

                        </div>
                    </Col>
                    <Col md={7} lg={8}>
                        <div className={styles.maxReachImage} style={{ backgroundImage: `url(${bannerImage.src})` }}>
                            <div className={styles.maxReachContent}>
                                <h4>Product Recommendation Overviews</h4>
                                <p>AI tools like Google SGE highlight “top picks” for what users want to buy. We help your products get featured in these summaries by optimizing your listings and content for user intent, product quality, detailed descriptions, reviews, and relevance to common search queries.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MaxReach
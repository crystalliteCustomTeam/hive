import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/components/organic-shopping-services/maxreach.module.scss";
import bannerImage from "media/organic-shopping-services/organic-shopping/maxReachImage.webp";


const MaxReach = () => {
    return (
        <section className={`${styles.maxReachSec} p-100`}>
            <Container>
                <Row>
                    <Col md={12} lg={8}>
                        <h2>What Is Google Organic Shopping?</h2>
                        <p>Google Organic Shopping allows ecommerce businesses to display their products across Google Shopping, Search, Images, and Lens, without paying for ads. Once your product data feed is optimized and submitted through Google Merchant Center, Google’s organic algorithms index and surface your listings when users search for relevant products.</p>
                    </Col>
                </Row>
                <Row className="mt-md-2 mt-lg-3 mt-lg-4">
                    <Col md={5} lg={4}>
                        <div className={styles.maxReachGreen}>
                            <h4>Maximum Visibility</h4>
                            <p>Reach millions of shoppers on Google without spending on ads. With optimized product feeds and proper Merchant Center setup, your products show up when buyers are ready to purchase, driving qualified traffic that converts.</p>
                        </div>
                    </Col>
                    <Col md={7} lg={8}>
                        <div className={styles.maxReachImage} style={{ backgroundImage: `url(${bannerImage.src})` }}>
                            <div className={styles.maxReachContent}>
                                <h4>Faster, Easier Checkouts</h4>
                                <p>Google makes it simple for your customers to buy. With features like Google’s &quot;Buy on Google&quot; checkout and integrated merchant programs, shoppers can complete purchases directly from Google Search or Shopping, reducing friction, increasing conversions, and boosting your revenue.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MaxReach
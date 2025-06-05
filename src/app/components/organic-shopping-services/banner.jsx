import styles from "@/styles/components/organic-shopping-services/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import CommonBtn from "@/src/app/components/common/commonbtn";
import bannerImage from "media/organic-shopping-services/bannerImage.webp";
import Clients from "@/src/app/home/clients";
import { ClientImages } from "@/src/app/home/data/data";


const Banner = () => {
    return (
        <section className={styles.bannerSection} style={{ backgroundImage: `url(${bannerImage.src})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={7} md={9} sm={12} className="my-auto">
                        <div className={styles.bannerContent}>
                            <h1>Optimize Ecommerce Growth
                                With Google Organic Shopping
                            </h1>
                            <p>Turn Google into your #1 sales channel without paying for Google shopping Ads. Get your products in front of millions with fully optimized organic shopping feeds in combination with search engine optimization. </p>
                            <CommonBtn txt="Book Consultation Call" LiveChat={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Clients data={ClientImages} />
        </section>
    )
}

export default Banner
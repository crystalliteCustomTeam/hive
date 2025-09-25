import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/seo-agency-new-york/abtcta.module.scss";
import BgImg from "media/location/bgCTA.webp"
import CommonBtn from "@/src/app/components/common/commonbtn";

const AbtCta = () => {
    return (
        <section className={`${styles.abtctaSection} `} style={{ backgroundImage: `url(${BgImg.src})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={10} md={12} className="text-center m-auto">
                        <h2>Free SEO Score Checker
                            <div className={styles.extraFonts}>Everything For Your Business</div>
                        </h2>
                        <CommonBtn txt="Free SEO Score Checker" LinkBtn="/free-seo-score-checker" center={true} />
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default AbtCta
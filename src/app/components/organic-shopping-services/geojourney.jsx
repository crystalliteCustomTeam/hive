import styles from "@/styles/components/organic-shopping-services/geojourney.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import CommonBtn from "@/src/app/components/common/commonbtn";

const GeoJourney = ({ data }) => {
    return (
        <section className={`${styles.geoJourneySection} pt-100`}>
            <Container className={`${styles.geoJourneyContainer} h-100`}>
                <Row className="h-100">
                    <Col md={6} className="my-auto">
                        <h2>{data.title}</h2>
                        <p>
                            {data.desc}
                        </p>
                        <CommonBtn txt="Book Consultation Call" />
                    </Col>
                    <Col md={6} className="my-auto">
                        <div className={styles.journeyVideo}>
                            <video
                                autoPlay
                                muted
                                loop
                                preload="metadata"
                                aria-label="Background video"
                                className={styles.bannerVideo}
                                playsInline
                                poster={data.BannerPoster}
                            >
                                <source src={data.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default GeoJourney
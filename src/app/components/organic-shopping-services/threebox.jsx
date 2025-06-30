import styles from "@/styles/components/organic-shopping-services/threebox.module.scss";
import CommonBtn from "@/src/app/components/common/commonbtn";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import ThreeImg from "media/organic-shopping-services/geo-service/threeImg.webp";

const ThreeBox = () => {
    return (
        <section className={`${styles.threeBoxSection} pt-100`}>
            <Container>
                <Row>
                    <Col md={12} className="mb-5 mb-lg-4 mb-md-2">
                        <h2>AI Overview Types Your Brand Need to Target</h2>
                    </Col>
                    <Col md={4}>
                        <div className={styles.threeBox}>
                            <h4>Informational Overviews</h4>
                            <p>Answer common questions with clear, factual content that helps AI engines understand and cite your expertise.</p>
                            <CommonBtn txt="Book Consultation Call" ArrowBtn={true} SimpleBtn={true} FlexStart={true} />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.threeBox}>
                            <Image src={ThreeImg.src} alt="Three Box Image" fill />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.threeBox}>
                            <h4>List-Based Overviews</h4>
                            <p>Provide structured, valuable lists (e.g., top tools, best tips) that AI can pull directly into its response summaries.</p>
                            <CommonBtn txt="Book Consultation Call" ArrowBtn={true} SimpleBtn={true} FlexStart={true} />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default ThreeBox
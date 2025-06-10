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
                        <h2>What is Answer Engine Optimization?</h2>
                    </Col>
                    <Col md={4}>
                        <div className={styles.threeBox}>
                            <h4>Lorem ipsum dolor sit</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
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
                            <h4>Lorem ipsum dolor sit</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <CommonBtn txt="Book Consultation Call" ArrowBtn={true} SimpleBtn={true} FlexStart={true} />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default ThreeBox
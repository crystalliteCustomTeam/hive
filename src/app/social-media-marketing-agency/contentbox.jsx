import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/smm1/contentbox.module.scss"
import Image from "next/image"
import IMG from "media/landing/smm1/textImage.webp"

const ContentBox = () => {
    return (
        <section className={`${styles.contentBoxSection} pt-100`}>
            <Container className={`${styles.boxContainer} h-100`}>
                <Row className="h-100">
                    <Col md={12} lg={12} className="my-auto">
                        <div className={styles.contentMain}>
                            <div className={styles.contentBox}>
                                <h2>A Social Media Marketing Agency<br />
                                    That Knows How to Break the Algorithm.
                                </h2>
                                <p>Your brand is tired of being ghosted by algorithms and ignored by customers.<br />
                                    It needs a social media marketing agency that actually gets how to break through the noise.<br />
                                    We don’t do basic. We do bold, data-driven, and profit-focused social media that makes your competitors sweat.
                                </p>
                            </div>
                            <div className={styles.contentBoxImg}>
                                <Image src={IMG.src} alt="Digital Era Now" width={550} height={670} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentBox
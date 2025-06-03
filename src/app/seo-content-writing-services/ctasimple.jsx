import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/content/ctasimple.module.scss"
import ContactFrom from "@/src/app/components/contactfrom"
import imgSrc from "media/landing/content/cta.webp"


const CtaSimple = () => {
    return (
        <section className={`${styles.simpleCtaSection} pt-100`} >
            <Container className={styles.containerbg} style={{ backgroundImage: `url(${imgSrc.src})` }} >
                <Row>
                    <Col sx={12} md={10} lg={8} className="m-auto">
                        <div className={styles.simpleBox}>
                            <h2>Great brands deserve great content.<br />
                                Let us write yours!
                            </h2>
                            <ContactFrom bgBlack="no" SeoPages={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default CtaSimple

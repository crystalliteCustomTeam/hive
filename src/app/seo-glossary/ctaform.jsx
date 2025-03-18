import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/seo-glossary/contactsec.module.scss"
import ContactFrom from "@/src/app/components/contactfrom"
import BgImg from "media/seo/ctaImage.webp"

const CTAFrom = ({tit}) => {
    return (
        <section className={styles.contactSection}>
            <Container className={styles.BgImage} style={{ backgroundImage: `url(${BgImg.src})` }}>
                <Row>
                    <Col md={12} lg={11} className="m-auto">
                        <div className={styles.formContainer} >
                            <h2>{tit}</h2>
                            <ContactFrom vertical={true} glossary={true} title="Submit" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CTAFrom

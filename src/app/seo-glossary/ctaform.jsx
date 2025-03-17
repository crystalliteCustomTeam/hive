import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/seo-glossary/contactsec.module.scss"
import ContactFrom from "@/src/app/components/contactfrom"

const CTAFrom = () => {
    return (
        <section className={styles.contactSection}>
            <Container>
                <Row>
                    <Col md={12} lg={10} className="m-auto">
                        <div className={styles.formContainer}>
                            <h4>Sales are low? Watch them grow!</h4>
                            <ContactFrom vertical={true} smmPage={true} title="Let’s Connect" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CTAFrom

import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/gmb/contactsec.module.scss"
import ContactFrom from "@/src/app/components/contactfrom"

const ContactSection = () => {
    return (
        <section className={`${styles.contactSection} pt-100`}>
            <Container>
                <Row>
                    <Col md={10} lg={6} className="m-auto">
                        <div className={styles.formContainer}>
                            <h4>Don’t Be Shy, Say Hi!</h4>
                            <p>Jumpto1 Social Media Marketing means more traffic, more calls and more sales! We offer data</p>
                            <ContactFrom removebg={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContactSection

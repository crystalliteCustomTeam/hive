import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/gmb/contactsec.module.scss"
import ContactFrom from "@/src/app/components/contactfrom"

const ContactSection = () => {
    return (
        <section className={`${styles.contactSection} pt-100`}>
            <Container>
                <Row>
                    <Col xs={12} md={10} lg={7} xl={7} className="m-auto">
                        <div className={styles.formContainer}>
                            <h4>Own the Map Pack with<br />
                                Our GMB Ranking Service!
                            </h4>
                            <p>From invisible to unmissable, Infiniti Digital makes it possible.</p>
                            <ContactFrom removebg={true} extra="Stay on top of Google Maps with our expert GMB management service." />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContactSection

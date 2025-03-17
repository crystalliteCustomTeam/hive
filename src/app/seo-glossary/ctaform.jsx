import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/seo-glossary/contactsec.module.scss"
import ContactFrom from "@/src/app/components/contactfrom"

const CTAFrom = () => {
    return (
        <section className={styles.contactSection}>
            <Container>
                <Row>
                    <Col md={12} lg={11} className="m-auto">
                        <div className={styles.formContainer}>
                            <h2>SEO is the Cheat Code, Sign Up to Unlock It!</h2>
                            <ContactFrom vertical={true} glossary={true} title="Let’s Connect" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CTAFrom

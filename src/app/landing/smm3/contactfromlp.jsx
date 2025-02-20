import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/smm3/contactsec.module.scss"
import ContactFrom from "@/src/app/components/contactfrom"

const Contactfromlp = () => {
    return (
        <section className={styles.contactSection}>
            <Container>
                <Row>
                    <Col md={12} lg={10} className="m-auto">
                        <div className={styles.formContainer}>
                            <h4>Don’t Be Shy, Say Hi!</h4>
                            <ContactFrom vertical={true} smmPage={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contactfromlp

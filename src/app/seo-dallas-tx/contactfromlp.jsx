import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/location/contactsec.module.scss"
import ContactFrom from "@/src/app/components/contactfrom"
import IMG from "media/location/bgBlue.webp";

const Contactfromlp = ({location}) => {
    return (
        <section className={`pt-100 ${styles.contactSection} ${location ? styles.locationSec : ""}`}>
            <Container>
                <Row>
                    <Col md={12} lg={10} className="m-auto">
                        <div className={styles.formContainer} style={{ backgroundImage: `url(${IMG.src})` }}>
                            <h4>From search to sale, we never fail!</h4>
                            <ContactFrom  locationPage={true} title="Let’s Connect"  location={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contactfromlp

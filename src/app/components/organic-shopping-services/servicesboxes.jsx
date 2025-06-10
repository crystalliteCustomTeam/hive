
import styles from "@/styles/components/organic-shopping-services/servicesBoxes.module.scss"
import { Col, Container, Row } from 'react-bootstrap'


const ServicesBoxes = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.innerServicesSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <h2>{data.title}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.innerServicesBox}>
                            {data.innerServItem.map((item, index) => (
                                <div className={styles.innerServicesItem} key={index}>
                                    <h4>{item.title}</h4>
                                    <p>{item.txt}</p>
                                    <div className={styles.pointNumber}>0{index + 1}</div>
                                </div>
                            ))}

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ServicesBoxes
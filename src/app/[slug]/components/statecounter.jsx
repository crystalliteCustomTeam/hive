
import styles from "@/styles/inner-services/statecount.module.scss"
import { Col, Container, Row } from 'react-bootstrap'


const StateCount = ({ stateCounter }) => {
    return (
        <section className={`mb-5 ${styles.stateCountSection}`}>
            <Container>
                <Row>
                    {stateCounter.map((item, index) => (
                        <Col sm={6} md={3} key={index}>
                            <div className={styles.stateCountItem}>
                                {item.numbers}
                                <div className={styles.title}>{item.namee}</div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default StateCount
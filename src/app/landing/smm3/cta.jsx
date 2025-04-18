import styles from "@/styles/landing/components/smm3/cta.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import CommonBtn from "@/src/app/components/common/commonbtn"

const CTA = ({ data }) => {
    return (
        <section className={`${styles.ctaSection}`} style={{ backgroundImage: `url(${data.img})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xs={12} md={9} lg={8} >
                        <div className={`${styles.ctaTitle}`}>
                            <h2>{data.title}</h2>
                            <p>{data.txt}</p>
                            <CommonBtn txt="Schedule a Free Consultation" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CTA
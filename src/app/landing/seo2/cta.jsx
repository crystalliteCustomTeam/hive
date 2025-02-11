import styles from "@/styles/landing/components/seo2/cta.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import CommonBtn from "@/src/app/components/common/commonbtn"

const CTA = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.ctaSection}`}>
            <Container className={`h-100 ${styles.ImageGB} `} style={{ backgroundImage: `url(${data.img})` }}>
                <Row className="h-100">
                    <Col md={8} lg={6} className="my-auto">
                        <div className={`${styles.ctaTitle}`}>
                            <h2>{data.title}</h2>
                            <CommonBtn txt="Get Free Consultation" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CTA
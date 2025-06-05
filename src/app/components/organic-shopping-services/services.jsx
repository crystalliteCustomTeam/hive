import styles from "@/styles/components/organic-shopping-services/services.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import CommonBtn from "@/src/app/components/common/commonbtn"

const Services = ({ data, greenbg, center }) => {
    return (
        <section className={`pt-100 ${styles.servicesSection}`}>
            <Container>
                <Row>
                    <Col md={center ? 10 : 7} className={center ? "text-center m-auto" : ""}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                    <Col md={12}>
                        <div className={styles.servicesContainer}>
                            {data.ServicesItem.map((item, index) => (
                                <div className={styles.servicesMainItem} key={index}>
                                    <div className={styles.servicesMainImage}>
                                        <div className={styles.title}>{item.title}</div>
                                        <div className={styles.barLine}></div>
                                        <div className={styles.readMore}>
                                            <CommonBtn txt="Contact Us" ArrowBtn={true} SimpleBtn={true} SeoPages={data.SeoPages} />
                                        </div>
                                        <div className={styles.btnReaMore}>
                                            <CommonBtn txt="" ArrowBtn={true} SeoPages={data.SeoPages} />
                                        </div>
                                        <p>{item.txt}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default Services
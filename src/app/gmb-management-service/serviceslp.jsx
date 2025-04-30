"use client";
import styles from "@/styles/landing/components/seo3/serviceslp.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import CommonBtn from "@/src/app/components/common/commonbtn"


const ServicesLp = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.landingServices} `}>
            <Container>
                <Row>
                    <Col md={10} lg={8} className="m-auto text-center">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                    <Col md={12}>
                        <div className={styles.landingServicesContainer}>
                            {data.ServicesItem.map((item, index) => (
                                <div className={styles.landingServicesItem} key={index}>
                                    <div className={styles.icon}>
                                        {item.icon}
                                    </div>
                                    <div className={styles.title}>{item.title}</div>
                                    <div className={styles.barLine}></div>
                                    <div className={styles.readMore}>
                                        <CommonBtn txt="Let’s talk" ArrowBtn={true} SimpleBtn={true} />
                                    </div>
                                    <div className={styles.btnReaMore}>
                                        <CommonBtn txt="" ArrowBtn={true} />
                                    </div>
                                    <div>{item.txt}</div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-3">
                            <CommonBtn txt="Click To Grow" center={true} LiveChat={true} BgBlack={true} />
                        </div>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default ServicesLp
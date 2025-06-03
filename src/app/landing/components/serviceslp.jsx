"use client";
import styles from "@/styles/landing/components/serviceslp.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import CommonBtn from "@/src/app/components/common/commonbtn"


const ServicesLp = ({ data, heigthSmall, round, mainbtn }) => {
    return (
        <section className={`pt-100 ${styles.servicesLpSection} ${heigthSmall ? styles.heigthSmall : ""} ${round ? styles.roundBorder : ""}`} id="ServicesId">
            <Container>
                <Row>
                    <Col md={10} lg={8} className="m-auto text-center">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                    <Col md={12}>
                        <div className={styles.servicesLpContainer}>
                            {data.ServicesItem.map((item, index) => (
                                <div className={styles.servicesLpItem} key={index}>
                                    <div className={styles.servicesLpImage}>
                                        <div className={styles.title}>{item.title}</div>
                                        <div className={styles.barLine}></div>
                                        <div className={styles.readMore}>
                                            <CommonBtn txt="Let’s talk" ArrowBtn={true} SimpleBtn={true} SeoPages={data.SeoPages} />
                                        </div>
                                        <div className={styles.btnReaMore}>
                                            <CommonBtn txt="" ArrowBtn={true} SeoPages={data.SeoPages} />
                                        </div>
                                        <div>{item.txt}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {mainbtn ?
                            <div className="text-center mt-4">
                                <CommonBtn txt={mainbtn} center={true} />
                            </div>
                            : ""
                        }
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default ServicesLp
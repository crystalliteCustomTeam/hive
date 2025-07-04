"use client";
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/seo1/serviceslp.module.scss"
import CommonBtn from "@/src/app/components/common/commonbtn"
import ServicesImg from "media/landing/seo1/servicesbg.webp"

const ServicesLP = ({ data, bg, marginlp }) => {
    // Chat Code
    const openChat = () => {
        if (window.LC_API) {
            window.LC_API.open_chat_window();
        } else {
            console.error("LiveChat API is not loaded");
        }
    };
    return (
        <section
            className={`pt-100 ${styles.servicesLPSec} ${bg ? styles.noBg : ""}`}
            style={{
                ...(bg ? {} : { backgroundImage: `url(${ServicesImg.src})` }),
                ...(marginlp ? { margin: "0px" } : {}),
            }}
        >
            <Container>
                <Row>
                    <Col md={8} className="m-auto text-center">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.txt}</p>
                    </Col>
                    <Col md={12}>
                        <div className={styles.servicesBox}>
                            {data.LPServicesItem.map((item, index) => (
                                <div className={styles.servicesItem} key={index}>
                                    <h5>{item.title}</h5>
                                    <p>{item.txt}</p>
                                    <div className={styles.readMore}>
                                        <div
                                            className="commonBtnSimple"
                                            onClick={openChat}
                                        >
                                            Live Chat
                                        </div>
                                        {/* <CommonBtn txt={item?.btntxt ? item?.btntxt : "Live Chat"} ArrowBtn={true} SimpleBtn={true} SeoPages={data.SeoPages} /> */}
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

export default ServicesLP
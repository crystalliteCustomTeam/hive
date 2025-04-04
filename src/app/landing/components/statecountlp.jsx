
'use client';
import styles from "@/styles/inner-services/statecount.module.scss"
import Image from "next/image"
import { Col, Container, Row } from 'react-bootstrap'
import CommonBtn from "@/src/app/components/common/commonbtn"
import Link from "next/link"

const StateCountLP = ({ data, video, alternet, height, coloum, round, nostate, price }) => {
    // Chat Code
    const openChat = () => {
        if (window.LC_API) {
            window.LC_API.open_chat_window();
        } else {
            console.error('LiveChat API is not loaded');
        }
    };
    return (
        <section className={`pt-100 ${styles.stateCountSection} ${nostate ? styles.noState : ""} ${video ? styles.videoSection : ""} ${round ? styles.borderRound : ""}`} id="AboutId">
            <Container>
                <Row className={styles.stateCountLp}>
                    <Col md={6} className="my-auto">
                        {data.subtitle ? <div className="subtitle">{data.subtitle}</div> : ""}
                        <h2>{data.title}</h2>
                        <div>{data.desc}</div>
                        {price ?
                            <div className={styles.btnFlex}>
                                <Link href="#PricingId" className={styles.btnStyle}>Our Affordable SEO Packages</Link>
                                <div className={styles.chatStyle} onClick={openChat}>Live Chat</div>
                            </div>
                            :
                            <CommonBtn txt={data?.btntxt ? data?.btntxt : "Book a Free Consultation"} LiveChat={true} BgBlack={true} />
                        }
                    </Col>
                    <Col md={6} className={nostate ? "p-0" : ""}>
                        <div className={`${styles.contuerImg} ${height ? styles.heightImg : ""}`}>
                            {video ?
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    preload="auto"
                                    aria-label="Background video"
                                    className={styles.contuerVideo}
                                    loading="eager"
                                    poster={data.img}
                                >
                                    <source src={data.video} type="video/mp4" />
                                </video>
                                :
                                <Image src={data.img} alt="Contact Image" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            }
                        </div>
                    </Col>
                </Row>
                {(!video || !nostate) && Array.isArray(data.stateItem) && data.stateItem.length > 0 ? (
                    <Row>
                        {data.stateItem.map((item, index) => (
                            <Col sm={6} md={coloum === "yes" ? 4 : 3} key={index}>
                                <div className={styles.stateCountItem}>
                                    {item.numbers}
                                    <div className={styles.title}>{item.namee}</div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                ) : null}
            </Container>
        </section>
    )
}

export default StateCountLP
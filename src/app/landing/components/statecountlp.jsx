
import styles from "@/styles/inner-services/statecount.module.scss"
import Image from "next/image"
import { Col, Container, Row } from 'react-bootstrap'
import CommonBtn from "@/src/app/components/common/commonbtn"

const StateCountLP = ({ data, video, alternet, height, coloum, round, nostate }) => {
    return (
        <section className={`pt-100 ${styles.stateCountSection} ${nostate ? styles.noState : ""} ${video ? styles.videoSection : ""} ${round ? styles.borderRound : ""}`} id="AboutId">
            <Container>
                <Row className={styles.stateCountLp}>
                    <Col md={6} className="my-auto">
                        {data.subtitle ? <div className="subtitle">{data.subtitle}</div> : ""}
                        <h2>{data.title}</h2>
                        <div>{data.desc}</div>
                        <CommonBtn txt={data?.btntxt ? data?.btntxt : "Book a Free Consultation"} LiveChat={true} BgBlack={true} />
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
                                <Image src={data.img} alt="Contact Image" fill />
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
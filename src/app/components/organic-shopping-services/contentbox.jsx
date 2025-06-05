import styles from "@/styles/components/organic-shopping-services/contentbox.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import CommonBtn from "@/src/app/components/common/commonbtn";
import Image from "next/image";


const ContentBox = ({ data }) => {
    return (
        <section className={`${styles.contentBox} p-100`}>
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        <div className={styles.contentImage}>
                            <Image src={data.image} alt={data.title} fill />
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                        <ul className={styles.contentList}>
                            {data.contentItem.map((item, index) => (
                                <li key={index} className={styles.contentItem}>
                                    <h5>{item.title}</h5>
                                    <p>{item.txt}</p>
                                </li>
                            ))}
                        </ul>
                        <CommonBtn txt={data.txt ? data.txt : "Get A Free Consultation"} LiveChat={true} BgBlack={true} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentBox
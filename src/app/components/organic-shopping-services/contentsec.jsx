import styles from "@/styles/components/organic-shopping-services/contentSec.module.scss";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import CommonBtn from "@/src/app/components/common/commonbtn";


const ContentSec = ({ data, marginTop }) => {
    return (
        <section className={`${styles.contentSec} ${marginTop ? styles.marginTop100 : ""} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6}>
                        <h2>{data.title}</h2>
                        <div className={styles.contentBox}>{data.desc}</div>
                        <CommonBtn txt={data.txt ? data.txt : "Get A Free Consultation"} LiveChat={true} BgBlack={true} />
                    </Col>
                    <Col md={6}>
                        <div className={styles.contentImage}>
                            <Image src={data.image} alt="Content Image" fill />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentSec
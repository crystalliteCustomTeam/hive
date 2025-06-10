import styles from "@/styles/components/organic-shopping-services/contentSec.module.scss";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import CommonBtn from "@/src/app/components/common/commonbtn";


const ContentSec = ({ data, marginTop, alternet, nobg }) => {
    return (
        <section className={`${styles.contentSec} ${nobg ? styles.noBg : ""} ${alternet ? styles.alternetBg : ""} ${marginTop ? styles.marginTop100 : ""} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} className={alternet ? "order-2" : ""}>
                        <h2>{data.title}</h2>
                        <div className={styles.contentBox}>{data.desc}</div>
                        <CommonBtn txt={data.txt ? data.txt : "Get A Free Consultation"} LiveChat={true} BgBlack={true} />
                    </Col>
                    <Col md={6} className={alternet ? "order-1" : ""}>
                        <div className={`${styles.contentImage} ${alternet ? styles.alternetImg : ""}`}>
                            <Image src={data.image} alt="Content Image" fill />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentSec
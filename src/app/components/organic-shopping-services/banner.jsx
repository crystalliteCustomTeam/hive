import styles from "@/styles/components/organic-shopping-services/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import CommonBtn from "@/src/app/components/common/commonbtn";
import Clients from "@/src/app/home/clients";
import { ClientImages } from "@/src/app/home/data/data";


const Banner = ({ data }) => {
    return (
        <section className={styles.bannerSection} style={{ backgroundImage: `url(${data.img})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={8} md={10} sm={12} className="my-auto">
                        <div className={styles.bannerContent}>
                            <h1>{data.title}</h1>
                            <p>{data.desc}</p>
                            <CommonBtn txt="Book a Free Consultation" LinkBtn={data.link} />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Clients data={ClientImages} />
        </section>
    )
}

export default Banner
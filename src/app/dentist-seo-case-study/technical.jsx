import styles from "@/styles/casestudies/technical.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const Technical = ({ data, alternet }) => {
  return (
    <section className={styles.technicalSection}>
      <Container className={`${styles.customContainer}`}>
        <Row>
          <Col md={6} className={`${alternet ? "order-md-2" : ""}`}>
            <div className={styles.technicalImg}>
              <Image src={data.Image} fill alt={data.title} />
            </div>
          </Col>
          <Col md={6} className={`${alternet ? "order-md-1" : ""}`}>
            <div className={`${alternet ? "ps-0 pe-lp-5" : ""} ${styles.technicalContent}`}>
              <h2>{data.title}</h2>
              <div className={styles.contentPara}>{data.txt}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Technical;

import styles from "@/styles/casestudies/technical.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const Technical = ({ data }) => {
  return (
    <section className={styles.technicalSection}>
      <Container className={`h-100 ${styles.customContainer}`}>
        <Row className="h-100">
          <Col md={6} className="my-auto">
            <div className={styles.technicalImg}>
              <Image src={data.Image} fill alt={data.title} />
            </div>
          </Col>
          <Col md={6} className="my-auto">
            <div className={styles.technicalContent}>
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

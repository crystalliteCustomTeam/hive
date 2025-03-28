import styles from "@/styles/casestudies/dominate.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Dominate = ({ data }) => {
  return (
    <section className={styles.bannerDominate}>
      <Container className={`h-100 ${styles.customContainer}`}>
        <Row className="h-100">
          <Col md={10} className="m-auto text-center">
            <h2>{data.title}</h2>
            <div className={styles.txtPara}>{data.txt}</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Dominate;

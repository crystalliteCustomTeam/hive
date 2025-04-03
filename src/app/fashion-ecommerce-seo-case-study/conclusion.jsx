import styles from "@/styles/casestudies/conclusion.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Conclusion = ({ data,PopupStyle }) => {
  return (
    <section className={`${styles.bannerConclusion} ${PopupStyle ? styles.PopupConclusion : ""}`}>
      <Container
        className={styles.customContainer}
        style={{
          backgroundImage: data.Image ? `url(${data.Image})` : "none",
        }}
      >
        <Row>
          <Col md={12} className="m-auto text-center">
            <div className={styles.contentConclusion}>{data.txt}</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Conclusion;

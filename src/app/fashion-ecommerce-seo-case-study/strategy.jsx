import styles from "@/styles/casestudies/strategy.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Strategy = ({ data, Overlay, bgBlack, Normal,PopupStyle }) => {
  return (
    <section
      className={`${styles.strategySection} 
      ${Overlay ? "" : styles.OverlaySec} 
      ${bgBlack ? styles.bgBlack : ""}
      ${Normal ? styles.Normalstyle : ""}
      ${PopupStyle ? styles.PopupStrategy : ""}
      `}
      style={{
        backgroundImage: data.bgImage ? `url(${data.bgImage})` : "none",
      }}
    >
      <Container className={`h-100 ${styles.customContainer}`}>
        <Row className="h-100">
          <Col md={10} className="m-auto text-center">
            <div className={styles.strategyContent}>
              <h2>{data.title}</h2>
              <div className={styles.contentPara}>{data.txt}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Strategy;

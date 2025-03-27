import styles from "@/styles/casestudies/result.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const Results = ({ data }) => {
  return (
    <section className={styles.resultsSection}>
      <Container className={styles.customContainer}>
        <Row>
          <Col md={12}>
            <h2>{data.title}</h2>
            <div className={styles.resultsImg}>
              <Image src={data.Image} fill alt={data.title} />
            </div>
            {data.subheading ? (
              <div className={styles.subheading}>{data.subheading}</div>
            ) : (
              ""
            )}
            <div className={styles.resultsPara}>{data.txt}</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Results;

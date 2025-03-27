import styles from "@/styles/casestudies/features.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const Features = ({ data }) => {
  return (
    <section className={styles.featuresSection}>
      <Container className={styles.customContainer}>
        <Row>
          <Col md={12}>
            <h2>{data.title}</h2>
            <div className={styles.featuresImg}>
              <Image src={data.Image} fill alt={data.title} />
            </div>
            {data.subheading ? (
              <div className={styles.subheading}>{data.subheading}</div>
            ) : (
              ""
            )}
            <div className={styles.contentPara}>{data.txt}</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;

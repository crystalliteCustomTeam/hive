import styles from "@/styles/casestudies/features.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const Features = ({ data,PopupStyle }) => {
  return (
    <section className={`${styles.featuresSection} ${PopupStyle ? styles.PopupFeatures : ""}`}>
      <Container className={styles.customContainer}>
        <Row>
          <Col md={12}>
            <h2>{data.title}</h2>
            {data.Image ? (
              <div className={styles.featuresImg}>
                <Image src={data.Image} width={1250} height={500} alt={data.title} />
              </div>
            ) : (
              ""
            )}
            {data.subheading ? (
              <div className={styles.subheading}>{data.subheading}</div>
            ) : (
              ""
            )}
            <div className={styles.contentPara}>{data.txt}</div>
            {data.Image01 ? (
              <div className={styles.featuresImg}>
                <Image src={data.Image01} width={1250} height={500} alt={data.title} />
              </div>
            ) : (
              ""
            )}
            {data.txt1 ? (
              <div className={styles.contentPara}>{data.txt1}</div>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;

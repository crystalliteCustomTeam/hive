import styles from "@/styles/casestudies/overview.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const OverView = ({ data, NoImg ,PopupStyle}) => {
  return (
    <section className={`${styles.overViewSection} ${data.title === "" ? styles.nodata : ""} ${PopupStyle ? styles.PopupOverview :""}`}>
      <Container className={styles.customContainer}>
        <Row>
          <Col md={NoImg ? 12 : 6}>
            <h2>{data.title}</h2>
            <div className={styles.subheading}>{data.subheading}</div>
            <div className={styles.contentPara}>{data.txt}</div>
          </Col>
          {NoImg ? (
            ""
          ) : (
            <Col md={6}>
              <div className={styles.overViewImg}>
                <Image src={data.Img} fill alt={data.title} />
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default OverView;

import styles from "@/styles/casestudies/overviewalternaet.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const Overview = ({ data,NoBordre }) => {
  return (
    <section className={`${styles.overViewSection} ${NoBordre ? styles.NoBordre : ""}`}>
      <Container className={`${styles.customContainer} h-100`}>
        {data.map((item, index) => (
          <Row
            key={index}
            className={`${
              index % 2 === 0 ? styles.normalRow : styles.reversedRow
            } h-100`}
          >
            {index % 2 === 0 ? (
              <>
                <Col md={6} className="my-auto">
                  <h2>{item.title}</h2>
                  <div className={styles.subheading}>{item.subheading}</div>
                  <div className={styles.contentPara}>{item.txt}</div>
                </Col>
                <Col md={6} className="my-auto">
                  <div className={styles.overViewImg}>
                    <Image src={item.Img} fill alt={item.title} />
                  </div>
                </Col>
              </>
            ) : (
              <>
                <Col md={6} className="order-md-2 my-auto">
                  <h2>{item.title}</h2>
                  <div className={styles.subheading}>{item.subheading}</div>
                  <div className={styles.contentPara}>{item.txt}</div>
                </Col>
                <Col md={6} className="order-md-1 my-auto">
                  <div className={styles.overViewImg}>
                    <Image src={item.Img} fill alt={item.title} />
                  </div>
                </Col>
              </>
            )}
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default Overview;

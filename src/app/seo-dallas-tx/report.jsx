import styles from "@/styles/location/reports.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";


const ReportSec = ({data}) => {
  return (
    <section className={`${styles.reportSection} p-100`}>
      <Container>
        <Row>
          <Col md={6} lg={6}>
            <h2>{data.title}</h2>
            <p>
            {data.txt}
            </p>
            <div className={styles.contactImg}>
              <Image src={data.img} width={1409} height={867} alt="Seo Dallar" />
            </div>
          </Col>
          <Col
            md={6}
            lg={5}
            xl={5}
            xxl={5}
            className="offset-lg-1 offset-xxl-1"
          >
            <ul className={styles.reportPoints}>
              {data.ReportItem.map((item, index) => (
                <li key={index}>
                  <div className={styles.mainBox}>
                    <div className={styles.number}>0{index + 1}</div>
                    <h4>{item.title}</h4>
                    <p>{item.txt}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ReportSec;

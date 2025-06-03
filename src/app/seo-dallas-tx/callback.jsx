import styles from "@/styles/location/callback.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import CommonBtn from "@/src/app/components/common/commonbtn";
import ContactFrom from "../components/contactfrom";

const CallBack = ({ data }) => {
  return (
    <section className={styles.callBackSection}>
      <Container className="h-100">
        <Row className="h-100">
          <Col md={12} lg={6} className="my-auto">
            <div className={styles.callBackBox1}>
              <div className="subtitle">{data.subtitle1}</div>
              <h2>{data.title1}</h2>
              <p>{data.txt1}</p>
              <CommonBtn txt="Connect with us" LiveChat={true} BgBlack={true} SeoPages={data.SeoPages} />
            </div>
          </Col>
          <Col md={12} lg={6} className="my-auto">
            <div className={styles.callBackBox2}>
              <div className="subtitle blackColor">
                {data.subtitle2}
              </div>
              <h2>{data.title2}</h2>
              <ContactFrom location={true} title="Get a Free Consultation" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallBack;

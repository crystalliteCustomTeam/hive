import styles from "@/styles/location/callback.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import CommonBtn from "@/src/app/components/common/commonbtn";
import ContactFrom from "../components/contactfrom";

const CallBack = () => {
  return (
    <section className={styles.callBackSection}>
      <Container className="h-100">
        <Row className="h-100">
          <Col md={12} lg={6} className="my-auto">
            <div className={styles.callBackBox1}>
              <div className="subtitle">REQUEST A CALL BACK</div>
              <h2>Rank Your Website At the Top</h2>
              <p>
                Jumpto1 Social Media Marketing means more traffic, more calls
                and more sales!
              </p>
              <CommonBtn txt="Get Your Qoute" LiveChat={true} BgBlack={true} />
            </div>
          </Col>
          <Col md={12} lg={6} className="my-auto">
            <div className={styles.callBackBox2}>
              <div className="subtitle blackColor">Improve Search Rankings</div>
              <h2>Enhance Your Sales</h2>
              <ContactFrom location={true} title="Click To Grow" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallBack;

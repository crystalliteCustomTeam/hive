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
              <div className="subtitle">Request A Free Quote</div>
              <h2>
                Google Ain’t Santa
                <br />
                It Won’t Just Gift You Traffic.
              </h2>
              <p>
                Your competitors love that you haven’t hired an SEO company in
                Dallas…Yet.
              </p>
              <CommonBtn txt="Connect with us" LiveChat={true} BgBlack={true} />
            </div>
          </Col>
          <Col md={12} lg={6} className="my-auto">
            <div className={styles.callBackBox2}>
              <div className="subtitle blackColor">What’s Your Business Goal? </div>
              <h2>Let’s Rank for It.</h2>
              <ContactFrom location={true} title="Get a Free Consultation" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallBack;

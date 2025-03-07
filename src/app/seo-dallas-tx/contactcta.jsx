import styles from "@/styles/location/contentpage.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import ContactFrom from "@/src/app/components/contactfrom";
import Image from "next/image";
import IMG from "media/location/menImg.webp";
import CommonBtn from "@/src/app/components/common/commonbtn";

const ContactCta = () => {
  return (
    <section className={`${styles.contactCtaSection} p-100`}>
      <Container className="h-100">
        <Row className="h-100">
          <Col md={6} className="my-auto">
            <div className={styles.contactBox}>
              <h2>Don’t Be Shy, Say Hi!</h2>
              <p>
                Jumpto1 Social Media Marketing means more traffic, more calls
                and more sales! We offer data
              </p>
              <ContactFrom bg="no" />
            </div>
          </Col>
          <Col md={6} className="my-auto">
            <div className={`${styles.contactBox} ${styles.last}`}>
              <div className="subtitle">REQUEST A CALL BACK</div>
              <h3>Rank Your Website At the Top</h3>
              <p>
                Jumpto1 Social Media Marketing means more traffic, more calls
                and more sales!
              </p>
              <CommonBtn txt="Get Your Qoute" LiveChat={true} BgBlack={true} />
              <div className={styles.contactImg}>
                <Image
                  src={IMG.src}
                  width={1094}
                  height={1094}
                  alt="Seo Dallar"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactCta;

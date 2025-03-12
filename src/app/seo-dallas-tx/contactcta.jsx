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
              <h2>Don’t be Shy, Say Hi!</h2>
              <p>
                Get SEO service in Dallas and start dominating search results.
                Reach out now!
              </p>
              <ContactFrom bg="no" />
            </div>
          </Col>
          <Col md={6} className="my-auto">
            <div className={`${styles.contactBox} ${styles.last}`}>
              <div className="subtitle">Request A Free Quote</div>
              <h3>Let’s Rank Your Website #1</h3>
              <p>Dominate search results with seo in Dallas.</p>
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

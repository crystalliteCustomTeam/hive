import styles from "@/styles/location/contentpage.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import ContactFrom from "@/src/app/components/contactfrom";
import Image from "next/image";
import IMG from "media/location/menImg.webp";
import CommonBtn from "@/src/app/components/common/commonbtn";

const ContactCta = ({data}) => {
  return (
    <section className={`${styles.contactCtaSection} p-100`}>
      <Container className="h-100">
        <Row className="h-100">
          <Col md={6} className="my-auto">
            <div className={styles.contactBox}>
              <h2>{data.title}</h2>
              <p>
              {data.txt}
              </p>
              <ContactFrom bg="no" />
            </div>
          </Col>
          <Col md={6} className="my-auto">
            <div className={`${styles.contactBox} ${styles.last}`}>
              <div className="subtitle">{data.subtitle}</div>
              <h3> {data.title1}</h3>
              <p>{data.txt1}</p>
              <CommonBtn txt="Get Your Quote" LiveChat={true} BgBlack={true} />
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

import styles from "@/styles/location/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import CommonBtn from "@/src/app/components/common/commonbtn";
import Image from "next/image";
import IMG from "media/location/bannerImg.webp";

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
      <Container className="h-100">
        <Row className="h-100">
          <Col md={6} className="my-auto">
            <div className="subtitle">More Clicks, Calls, and Customers.</div>
            <h1>
              Dallas SEO Service
              <br />
              That Helps You
              <br />
              Rank Higher and Make $$$
            </h1>
            <p>
            We help businesses rank on Page 1, on Google search results. Our SEO service in Dallas improves rankings, drives traffic, and increases conversions. Let’s grow your business together.
            </p>
            <CommonBtn txt="Connect with us" LiveChat={true} BgBlack={true} />
          </Col>
          <Col md={6} className="my-auto text-center">
            <Image
              src={IMG.src}
              width={1878}
              height={1782}
              alt="Seo Dallar Tx"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;

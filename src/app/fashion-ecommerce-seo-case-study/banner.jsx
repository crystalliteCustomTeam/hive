import styles from "@/styles/casestudies/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Banner = ({ data }) => {
  return (
    <section
      className={styles.bannerCaseStudy}
      style={{
        backgroundImage: data.BannerPoster
          ? `url(${data.BannerPoster})`
          : "none",
      }}
    >
      <Container className="h-100">
        <Row className="h-100">
          <Col md={10} lg={9} xl={8} className="m-auto">
            <h1>{data.title}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;

import styles from "@/styles/location/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import CommonBtn from "@/src/app/components/common/commonbtn";
import Image from "next/image";
import IMG from "media/location/bannerImg.webp";

const Banner = ({data}) => {
  return (
    <section className={styles.bannerSection}>
      <Container className="h-100">
        <Row className="h-100">
          <Col md={6} lg={7} className="my-auto">
            <div className="subtitle">{data.subtitle}</div>
            <h1>
            {data.title}
            </h1>
            <p>
              {data.desc}
            </p>
            <CommonBtn txt={data.btntxt} LiveChat={true} BgBlack={true} />
          </Col>
          <Col md={6} lg={5} className="my-auto text-center">
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

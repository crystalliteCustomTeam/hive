import styles from "@/styles/location/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import CommonBtn from "@/src/app/components/common/commonbtn";
import Image from "next/image";
import BanenrImg from "media/location/bannerImg.webp";


const Banner = ({ data }) => {
  return (
    <section className={styles.bannerSection}>
      <Container className="h-100">
        <Row className="h-100">
          <Col md={6} lg={7} className="my-auto">
            <div className="subtitle">{data.subtitle}</div>
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
            <CommonBtn txt={data.btntxt} BgBlack={true} LinkBtn={data.link} SeoPages={data.SeoPages} />
          </Col>
          <Col md={6} lg={5} className="my-auto text-center">
            <Image src={data.img ? data.img : BanenrImg.src} width={1878} height={1782} alt={data.title} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;

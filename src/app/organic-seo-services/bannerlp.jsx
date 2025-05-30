import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/landing/components/seo1/bannerlp.module.scss";
import CommonBtn from "@/src/app/components/common/commonbtn";
import Image from "next/image";
import BannerImg from "media/landing/seo1/bannerlp.webp";
import bgBanner from "media/landing/seo1/bgBanner.webp";
import ContactFrom from "@/src/app/components/contactfrom";
import StateCount from "@/src/app/components/innerservices/statecount";
import { StateCounterPoints } from "@/src/app/organic-seo-services/data/data";

const Bannerlp = () => {
  return (
    <section
      className={styles.bannerLpSection}
      style={{ backgroundImage: `url(${bgBanner.src})` }}
    >
      <Container>
        <Row>
          <Col md={12} lg={9} className="m-auto text-center">
            <div className={styles.bannerContentSec}>
              <h1>
                Attract the Right Audience <br className="d-none d-md-block" />
                With Our <span className="highlight">Organic SEO Services</span>
              </h1>
              <p>
                We don’t do best practices, we do what works. Our SEO services
                get you ranked, bring real traffic, and leave your competitors
                in the dust. Smart keywords, technical fixes, and strong
                backlinks, that’s how we win.
              </p>
              <div className={styles.btnFlex}>
                <CommonBtn txt="Get a Free Consultation" center={true} BgBlack={true} LinkBtn="https://calendly.com/infinitidigital/free-seo-consultation" />
              </div>
            </div>
          </Col>
          <Col md={12} lg={10} className="m-auto text-center">
            <div className={styles.banenrLogo}>
              <Image
                src={BannerImg.src}
                alt="Banner Logos"
                width={953}
                height={655}
              />
            </div>
            <StateCount
              data={StateCounterPoints}
              landingBanner={true}
              coloum="yes"
              RoundedStyle={true}
            />
          </Col>
          <Col md={12} lg={10} className="m-auto text-center">
            <div className={styles.banneerFrom}>
              <h3>Get A Free SEO Audit</h3>
              <ContactFrom
                vertical={true}
                BlackVertical={true}
                title="Get A Free SEO Audit"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Bannerlp;

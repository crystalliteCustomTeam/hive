"use client";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/seo-agency-new-york/companyinfo.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import IMG01 from "media/location/awards/award01.webp";
import IMG02 from "media/location/awards/award02.webp";
import IMG03 from "media/location/awards/award03.webp";
import IMG04 from "media/location/awards/award04.webp";
import IMG05 from "media/location/awards/award05.webp";
import IMG06 from "media/location/awards/award06.webp";
import IMG07 from "media/location/awards/award07.webp";
import IMG08 from "media/location/awards/award08.webp";
import Image from "next/image";
import BannerPoster from "media/location/companyVideoPoster.webp";

const options = { align: "start", loop: "true" };

export const Awards = [
  {
    AwardsIMG: IMG01.src,
  },
  {
    AwardsIMG: IMG02.src,
  },
  {
    AwardsIMG: IMG03.src,
  },
  {
    AwardsIMG: IMG04.src,
  },
  {
    AwardsIMG: IMG05.src,
  },
  {
    AwardsIMG: IMG06.src,
  },
  {
    AwardsIMG: IMG07.src,
  },
  {
    AwardsIMG: IMG08.src,
  },
];
const CompanyInfo = () => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);
  return (
    <section className={`${styles.companyInfoSection} p-100`}>
      <Container className="h-100">
        <Row className="h-100">
          <Col lg={8} md={12} className="my-auto">
            <div className="subtitle">What Drives Us?</div>
            <h2>A Relentless Obsession With Getting It Right.</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className={styles.companyStats}>
              <div className={styles.statsItem}>
                <div className={styles.txtColor}>5K+</div>
                <span>Brainstorms Held (and counting)</span>
              </div>
              <div className={styles.statsItem}>
                <div className={styles.txtColor}>0%</div>
                <span>
                  Distractions — Because We Only Focus on Your Success
                </span>
              </div>
              <div className={styles.statsItem}>
                <div className={styles.txtColor}>98%</div>
                <span>Clients Recommend Us Without Being Asked</span>
              </div>
              <div className={styles.statsItem}>
                <div className={styles.txtColor}>1M+</div>
                <span>
                  Lines of Code Written With Care (and a Little Caffeine)
                </span>
              </div>
            </div>
          </Col >
          <Col lg={4} md={12}>
            <Image src={BannerPoster.src} alt="Banner Poster" width={532} height={458} />
          </Col>
        </Row >
        <Row>
          <Col md={12}>
            <section className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                  {Awards.map((item, index) => (
                    <div className={styles.embla__slide} key={index}>
                      <div className={styles.awardsImg}>
                        <Image
                          src={item.AwardsIMG}
                          alt="Achieved Logo"
                          width={250}
                          height={250}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Container >

    </section >
  );
};

export default CompanyInfo;

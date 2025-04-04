"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/home/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Clients from "@/src/app/home/clients";
import { ClientImages } from "@/src/app/home/data/data";
import CommonBtn from "@/src/app/components/common/commonbtn";
import Image from "next/image";

const Banner = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowVideo(true); // load video after 1.5s
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className={styles.MainBanner}>
      <Container className="h-100">
        <Row className="h-100">
          <Col md={6} sm={8} className="my-auto">
            <div className={styles.bannerContent}>
              <h1>{data.title}</h1>
              <p>{data.desc}</p>
              <CommonBtn txt="Get A Free Consultation" LiveChat={true} />
            </div>
          </Col>
        </Row>
      </Container>

      {/* ✅ Poster image improves LCP */}
      {!showVideo ? (
        <Image
          src={data.BannerPoster}
          alt="Banner background"
          className={styles.bannerVideo}
          decoding="async"
          loading="lazy"
          fill
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          preload="none"
          aria-label="Background video"
          className={styles.bannerVideo}
          playsInline
          poster={data.BannerPoster}
        >
          <source src={data.video} type="video/mp4" />
        </video>
      )}

      <Clients data={ClientImages} />
    </section>
  );
};

export default Banner;

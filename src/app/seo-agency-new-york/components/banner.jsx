"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/seo-agency-new-york/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import ContactFrom from "@/src/app/components/contactfrom"
import CommonBtn from "@/src/app/components/common/commonbtn";
import Image from "next/image";
import Client01 from "media/location/clients/1.webp";
import Client02 from "media/location/clients/2.webp";
import Client03 from "media/location/clients/3.webp";
import Client04 from "media/location/clients/4.webp";
import { ClutchIcon, StarIconWhite } from "../../app-constants";

const Clients = [Client01, Client02, Client03, Client04];

const Banner = () => {
    const [logos, setLogos] = useState(Clients);
    const [animateIndex, setAnimateIndex] = useState(null);
    const [cycle, setCycle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLogos((prev) => {
                const [first, ...rest] = prev;
                const newArr = [...rest, first];
                setAnimateIndex(newArr.length - 1);
                setCycle((c) => c + 1);

                return newArr;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className={styles.bannerSection}
        // style={{ backgroundImage: `url(${BGIMG.src})` }}
        >
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={7} className="my-auto">
                        <div className={styles.bannerContent}>
                            <div className="subtitle">Top Mobile App Development</div>
                            <h1>Top Mobile App Development Company in New York</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry standard dummy text
                                ever since the 1500s.
                            </p>
                            <CommonBtn txt="Let’s Build Your Dream App!" />

                            <div className={styles.reviewSection}>
                                <div className={styles.clientWrapper}>
                                    {logos.map((client, index) => (
                                        <div
                                            key={`${index}-${cycle}`}
                                            className={`${styles.clientItem} ${index === animateIndex ? styles.enter : ""
                                                }`}
                                        >
                                            <Image
                                                src={client}
                                                alt={`Client ${index + 1}`}
                                                fill
                                                quality={80}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.starWrapper}>
                                    <StarIconWhite /><StarIconWhite /><StarIconWhite /><StarIconWhite /><StarIconWhite />
                                    <div className={styles.txt}>4.8 out of 5 (review rating) Over 1,200+ reviews</div>
                                </div>
                                <div className={styles.clutchWrapper}>
                                    <ClutchIcon />
                                </div>






                            </div>
                        </div>
                    </Col>

                    <Col md={4} className="my-auto ms-auto">
                        <div className={styles.BoxFrom}>
                            <ContactFrom SeoPages={true} locTitle="Book a Free Consultation" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;

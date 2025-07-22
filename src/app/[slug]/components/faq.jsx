"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/single-blog/faqs.module.scss";
import { PlusFaqIcon } from "@/src/app/app-constants";

const Faqs = ({ data, bg }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={`${styles.faqsSection} ${bg ? styles.faqBG : ""} pt-4`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">FAQs</div>

                    </Col>
                    <Col xl={12} lg={12} md={12} >
                        {data.Fqaslist.map((items, index) => (
                            <div className={`${styles.faqsBox} ${activeIndex === index ? styles.active : ""}`} key={index}>
                                <div
                                    className={styles.faqsTitle}
                                    onClick={() => toggleFaq(index)}
                                >
                                    {items.title}
                                    <div className={`${styles.iconBox} ${activeIndex === index ? styles.active : ""}`}>
                                        <PlusFaqIcon />
                                    </div>
                                </div>
                                <div className={styles.faqscontent}>
                                    {items.txt}
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default Faqs;

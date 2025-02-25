"use client"
import { useEffect } from "react";
import styles from "@/styles/landing/components/processlp.module.scss";
import { Col, Container, Row } from "react-bootstrap";



const ProcessLp = ({ data, black, round, marginlp, roundwhite }) => {
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.25
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        const items = document.querySelectorAll(`.${styles.itemBox}`);
        items.forEach(item => {
            observer.observe(item);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className={`pt-100 ${styles.processLpSec} ${roundwhite ? styles.roundWhite : ""}  ${round ? styles.roundeStyle : ""} ${black ? styles.blackBg : ""}`} style={marginlp ? { margin: "0px" } : {}}>
            <Container>
                <Row>
                    <Col md={8} lg={8} className={`${styles.titleBox} mx-auto text-center`}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.txt}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        {data.processlpItem.map((item, index) => (
                            <div
                                key={index}
                                className={styles.itemBox}
                            >
                                <span>0{index + 1}</span>
                                <h2>{item.title}</h2>
                                <p>{item.txt}</p>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProcessLp;

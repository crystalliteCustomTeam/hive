"use client";
import { useState } from "react";
import styles from "@/styles/single-blog/events.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import PdfPoP from "@/src/app/e-books/pdfpop";

const Events = ({ data }) => {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    };
    return (

        <section className={`${styles.eventSection}`}>
            <Container>
                <Row>
                    <Col md={12}>
                        {data.map((item, index) => (
                            <div className={styles.eventWapper} key={index}>
                                <div className={styles.eventImg}>
                                    <Image src={item.img} alt="Event" fill />
                                </div>
                                <div className={styles.eventContent}>
                                    <h3>{item.title}</h3>
                                    <p>{item.txt}</p>
                                    <div className={styles.eventbtn}>
                                        <button onClick={() => handleClick()}>Download PDF</button>
                                    </div>
                                </div>
                                <PdfPoP show={modalShow} onHide={() => setModalShow(false)} pdf={item.file} />
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Events
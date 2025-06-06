import styles from "@/styles/components/popup.module.scss"
import { Col, Container, Modal, Row } from "react-bootstrap"
import BGIMG from "media/components/popup.gif"
import Image from "next/image"
import ContactFrom from "@/src/app/components/contactfrom"
import { ClosedBtn } from "@/src/app/app-constants"


const PopUp = ({ onHide, show, SeoPages }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        ><section className={styles.popupSection}>
                <div className={styles.closedBtn} onClick={onHide}><ClosedBtn /></div>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col lg={6} md={6} className="my-auto">
                            <div className={styles.gifImage}>
                                <Image src={BGIMG.src} alt="Popup IMG" fill unoptimized />
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className={styles.fromPopup}>
                                <h3>Let’s start a project
                                    together</h3>
                                <p>We’ll contact you within a couple of hours to schedule a meeting to discuss your goals.</p>
                                <ContactFrom bg="no" popop="yes" SeoPages={SeoPages} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Modal>
    )
}

export default PopUp
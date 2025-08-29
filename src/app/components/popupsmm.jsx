import styles from "@/styles/components/popup.module.scss"
import { Col, Container, Modal, Row } from "react-bootstrap"
// import BGIMG from "media/components/popup.gif"
import BGIMG from "media/components/popupImg.webp"
import Image from "next/image"
import ContactFrom from "@/src/app/components/contactfrom"
import { ClosedBtn } from "@/src/app/app-constants"


const PopUpSMM = ({ onHide, show, noservices }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        ><section className={`${styles.popupSection} ${noservices ? styles.noServices : ""}`} style={{ backgroundImage: `url(${BGIMG.src})` }}>
                <div className={styles.closedBtn} onClick={onHide}><ClosedBtn /></div>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col lg={6} md={6} className="my-auto">
                            <div className={styles.gifImage}>

                            </div>
                        </Col>
                        <Col lg={6} md={6} className="my-auto">
                            <div className={styles.fromPopup}>
                                <h3>Let’s start a project
                                    together</h3>
                                <p>We’ll contact you within a couple of hours to schedule a meeting to discuss your goals.</p>
                                <ContactFrom bg="no" popop="yes" noservices={true} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Modal>
    )
}

export default PopUpSMM
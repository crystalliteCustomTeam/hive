import styles from "@/styles/single-blog/blogpopup.module.scss"
import { Col, Container, Modal, Row } from "react-bootstrap"
import BGIMG from "media/blogs/questionVideo.gif"
import Image from "next/image"
import { ClosedBtn } from "@/src/app/app-constants"
import Link from "next/link"


const BlogPopUp = ({ onHide, show }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <section className={styles.popupSection}>
                <div className={styles.closedBtn} onClick={onHide}><ClosedBtn /></div>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col lg={6} md={6} className="my-auto">
                            <div className={styles.gifImage}>
                                <Image src={BGIMG.src} alt="Popup IMG" fill unoptimized />
                            </div>
                        </Col>
                        <Col lg={6} md={6} className="my-auto">
                            <div className={styles.fromPopup}>
                                <h3>Why Aren’t You Ranking? </h3>
                                <h5>Get the FREE SEO Audit</h5>
                                <p>Get Free SEO Score of your website to find out where are you lacking!</p>
                                <Link href="/free-seo-score-checker#Question" className={styles.btnStyle}>
                                    Go to Free Seo Checker
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Modal>
    )
}

export default BlogPopUp
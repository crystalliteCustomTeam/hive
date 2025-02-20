import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/gmb/banner.module.scss"
import CommonBtn from "@/src/app/components/common/commonbtn"
import LogoImg from "media/landing/smm1/bannerLogo.webp"
import Image from "next/image"
import bannerIMG from "media/landing/gmb/bannerIMG.webp";

const Banner = () => {
    return (
        <section className={` ${styles.gmbSection}`}>
            <Container>
                <Row>
                    <Col md={11} lg={10} className="m-auto text-center">
                        <div className={styles.bannerText}>
                            <h1>Showcase Your Business Perfectly with <span>GMB Optimization!</span></h1>
                            <p>Jumpto1 Social Media Marketing means more traffic, more calls and more sales! We offer data-driven strategies and surprising bottom-line results to fuel your business growth.</p>
                            <div className={styles.btnFlex}>
                                <CommonBtn txt="Click To Grow" LiveChat={true} BgBlack={true} center={true} />
                            </div>
                            <div className={styles.banenrLogo}>
                                <Image src={LogoImg.src} alt="Banner Logos" width={539} height={27} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="p-0">
                <div className={styles.imgBox}>
                    <div className={styles.imgItem}>
                        <Image src={bannerIMG.src} alt="Banner Logos" width={1920} height={500} />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Banner

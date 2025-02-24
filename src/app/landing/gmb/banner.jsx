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
                    <Col md={11} lg={12} className="m-auto text-center">
                        <div className={styles.bannerText}>
                            <div className="subtitle">Google search is a war. Your business is losing.</div>
                            <h1>Let’s Get You on the Map Pack with Our <br /><span>GBP Management Service</span></h1>
                            <p>People trust Google to tell them where to go and a well-optimized profile gets you more visibility,<br /> calls, and foot traffic. If you’re not ranking for your keywords, you’re losing customers.<br />
                                Let’s fix it with our GMB ranking service.</p>
                            <div className={styles.btnFlex}>
                                <CommonBtn txt="Let’s Connect" LiveChat={true} BgBlack={true} center={true} />
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

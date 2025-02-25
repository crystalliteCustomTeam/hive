
import styles from "@/styles/landing/components/smm1/banner.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import CommonBtn from "@/src/app/components/common/commonbtn"
import ContactFrom from "@/src/app/components/contactfrom"
import LogoImg from "media/landing/smm1/bannerLogo.webp"
import BannerPoster from "media/landing/smm1/BannerPoster.webp"
import Image from "next/image"

const BannerLp = () => {
    return (
        <section className={styles.bannerLpSection} id="BannerId" style={{ backgroundImage: `url(${BannerPoster.src})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} lg={6} className="my-auto">
                        <div className={styles.bannerContentSec}>
                            <h1>Your Brand Called.<br />
                                It Wants a Smarter<br />
                                Social Media Marketing Agency.
                            </h1>
                            <p>Your social media isn’t working. Don’t ignore it, fix it! We create social media marketing strategies that don’t just generate engagement but also drive real, sustainable growth for your brand. </p>
                            <div className={styles.btnFlex}>
                                <CommonBtn txt="Connect with an SMM Expert" LiveChat={true} BgBlack={true} />
                            </div>
                            <div className={styles.numberStyle}>
                                <div className={styles.numberItem}>
                                    <div className={styles.points}>
                                        1500+
                                        <span>Campaigns Launched</span>
                                    </div>
                                </div>
                                <div className={styles.numberItem}>
                                    <div className={styles.points}>
                                        100+
                                        <span>Brands Scaled to 7 Figures</span>
                                    </div>
                                </div>
                                <div className={styles.numberItem}>
                                    <div className={styles.points}>
                                        5x
                                        <span>Higher ROI</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.banenrLogo}>
                                <Image src={LogoImg.src} alt="Banner Logos" width={539} height={27} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={5} className="my-auto offset-lg-1">
                        <div className={styles.bannerForms}>
                            <h3>Your Socials Are Screaming “Help.”<br />
                                And, We’re Here!
                            </h3>
                            <ContactFrom bgBlack="no" blkColor={true} title="Schedule a Free Consultation" />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default BannerLp
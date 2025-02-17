import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/seo/bannerlp.module.scss"
import LogoImg from "media/landing/seo/bannerImage.webp"
import BannerPoster from "media/landing/seo/BannerPoster.webp"
import CommonBtn from "@/src/app/components/common/commonbtn"
import Image from "next/image"
import ContactFrom from "@/src/app/components/contactfrom"

const BannerLp = () => {
    return (
        <section className={styles.bannerLpSection} id="BannerId">
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={11} lg={11} className="m-auto text-center">
                        <div className={styles.bannerContentSec}>
                            <h1>Sick of SEO Agency That Sucks? Let’s Fix That.</h1>
                            <p>Most SEO companies promise rankings. We deliver revenue. And, if your current SEO agency is ghosting you, it’s time to find someone better. (Hint: It’s us.)</p>
                            <div className={styles.btnFlex}>
                                <CommonBtn txt="Get Your Free SEO Audit Now" LiveChat={true} center={true} />
                            </div>
                            <div className={styles.banenrLogo}>
                                <Image src={LogoImg.src} alt="Banner Logos" width={1020} height={280} />
                            </div>
                            <div className={styles.banneerFrom}>
                                <h3>Get a Free Consultation</h3>
                                <ContactFrom vertical={true} title="Get a Free Consultation" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <video
                autoPlay
                muted
                loop
                preload="auto"
                aria-label="Background video"
                className={styles.bannerVideo}
                loading="eager"
                poster={BannerPoster.src}
            >
                <source src="https://player.vimeo.com/progressive_redirect/playback/1046801832/rendition/1080p/file.mp4?loc=external&log_user=0&signature=2c94f1e7762d41a9dbfe69cd7aaf7ee2c617a42439881a8b4c335e9ea9285271" type="video/mp4" />
            </video>
        </section>
    )
}

export default BannerLp


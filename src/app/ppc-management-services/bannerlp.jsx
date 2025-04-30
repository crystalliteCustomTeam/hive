import styles from "@/styles/landing/components/paid/banner.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import CommonBtn from "@/src/app/components/common/commonbtn"
import ContactFrom from "@/src/app/components/contactfrom"
import LogoImg from "media/landing/paid/bannerLogo.webp"
import BannerPoster from "media/landing/paid/BannerPoster.webp"
import Image from "next/image"

const BannerLp = () => {
    return (
        <section className={styles.bannerLpSection} id="BannerId" >
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} lg={6} className="my-auto">
                        <div className={styles.bannerContentSec}>
                            <h1>PPC Ads Management That Doesn’t Treat Your Budget Like Monopoly Money.
                            </h1>
                            <p>Your competitors love your bad Google Ads strategy, let’s ruin their fun! With our PPC management service you’ll see real profits, not just pretty graphs.</p>
                            <div className={styles.btnFlex}>
                                <CommonBtn txt="Talk to an Expert" LiveChat={true} />
                            </div>
                            <div className={styles.banenrLogo}>
                                <Image src={LogoImg.src} alt="Banner Logos" width={539} height={27} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={5} className="my-auto offset-lg-1">
                        <div className={styles.bannerForms}>
                            <h3>Take your business to infinity and beyond with Infiniti Digital.</h3>
                            <ContactFrom bgBlack="no" title="Request PPC Audit" />
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
                <source src="https://player.vimeo.com/progressive_redirect/playback/1047142466/rendition/720p/file.mp4?loc=external&log_user=0&signature=50ee6e7da9ea3f9bfaef422247278b12de3faee353eb5382a105315bbacc18e8" type="video/mp4" />
            </video>
        </section>
    )
}

export default BannerLp
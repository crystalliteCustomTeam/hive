import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/seo3/banner.module.scss"
import CommonBtn from "@/src/app/components/common/commonbtn"
import BannerPoster from "media/landing/seo3/bannerImg.webp"
import LogoImg from "media/landing/paid/bannerLogo.webp"
import Image from "next/image"
import ContactFrom from "../../components/contactfrom"


const Banner = () => {
    return (
        <section className={`${styles.bannerSection}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} lg={6} className="my-auto">
                        <div className={styles.bannerText}>
                            <h1>SEO Agency Ranking Clients Around the World</h1>
                            <p>Jumpto1 Social Media Marketing means more traffic, more calls and more sales! We offer data-driven strategies and surprising bottom-line results to fuel your business growth.</p>
                            <div className={styles.btnFlex}>
                                <CommonBtn txt="Click To Grow" LiveChat={true} />
                            </div>
                            <div className={styles.banenrLogo}>
                                <Image src={LogoImg.src} alt="Banner Logos" width={539} height={27} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6} className="my-auto">
                        <div className={styles.banneerFrom}>
                            <h3>Don’t Be Shy, Say Hi!</h3>
                            <p>Jumpto1 Social Media Marketing means more traffic, more calls and more sales! We offer data</p>
                            <ContactFrom LandingPage={true} bg="no" popop="yes" />
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
                loading="eager"
                poster={BannerPoster.src}
            >
                <source src="https://player.vimeo.com/progressive_redirect/playback/1055973590/rendition/360p/file.mp4?loc=external&log_user=0&signature=cc13652c1e18edce72a4839deb4775340b37229bf7b13512303f28ba86a65e00" type="video/mp4" />
            </video>
        </section>
    )
}

export default Banner

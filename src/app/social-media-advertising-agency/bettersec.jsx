import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/smm3/better.module.scss"
import MenImage from "media/landing/smm3/menImage.webp"
import Image from "next/image"
import BgPurpal from "media/landing/smm3/bgPurpal.webp"

const data = [
    "Targeting the wrong audience",
    "Boring visuals and generic copy",
    "Poor offer positioning",
    "Garbage landing pages",
    "Wrong campaign objectives",
    "Burning budget with no strategy"
];

const BetterSec = () => {
    return (
        <section className={`${styles.betterSection} pt-100`} style={{ backgroundImage: `url(${BgPurpal.src})` }}>
            <Container>
                <Row>
                    <Col md={12} lg={10} xl={10} className="m-auto text-center">
                        <h2><span>Losing Sales?</span> Blame Your Ads.</h2>
                        <p>Your competitors aren’t just lucky, they have a</p>
                        <div className={styles.btnTxt}>paid social media advertising agency</div>
                        <p>that knows what they’re doing.</p>
                        <p>Meanwhile, your ads are getting ignored because of;</p>
                    </Col>
                    <Col md={12} lg={12} className="m-auto text-center">
                        <div className={styles.menImage}>
                            <Image src={MenImage.src} alt="MenImage" width={642} height={699} />
                            <div className={styles.sectionPoints}>
                                {data.map((point, index) => (
                                    <div key={index} className={styles.point}>
                                        {point}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={12} className="m-auto text-center">
                        <div className={styles.spanClass}>IF YES</div>
                        <p>Then it’s time to stop wasting money and start scaling smart.<br />
                            Your ads should
                        </p>
                        <div className={styles.origanTxt}>Attract, Convert, and Dominate</div>
                        <p>That’s where Infiniti Digital comes in.</p>
                        <p>We don’t just run ads; we engineer</p>
                        <div className={styles.uppercaseTxt}>High-ROAS Revenue Scaling Social Media Campaigns</div>
                        <p>that crush the competition.</p>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default BetterSec
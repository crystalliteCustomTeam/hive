import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/seo2/better.module.scss"
import MenImage from "media/landing/seo2/menImage.webp"
import Image from "next/image"
import Link from "next/link";

const data = [
    "Your content sucks",
    "You’re not ranking for the right keywords",
    "Your website isn't set up for lead capture",
    "You’re not ranking locally",
    "Your backlink profile is weak",
    "Your current SEO company is wasting marketing budget",
];

const BetterSec = () => {
    return (
        <section className={`${styles.betterSection} pt-100`}>
            <Container>
                <Row>
                    <Col md={12} lg={10} xl={10} className="m-auto text-center">
                        <h2>Are Your <span>Competitors Stealing</span> Your Customers?<br /> Here’s Why It’s Happening</h2>
                        <p>If your competitors are taking your customers, they’re also taking your revenue. Every sale they close is one you could have had.</p>
                        <p>Your website can rank higher, attract more targeted traffic, and make more money by investing in</p>
                        <div className={styles.btnTxt}>Search Engine Optimization</div>
                        <p>It’s time to optimize your website and start turning those missed opportunities into profits.</p>
                        <div className={styles.waitTxt}>But Wait…</div>
                        <h6>Let’s talk about why you’re losing money;</h6>
                    </Col>
                    <Col md={12} lg={12} className="m-auto text-center">
                        <div className={styles.menImage}>
                            <Image src={MenImage.src} alt="MenImage" width={713} height={861} />
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
                        <p>Infiniti Digital, an award-winning, top-rated <Link href="/best-seo-agency" className="colorBlack">search engine optimization agency</Link>, is ready to deliver </p>
                        <div className={styles.origanTxt}>Quality leads, Incomparable ROI, & Outstanding brand visibility. </div>
                        <p>Ready to experience infinite growth? Book a consultation and let’s get started!</p>
                        <div className={styles.uppercaseTxt}>Because your SEO deserves better than a “meh” strategy!</div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default BetterSec
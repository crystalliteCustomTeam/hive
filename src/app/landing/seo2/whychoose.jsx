import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/seo2/whychoose.module.scss"
import Image from "next/image"
import IMG from "media/landing/seo2/why.webp"
import CommonBtn from "@/src/app/components/common/commonbtn"
const WhyChooseLp = () => {
    return (
        <section className={`${styles.whychooseSection} pt-100`}>
            <Container className="h-100">
                <Row>
                    <Col md={12} lg={8} className="text-center m-auto">
                        <h2>Why Choose Us</h2>
                        <p>Because <i>“Near Me”</i> Should Always Mean <i>YOU!</i></p>
                    </Col>
                </Row>
                <Row className={`h-100 ${styles.margintop}`}>
                    <Col md={12} lg={6} className="my-auto">
                        <h2>Clicks, Calls, and Customers; <span>Delivered Daily.</span></h2>
                        <p>Did you know a poorly optimized website can silently drain your leads, credibility, and revenue? That’s the harsh reality of weak SEO. But at Infiniti Digital, we don’t let that happen.</p>
                        <p>Unlike other local SEO agencies that slap together cookie-cutter strategies, we develop custom-tailored solutions designed to put your brand ahead, every single time.</p>
                        <p>If your traffic isn’t converting, your bounce rates are climbing, or your rankings are slipping, it’s not bad luck, it’s bad SEO. And that’s where we come in. Our data-driven, white-hat strategies are built for real, long-term results.</p>
                        <p>With high-intent keyword research, extensive site audits, quick technical fixes, and a powerful content strategy, we don’t just help you rank, we help you dominate.</p>
                        <p>If you’re tired of watching competitors outrank you, it’s time to make a move. Hire Infiniti Digital for infinite growth.</p>
                        <div className={styles.btnFlex}>
                            <CommonBtn txt="Get a Free SEO Audit" LiveChat={true} BgBlack={true} />
                        </div>
                    </Col>
                    <Col md={12} lg={6} className="my-auto">
                        <div className={styles.imgBox}>
                            <Image src={IMG.src} alt="Why Choose Us" width={1309} height={1126} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WhyChooseLp

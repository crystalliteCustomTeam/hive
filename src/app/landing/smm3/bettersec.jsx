import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/smm3/better.module.scss"
import MenImage from "media/landing/smm3/menImage.webp"
import Image from "next/image"
import BgPurpal from "media/landing/smm3/bgPurpal.webp"

const data = [
    "Your Business Is Not Showing On Top Search Results?",
    "You Are Only Investing But Not Making Any Profits?",
    "You Are Not Getting Qualified Leads?",
    "Your SEO Strategy Is Failing?",
    "You Are Not Getting Organic Traffic On Your Website?",
    "Your Current SEO Company Is Not Providing Results?",
];

const BetterSec = () => {
    return (
        <section className={`${styles.betterSection} pt-100`} style={{ backgroundImage: `url(${BgPurpal.src})` }}>
            <Container>
                <Row>
                    <Col md={12} lg={10} xl={10} className="m-auto text-center">
                        <h2><span>Optimize Your Website </span> Today,<br className="d-md-block d-none" /> As There Comes No Better Tomorrow!</h2>
                        <p>Whether you have launched a business recently or been running a company for <br className="d-md-block d-none" />many years,the only thing you wanna have is</p>
                        <div className={styles.btnTxt}>REVENUE, PROFIT & SALES</div>
                        <p>And to bring this things?</p>
                        <div className={styles.waitTxt}>But Wait…</div>
                        <h6>Customers & Only Customers!</h6>
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
                        <p>You are in the right place! Our SEO agency in USA is the top-rated digital marketing firm that offers only</p>
                        <div className={styles.origanTxt}>QUALITY LEADS, INCOMPARABLE ROI, & OUTSTANDING BRAND VISIBILITY</div>
                        <p>So what are you waiting for? with local SEO agency jumpto1</p>
                        <div className={styles.uppercaseTxt}>BE THE NUMBER 1, AND BE ON NUMBER 1</div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default BetterSec
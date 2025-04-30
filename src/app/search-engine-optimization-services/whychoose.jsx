import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/seo2/whychoose.module.scss"
import Image from "next/image"
import IMG from "media/landing/seo2/why.webp"
import CommonBtn from "@/src/app/components/common/commonbtn"


const WhyChooseLp = ({ data, noround }) => {
    return (
        <section className={`${styles.whychooseSection} ${noround ? styles.noRound : ""} pt-100`}>
            <Container className="h-100">
                <Row>
                    <Col md={12} lg={8} className="text-center m-auto">
                        <h2>{data.title}</h2>
                        <p>{data.txt}</p>
                    </Col>
                </Row>
                <Row className={`h-100 ${styles.margintop}`}>
                    <Col md={12} lg={6} className="my-auto">
                        <h2>{data.nexttitle}</h2>
                        {data.nexttxt}
                        <div className={styles.btnFlex}>
                            <CommonBtn txt={data.btntxt ? data.btntxt : "Get a Free SEO Audit"} chatTitle={data?.chattitle ? data?.chattitle : "Talk to an Expert"} LiveChat={true} BgBlack={true} />
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

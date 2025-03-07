import styles from "@/styles/location/banner.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import CommonBtn from "@/src/app/components/common/commonbtn"
import Image from "next/image"
import IMG from "media/location/bannerImg.webp"


const Banner = () => {
  return (
   <section className={styles.bannerSection}>
    <Container className="h-100">
        <Row className="h-100">
            <Col md={6} className="my-auto">
            <div className="subtitle">#1 SEO Company</div>
            <h1>Rank Higher In Searches & Scale Your Business</h1>
            <p>Jumpto1 Social Media Marketing means more traffic, more calls and more sales!</p>
            <CommonBtn txt="Get Your Qoute" LiveChat={true} BgBlack={true}/>
            </Col>
            <Col md={6} className="my-auto text-center">
                <Image src={IMG.src} width={1878} height={1782} alt="Seo Dallar Tx" />
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Banner
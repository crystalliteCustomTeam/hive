import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/seo3/logo.module.scss"
import Logo1 from "media/landing/seo3/logo/1.webp"
import Logo2 from "media/landing/seo3/logo/2.webp"
import Logo3 from "media/landing/seo3/logo/3.webp"
import Logo4 from "media/landing/seo3/logo/4.webp"
import Logo5 from "media/landing/seo3/logo/5.webp"
import Logo6 from "media/landing/seo3/logo/6.webp"
import Logo7 from "media/landing/seo3/logo/7.webp"
import Logo8 from "media/landing/seo3/logo/8.webp"
import Logo9 from "media/landing/seo3/logo/9.webp"
import Image from "next/image"


const data = [
    Logo1.src,
    Logo2.src,
    Logo3.src,
    Logo4.src,
    Logo5.src,
    Logo6.src,
    Logo7.src,
    Logo8.src,
    Logo9.src,
];
const LogoSection = () => {
    return (
        <section className={`${styles.logoSection} pt-100`}>
            <Container>
                <Row>
                    <Col md={12} lg={10} className="m-auto text-center">
                        <h2>Many Got Featured In Major Publication Just By Working With Us.</h2>
                        <div className={styles.logoBox}>
                            {data.map((item, index) => (
                                <div className={styles.logoImg} key={index}>
                                    <Image
                                        src={item}
                                        alt="Image Logo"
                                        width={255}
                                        height={128}
                                    />
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default LogoSection

import styles from "@/styles/landing/components/gmb/contactlp.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import ContactFrom from "@/src/app/components/contactfrom";
import ProFile from "media/landing/gmb/profileImg.webp"
import Image from "next/image";


const FooterContact = () => {
    return (
        <section className={`${styles.contactLpSection} `}  >
            <Container className={`${styles.containerBG}`}>
                <Row className="h-100">
                    <Col md={6} lg={6} className="my-auto">
                        <h2>Get In Touch</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        <ContactFrom bgBlack={true} />
                    </Col>
                    <Col md={6} lg={6} className={`my-auto`}>
                        <div className={styles.profileImg}>
                            <Image src={ProFile.src} alt="Profile Image" width={1071} height={1459} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FooterContact
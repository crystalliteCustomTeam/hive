import styles from "@/styles/landing/components/gmb/contactlp.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import ContactFrom from "@/src/app/components/contactfrom";
import Image from "next/image";


const FooterContact = ({ data }) => {
    return (
        <section className={`${styles.contactLpSection} `}  >
            <Container className={`${styles.containerBG}`}>
                <Row className="h-100">
                    <Col md={6} lg={6} className="my-auto">
                        <h2>{data.title}</h2>
                        <p>{data.txt}</p>
                        <ContactFrom bgBlack={true} />
                    </Col>
                    <Col md={6} lg={6} className={`my-auto`}>
                        <div className={styles.profileImg}>
                            <Image src={data.bgImg} alt="Profile Image" width={1071} height={1459} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FooterContact
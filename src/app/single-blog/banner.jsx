import styles from "@/styles/single-blog/banner.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import Image from "next/image"

const Banner = ({ data }) => {
    return (
        <section className={styles.singleBlogs}>
            <Container>
                   <Row>
                    <Col md={12} className="m-auto text-center">
                        <div className={styles.singleBlogImg}>
                           <Image src={data.img} alt="Single Blog" fill/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} lg={12} className="m-auto">
                        <div className={styles.singleBlogTxt}>
                            <h1>{data.title}</h1>
                            <div>{data.desc}</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
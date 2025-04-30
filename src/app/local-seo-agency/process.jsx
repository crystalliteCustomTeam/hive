import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/seo3/process.module.scss"

const ProcessLP = ({ data, roundwhite }) => {
    return (
        <section className={`${styles.processSection} ${roundwhite ? styles.roundWhite : ""} pt-100`}>
            <Container>
                <Row>
                    <Col md={10} lg={8} className="text-center m-auto">
                        <h2>{data.title}</h2>
                        <p>{data.txt}</p>
                    </Col>
                    <Col md={12}>
                        <div className={styles.processBox}>
                            {data.processlpItem.map((item, index) => (
                                <div
                                    key={index}
                                    className={styles.itemBox}
                                >
                                    <span>0{index + 1}</span>
                                    <h4>{item.title}</h4>
                                    <p>{item.txt}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProcessLP

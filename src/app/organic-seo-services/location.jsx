import { Container, Row, Col } from "react-bootstrap"
import styles from "@/styles/landing/components/seo1/location.module.scss"
import BgImg from "@/public/landing/seo1/catImg.webp"
import Link from "next/link"

const data = [
    {
        value: "Arlington",
        link: "#"
    },
    {
        value: "Atlanta",
        link: "#"
    },
    {
        value: "Austin",
        link: "#"
    },
    {
        value: "Baltimore",
        link: "#"
    },
    {
        value: "Chicago",
        link: "/seo-chicago-il"
    },
    {
        value: "Cleveland",
        link: "#"
    },
    {
        value: "Dallas",
        link: "/seo-dallas-tx"
    },
    {
        value: "Denver",
        link: "/seo-denver-co"
    }
]
const LocationLP = () => {
    return (
        <section className={`pt-100 ${styles.locationSection}`}>
            <Container className={`${styles.locationContainer}`} style={{ backgroundImage: `url(${BgImg.src})` }}>
                <Row>
                    <Col md={12} lg={10} xl={9} className="text-center mx-auto">
                        <h2>Ranked #1 SEO Company, Just Like Our Clients in These Cities.</h2>
                        <p> Your search for the best SEO Service provider ends here</p>
                        <div className={styles.LocaionBox}>
                            {data.map((item, index) => (
                                <div className={styles.LocaionItem} key={index}>
                                    <Link href={item.link}>{item.value}</Link>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default LocationLP
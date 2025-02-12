import { Col, Container, Row } from "react-bootstrap"
import CommonBtn from "@/src/app/components/common/commonbtn"

import Image from "next/image"


const ContentSec = ({ data }) => {
    return (
        <section className="pt-100">
            <Container>
                <Row>
                    <Col md={6} lg={6} className="my-auto">
                        <h2>{data.title}
                        </h2>
                        {data.txt}
                        <CommonBtn txt="Get Your Free SEO Audit Now" LiveChat={true} BgBlack={true} />
                    </Col>
                    <Col md={6} lg={6} className="my-auto ">
                        <Image src={data.img} alt="Banner Logos" width={675} height={450} className="mt-5 mt-md-0" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentSec
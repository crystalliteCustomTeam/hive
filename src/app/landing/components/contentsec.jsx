import { Col, Container, Row } from "react-bootstrap"
import CommonBtn from "@/src/app/components/common/commonbtn"

import Image from "next/image"


const ContentSec = ({ data, round, bg }) => {
    return (
        <section
            className={round ? "roundStyle pt-100" : "pt-100"}
            style={bg ? { background: "#fff" } : {}}
        >
            <Container>
                <Row>
                    <Col md={6} lg={6} className="my-auto">
                        <h2>{data.title}</h2>
                        {data.txt}
                        <CommonBtn txt={data?.btntxt ? data.btntxt : "Get Your Free SEO Audit Now"} LiveChat={true} BgBlack={true} SeoPages={data.SeoPages} />
                    </Col>
                    <Col md={6} lg={6} className="my-auto ">
                        <Image src={data.img} alt="Banner Logos" width={675} height={450} className="mt-5 mt-md-0" />
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default ContentSec
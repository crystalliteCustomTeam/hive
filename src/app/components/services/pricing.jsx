"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/services/pricing.module.scss"
import { CheckedIcon } from "@/src/app/app-constants"
import CommonBtn from "@/src/app/components/common/commonbtn";


const Pricing = ({ data, bg, tab, SMMLP, graybg, bluebg, location }) => {
    const [selectedPrice, setSelectedPrice] = useState(1);
    const handlePriceClick = (priceIndex) => {
        setSelectedPrice(priceIndex);
    };

    return (
        <section id="PricingId" className={`pt-100 ${styles.pricingSection} ${SMMLP ? styles.smmLp : ""} ${bg === "yes" ? styles.blackBG : ""} ${location ? styles.locationBg : ""} ${bluebg ? styles.blueBG : ""} ${graybg ? styles.grayBG : ""}`}>
            <Container>
                <Row>
                    <Col md={8}>
                        {data.subtitle ? <div className="subtitle">{data?.subtitle}</div> : ""}
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                    <Col md={4} className="mt-auto">
                        {tab ? (
                            <ul className={styles.tabBody}>
                                <li onClick={() => handlePriceClick(1)} className={selectedPrice === 1 ? styles.active : ""}>
                                    Monthly
                                </li>
                                <li onClick={() => handlePriceClick(2)} className={selectedPrice === 2 ? styles.active : ""}>
                                    Quarterly <span>Saves 16%</span>
                                </li>
                                <li onClick={() => handlePriceClick(3)} className={selectedPrice === 3 ? styles.active : ""}>
                                    Annually <span>Saves 28%</span>
                                </li>
                            </ul>
                        ) : (
                            ""
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.pricingContainer}>
                            {data.PriceItem.map((item, index) => (
                                <div className={styles.pricingItem}
                                    style={{
                                        '--bgcolor': `${item.bgColor}` || '#262626',
                                    }}
                                    key={index}>
                                    <div className={styles.packageHeader}>
                                        <div className={styles.packageName}>{item.packagename}</div>
                                        <div className={styles.packagePrice}>${item[`price${selectedPrice}`] || item.price}/<span>{item.month ? item.month : "Month"}</span></div>
                                        {item.titletxt ? <div className={styles.packageSubTxt}>{item?.titletxt}</div> : ""}
                                        <div className={styles.packagepara}>{item.txt}</div>
                                        <div className={styles.packagebutton}>
                                            <CommonBtn ArrowBtn={true} SimpleBtn={true} txt="Get Started" SeoPages={data.SeoPages} />
                                        </div>
                                    </div>
                                    <div className={styles.packageBody}>
                                        {item.bodyPoints.map((point, idx) => (
                                            <div key={idx}>
                                                <div className={styles.listingTitle}>{point.title}</div>
                                                <ul>
                                                    {point.points.map((p, i) => (
                                                        <li key={i}><CheckedIcon />{p}</li>
                                                    ))
                                                    }

                                                </ul>
                                            </div>
                                        ))}
                                        {item.bodyNote && item.bodyNote.length > 0 && (
                                            <>
                                                <div className={styles.titleNote}>Notes</div>
                                                <div className={styles.packageNote}>
                                                    {item.bodyNote.map((paraNote, ind) => (
                                                        <p key={ind}>{paraNote.para}</p>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}

                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Pricing
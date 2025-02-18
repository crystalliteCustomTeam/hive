"use client";
import styles from "@/styles/landing/components/markettrend.module.scss"
import { Col, Container, Row } from "react-bootstrap";
import SliderArrow from "@/src/app/components/sliderarrow";
import useEmblaCarousel from 'embla-carousel-react'
import IMG01 from "media/landing/smm/market01.webp"
import IMG02 from "media/landing/smm/market02.webp"
import IMG03 from "media/landing/smm/market03.webp"
import IMG04 from "media/landing/smm/market04.webp"
import Image from "next/image";
import CommonBtn from "@/src/app/components/common/commonbtn";
import Autoplay from 'embla-carousel-autoplay'



const data = [
    {
        title: "Content Calendars",
        txt: "At Infiniti Digital, we don’t just post for the sake of posting. We create high-quality, engaging, and platform-specific content that grabs attention and keeps your audience hooked. Our team studies your brand, industry, and target market to develop a content plan that works. From eye-catching graphics to compelling captions, every post is designed to drive engagement and build a loyal following.",
        img: IMG01.src,
    },
    {
        title: "Audience Targeting",
        txt: "Throwing ads at random people is a waste of money. That’s why we use smart audience targeting to make sure your content reaches the right people. We analyze data, behaviors, and interests to find your ideal customers and deliver messages that matter to them. Whether it’s organic reach or paid ads, we ensure your brand connects with those most likely to engage, follow, and buy.",
        img: IMG02.src,
    },
    {
        title: "Ad Campaigns & Optimization",
        txt: "Running ads is easy—getting them to work is the real challenge. At Infiniti Digital, we create data-driven ad campaigns that focus on conversions, not just clicks. We test multiple ad formats, refine audience segments, and optimize in real time to get you the best results. Whether it’s Facebook, Instagram, LinkedIn, or TikTok, our ad strategies are built to turn views into value and budgets into big returns.",
        img: IMG03.src,
    },
    {
        title: "Analytics & Performance Tracking",
        txt: "Numbers don’t lie, and we love them. Our team tracks every like, click, comment, and conversion to measure your success and find areas for improvement. We provide clear, actionable reports that show what’s working and what needs tweaking. With real-time analytics and strategic adjustments, we make sure your social media marketing keeps improving and delivering the results you need.",
        img: IMG04.src,
    },
]
const OPTIONS = { loop: true, align: 'center' }
const MarketTrend = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay({ delay: 3000 })])
    const prevButtonHandler = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (emblaApi) emblaApi.scrollNext();
    };
    return (
        <section className={`pt-100 ${styles.markettrendSec}`}>
            <Container>
                <Row>

                    <Col md={12}>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {data.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.markettrendContainer}>
                                                <div className={styles.markettrendTxt}>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.txt}</p>
                                                    <CommonBtn txt="Get a Free SMM Strategy" LiveChat={true} BgBlack={true} />
                                                </div>
                                                <div className={styles.markettrendImg}>
                                                    <Image src={item.img} alt="Image Market Trend" fill />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} className="m-auto text-center">
                        <SliderArrow
                            onPrev={prevButtonHandler}
                            onNext={nextButtonHandler}
                            center="yes"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MarketTrend
"use client"
import { Col, Container, Row } from 'react-bootstrap'
import useEmblaCarousel from 'embla-carousel-react'
import styles from "@/styles/layout/location.module.scss"
import Link from 'next/link'
import { ArrowsIcon, EmailIcon, PhonesIcon } from '@/src/app/app-constants'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

// Location Images

import Chicago from "media/locations/Chicago.webp"
import Houston from "media/locations/Houston.webp"
import LosAngeles from "media/locations/LosAngeles.webp"
import NewYork from "media/locations/NewYork.webp"
import Dallas from "media/locations/Dallas.webp"
import Denver from "media/locations/Denver.webp"
const OPTIONS = { align: 'start', loop: "true" }

const LocationList = [
    {
        state: "Houston",
        add: "9518 Mykawa Rd, Houston, TX 77048",
        //add: "2800 Post Oak Blvd STE 4100, Houston, TX 77056, United States",
        phone: "855-666-6682",
        email: "inquiries@infinitidigital.us",
        img: Houston.src,
        pin: "seo-houston-tx",
        gmb: "https://g.page/r/CeEmJNeNmOMYEBM",
        alt: "Infiniti Digital mobile app development company Houston"
    },
    {
        state: "Chicago",
        add: "",
        //add: "141 W Jackson Blvd STE 300 A, Chicago, IL 60604, United States",
        phone: "855-666-6682",
        email: "inquiries@infinitidigital.us",
        img: Chicago.src,
        pin: "/seo-chicago-il",
        alt: "Infiniti Digital mobile app development company Chicago"
    },
    {
        state: "Los Angeles",
        add: "",
        //add: "1425 Flower St, Los Angeles, CA 90015, United States",
        phone: "855-666-6682",
        email: "inquiries@infinitidigital.us",
        img: LosAngeles.src,
        pin: "/seo-los-angeles-ca",
        alt: "Infiniti Digital mobile app development company Los Angeles"
    },
    {
        state: "New York",
        add: "",
        //add: "26 Broadway Suite 934, New York, NY 10004, United States",
        phone: "855-666-6682",
        email: "inquiries@infinitidigital.us",
        img: NewYork.src,
        pin: "/seo-nyc-ny",
        alt: "Infiniti Digital mobile app development company New York"
    },
    {
        state: "Dallas",
        add: "1314 W Mockingbird Ln, Dallas, TX 75247",
        //add: "1341 W Mockingbird Ln, Dallas, TX 75247, United States",
        phone: "855-666-6682",
        email: "inquiries@infinitidigital.us",
        img: Dallas.src,
        pin: "seo-dallas-tx",
        gmb: "https://g.page/r/CYBG2cdsy4OoEBM",
        alt: "Infiniti Digital mobile app development company Dallas"
    },

    {
        state: "Denver",
        add: "",
        //add: "1035 Cherokee St, Denver, CO 80204, United States",
        phone: "855-666-6682",
        email: "inquiries@infinitidigital.us",
        img: Denver.src,
        pin: "/seo-denver-co",
        alt: "Infiniti Digital mobile app development company Denver"
    },
]

const Location = () => {
    const [emblaRef, embla] = useEmblaCarousel(OPTIONS, [Autoplay()]);
    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };
    return (
        <section className={`${styles.locationSection} bgBlack pt-100`}>
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <h2>Our Local Presence</h2>
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {LocationList.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.locationBox}>
                                                <div className={styles.imgBox}>
                                                    <Image src={item.img} alt={item.alt} fill />
                                                    <div className={styles.locationTitle}>
                                                        {item.state}
                                                    </div>
                                                </div>

                                                <div className={styles.locationContent}>
                                                    <div className={styles.locState}>
                                                        <Link href={item.pin}>{item.state}</Link></div>
                                                    <div className={styles.locAdd}>
                                                        <a href={item.gmb} target='_blank'>{item.add}</a>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <Link href={`tel:${item.phone}`}>
                                                                <PhonesIcon />
                                                                {item.phone}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href={`mailto:${item.email}`}>
                                                                <EmailIcon />
                                                                {item.email}
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.embla_container}>
                                <div className={styles.embla_prev} onClick={prevButtonHandler}>
                                    <ArrowsIcon direction="prev" />
                                </div>
                                <div className={styles.embla_next} onClick={nextButtonHandler}>
                                    <ArrowsIcon direction="next" />
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Location
"use client";
import styles from '@/styles/thanks.module.scss'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import Testimonials from "@/src/app/home/testimonials";
import { TestimonialData } from "@/src/app/home/data/data";
import { useSearchParams } from "next/navigation";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowIcon } from "@/src/app/app-constants";

const SocailLinks = [
  {
    icon: <Instagram />,
    url: "https://www.instagram.com/InfinitiDigitalus/"
  },
  {
    icon: <Facebook />,
    url: "https://www.facebook.com/infinitidigitalus/"
  },
  {
    icon: <Twitter />,
    url: "https://x.com/Infinitidigitl"
  },
  {
    icon: <Linkedin />,
    url: "https://www.linkedin.com/company/infiniti-digitalus"
  },
  {
    icon: <Youtube />,
    url: "https://www.youtube.com/@InfinitiDigitalus"
  },
]

export default function page() {
  const searchParams = useSearchParams();
  const isPdf = searchParams.get("pdf"); // will be "true" if passed
  return (
    <>
      <section className={styles.thanksSection}>
        <Container className="h-100">
          <Row className="h-100">
            <Col md={10} lg={10} className="m-auto">
              <div className={styles.bannerContentBox}>
                <div className={styles.bannerHeading}>

                  {isPdf === "true" ? (
                    <>
                      <h1>Thank You for Downloading!</h1>
                      <p>
                        Your free E-book is now downloading. Enjoy your read!<br />
                        Don’t forget to connect with us on social media for more valuable tips!
                      </p>
                      <ul className={styles.linksItem}>
                        {SocailLinks.map((item, index) => (
                          <li key={index}>
                            <Link href={item.url}>{item.icon}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <>
                      <h1>Thank You</h1>
                      <p>
                        Our team is reviewing your details and will get back to you shortly.
                        If you want to explore more about what we do or just want to know a bit more, feel free to take a look around!
                      </p>
                    </>
                  )}
                  <div className="commonBtn">
                    <Link href="/" ><span>Back to Home</span> <ArrowIcon /></Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Testimonials data={TestimonialData} />
    </>
  )
}

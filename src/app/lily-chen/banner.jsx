import styles from "@/styles/blogauthor/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import IMGBG from "media/blogs/author/bannerImg.webp";
import LilyChen from "media/blogs/author/lily-chen.webp";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  SubscribeCape,
  TwitterIcon,
} from "@/src/app/app-constants";
import Link from "next/link";

const Banner = () => {
  return (
    <section
      className={styles.bannerAuthor}
      style={{ backgroundImage: `url(${IMGBG.src})` }}
    >
      <Container className="h-100">
        <Row className="h-100">
          <Col md={12} className="my-auto">
            <div className={styles.authorBox}>
              <div className={styles.authorIMG}>
                <Image src={LilyChen.src} alt="Author" fill />
              </div>
              <div className={styles.authorContent}>
                <h4>Lily Chen</h4>
                <ul className={styles.authorList}>
                  <li>Senior SEO Strategist</li>
                  <li>Infiniti Digital</li>
                </ul>
                <div className={styles.btnAuthor}>
                  <Link href="/blogs">Back to SEO Knowledge</Link>
                </div>
                <div className={styles.authorInfo}>
                  <h5>About</h5>
                  <p>
                    Lily Chen is a Senior SEO Strategist at Infiniti Digital,
                    where she specializes in developing data-driven strategies
                    that boost online visibility and drive sustainable traffic
                    growth. With a deep understanding of search engine
                    algorithms and user behavior, Lily helps brands improve
                    their rankings through technical SEO, content optimization,
                    and performance analysis. Passionate about turning complex
                    SEO challenges into measurable success, she frequently
                    shares actionable insights and lessons from her experience.
                  </p>
                </div>
                <div className={styles.socailShare}>
                  <ul>
                    <li>Follow :</li>
                    <li>
                      <a
                        href="https://www.instagram.com/infinitidigitalus/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <InstagramIcon />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/infinitidigitalus/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FacebookIcon />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/Infinitidigitl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TwitterIcon />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;

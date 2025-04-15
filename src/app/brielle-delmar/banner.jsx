import styles from "@/styles/blogauthor/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import IMGBG from "media/blogs/author/bannerImg.webp";
import BrielleDelmar from "media/blogs/author/brielle-delmar.webp";
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
                <Image src={BrielleDelmar.src} alt="Author" fill />
              </div>
              <div className={styles.authorContent}>
                <h4>Brielle Delmar</h4>
                <h1 className="d-none">Brielle Delmar, SEO Specialist at Infiniti Digital</h1>
                <ul className={styles.authorList}>
                  <li>SEO Specialist</li>
                  <li>Infiniti Digital</li>
                </ul>
                <div className={styles.btnAuthor}>
                  <Link href="/blogs">Back to SEO Knowledge</Link>
                </div>
                <div className={styles.authorInfo}>
                  <h5>About</h5>
                  <p>
                    Brielle Delmar is an SEO Specialist at Infiniti Digital,
                    where she helps websites climb search rankings through smart
                    strategies. Passionate about transforming ideas into
                    tangible results, she enjoys sharing actionable tips to
                    support online growth. Brielle also writes about her
                    experiences in the field, offering insights and lessons
                    learned to help others.
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

import styles from "@/styles/blogauthor/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import IMGBG from "media/blogs/author/bannerImg.webp";
import ChloeHarris from "media/blogs/author/chloe-harris.webp";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
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
                <Image src={ChloeHarris.src} alt="Author" fill />
              </div>
              <div className={styles.authorContent}>
                <h4>Chloe Harris</h4>
                <ul className={styles.authorList}>
                  <li>Paid Social Media Specialist</li>
                  <li>Infiniti Digital</li>
                </ul>
                <div className={styles.btnAuthor}>
                  <Link href="/blogs">Back to SEO Knowledge</Link>
                </div>
                <div className={styles.authorInfo}>
                  <h5>About</h5>
                  <p>
                    Chloe Harris is a Paid Social Media Specialist who creates
                    and manages advertising campaigns across platforms like
                    Facebook, Instagram, TikTok, and LinkedIn. She focuses on
                    targeting the right audiences, improving ad performance, and
                    helping brands grow through effective paid strategies. Chloe
                    also writes about her work, sharing insights and tips on
                    running successful social media ad campaigns.
                  </p>
                </div>
                <div className={styles.socailShare}>
                  <ul>
                    <li>Follow :</li>

                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
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

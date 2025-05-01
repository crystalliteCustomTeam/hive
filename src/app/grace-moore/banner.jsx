import styles from "@/styles/blogauthor/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import IMGBG from "media/blogs/author/bannerImg.webp";
import GraceMoore from "media/blogs/author/grace-moore.webp";
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
                <Image src={GraceMoore.src} alt="Author" fill />
              </div>
              <div className={styles.authorContent}>
                <h4>Grace Moore</h4>
                <h1 className="d-none">
                  Grace Moore, SEO Specialist at Infiniti Digital
                </h1>

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
                    Grace Moore is a Social Media Manager who leads strategy,
                    content planning, and engagement across platforms like
                    Instagram, Facebook, LinkedIn, and TikTok. With a strong
                    focus on brand voice and audience growth, she helps
                    businesses connect with their communities and build lasting
                    online presence. Grace also writes about trends, tools, and
                    best practices in social media to help others stay ahead in
                    the digital space.
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

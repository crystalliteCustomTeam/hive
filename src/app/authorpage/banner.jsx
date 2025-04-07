import styles from "@/styles/blogauthor/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import IMGBG from "@/public/blogs/author/bannerImg.webp";
import AuthorImage from "@/public/blogs/author/AuthorImage.webp";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  SubscribeCape,
  TwitterIcon,
} from "@/src/app/app-constants";

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
                <Image src={AuthorImage.src} alt="Author" fill />
              </div>
              <div className={styles.authorContent}>
                <h4>Matt G. Southern</h4>
                <ul className={styles.authorList}>
                  <li>Senior News Writer</li>
                  <li>Search Engine Journal</li>
                </ul>
                <div className={styles.btnAuthor}>
                  <SubscribeCape />
                  Subscribe Now
                </div>
                <div className={styles.authorInfo}>
                  <h5>About Me</h5>
                  <p>
                    Brielle Delmar is an SEO Specialist at Infiniti Digital. She
                    helps websites rank better using simple and smart
                    strategies. She enjoys turning ideas into results and
                    sharing tips to grow online. She also loves writing about
                    her experiences and sharing what she has learned with
                    everyone.
                  </p>
                </div>
                <div className={styles.socailShare}>
                  <ul>
                    <li>Follow Me :</li>
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
